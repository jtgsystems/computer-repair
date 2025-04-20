import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ServiceLayout from "@/components/ServiceLayout"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Brampton Computer Repair Services | PC Mechanix",
  description:
    "Expert computer repair and IT services in Brampton. Fast, reliable, and professional tech support for residents and businesses.",
}

const bramptonAreas = [
  { name: "Bramalea", slug: "bramalea" },
  { name: "Castlemore", slug: "castlemore" },
  { name: "Downtown Brampton", slug: "downtown-brampton" },
  { name: "Heart Lake", slug: "heart-lake" },
  { name: "Mount Pleasant", slug: "mount-pleasant" },
  { name: "Springdale", slug: "springdale" },
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
          href: "/"
        }}
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {bramptonAreas.map((area) => (
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
            Brampton is a vibrant, growing city with a diverse population and a mix of residential and business areas. PC Mechanix is your local expert for all tech support needs in Brampton, from home computer setups to comprehensive IT solutions for local businesses.
          </p>
          <p>
            We understand the unique needs of Brampton residents and businesses, providing fast, efficient, and reliable service throughout the city. Whether you're in downtown Brampton, Bramalea, Castlemore, or any other neighborhood, PC Mechanix is your trusted tech support partner.
          </p>
        </div>

        <div className="text-center mb-12">
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
