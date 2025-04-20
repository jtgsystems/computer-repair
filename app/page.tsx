"use client"

import { CardContent } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import {
  Clock,
  CheckCircle,
  ChevronUp,
  PenTool,  // Changed from PenToolIcon as Tool
  DollarSign,
  Network,
  Monitor,
  Cloud,
  Video,
  Zap,
  Briefcase,
  TrendingUp,
  ChevronDown,
  Store,
  Building2,
  Package,
  Stethoscope,
  Truck,
  ArrowRight,
} from "lucide-react"
import { LayoutGrid, FileCheck, Mail, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCallback, useState } from "react"
import ServiceLayout from "@/components/ServiceLayout"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const canadianCities = [
  {
    name: "Ontario",
    cities: [
      "Toronto",
      "Ottawa",
      "Mississauga",
      "Brampton",
      "Hamilton",
      "London",
      "Windsor",
      "Kitchener",
      "Markham",
      "Vaughan",
    ],
  },
  {
    name: "British Columbia",
    cities: ["Vancouver", "Surrey", "Burnaby", "Richmond", "Abbotsford", "Coquitlam", "Kelowna", "Victoria", "Nanaimo"],
  },
  {
    name: "Alberta",
    cities: [
      "Calgary",
      "Edmonton",
      "Red Deer",
      "Lethbridge",
      "St. Albert",
      "Medicine Hat",
      "Grande Prairie",
      "Airdrie",
    ],
  },
  {
    name: "Manitoba",
    cities: ["Winnipeg", "Brandon", "Steinbach", "Thompson", "Portage la Prairie", "Selkirk", "Winkler", "Dauphin"],
  },
  {
    name: "Saskatchewan",
    cities: ["Saskatoon", "Regina", "Prince Albert", "Moose Jaw", "Swift Current", "Yorkton", "North Battleford"],
  },
  {
    name: "Nova Scotia",
    cities: ["Halifax", "Dartmouth", "Sydney", "Truro", "New Glasgow", "Glace Bay", "Kentville", "Bridgewater"],
  },
  {
    name: "New Brunswick",
    cities: ["Moncton", "Saint John", "Fredericton", "Dieppe", "Miramichi", "Edmundston", "Bathurst", "Campbellton"],
  },
  {
    name: "Newfoundland and Labrador",
    cities: ["St. John's", "Mount Pearl", "Corner Brook", "Conception Bay South", "Grand Falls-Windsor", "Paradise"],
  },
  {
    name: "Prince Edward Island",
    cities: ["Charlottetown", "Summerside", "Stratford", "Cornwall", "Montague", "Kensington", "Souris"],
  },
  {
    name: "Territories",
    cities: ["Whitehorse (Yukon)", "Yellowknife (Northwest Territories)", "Iqaluit (Nunavut)"],
  },
]

const ScrollToTopButton = () => {
  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-4 right-4 bg-primary text-primary-foreground p-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
      aria-label="Back to top"
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  )
}

