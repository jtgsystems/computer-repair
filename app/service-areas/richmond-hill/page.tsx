import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ServiceLayout from "@/components/ServiceLayout"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Richmond Hill Computer Repair Services | PC Mechanix",
  description:
    "Expert computer repair and IT services in Richmond Hill. Fast, reliable, and professional tech support for residents and businesses in this thriving York Region city.",
}

const richmondHillAreas = [
  { name: "Oak Ridges", slug: "oak-ridges" },
  { name: "Bayview Hill", slug: "bayview-hill" },
  { name: "Mill Pond", slug: "mill-pond" },
  { name: "Jefferson", slug: "jefferson" },
  { name: "Richvale", slug: "richvale" },
  { name: "Hillsview", slug: "hillsview" },
]

export default function RichmondHillServiceAreaPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="COMPUTER REPAIR SERVICES IN RICHMOND HILL"
        description="Top-tier computer repair and IT support services for Richmond Hill residents and businesses. Expert solutions for this vibrant York Region community."
        primaryCTA={{
          text: "Schedule a Repair",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View All Services",
          href: "/services"
        }}
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {richmondHillAreas.map((area) => (
            <Card key={area.slug} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>
                  <span className="text-primary cursor-pointer hover:underline">
                    {area.name}
                  </span>
                  <Badge variant="outline" className="ml-2">Service Area</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Expert computer repair services in {area.name}, Richmond Hill.</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Services in Richmond Hill</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Comprehensive Laptop and Desktop Repairs</li>
              <li>Virus and Malware Removal</li>
              <li>Data Recovery and Backup Solutions</li>
              <li>Home and Small Business Network Setup</li>
              <li>IT Consulting for Local Businesses</li>
              <li>Mac and Apple Device Repairs</li>
              <li>Custom PC Builds for Professionals and Gamers</li>
              <li>Smart Home Technology Integration</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose PC Mechanix in Richmond Hill?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Local Expertise with Personalized Service</li>
              <li>Highly Skilled, Certified Technicians</li>
              <li>Competitive and Transparent Pricing</li>
              <li>Convenient In-Shop and On-Site Services</li>
              <li>Quick Turnaround Times</li>
              <li>90-Day Warranty on All Repairs</li>
              <li>Multilingual Support for Richmond Hill's Diverse Community</li>
              <li>Eco-Friendly E-Waste Disposal Services</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Serving Richmond Hill's Unique Tech Landscape</h2>
          <p className="mb-4">
            Richmond Hill, known for its excellent quality of life and growing tech sector, presents a unique blend of
            residential and business technology needs. From the bustling Yonge Street corridor to the serene Oak Ridges
            Moraine, PC Mechanix understands the diverse tech requirements of this dynamic community.
          </p>
          <p>
            We cater to Richmond Hill's thriving business community, from startups in the Richmond Hill Innovation
            Center to established firms in the Newkirk Business Park. Our residential services support families in
            Bayview Hill, professionals working from home in Mill Pond, and students attending Richmond Green Secondary
            School or Seneca College's King Campus. Whether you're enjoying the natural beauty of Lake Wilcox or running
            a business in downtown Richmond Hill, we're here to keep your technology running smoothly.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Need Expert Tech Support in Richmond Hill?</h2>
          <p className="mb-6">Don't let tech issues disrupt your day. Our Richmond Hill team is ready to assist you!</p>
          <Button size="lg" asChild>
            <Link href="/contact">Schedule Your Richmond Hill Tech Service Now</Link>
          </Button>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Testimonials from Richmond Hill Customers</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"PC Mechanix provided outstanding service and fixed my computer quickly and efficiently. I highly recommend them to anyone in Richmond Hill!" - Alex Chen, Bayview Hill</p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"As a small business owner in Richmond Hill, I rely on PC Mechanix for all my IT needs. They are always responsive, professional, and provide excellent solutions." - Susan Lee, Richvale</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">IT Solutions for Richmond Hill's Key Sectors</h2>
          <p className="text-gray-600">PC Mechanix offers specialized IT solutions for key sectors in Richmond Hill, including:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Technology: Cloud computing, cybersecurity, and data analytics for tech companies</li>
            <li>Retail: Point-of-sale systems, e-commerce solutions, and customer data management for retail businesses</li>
            <li>Healthcare: HIPAA-compliant solutions, EMR systems, and data security for healthcare providers</li>
            <li>Education: IT support for schools, colleges, and universities</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Serving the Richmond Hill Community</h2>
          <p className="text-gray-600">PC Mechanix is committed to serving the Richmond Hill community by:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Providing local expertise and personalized service</li>
            <li>Supporting community events and initiatives</li>
            <li>Offering technology workshops for seniors and students</li>
            <li>Partnering with local businesses and organizations</li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  )
}

