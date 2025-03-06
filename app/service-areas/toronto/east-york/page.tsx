import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceLayout from "@/components/ServiceLayout"

export const metadata: Metadata = {
  title: "East York Computer Repair Services | PC Mechanix",
  description:
    "East York's trusted computer repair and IT services. Reliable, local tech solutions for East York residents and businesses.",
}

export default function EastYorkServiceAreaPage() {
  return (
    <ServiceLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">
          Computer Repair Services in East York, Toronto
        </h1>
        <p className="text-lg mb-12 text-center">
          PC Mechanix provides expert computer repair services and IT support in the East York area of Toronto.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Services in East York</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Home and Business Computer Support</li>
              <li>Laptop and Desktop Repairs</li>
              <li>Data Recovery & Backup</li>
              <li>Virus and Malware Removal</li>
              <li>Network Troubleshooting</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose PC Mechanix in East York?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Local East York Service</li>
              <li>Fast, Reliable Repairs</li>
              <li>Experienced Technicians</li>
              <li>Affordable Pricing</li>
              <li>Customer Satisfaction Focus</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Serving the East York Community</h2>
          <p className="mb-4">
            PC Mechanix is dedicated to providing top-quality computer repair and IT support services throughout East
            York, a vibrant and diverse community in Toronto.
          </p>
          <p>
            We understand the tech needs of East York residents and businesses, from home users in the many family
            neighborhoods to businesses along Danforth Avenue and beyond. Our local East York technicians are ready to
            provide prompt, professional, and friendly service.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Expert Computer Services in East York</h2>
          <p className="mb-6">For reliable and efficient computer repair in East York, PC Mechanix is your best choice!</p>
          <Button size="lg" asChild>
            <Link href="/contact">Book Your Repair Now</Link>
          </Button>
        </div>
      </div>
    </ServiceLayout>
  )
}
