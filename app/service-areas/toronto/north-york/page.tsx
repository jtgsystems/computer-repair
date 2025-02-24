import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceLayout from "@/components/ServiceLayout"

export const metadata: Metadata = {
  title: "North York Computer Repair Services | PC Mechanix",
  description:
    "Professional computer repair and IT services in North York, Toronto. Fast, reliable tech support for residents and businesses.",
}

export default function NorthYorkServiceAreaPage() {
  return (
    <ServiceLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">
          Computer Repair Services in North York, Toronto
        </h1>
        <p className="text-lg mb-12 text-center">
          PC Mechanix provides expert computer repair and IT support services to residents and businesses in North York.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Services in North York</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Laptop and Desktop Repairs</li>
              <li>Virus and Malware Removal</li>
              <li>Data Recovery</li>
              <li>Network Setup and Troubleshooting</li>
              <li>Business IT Support</li>
              <li>Mac Repairs</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose Us in North York?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Convenient Location for North York Residents</li>
              <li>Quick Turnaround Times</li>
              <li>Experienced Local Technicians</li>
              <li>Competitive Pricing</li>
              <li>Personalized Service</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Popular Areas We Serve in North York</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <li>Willowdale</li>
            <li>Bayview Village</li>
            <li>York Mills</li>
            <li>Don Mills</li>
            <li>Downsview</li>
            <li>Newtonbrook</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Need Computer Repair in North York?</h2>
          <p className="mb-6">Don't let computer issues slow you down. Our expert technicians are ready to help!</p>
          <Button size="lg" asChild>
            <Link href="/contact">Book Your Repair Now</Link>
          </Button>
        </div>
      </div>
    </ServiceLayout>
  )
}

