import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ServiceLayout from "@/components/ServiceLayout"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Vaughan Computer Repair Services | PC Mechanix",
  description:
    "Expert computer repair and IT services in Vaughan. Fast, reliable, and professional tech support for residents and businesses in the City Above Toronto.",
}

const vaughanAreas = [
  { name: "Woodbridge", slug: "woodbridge" },
  { name: "Maple", slug: "maple" },
  { name: "Concord", slug: "concord" },
  { name: "Kleinburg", slug: "kleinburg" },
  { name: "Thornhill", slug: "thornhill" },
  { name: "Vaughan Metropolitan Centre", slug: "vaughan-metropolitan-centre" },
]

export default function VaughanServiceAreaPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="COMPUTER REPAIR SERVICES IN VAUGHAN"
        description="Exceptional computer repair and IT support services for Vaughan residents and businesses. Expert solutions for the City Above Toronto."
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
          {vaughanAreas.map((area) => (
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
                <p className="text-gray-600">Expert computer repair services in {area.name}, Vaughan.</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Services in Vaughan</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Comprehensive Laptop and Desktop Repairs</li>
              <li>Advanced Virus and Malware Removal</li>
              <li>Data Recovery and Secure Backup Solutions</li>
              <li>Home and Business Network Setup</li>
              <li>Customized IT Support for Local Businesses</li>
              <li>Mac and Apple Device Repairs</li>
              <li>Custom PC Builds for Gamers and Professionals</li>
              <li>Smart Home and Office Technology Integration</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose PC Mechanix in Vaughan?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Local Expertise with a Personal Touch</li>
              <li>Highly Skilled, Certified Technicians</li>
              <li>Competitive and Transparent Pricing</li>
              <li>Convenient In-Shop and On-Site Services</li>
              <li>Quick Turnaround Times</li>
              <li>90-Day Warranty on All Repairs</li>
              <li>Tailored Solutions for Vaughan's Diverse Community</li>
              <li>Support for Both Residential and Commercial Clients</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Meeting Vaughan's Unique Tech Needs</h2>
          <p className="mb-4">
            Vaughan, known for its rapid growth and diverse economy, presents a unique blend of residential and business
            technology needs. From the bustling Vaughan Metropolitan Centre to the historic villages of Kleinburg and
            Woodbridge, PC Mechanix understands the varied tech requirements of this dynamic city.
          </p>
          <p>
            We cater to Vaughan's thriving business community, from retail shops in Vaughan Mills to corporate offices
            in Concord. Our residential services support the tech needs of families in Maple and professionals working
            from home in Thornhill. Whether you're a student at Vaughan Secondary School, an entrepreneur at the Vaughan
            Business Enterprise Centre, or a resident enjoying the green spaces of Boyd Conservation Area, PC Mechanix
            is here to keep your technology running smoothly.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Need Reliable Tech Support in Vaughan?</h2>
          <p className="mb-6">Don't let tech issues slow you down. Our Vaughan team is ready to assist you!</p>
          <Button size="lg" asChild>
            <Link href="/contact">Book Your Vaughan Tech Service Now</Link>
          </Button>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Testimonials from Vaughan Customers</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"PC Mechanix provided excellent service and fixed my computer quickly. I highly recommend them to anyone in Vaughan!" - Michael P., Woodbridge</p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"I'm so glad I found PC Mechanix. They provided excellent IT support for my small business. They are always responsive and helpful." - Sarah L., Vaughan Metropolitan Centre</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">IT Solutions for Vaughan's Communities and Industries</h2>
          <p className="text-gray-600">PC Mechanix offers specialized IT solutions to meet the unique needs of Vaughan's diverse communities and industries, including:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Retail: Point-of-sale systems and customer data management for businesses in Vaughan Mills</li>
            <li>Technology: Cloud computing solutions and cybersecurity for tech startups in Concord</li>
            <li>Healthcare: EMR systems and data protection for medical clinics in Maple</li>
            <li>Residential: Home network setup and computer repair for families in Woodbridge and Kleinburg</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Committed to Reliable Tech Support in Vaughan</h2>
          <p className="text-gray-600">PC Mechanix is committed to providing reliable tech support to the Vaughan community by:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Offering fast and efficient on-site and in-store services</li>
            <li>Providing expert advice and personalized solutions</li>
            <li>Using high-quality parts and components</li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  )
}

