import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ServiceLayout from "@/components/ServiceLayout"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Heart Lake Computer Repair Services | PC Mechanix",
  description:
    "Heart Lake's trusted computer repair and IT services. Fast, reliable, and professional tech support for Heart Lake residents and businesses.",
}

// Removed bramptonAreas

export default function BramptonServiceAreaPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="COMPUTER REPAIR SERVICES IN HEART LAKE"
        description="Your neighborhood experts for computer repair and IT support in Heart Lake. Reliable, local service you can trust."
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
            <h2 className="text-2xl font-bold mb-4">Our Services in Heart Lake</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Home Computer Repairs</li>
              <li>Laptop and Desktop Troubleshooting</li>
              <li>Wi-Fi and Network Solutions</li>
              <li>Virus and Spyware Removal</li>
              <li>Data Backup and Recovery</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose PC Mechanix in Heart Lake?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Local Experts in Heart Lake</li>
              <li>Fast, Same-Day Service Options</li>
              <li>Reliable and Trustworthy Technicians</li>
              <li>Personalized Service for Your Home Tech Needs</li>
              <li>Affordable Rates and Transparent Quotes</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Dedicated to Heart Lake's Tech Needs</h2>
          <p className="mb-4">
            Heart Lake is a peaceful, family-oriented community known for its beautiful park and natural surroundings.
            PC Mechanix is proud to offer our dedicated tech support services to the residents of Heart Lake, ensuring
            your home technology is always running smoothly.
          </p>
          <p>
            We focus on providing convenient and reliable in-home computer repair services, understanding the needs of
            Heart Lake families and individuals. Whether you need help with your home network, virus removal, or
            setting up a new computer, our Heart Lake technicians are just a call away.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for Reliable Tech Support in Heart Lake?</h2>
          <p className="mb-6">Let PC Mechanix take care of your tech issues so you can enjoy peace of mind!</p>
          <Button size="lg" asChild>
            <Link href="/contact">Book Your Repair Service Now</Link>
          </Button>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Testimonials from Heart Lake Customers</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"I love having PC Mechanix in the neighborhood! They are always quick to respond and fix any computer issues we have. Highly recommended for Heart Lake residents!" - Susan T., Heart Lake Homeowner</p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"Thanks to PC Mechanix, my home office setup is finally perfect. Their tech support is top-notch, and they really understand the needs of home users like me in Heart Lake." - Robert J., Heart Lake Resident</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">IT Solutions for Heart Lake Home Offices</h2>
          <p className="text-gray-600">We offer tailored IT solutions perfect for home offices in Heart Lake:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Home Network Setup and Security</li>
            <li>Remote Work Solutions</li>
            <li>Data Backup and Cloud Services for Home Users</li>
            <li>Home Office PC and Laptop Support</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Serving All of Heart Lake and Nearby Areas</h2>
          <p className="text-gray-600">PC Mechanix is proud to serve all of Heart Lake and the surrounding communities, including:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Heart Lake East and West</li>
            <li>Creditview Road Area</li>
            <li>Sandalwood Parkway Area</li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  )
}
