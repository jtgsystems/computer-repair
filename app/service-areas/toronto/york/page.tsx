import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceLayout from "@/components/ServiceLayout"

export const metadata: Metadata = {
  title: "York Computer Repair Services | PC Mechanix",
  description:
    "York's trusted computer repair and IT solutions. Expert tech support for homes and businesses in York, Toronto.",
}

export default function YorkServiceAreaPage() {
  return (
    <ServiceLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">
          Computer Repair Services in York, Toronto
        </h1>
        <p className="text-lg mb-12 text-center">
          PC Mechanix offers top-quality computer repair and IT support to residents and businesses in York, Toronto.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Services in York</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>PC and Laptop Repair Services</li>
              <li>Data Recovery and Backup</li>
              <li>Virus and Spyware Removal</li>
              <li>Network Setup and Support</li>
              <li>Hardware and Software Upgrades</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose PC Mechanix in York?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Local York Technicians</li>
              <li>Fast, Reliable Service</li>
              <li>Experienced and Certified Techs</li>
              <li>Affordable and Transparent Pricing</li>
              <li>Dedicated Customer Support</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Tech Solutions for York Community</h2>
          <p className="mb-4">
            York is a diverse and vibrant part of Toronto, with a mix of residential areas, commercial districts, and
            educational institutions. PC Mechanix is your local tech expert, committed to serving the York community
            with excellent computer repair and IT services.
          </p>
          <p>
            We cater to the tech needs of York residents, from students and families to home offices and local
            businesses. Whether you're near York University, in the Junction, or elsewhere in York, PC Mechanix
            provides convenient and reliable tech support right in your neighborhood.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your Local Computer Repair Experts in York</h2>
          <p className="mb-6">For fast and dependable tech support in York, look no further than PC Mechanix!</p>
          <Button size="lg" asChild>
            <Link href="/contact">Book Your Repair Now</Link>
          </Button>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Testimonials from York Customers</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"I am extremely satisfied with PC Mechanix's service in York. They quickly diagnosed and fixed my laptop, and the price was very reasonable. Highly recommend!" - Sarah J., York Resident</p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">"Running a busy office in York, it's crucial to have reliable IT support. PC Mechanix has consistently provided excellent and prompt service for our business." -  Michael B., York Business Owner</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">IT Solutions for York Businesses and Homes</h2>
          <p className="text-gray-600">Customized IT solutions for York residents and businesses:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Home and Business IT Support</li>
            <li>Network Security Solutions</li>
            <li>Data Backup and Recovery Services</li>
            <li>On-Site and Remote Support Options</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Serving York and Surrounding Neighborhoods</h2>
          <p className="text-gray-600">PC Mechanix is proud to serve all of York and the surrounding areas, including:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>The Junction</li>
            <li>Weston</li>
            <li>Mount Dennis</li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  )
}
