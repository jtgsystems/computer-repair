import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ServiceLayout from "@/components/ServiceLayout"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Burlington Computer Repair Services | PC Mechanix",
  description:
    "Expert computer repair and IT services in Burlington. Fast, reliable, and professional tech support for residents and businesses in this vibrant lakeside city.",
}

const burlingtonAreas = [
  { name: "Downtown Burlington", slug: "downtown-burlington" },
  { name: "Aldershot", slug: "aldershot" },
  { name: "Tyandaga", slug: "tyandaga" },
  { name: "Brant Hills", slug: "brant-hills" },
  { name: "Headon Forest", slug: "headon-forest" },
  { name: "Orchard", slug: "orchard" },
]

export default function BurlingtonServiceAreaPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="COMPUTER REPAIR SERVICES IN BURLINGTON"
        description="Expert computer repair and IT support services for Burlington residents and businesses. Professional solutions for all your technology needs in this vibrant lakeside city."
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
          {burlingtonAreas.map((area) => (
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
                <p className="text-gray-600">Expert computer repair services in {area.name}, Burlington.</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Services in Burlington</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Comprehensive Laptop and Desktop Repairs</li>
              <li>Virus and Malware Removal</li>
              <li>Data Recovery and Secure Backup Solutions</li>
              <li>Home and Business Network Setup and Security</li>
              <li>IT Consulting for Local Businesses</li>
              <li>Mac and Apple Device Repairs</li>
              <li>Custom PC Builds for Professionals and Gamers</li>
              <li>Smart Home and Office Technology Integration</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose PC Mechanix in Burlington?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Local Expertise with Personalized Service</li>
              <li>Highly Skilled, Certified Technicians</li>
              <li>Competitive and Transparent Pricing</li>
              <li>Convenient In-Shop and On-Site Services</li>
              <li>Quick Turnaround Times</li>
              <li>90-Day Warranty on All Repairs</li>
              <li>Eco-Friendly Practices and E-Waste Recycling</li>
              <li>Tailored Solutions for Burlington's Diverse Community</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Meeting Burlington's Unique Tech Needs</h2>
          <p className="mb-4">
            Burlington, known for its stunning waterfront, vibrant downtown, and excellent quality of life, presents a
            diverse range of technology needs. From the scenic shores of Lake Ontario to the bustling business
            districts, PC Mechanix understands the varied tech requirements of this thriving community.
          </p>
          <p>
            We cater to Burlington's dynamic business landscape, from innovative startups in TechPlace to established
            companies in the QEW Corridor. Our residential services support families in Tyandaga, professionals working
            from home in Headon Forest, and students attending McMaster University's DeGroote School of Business or one
            of Burlington's many excellent schools. Whether you're enjoying the natural beauty of the Niagara
            Escarpment, running a shop in Village Square, or living in the growing Aldershot area, we're here to ensure
            your technology enhances your Burlington lifestyle.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for Expert Tech Support in Burlington?</h2>
          <p className="mb-6">
            Experience the PC Mechanix difference. Our Burlington team is here to solve your tech challenges!
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Schedule Your Burlington Tech Service Now</Link>
          </Button>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Testimonials from Burlington Customers</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"PC Mechanix provided exceptional service when my laptop crashed. They were able to recover all my important files and get me back up and running quickly. I highly recommend them!" - Sarah J., Aldershot</p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"As a small business owner in Burlington, I rely on PC Mechanix for all my IT needs. They are always responsive, professional, and provide excellent solutions. I highly recommend them!" - Mark T., Downtown Burlington</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">IT Solutions for Burlington's Key Sectors</h2>
          <p className="text-gray-600">PC Mechanix offers specialized IT solutions for key sectors in Burlington, including:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Manufacturing: Data management, network security, and equipment maintenance</li>
            <li>Healthcare: HIPAA compliance, EMR systems, and patient data protection</li>
            <li>Retail: Point-of-sale systems, inventory management, and customer engagement solutions</li>
            <li>Professional Services: Cloud computing, cybersecurity, and remote collaboration tools</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Our Commitment to the Burlington Community</h2>
          <p className="text-gray-600">PC Mechanix is committed to supporting the Burlington community through:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Sponsoring local events and initiatives</li>
            <li>Providing technology education workshops for seniors</li>
            <li>Partnering with local schools to support STEM education</li>
            <li>Offering discounted services to non-profit organizations</li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  )
}
