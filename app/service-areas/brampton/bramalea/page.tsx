import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ServiceLayout from "@/components/ServiceLayout"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Bramalea Computer Repair Services | PC Mechanix",
  description:
    "Bramalea's leading computer repair and IT services. Fast, reliable, and professional tech support for Bramalea residents and businesses.",
}

// Removed bramptonAreas

export default function BramptonServiceAreaPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="COMPUTER REPAIR SERVICES IN BRAMALEA"
        description="Your trusted provider for computer repair and IT support in Bramalea. Expert solutions for homes and businesses."        
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


        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Services in Bramalea</h2>
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
            <h2 className="text-2xl font-bold mb-4">Why Choose PC Mechanix in Bramalea?</h2>
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
          <h2 className="text-2xl font-bold mb-4">Meeting Bramalea's Unique Tech Needs</h2>
          <p className="mb-4">
            Bramalea is a well-established community in Brampton, known for its family-friendly environment and mix of
            residential, commercial, and industrial areas. PC Mechanix is your local expert for all tech support needs in
            Bramalea.
          </p>
          <p>
            We understand the needs of Bramalea residents, from home computer setups for families to IT solutions for
            local businesses in Bramalea City Centre and the industrial areas. Our team is ready to provide fast,
            efficient, and reliable service right in your neighborhood. Whether you are near Chinguacousy Park or in the
            heart of Bramalea, PC Mechanix is your trusted tech support partner.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for Expert Tech Support in Bramalea?</h2>
          <p className="mb-6">Don't let computer issues disrupt your day. Our Brampton team is here to help!</p>
          <Button size="lg" asChild>
            <Link href="/contact">Book Your Repair Service Now</Link>
          </Button>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Testimonials from Bramalea Customers</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"I've been using PC Mechanix for years for my home computer needs in Bramalea. They are always professional, on-time, and get the job done right." - David K., Bramalea Resident</p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"PC Mechanix helped set up the entire IT infrastructure for my new retail store in Bramalea City Centre. I couldn't be happier with their service and support." - Aisha P., Business Owner, Bramalea</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">IT Solutions for Bramalea Businesses</h2>
          <p className="text-gray-600">We provide specialized IT solutions for various industries in Brampton, including:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Retail: POS systems, network solutions for retail stores in Bramalea City Centre</li>
            <li>Commercial: IT support for offices, co-working spaces, and commercial buildings</li>
            <li>Industrial:  IT solutions for manufacturing and industrial sectors in Bramalea</li>
            <li>Small Businesses:  Comprehensive IT packages for small businesses in Bramalea</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Serving Bramalea and Surrounding Areas</h2>
          <p className="text-gray-600">PC Mechanix is your local IT expert, serving all of Bramalea and nearby communities:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Bramalea Woods and вокруг</li>
            <li>Dixie and Clark Blvd Area</li>
            <li>Torbram and Steeles Area</li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  )
}
