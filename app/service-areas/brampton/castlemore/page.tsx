import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ServiceLayout from "@/components/ServiceLayout"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Castlemore Computer Repair Services | PC Mechanix",
  description:
    "Castlemore's expert computer repair and IT support. Trusted, local tech solutions for Castlemore residents and businesses.",
}

// Removed bramptonAreas

export default function BramptonServiceAreaPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="COMPUTER REPAIR SERVICES IN CASTLEMORE"
        description="Your neighborhood's choice for reliable computer repair and IT services in Castlemore. Expert tech support, just around the corner."
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
        {/* Removed area cards */}

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Services in Castlemore</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Desktop and Laptop Repair</li>
              <li>Data Recovery</li>
              <li>Virus and Spyware Removal</li>
              <li>Home and Office Networking</li>
              <li>Hardware and Software Support</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose PC Mechanix in Castlemore?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Local Castlemore Technicians</li>
              <li>Fast, Reliable, Same-Day Service</li>
              <li>Personalized, Friendly Support</li>
              <li>Affordable and Upfront Pricing</li>
              <li>Satisfaction Guaranteed Service</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Your Local Tech Support in Castlemore</h2>
          <p className="mb-4">
            Castlemore is an upscale residential community in Brampton, known for its beautiful homes and quiet
            neighborhoods. PC Mechanix is your neighborhood IT expert, providing top-quality computer repair and
            support services to Castlemore residents.
          </p>
          <p>
            We focus on delivering convenient, in-home tech support, tailored to the needs of Castlemore families and
            home offices. From computer troubleshooting to smart home device setup, PC Mechanix offers reliable and
            friendly service right in your community.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">For Trusted Computer Services in Castlemore, Choose PC Mechanix</h2>
          <p className="mb-6">Get your tech issues resolved quickly and get back to enjoying your Castlemore home!</p>
          <Button size="lg" asChild>
            <Link href="/contact">Book Your Repair Service Now</Link>
          </Button>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Testimonials from Castlemore Customers</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"I'm so happy with PC Mechanix's service in Castlemore. They were able to come to my home quickly and fix my computer issue on the spot. Very convenient and professional!" - John D., Castlemore Resident</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">IT Solutions for Castlemore Home and Offices</h2>
          <p className="text-gray-600">Premium IT support for Castlemore homes and home offices:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Smart Home Device Integration</li>
            <li>High-Speed Home Networking</li>
            <li>Secure Data Backup and Cloud Services</li>
            <li>Expert PC and Mac Troubleshooting</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Serving Castlemore and Surrounding Areas</h2>
          <p className="text-gray-600">PC Mechanix provides local tech support throughout Castlemore and neighboring communities, including:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Castlemore Estates</li>
            <li>Mayfield and Airport Road Area</li>
            <li>Highway 50 and Castlemore Road neighborhoods</li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  )
}
