import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ServiceLayout from "@/components/ServiceLayout"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Mississauga Computer Repair Services | PC Mechanix",
  description:
    "Expert computer repair and IT services in Mississauga. Fast, reliable, and professional tech support for residents and businesses.",
}

const mississaugaAreas = [
  { name: "Port Credit", slug: "port-credit" },
  { name: "Streetsville", slug: "streetsville" },
  { name: "Meadowvale", slug: "meadowvale" },
  { name: "Erin Mills", slug: "erin-mills" },
  { name: "Clarkson", slug: "clarkson" },
  { name: "Cooksville", slug: "cooksville" },
]

export default function MississaugaServiceAreaPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="COMPUTER REPAIR SERVICES IN MISSISSAUGA"
        description="Expert computer repair and IT support services for Mississauga residents and businesses. Fast, reliable solutions for all your technology needs."
        primaryCTA={{
          text: "Schedule a Repair",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View All Services",
          href: "/"
        }}
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mississaugaAreas.map((area) => (
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
                <p className="text-gray-600">Expert computer repair services in {area.name}, Mississauga.</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Services in Mississauga</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Laptop and Desktop Repairs</li>
              <li>Virus and Malware Removal</li>
              <li>Data Recovery and Backup Solutions</li>
              <li>Network Setup and Troubleshooting</li>
              <li>Business IT Support and Consulting</li>
              <li>Mac and Apple Device Repairs</li>
              <li>Custom PC Builds and Upgrades</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose PC Mechanix in Mississauga?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Fast and Reliable Service</li>
              <li>Experienced, Certified Technicians</li>
              <li>Competitive and Transparent Pricing</li>
              <li>Convenient Location and Mobile Services</li>
              <li>Same-Day Repairs Available</li>
              <li>90-Day Warranty on All Repairs</li>
              <li>Personalized Solutions for Businesses and Individuals</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Serving Mississauga's Diverse Tech Needs</h2>
          <p className="mb-4">
            As a thriving city with a mix of residential areas and business hubs, Mississauga has unique technology
            needs. PC Mechanix is equipped to handle everything from home computer repairs to complex business IT
            solutions. We understand the importance of reliable technology in both personal and professional settings.
          </p>
          <p>
            Whether you're a student at the University of Toronto Mississauga, a small business owner in the downtown
            core, or a resident in one of Mississauga's many neighborhoods, we're here to keep your technology running
            smoothly.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Need Expert Computer Repair in Mississauga?</h2>
          <p className="mb-6">Don't let tech issues slow you down. Our Mississauga team is ready to help!</p>
          <Button size="lg" asChild>
            <Link href="/contact">Schedule Your Repair Now</Link>
          </Button>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Testimonials from Mississauga Customers</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"PC Mechanix saved my business! Our network was down, and they had us up and running in no time. Professional and reliable!" - John B., Streetsville</p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"I've used PC Mechanix for years. They always provide excellent service and are very knowledgeable. Highly recommended!" - Sarah M., Port Credit</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">IT Solutions for Mississauga Businesses</h2>
          <p className="text-gray-600">We offer tailored IT solutions to meet the unique needs of businesses in Mississauga. Our services include:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Managed IT Services for proactive support</li>
            <li>Cybersecurity Solutions to protect your data</li>
            <li>Cloud Services for scalability and efficiency</li>
            <li>Data Backup and Recovery to prevent data loss</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Computer Repair Services Across Mississauga</h2>
          <p className="text-gray-600">We provide on-site and in-store computer repair services throughout Mississauga, including:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Laptop and desktop repair in Meadowvale and Erin Mills</li>
            <li>Virus removal and data recovery in Clarkson and Cooksville</li>
            <li>Mac and PC upgrades in Port Credit and Streetsville</li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  )
}
