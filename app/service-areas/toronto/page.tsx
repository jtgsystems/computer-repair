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
      </div>
    </ServiceLayout>
  )
}

