import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ServiceLayout from "@/components/ServiceLayout"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Oakville Computer Repair Services | PC Mechanix",
  description:
    "Expert computer repair and IT services in Oakville. Fast, reliable, and professional tech support for residents and businesses in this picturesque lakeside town.",
}

const oakvilleAreas = [
  { name: "Old Oakville", slug: "old-oakville" },
  { name: "Bronte", slug: "bronte" },
  { name: "Glen Abbey", slug: "glen-abbey" },
  { name: "Clearview", slug: "clearview" },
  { name: "River Oaks", slug: "river-oaks" },
  { name: "Uptown Core", slug: "uptown-core" },
]

export default function OakvilleServiceAreaPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="COMPUTER REPAIR SERVICES IN OAKVILLE"
        description="Premium computer repair and IT support services for Oakville residents and businesses. Expert solutions tailored to this sophisticated lakeside community."
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {oakvilleAreas.map((area) => (
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
                <p className="text-gray-600">Expert computer repair services in {area.name}, Oakville.</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Services in Oakville</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Comprehensive Laptop and Desktop Repairs</li>
              <li>Virus and Malware Removal</li>
              <li>Data Recovery and Secure Backup Solutions</li>
              <li>Home and Business Network Setup and Security</li>
              <li>IT Consulting for Local Businesses</li>
              <li>Mac and Apple Device Repairs</li>
              <li>Custom PC Builds for Professionals and Creatives</li>
              <li>Smart Home and Office Automation</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose PC Mechanix in Oakville?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Local Expertise with a Personal Touch</li>
              <li>Highly Skilled, Certified Technicians</li>
              <li>Competitive and Transparent Pricing</li>
              <li>Convenient In-Shop and On-Site Services</li>
              <li>Quick Turnaround Times</li>
              <li>90-Day Warranty on All Repairs</li>
              <li>Eco-Friendly Practices and E-Waste Recycling</li>
              <li>Tailored Solutions for Oakville's Diverse Community</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Meeting Oakville's Unique Tech Needs</h2>
          <p className="mb-4">
            Oakville, known for its picturesque waterfront, thriving arts scene, and high quality of life, presents a
            unique blend of residential and business technology needs. From the historic streets of Old Oakville to the
            modern developments in North Oakville, PC Mechanix understands the diverse tech requirements of this
            sophisticated community.
          </p>
          <p>
            We cater to Oakville's vibrant business landscape, from boutique shops in downtown Oakville to corporate
            offices in the Oakville Innovation District. Our residential services support families in Glen Abbey,
            professionals working from home in Clearview, and students attending Sheridan College or one of Oakville's
            many excellent schools. Whether you're enjoying a stroll in Bronte Creek Provincial Park, running a business
            in the Bronte Village, or living in the bustling Uptown Core, we're here to ensure your technology enhances
            your Oakville lifestyle.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Need Premium Tech Support in Oakville?</h2>
          <p className="mb-6">
            Experience the PC Mechanix difference. Our Oakville team is ready to solve your tech challenges!
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Book Your Oakville Tech Service Now</Link>
          </Button>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Testimonials from Oakville Customers</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"PC Mechanix provided top-notch service and fixed my iMac quickly and efficiently. I'm so grateful for their expertise and professionalism!" - Laura K., Glen Abbey</p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"As a busy professional in Oakville, I rely on PC Mechanix to keep my technology running smoothly. They are always responsive and provide excellent support." - David S., Old Oakville</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Tailored IT Solutions for Oakville</h2>
          <p className="text-gray-600">PC Mechanix offers specialized IT solutions to meet the unique needs of Oakville's residents and businesses, including:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>High-speed network setup for professionals working from home</li>
            <li>Data security solutions for financial services firms</li>
            <li>Creative workstation builds for designers and artists</li>
            <li>Smart home automation for modern living</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Committed to Premium Tech Support in Oakville</h2>
          <p className="text-gray-600">PC Mechanix is dedicated to providing premium tech support to the Oakville community by:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Offering personalized service and attention to detail</li>
            <li>Employing certified and experienced technicians</li>
            <li>Using only high-quality parts and components</li>
            <li>Providing environmentally responsible solutions</li>
          </ul>
        </div>

      </div>
    </ServiceLayout>
  )
}

