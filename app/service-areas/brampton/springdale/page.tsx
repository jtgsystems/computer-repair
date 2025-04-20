import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ServiceLayout from "@/components/ServiceLayout"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Springdale Computer Repair Services | PC Mechanix",
  description:
    "Springdale's premier computer repair and IT services. Reliable, professional tech solutions for Springdale homes and businesses.",
}

// Removed bramptonAreas

export default function BramptonServiceAreaPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="COMPUTER REPAIR SERVICES IN SPRINGDALE"
        description="Your local Springdale experts for fast and reliable computer repair and IT support. Serving homes and businesses with top-quality service."
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
            <h2 className="text-2xl font-bold mb-4">Our Services in Springdale</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Home and Business Computer Repair</li>
              <li>Data Recovery Services</li>
              <li>Wireless Networking</li>
              <li>PC and Mac Support</li>
              <li>Hardware and Software Upgrades</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose PC Mechanix in Springdale?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Local Springdale Technicians</li>
              <li>Quick, Convenient Service</li>
              <li>Experienced and Certified Team</li>
              <li>Personalized Solutions for Every Customer</li>
              <li>Satisfaction Guaranteed</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Your Trusted Tech Support in Springdale</h2>
          <p className="mb-4">
            Springdale is a thriving suburban community in Brampton, known for its family-friendly atmosphere and
            active lifestyle. PC Mechanix is committed to providing reliable tech support to the homes and businesses
            of Springdale.
          </p>
          <p>
            We understand the tech needs of Springdale residents, from ensuring smooth home computer performance for
            families to supporting local businesses and professionals working from home. Our Springdale-focused services
            mean you get fast, local expertise whenever you need it.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for Fast, Local Tech Support in Springdale?</h2>
          <p className="mb-6">Don't let tech troubles slow you down. PC Mechanix is ready to assist you in Springdale!</p>
          <Button size="lg" asChild>
            <Link href="/contact">Book Your Repair Service Now</Link>
          </Button>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Testimonials from Springdale Customers</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"I was having trouble with my home network, and PC Mechanix in Springdale fixed it quickly and professionally. Great local service!" - Rajesh P., Springdale Resident</p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"As a busy professional working from home in Springdale, I need reliable tech support. PC Mechanix is always there when I need them, providing fast and effective solutions." - Meera K., Springdale Professional</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">IT Solutions for Springdale Home and Businesses</h2>
          <p className="text-gray-600">Tailored IT services for Springdale residents and businesses:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Home Office IT Setup and Support</li>
            <li>Small Business Network Services</li>
            <li>Data Backup and Cloud Solutions</li>
            <li>Remote IT Support and Troubleshooting</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Serving Springdale and Surrounding Areas</h2>
          <p className="text-gray-600">PC Mechanix is proud to offer our services throughout Springdale and nearby neighborhoods, including:</p>
          <ul className="list-disc list-inside space-y-2">
            <li> পুরো Springdale Area</li>
            <li>Countryside Village</li>
            <li> অধ্যাপক Drive Area</li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  )
}
