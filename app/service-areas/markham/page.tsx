import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ServiceLayout from "@/components/ServiceLayout"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Markham Computer Repair Services | PC Mechanix",
  description:
    "Expert computer repair and IT services in Markham. Fast, reliable, and professional tech support for residents and businesses in Canada's High-Tech Capital.",
}

const markhamAreas = [
  { name: "Unionville", slug: "unionville" },
  { name: "Thornhill", slug: "thornhill" },
  { name: "Milliken", slug: "milliken" },
  { name: "Markham Village", slug: "markham-village" },
  { name: "Cornell", slug: "cornell" },
  { name: "Greensborough", slug: "greensborough" },
]

export default function MarkhamServiceAreaPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="COMPUTER REPAIR SERVICES IN MARKHAM"
        description="Cutting-edge computer repair and IT support services in Canada's High-Tech Capital. Expert solutions for Markham's tech-savvy residents and innovative businesses."
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
          {markhamAreas.map((area) => (
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
                <p className="text-gray-600">Expert computer repair services in {area.name}, Markham.</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Services in Markham</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Advanced Laptop and Desktop Repairs</li>
              <li>Enterprise-Grade Virus and Malware Removal</li>
              <li>Comprehensive Data Recovery and Backup Solutions</li>
              <li>High-Performance Network Setup and Troubleshooting</li>
              <li>Specialized Business IT Support and Consulting</li>
              <li>Mac and Apple Device Repairs</li>
              <li>Custom High-End PC Builds and Upgrades</li>
              <li>IoT and Smart Office Setup</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose PC Mechanix in Markham?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Expertise in Cutting-Edge Technology</li>
              <li>Highly Skilled, Certified IT Professionals</li>
              <li>Competitive Pricing for High-Quality Services</li>
              <li>Flexible On-Site and Remote Support Options</li>
              <li>Rapid Response Times for Tech Emergencies</li>
              <li>Comprehensive 90-Day Warranty on All Repairs</li>
              <li>Tailored Solutions for Tech Startups and Enterprises</li>
              <li>Multilingual Support for Markham's Diverse Tech Community</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Serving Markham's High-Tech Ecosystem</h2>
          <p className="mb-4">
            Markham, known as Canada's High-Tech Capital, is home to a thriving ecosystem of tech companies, startups,
            and innovation hubs. PC Mechanix is uniquely positioned to meet the advanced technological needs of this
            dynamic community. Our team of experts understands the critical role that IT plays in driving innovation and
            business success in Markham.
          </p>
          <p>
            Whether you're a tech professional working from home in Unionville, a startup in the Markham Convergence
            Centre, or an established corporation in the Markham Business Park, PC Mechanix offers the specialized
            expertise and rapid support you need to stay at the forefront of technology. We're committed to keeping
            Markham's diverse and tech-savvy population connected, productive, and secure in an increasingly digital
            world.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Need Advanced Tech Support in Markham?</h2>
          <p className="mb-6">
            Stay ahead in Canada's High-Tech Capital with our expert IT services. Contact us today!
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Schedule Your High-Tech Service Now</Link>
          </Button>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Testimonials from Markham Customers</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"PC Mechanix has been instrumental in keeping our tech startup running smoothly. Their expertise in cloud solutions and cybersecurity is invaluable." - Alex K., Unionville</p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"I'm a student at Seneca College, and PC Mechanix helped me troubleshoot a complex software issue. Their technicians are patient, knowledgeable, and affordable." - Emily C., Milliken</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Specialized IT Solutions for Markham's Industries</h2>
          <p className="text-gray-600">PC Mechanix delivers tailored IT solutions to support Markham's key industries, including:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Technology: Cloud computing, cybersecurity, and data analytics</li>
            <li>Finance: Secure data storage, compliance solutions, and network optimization</li>
            <li>Healthcare: EMR systems, telehealth solutions, and patient data privacy</li>
            <li>Manufacturing: Automation systems, robotics maintenance, and network infrastructure</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Supporting Markham's Students and Educational Institutions</h2>
          <p className="text-gray-600">PC Mechanix is dedicated to supporting Markham's educational community by offering:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Discounted computer repair services for students</li>
            <li>IT support for schools and colleges</li>
            <li>STEM education workshops and training</li>
            <li>Partnerships with local educational institutions</li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  )
}
