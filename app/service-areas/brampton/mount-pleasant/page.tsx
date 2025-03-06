import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ServiceLayout from "@/components/ServiceLayout"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Mount Pleasant Computer Repair Services | PC Mechanix",
  description:
    "Mount Pleasant's expert computer repair and IT services. Reliable, local tech solutions for Mount Pleasant residents and businesses.",
}

// Removed bramptonAreas

export default function BramptonServiceAreaPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="COMPUTER REPAIR SERVICES IN MOUNT PLEASANT"
        description="Your trusted local provider for computer repair and IT support in Mount Pleasant. Quality service, right in your neighborhood."
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
        {/* Removed area cards */}

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Services in Mount Pleasant</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>PC and Laptop Repair</li>
              <li>Home Network Services</li>
              <li>Data Recovery</li>
              <li>Virus Removal</li>
              <li>Hardware Upgrades</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose PC Mechanix in Mount Pleasant?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Local Mount Pleasant Technicians</li>
              <li>Prompt, Reliable Service</li>
              <li>Personalized Tech Solutions</li>
              <li>Competitive and Fair Pricing</li>
              <li>Customer Satisfaction Guaranteed</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Your Tech Partner in Mount Pleasant Village</h2>
          <p className="mb-4">
            Mount Pleasant is a charming, historic neighborhood known for its scenic beauty and tight-knit community.
            PC Mechanix is your local partner, dedicated to providing top-notch tech support to homes and businesses in
            Mount Pleasant.
          </p>
          <p>
            We're familiar with the specific tech needs of Mount Pleasant residents, from setting up home offices in
            historic homes to providing reliable IT services for local businesses. Our Mount Pleasant technicians are
            committed to offering friendly, professional, and efficient support right in your village.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for Tech Solutions in Mount Pleasant?</h2>
          <p className="mb-6">Let us handle your tech problems so you can enjoy the beauty and tranquility of Mount Pleasant!</p>
          <Button size="lg" asChild>
            <Link href="/contact">Book Your Repair Service Now</Link>
          </Button>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Testimonials from Mount Pleasant Customers</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"I'm so impressed with PC Mechanix's service in Mount Pleasant. They came right to my door and fixed my laptop issue in no time! Highly recommend their local service." - Emily R., Mount Pleasant Resident</p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"Running a business in Mount Pleasant Village requires reliable IT. PC Mechanix has been fantastic, providing quick support and keeping our systems running smoothly." - Mark T., Local Business Owner</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">IT Solutions for Mount Pleasant Village Businesses</h2>
          <p className="text-gray-600">Specialized IT support for businesses in Mount Pleasant Village:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Small Business IT Support</li>
            <li>Local Retail and Shop IT Services</li>
            <li>Home-Based Business Tech Assistance</li>
            <li>Secure Cloud and Data Solutions</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Serving Mount Pleasant and Surrounding Areas</h2>
          <p className="text-gray-600">PC Mechanix is proud to serve residents and businesses throughout Mount Pleasant and nearby areas, including:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Mount Pleasant Village</li>
            <li>Creditview/Bovaird Area</li>
            <li>McLaughlin Road South</li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  )
}
