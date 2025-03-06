import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ServiceLayout from "@/components/ServiceLayout"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Downtown Brampton Computer Repair | PC Mechanix",
  description:
    "Downtown Brampton's top computer repair and IT services. Fast, reliable, and professional tech support for residents and businesses in Downtown Brampton.",
}

// Removed bramptonAreas since it's not used in this subpage and might be confusing
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
        title="COMPUTER REPAIR SERVICES IN DOWNTOWN BRAMPTON"
        description="Your local experts for computer repair and IT support in Downtown Brampton. Fast, reliable solutions for residents and businesses."
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
            <h2 className="text-2xl font-bold mb-4">Our Services in Downtown Brampton</h2>
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
            <h2 className="text-2xl font-bold mb-4">Why Choose PC Mechanix in Downtown Brampton?</h2>
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
          <h2 className="text-2xl font-bold mb-4">Meeting Downtown Brampton's Unique Tech Needs</h2>
          <p className="mb-4">
            Downtown Brampton is a vibrant urban center, home to a mix of historic buildings, modern condos, and bustling
            businesses. PC Mechanix is proud to serve the unique tech needs of Downtown Brampton residents and businesses.
          </p>
          <p>
            From professionals in the financial district to residents in the many apartments and condos, we offer fast,
            reliable, and convenient tech support right in the heart of Brampton. Whether you need a laptop repair after a
            long day at work, or your small business in Downtown Brampton requires urgent IT support, PC Mechanix is here
            to help.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for Expert Tech Support in Downtown Brampton?</h2>
          <p className="mb-6">Don't let computer issues disrupt your day. Our Brampton team is here to help!</p>
          <Button size="lg" asChild>
            <Link href="/contact">Book Your Repair Service Now</Link>
          </Button>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Testimonials from Downtown Brampton Customers</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"PC Mechanix is a lifesaver! They fixed my computer quickly and efficiently, and their prices are very reasonable. I highly recommend them to anyone in Brampton." - Sarah M., Downtown Brampton Resident</p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"I'm so glad I found PC Mechanix. They provided excellent IT support for my small business. They are always responsive and helpful." - John B., Downtown Business Owner</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">IT Solutions for Downtown Brampton Businesses</h2>
          <p className="text-gray-600">We provide specialized IT solutions for various industries in Brampton, including:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Financial Services: Secure networks, data backup, and compliance</li>
            <li>Retail and Hospitality: POS systems, customer WiFi, and data security</li>
            <li>Professional Services: IT consulting, cloud solutions, and cybersecurity</li>
            <li>Small Businesses and Startups: Affordable IT support packages</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Serving Downtown Brampton and Surrounding Areas</h2>
          <p className="text-gray-600">PC Mechanix is proud to offer our full range of computer repair and IT services to all areas of Downtown Brampton and nearby neighborhoods, including:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Core Downtown Brampton Area</li>
            <li>Heritage Conservation District</li>
            <li>In-store services at our convenient Brampton location</li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  )
}
