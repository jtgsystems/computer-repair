const axios = require('axios');
const cheerio = require('cheerio');
const url = require('url');
const fs = require('fs');

// Base URL of the website
const baseUrl = 'http://localhost:3002';

// Set to store visited URLs
const visited = new Set();

// Set to store broken links
const brokenLinks = new Set();

// Set to store pages with broken "Schedule a Consultation" buttons
const pagesWithBrokenScheduleButtons = new Set();

// Create a log file
const logStream = fs.createWriteStream('link-checker-log.txt', {flags: 'w'});

// Function to check if a URL is valid for crawling
const isValidUrl = (urlString) => {
  try {
    const parsedUrl = new URL(urlString);
    const hostname = parsedUrl.hostname;
    
    // Only process URLs from our website or relative URLs
    return !hostname || hostname === 'localhost';
  } catch (error) {
    logStream.write(`Invalid URL: ${urlString} - ${error.message}\n`);
    return false;
  }
};

// Function to normalize URL
const normalizeUrl = (urlString, base) => {
  try {
    // Handle relative URLs
    const resolvedUrl = new URL(urlString, base).href;
    
    // Remove trailing slash for consistency
    return resolvedUrl.endsWith('/') ? resolvedUrl.slice(0, -1) : resolvedUrl;
  } catch (error) {
    console.error(`Error normalizing URL: ${urlString} - ${error.message}`);
    logStream.write(`Error normalizing URL: ${urlString} - ${error.message}\n`);
    return null;
  }
};

// Function to check a specific page for broken links
const checkPage = async (pageUrl) => {
  if (visited.has(pageUrl)) {
    return;
  }
  
  visited.add(pageUrl);
  const message = `Checking: ${pageUrl}`;
  console.log(message);
  logStream.write(message + '\n');
  
  try {
    const response = await axios.get(pageUrl);
    const $ = cheerio.load(response.data);
    
    // Check for "Schedule a Consultation" buttons
    const scheduleButtons = $('button, a').filter(function() {
      return $(this).text().trim() === 'Schedule a Consultation';
    });
    
    if (scheduleButtons.length > 0) {
      let isButtonBroken = true;
      
      scheduleButtons.each(function() {
        const href = $(this).attr('href');
        if (href && href.includes('/contact')) {
          isButtonBroken = false;
        }
      });
      
      if (isButtonBroken) {
        pagesWithBrokenScheduleButtons.add(pageUrl);
        const message = `Found broken "Schedule a Consultation" button on: ${pageUrl}`;
        console.log(message);
        logStream.write(message + '\n');
      }
    }
    
    // Get all links on the page
    const links = $('a');
    
    // Check each link
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      const href = $(link).attr('href');
      
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        continue;
      }
      
      const normalizedUrl = normalizeUrl(href, pageUrl);
      
      if (!normalizedUrl || !isValidUrl(normalizedUrl)) {
        continue;
      }
      
      // Check if the link is broken
      try {
        const linkResponse = await axios.head(normalizedUrl, { validateStatus: false });
        
        if (linkResponse.status >= 400) {
          brokenLinks.add({
            url: normalizedUrl,
            foundOn: pageUrl,
            status: linkResponse.status
          });
          const message = `Found broken link: ${normalizedUrl} (${linkResponse.status}) on ${pageUrl}`;
        console.log(message);
        logStream.write(message + '\n');
        } else if (normalizedUrl.startsWith(baseUrl) && !visited.has(normalizedUrl)) {
          // Recursively check links on our website
          await checkPage(normalizedUrl);
        }
      } catch (error) {
          const message = `Error checking link: ${normalizedUrl} - ${error.message}`;
      console.log(message);
      logStream.write(message + '\n');
      brokenLinks.add({
          foundOn: pageUrl,
          error: error.message
        });
        console.log(`Error checking link: ${normalizedUrl} - ${error.message}`);
      }
    }
  } catch (error) {
    console.error(`Error fetching page ${pageUrl}: ${error.message}`);
    logStream.write(`Error fetching page ${pageUrl}: ${error.message}\n`);
    brokenLinks.add({
      url: pageUrl,
      error: error.message
    });
  } finally {
    logStream.write(`Finished checking: ${pageUrl}\n`);
  }
};

// Main function to start the crawl
const startCrawl = async () => {
  console.log('Starting link checker...');
  console.log(`Base URL: ${baseUrl}`);
  logStream.write('Starting link checker...\n');
  logStream.write(`Base URL: ${baseUrl}\n`);
  
  try {
    await checkPage(baseUrl);
    
    // Print results
    console.log('\n--- RESULTS ---');
    logStream.write('\n--- RESULTS ---\n');
    
    if (brokenLinks.size === 0) {
      console.log('No broken links found!');
      logStream.write('No broken links found!\n');
    } else {
      console.log(`Found ${brokenLinks.size} broken links:`);
      logStream.write(`Found ${brokenLinks.size} broken links:\n`);
      brokenLinks.forEach(link => {
        if (link.status) {
          const message = `- ${link.url} (${link.status}) found on ${link.foundOn}`;
          console.log(message);
          logStream.write(message + '\n');
        } else {
          const message = `- ${link.url} (${link.error}) found on ${link.foundOn}`;
          console.log(message);
          logStream.write(message + '\n');
        }
      });
    }
    
    if (pagesWithBrokenScheduleButtons.size > 0) {
      console.log(`\nFound ${pagesWithBrokenScheduleButtons.size} pages with broken "Schedule a Consultation" buttons:`);
      logStream.write(`\nFound ${pagesWithBrokenScheduleButtons.size} pages with broken "Schedule a Consultation" buttons:\n`);
      pagesWithBrokenScheduleButtons.forEach(page => {
        logStream.write(`- ${page}\n`);
      });
    } else {
      console.log('\nAll "Schedule a Consultation" buttons are working correctly!');
    }
    
  } catch (error) {
    console.error('Error during crawl:', error);
    logStream.write(`Error during crawl: ${error.message}\n`);
  } finally {
    // Close the log file
    logStream.end();
    console.log('Link checking complete. See link-checker-log.txt for details.');
  }
};

// Start the crawler
startCrawl();