const CollapsibleAreas = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [expandedRegions, setExpandedRegions] = useState<{ [key: string]: boolean }>({})

  // Function to check if a city has a dedicated page
  const hasCityPage = (city: string) => {
    // List of cities that have dedicated pages
    const citiesWithPages = [
      "Toronto", "Mississauga", "Brampton", "Markham", 
      "Vaughan", "Richmond Hill", "Oakville", "Burlington"
    ]
    return citiesWithPages.includes(city)
  }

  // Function to convert city name to slug
  const cityToSlug = (city: string) => {
    return city.toLowerCase().replace(/\s+/g, '-')
  }

  // Function to toggle region expansion
  const toggleRegion = (regionName: string) => {
    setExpandedRegions(prev => ({
      ...prev, [regionName]: !prev[regionName]
    }))
  }

  return (
    <>
      <h2 className="text-4xl font-bold text-center mb-4 text-blue-500 uppercase tracking-wide">AREAS WE SERVE</h2>
      <Button onClick={() => setIsExpanded(!isExpanded)} variant="outline" className="mx-auto mb-4 flex items-center">
        {isExpanded ? "Hide Areas" : "Show Areas"}
        {isExpanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
      </Button>
      {isExpanded && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {canadianCities.map((region, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
            >
              <div 
                className="flex justify-between items-center cursor-pointer" 
                onClick={() => toggleRegion(region.name)}
              >
                <h3 className="text-lg font-semibold text-blue-500">{region.name}</h3>
                <div className="text-blue-500">
                  {expandedRegions[region.name] ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </div>
              </div>
              
              {expandedRegions[region.name] && (
                <ul className="text-sm text-gray-600 space-y-1 mt-2">
                  {region.cities.map((city, cityIndex) => (
                    <li key={cityIndex}>
                      {hasCityPage(city) ? (
                        <Link 
                          href={`/service-areas/${cityToSlug(city)}`}
                          className="text-gray-600 hover:text-blue-500 hover:underline transition-colors duration-200"
                          aria-label={`Computer repair services in ${city}`}
                        >
                          {city}
                        </Link>
                      ) : (
                        <span>{city}</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default function Home() {
  const [benefitDetails, setBenefitDetails] = useState(benefits.map(() => false))

  const toggleBenefitDetails = (index: number) => {
    setBenefitDetails((prev) => prev.map((detail, i) => (i === index ? !detail : detail)))
  }

  return (
    <ServiceLayout renderHeaderAndFooter={true}>
      <main className="flex-grow">
        <section className="relative bg-gradient-to-r from-blue-300 to-blue-400 text-white pt-36 pb-24">
          <Image
            src="/images/server-racks.jpeg"
            alt="PC Mechanix - Enterprise IT Solutions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-700/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1
                className="text-6xl font-extrabold mb-6 text-shadow-lg uppercase tracking-tight"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
              >
                PC MECHANIX: YOUR TRUSTED PARTNER IN IT SOLUTIONS
              </h1>
              <p className="text-xl mb-12 text-shadow">
                Comprehensive IT solutions that drive growth and efficiency for businesses across the Greater Toronto
                Area and beyond.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-blue-500 uppercase tracking-wide">
              EXCELLENCE IN BUSINESS IT SOLUTIONS
            </h2>
            <p className="text-lg text-center mb-8 text-gray-700">
              PC Mechanix stands at the forefront of business IT solutions, offering a comprehensive suite of services
              designed to meet the complex needs of modern enterprises. Our approach combines technical expertise with a
              deep understanding of business operations, ensuring that every solution we provide aligns perfectly with
              our clients' strategic objectives.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gray-50 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Briefcase className="h-8 w-8 text-blue-500 mr-3" />
                    <h3 className="text-xl font-semibold text-blue-500">Business-First Approach</h3>
                  </div>
                  <p className="text-gray-700">
                    We understand your business before recommending technical solutions, ensuring tailored strategies
                    that drive real value.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-8 w-8 text-blue-500 mr-3" />
                    <h3 className="text-xl font-semibold text-blue-500">24/7 Support</h3>
                  </div>
                  <p className="text-gray-700">
                    Round-the-clock monitoring and support services ensure we're always there when you need us.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="h-8 w-8 text-blue-500 mr-3" />
                    <h3 className="text-xl font-semibold text-blue-500">Future-Ready Solutions</h3>
                  </div>
                  <p className="text-gray-700">
                    We keep your business ahead of the curve with innovative, scalable technology solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-500 uppercase tracking-wide">OUR SERVICES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-none rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 w-full h-full">
                    <div className="absolute inset-0 bg-white"></div>
                  </div>
                  
                  <CardContent className="flex flex-col h-full p-8 relative z-10">
                    {/* Service icon */}
                    <div className="mb-6 flex items-center">
                      <div className="p-3 rounded-full bg-blue-400/10">
                        <service.icon className="h-8 w-8 text-blue-500" />
                      </div>
                      <h3 className="text-xl font-bold text-blue-500 ml-4">
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <p className="text-gray-700 font-medium">{service.description}</p>
                    </div>
                    
                    {/* Feature list - unique to each service */}
                    <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
                      {service.features && service.features.map((feature, i) => (
                        <div key={i} className="flex items-start mb-2">
                          <CheckCircle className="h-4 w-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Button */}
                    <Button
                      className="w-full transition-colors"
                      asChild
                    >
                      <Link
                        href={
                          service.slug === 'cybersecurity' ||
                          service.slug === 'security-systems' ||
                          service.slug === 'cloud-services' ||
                          service.slug === 'managed-it' ||
                          service.slug === 'network-solutions' ||
                          service.slug === 'it-consulting'
                            ? `/business/${service.slug}`
                            : `/services/${service.slug}`
                        }
                      >
                        Learn More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-blue-500 uppercase tracking-wide">
              SOFTWARE SOLUTIONS
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 mb-4">
                  As a certified partner of industry-leading software providers, PC Mechanix excels in implementing and
                  optimizing software environments for businesses of all sizes. Our expertise spans across multiple
                  platforms and solutions, ensuring that your business has access to the best tools for productivity and
                  growth.
                </p>
                <p className="text-gray-700 mb-4">Our key partners include:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Microsoft (including Microsoft 365 and Microsoft Teams)</li>
                  <li>Shopify</li>
                  <li>Adobe</li>
                  <li>Freshworks</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  We help organizations leverage the full power of these platforms, from initial deployment and
                  migration to advanced configuration and ongoing management. Our team ensures seamless integration with
                  existing systems, implements robust security policies, and provides comprehensive training to maximize
                  your team's productivity with these essential business tools.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gray-50 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-4">
                    <LayoutGrid className="h-8 w-8 text-blue-500 mb-2" />
                    <h3 className="font-semibold mb-2">Collaboration</h3>
                    <p className="text-sm text-gray-600">Enhance team communication and productivity</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-4">
                    <FileCheck className="h-8 w-8 text-blue-500 mb-2" />
                    <h3 className="font-semibold mb-2">Document Management</h3>
                    <p className="text-sm text-gray-600">Efficient file organization and sharing</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-4">
                    <Mail className="h-8 w-8 text-blue-500 mb-2" />
                    <h3 className="font-semibold mb-2">Email Solutions</h3>
                    <p className="text-sm text-gray-600">Enterprise-grade email and calendar management</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-4">
                    <Shield className="h-8 w-8 text-blue-500 mb-2" />
                    <h3 className="font-semibold mb-2">Security</h3>
                    <p className="text-sm text-gray-600">Robust security policies and configurations</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-500 uppercase tracking-wide">
              WHY CHOOSE PC MECHANIX
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-500">Always Available, Always Responsive</h3>
                <p className="text-gray-700 mb-4">
                  In the fast-paced business world, system downtime isn't just an inconvenience – it's a direct threat
                  to your bottom line. That's why PC Mechanix has established a robust support system that ensures we're
                  always there when our clients need us.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                    <span>24/7 Support Availability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                    <span>Rapid Response Protocol</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                    <span>Proactive Maintenance</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-500">Value-Driven Solutions</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <DollarSign className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Cost Optimization</h4>
                      <p className="text-sm text-gray-600">
                        Strategic technology investments and efficient resource allocation
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Productivity Enhancement</h4>
                      <p className="text-sm text-gray-600">Streamlined workflows and user-friendly systems</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Business Continuity</h4>
                      <p className="text-sm text-gray-600">Robust backup solutions and disaster recovery planning</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 cursor-pointer group"
                  onClick={() => toggleBenefitDetails(index)}
                >
                  <div className="flex items-center mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-500 mr-3" />
                    <h3 className="text-xl font-semibold text-blue-500 group-hover:text-blue-700 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {benefit.description}
                  </p>
                  {benefitDetails[index] && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-blue-800">{benefit.details}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">
              PARTNER WITH PC MECHANIX FOR YOUR BUSINESS SUCCESS
            </h2>
            <p className="text-xl mb-8">
              Discover how PC Mechanix can transform your business's IT infrastructure into a powerful driver of growth
              and success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 shadow-lg transition-colors duration-300"
                asChild
              >
                <Link href="/contact">
                  Schedule a Consultation
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white hover:bg-white hover:text-primary border-white shadow-lg transition-colors duration-300"
                asChild
              >
                <Link href="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-8 bg-gray-100">
          <div className="container mx-auto px-2 max-w-7xl">
            <CollapsibleAreas />
          </div>
        </section>


        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg max-w-3xl mx-auto">
                We create customized solutions that allow your business to streamline workflow and increase
                productivity. Our team has extensive experience working with clients across diverse industries.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {industries.map((industry, index) => (
                <Link
                  key={index}
                  href={`/industries/${industry.slug}`}
                  className="flex flex-col items-center p-6 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                >
                  <industry.icon className="w-16 h-16 mb-4 text-[#E4EDEF] group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold">{industry.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </ServiceLayout>
  )
}

const services = [
  {
    title: "Managed IT Services",
    description: "Comprehensive IT management solutions that provide 24/7 support and proactive maintenance for your business technology.",
    icon: Monitor,
    slug: "managed-it",
    backgroundImage: "/images/managed-it.jpg",
    features: [
      "Round-the-clock system monitoring",
      "Preventative maintenance and updates",
      "Dedicated technical support team",
      "Strategic IT infrastructure planning"
    ]
  },
  {
    title: "Cybersecurity",
    description: "Robust protection systems that safeguard your business data, networks, and digital assets from evolving threats.",
    icon: Shield,
    slug: "cybersecurity",
    backgroundImage: "/images/cybersecurity.jpg",
    features: [
      "Advanced threat detection systems",
      "Comprehensive security audits",
      "Multi-layered data encryption",
      "Security awareness training"
    ]
  },
  {
    title: "Cloud Services",
    description: "Flexible and scalable cloud solutions that enhance collaboration, data accessibility, and business continuity.",
    icon: Cloud,
    slug: "cloud-services",
    backgroundImage: "/images/cloud-services.jpg",
    features: [
      "Seamless cloud migration",
      "Custom hybrid cloud environments",
      "Enhanced data security protocols",
      "Performance and cost optimization"
    ]
  },
  {
    title: "Network Solutions",
    description: "Reliable and secure network infrastructure designed to optimize connectivity, performance, and business operations.",
    icon: Network,
    slug: "network-solutions",
    backgroundImage: "/images/network-solutions.jpg",
    features: [
      "Custom network architecture",
      "High-performance wireless systems",
      "Secure remote access solutions",
      "Real-time network monitoring"
    ]
  },
  {
    title: "IT Consulting",
    description: "Expert guidance and strategic planning to align your technology investments with your business goals and growth plans.",
    icon: LayoutGrid,
    slug: "it-consulting",
    backgroundImage: "/images/it-consulting.jpg",
    features: [
      "Technology needs assessment",
      "Long-term IT roadmap development",
      "Digital transformation guidance",
      "IT budget and resource planning"
    ]
  },
  {
    title: "Security Systems",
    description: "Integrated physical and digital security solutions that protect your business premises, assets, and personnel.",
    icon: Video,
    slug: "security-systems",
    backgroundImage: "/images/security-systems.jpg",
    features: [
      "HD surveillance systems",
      "Smart access control technology",
      "24/7 monitoring services",
      "Unified security management"
    ]
  },
]

const benefits = [
  {
    title: "Expertise",
    description: "Certified professionals with years of industry experience.",
    icon: CheckCircle,
    details:
      "Our team consists of industry-certified experts with an average of 10+ years of experience in various IT domains.",
  },
  {
    title: "Customized Solutions",
    description: "Tailored IT strategies to meet your unique business needs.",
    icon: PenTool,  // Changed from Tool to PenTool
    details:
      "We analyze your business processes and goals to create bespoke IT solutions that align perfectly with your objectives.",
  },
  {
    title: "Proactive Approach",
    description: "Anticipate and prevent IT issues before they impact your business.",
    icon: Shield,
    details:
      "Our advanced monitoring systems and predictive analytics help us identify potential issues before they become problems.",
  },
  {
    title: "Cost-Effective",
    description: "Optimize your IT spending with our efficient solutions.",
    icon: DollarSign,
    details:
      "We help you reduce IT costs by up to 30% through strategic planning, resource optimization, and efficient management.",
  },
  {
    title: "Scalability",
    description: "Flexible solutions that grow with your business.",
    icon: TrendingUp,
    details:
      "Our solutions are designed to easily scale up or down, ensuring your IT infrastructure always matches your business needs.",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance for your peace of mind.",
    icon: Clock,
    details:
      "Our dedicated support team is available 24/7, 365 days a year, with an average response time of less than 15 minutes.",
  },
]

const industries = [
  {
    name: "Retail",
    icon: Store,
    slug: "retail",
  },
  {
    name: "Real Estate",
    icon: Building2,
    slug: "real-estate",
  },
  {
    name: "Warehousing",
    icon: Package,
    slug: "warehousing",
  },
  {
    name: "Healthcare",
    icon: Stethoscope,
    slug: "healthcare",
  },
  {
    name: "Logistics",
    icon: Truck,
    slug: "logistics",
  },
]
