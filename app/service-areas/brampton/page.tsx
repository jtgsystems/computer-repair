import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ServiceLayout from "@/components/ServiceLayout"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Brampton Computer Repair Services | PC Mechanix",
  description:
    "Expert computer repair and IT services in Brampton. Fast, reliable, and professional tech support for residents and businesses.",
}

const bramptonAreas = [
  { name: "Downtown Brampton", slug: "downtown-brampton" },
  { name: "Bramalea", slug: "bramalea" },
  { name: "Heart Lake", slug: "heart-lake" },
  { name: "Mount Pleasant", slug: "mount-pleasant" },
  { name: "Springdale", slug: "springdale" },
  { name: "Castlemore", slug: "castlemore" },
]

export default function BramptonServiceAreaPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="COMPUTER REPAIR SERVICES IN BRAMPTON"
        description="Professional computer repair and IT support services for Brampton residents and businesses. Fast, reliable solutions from certified technicians."
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
          {bramptonAreas.map((area) => (
            <Card key={area.slug} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>
                  <Link href={`/service-areas/brampton/${area.slug}`} className="text-primary hover:underline">
                    {area.name}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Expert computer repair services in {area.name}, Brampton.</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Services in Brampton</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Laptop and Desktop Repairs</li>
              <li>Virus and Malware Removal</li>
              <li>Data Recovery and Backup Solutions</li>
              <li>Network Setup and Troubleshooting</li>
              <li>Business IT Support and Consulting</li>
              <li>Mac and Apple Device Repairs</li>
              <li>Custom PC Builds and Upgrades</li>
              <li>Smart Home Device Setup and Support</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose PC Mechanix in Brampton?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Rapid Response Times</li>
              <li>Skilled, Certified Technicians</li>
              <li>Affordable and Transparent Pricing</li>
              <li>Convenient In-Shop and On-Site Services</li>
              <li>Same-Day Repairs for Many Issues</li>
              <li>90-Day Warranty on All Repairs</li>
              <li>Tailored Solutions for Homes and Businesses</li>
              <li>Multilingual Support for Brampton's Diverse Community</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Meeting Brampton's Unique Tech Needs</h2>
          <p className="mb-4">
            Brampton, known as the Flower City, is a rapidly growing and diverse community with a unique blend of
            residential and commercial areas. PC Mechanix understands the varied tech needs of Brampton's residents and
            businesses, from students at Sheridan College to professionals working in the city's thriving business
            parks.
          </p>
          <p>
            We're committed to providing fast, reliable, and culturally sensitive service to Brampton's multicultural
            population. Whether you're a family in Springdale needing home computer support, a startup in Downtown
            Brampton requiring IT consulting, or a large corporation in Bramalea seeking comprehensive tech solutions,
            PC Mechanix has the expertise to keep your technology running smoothly.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for Expert Tech Support in Brampton?</h2>
          <p className="mb-6">Don't let computer issues disrupt your day. Our Brampton team is here to help!</p>
          <Button size="lg" asChild>
            <Link href="/contact">Book Your Repair Service Now</Link>
          </Button>
        </div>
      </div>
    </ServiceLayout>
  )
}

