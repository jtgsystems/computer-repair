import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ServiceLayout from "@/components/ServiceLayout"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Toronto Computer Repair Services | PC Mechanix",
  description:
    "Expert computer repair and IT services in Toronto and its neighborhoods. Fast, reliable, and professional tech support.",
}

const torontoNeighborhoods = [
  { name: "North York", slug: "north-york" },
  { name: "Scarborough", slug: "scarborough" },
  { name: "Etobicoke", slug: "etobicoke" },
  { name: "York", slug: "york" },
  { name: "East York", slug: "east-york" },
]

export default function TorontoServiceAreaPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="COMPUTER REPAIR SERVICES IN TORONTO"
        description="Professional computer repair and IT support services for Toronto residents and businesses. Fast, reliable, and expert solutions for all your technology needs."
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {torontoNeighborhoods.map((neighborhood) => (
            <Card key={neighborhood.slug} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>
                  <Link href={`/service-areas/toronto/${neighborhood.slug}`} className="text-primary hover:underline">
                    {neighborhood.name}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Expert computer repair services in {neighborhood.name}.</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Our Services in Toronto</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Laptop and Desktop Repairs</li>
            <li>Virus and Malware Removal</li>
            <li>Data Recovery</li>
            <li>Network Setup and Troubleshooting</li>
            <li>Business IT Support</li>
            <li>Mac Repairs</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Why Choose PC Mechanix in Toronto?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Fast and Reliable Service</li>
            <li>Experienced Technicians</li>
            <li>Competitive Pricing</li>
            <li>Convenient Location</li>
            <li>Same-Day Repairs Available</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Testimonials from Toronto Customers</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"PC Mechanix provided excellent service and fixed my laptop quickly. I highly recommend them to anyone in Toronto!" - John Doe, North York</p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"I was impressed with the professionalism and expertise of the technicians at PC Mechanix. They recovered my data after a hard drive failure. Thank you!" - Jane Smith, Scarborough</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">More About Our Services in Toronto</h2>
          <p className="text-gray-600">We offer a wide range of computer repair and IT services in Toronto, including:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Comprehensive hardware diagnostics and repairs</li>
            <li>Operating system installation and upgrades</li>
            <li>Software troubleshooting and support</li>
            <li>Custom-built computers for gaming and business</li>
            <li>Home and business networking solutions</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">More Reasons to Choose PC Mechanix in Toronto</h2>
          <p className="text-gray-600">Here are even more reasons to choose us for your computer repair needs:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Certified and experienced technicians</li>
            <li>Free diagnostics and estimates</li>
            <li>Use of high-quality parts and components</li>
            <li>Commitment to customer satisfaction</li>
            <li>Environmentally responsible practices</li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  )
}
