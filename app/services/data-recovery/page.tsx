import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HardDrive, FileCheck, Lock, Clock } from "lucide-react"
import ServiceLayout from "@/components/ServiceLayout"

export const metadata: Metadata = {
  title: "Data Recovery Services | PC Mechanix",
  description:
    "Professional data recovery services in Toronto. Recover lost or corrupted data from various storage devices.",
}

export default function DataRecoveryPage() {
  return (
    <ServiceLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">How PC Mechanix Can Help</h2>
          <p className="text-lg mb-6">
            PC Mechanix offers expert data recovery services, understanding the critical nature of your personal and
            business information. Our skilled technicians utilize advanced recovery techniques and state-of-the-art
            tools to retrieve data from various storage devices, including hard drives, SSDs, and removable media. We
            handle each case with utmost care and confidentiality, striving to recover your valuable data efficiently.
            With our services extending across Canada, PC Mechanix is your reliable partner for professional data
            recovery solutions, regardless of your location.
          </p>
        </div>
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">Data Recovery Services</h1>
        <p className="text-lg mb-12 text-center">
          Recover your valuable data from various storage devices with our professional data recovery services.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Data Recovery Process</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Initial assessment and diagnosis of the storage device</li>
              <li>Creation of a sector-by-sector image of the drive</li>
              <li>Analysis of file system and data structures</li>
              <li>Recovery of lost or deleted files</li>
              <li>Verification of recovered data integrity</li>
              <li>Secure transfer of recovered data to a new storage device</li>
            </ol>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Data Recovery Process"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader>
              <HardDrive className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Multiple Device Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We recover data from hard drives, SSDs, USB drives, memory cards, and more.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <FileCheck className="h-10 w-10 text-primary mb-2" />
              <CardTitle>High Success Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our advanced techniques and tools ensure a high rate of successful data recovery.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Lock className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We prioritize the security and confidentiality of your recovered data.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Clock className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Quick Turnaround</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We understand the urgency and strive to recover your data as quickly as possible.</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Choose PC Mechanix for Data Recovery?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Experienced technicians specializing in data recovery</li>
            <li>State-of-the-art data recovery tools and clean room facilities</li>
            <li>Support for all types of storage devices and file systems</li>
            <li>No data, no charge policy</li>
            <li>Confidentiality and privacy guaranteed</li>
            <li>Clear communication throughout the recovery process</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Lost Important Data? We Can Help!</h2>
          <p className="mb-6">
            Don't risk losing your valuable data forever. Contact us today for professional data recovery services.
          </p>
          <Button size="lg">Start Data Recovery Process</Button>
        </div>
      </div>
    </ServiceLayout>
  )
}

