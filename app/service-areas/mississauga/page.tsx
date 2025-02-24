import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ServiceLayout from "@/components/ServiceLayout"

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
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">Computer Repair Services in Mississauga</h1>
        <p className="text-lg mb-12 text-center">
          PC Mechanix offers comprehensive computer repair and IT services throughout Mississauga and its surrounding
          areas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mississaugaAreas.map((area) => (
            <Card key={area.slug} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>
                  <Link href={`/service-areas/mississauga/${area.slug}`} className="text-primary hover:underline">
                    {area.name}
                  </Link>
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
      </div>
    </ServiceLayout>
  )
}

