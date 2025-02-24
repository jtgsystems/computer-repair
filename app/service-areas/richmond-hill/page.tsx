import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ServiceLayout from "@/components/ServiceLayout"

export const metadata: Metadata = {
  title: "Richmond Hill Computer Repair Services | PC Mechanix",
  description:
    "Expert computer repair and IT services in Richmond Hill. Fast, reliable, and professional tech support for residents and businesses in this thriving York Region city.",
}

const richmondHillAreas = [
  { name: "Oak Ridges", slug: "oak-ridges" },
  { name: "Bayview Hill", slug: "bayview-hill" },
  { name: "Mill Pond", slug: "mill-pond" },
  { name: "Jefferson", slug: "jefferson" },
  { name: "Richvale", slug: "richvale" },
  { name: "Hillsview", slug: "hillsview" },
]

export default function RichmondHillServiceAreaPage() {
  return (
    <ServiceLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">Computer Repair Services in Richmond Hill</h1>
        <p className="text-lg mb-12 text-center">
          PC Mechanix provides top-tier computer repair and IT services throughout Richmond Hill, serving this vibrant
          and diverse community in York Region.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {richmondHillAreas.map((area) => (
            <Card key={area.slug} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>
                  <Link href={`/service-areas/richmond-hill/${area.slug}`} className="text-primary hover:underline">
                    {area.name}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Expert computer repair services in {area.name}, Richmond Hill.</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Services in Richmond Hill</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Comprehensive Laptop and Desktop Repairs</li>
              <li>Virus and Malware Removal</li>
              <li>Data Recovery and Backup Solutions</li>
              <li>Home and Small Business Network Setup</li>
              <li>IT Consulting for Local Businesses</li>
              <li>Mac and Apple Device Repairs</li>
              <li>Custom PC Builds for Professionals and Gamers</li>
              <li>Smart Home Technology Integration</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose PC Mechanix in Richmond Hill?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Local Expertise with Personalized Service</li>
              <li>Highly Skilled, Certified Technicians</li>
              <li>Competitive and Transparent Pricing</li>
              <li>Convenient In-Shop and On-Site Services</li>
              <li>Quick Turnaround Times</li>
              <li>90-Day Warranty on All Repairs</li>
              <li>Multilingual Support for Richmond Hill's Diverse Community</li>
              <li>Eco-Friendly E-Waste Disposal Services</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Serving Richmond Hill's Unique Tech Landscape</h2>
          <p className="mb-4">
            Richmond Hill, known for its excellent quality of life and growing tech sector, presents a unique blend of
            residential and business technology needs. From the bustling Yonge Street corridor to the serene Oak Ridges
            Moraine, PC Mechanix understands the diverse tech requirements of this dynamic community.
          </p>
          <p>
            We cater to Richmond Hill's thriving business community, from startups in the Richmond Hill Innovation
            Center to established firms in the Newkirk Business Park. Our residential services support families in
            Bayview Hill, professionals working from home in Mill Pond, and students attending Richmond Green Secondary
            School or Seneca College's King Campus. Whether you're enjoying the natural beauty of Lake Wilcox or running
            a business in downtown Richmond Hill, we're here to keep your technology running smoothly.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Need Expert Tech Support in Richmond Hill?</h2>
          <p className="mb-6">Don't let tech issues disrupt your day. Our Richmond Hill team is ready to assist you!</p>
          <Button size="lg" asChild>
            <Link href="/contact">Schedule Your Richmond Hill Tech Service Now</Link>
          </Button>
        </div>
      </div>
    </ServiceLayout>
  )
}

