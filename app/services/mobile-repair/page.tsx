import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Tablet, Battery, Wifi, Camera, HardDrive } from "lucide-react"
import ServiceLayout from "@/components/ServiceLayout"

export const metadata: Metadata = {
  title: "Tablet and Smartphone Repair Services | PC Mechanix",
  description:
    "Professional repair services for tablets and smartphones in Toronto. Fast, reliable fixes for all major brands and models.",
}

export default function MobileRepairPage() {
  return (
    <ServiceLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">Tablet and Smartphone Repair Services</h1>
        <p className="text-lg mb-12 text-center">
          Expert repair services for all major brands of tablets and smartphones. We fix everything from cracked screens
          to software issues.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mobile Device Repair Process</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Initial device assessment and diagnostics</li>
              <li>Detailed explanation of the issue and repair options</li>
              <li>Transparent quote for the necessary repairs</li>
              <li>Swift repair using high-quality replacement parts</li>
              <li>Thorough testing of all repaired components</li>
              <li>Final quality check and device optimization</li>
            </ol>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Mobile Device Repair Process"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Smartphone className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Smartphone Repairs</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We fix issues with screens, batteries, charging ports, and more for all major smartphone brands.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Tablet className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Tablet Repairs</CardTitle>
            </CardHeader>
            <CardContent>
              <p>From iPads to Android tablets, we handle all types of tablet repairs and screen replacements.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Battery className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Battery Replacements</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Restore your device's battery life with our professional battery replacement service.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Wifi className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Connectivity Issues</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We diagnose and fix Wi-Fi, Bluetooth, and cellular connectivity problems.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Camera className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Camera Repairs</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Get your device's camera working perfectly again with our expert repair service.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <HardDrive className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Data Recovery</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We can recover your important data from damaged or malfunctioning mobile devices.</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Choose PC Mechanix for Your Mobile Device Repairs?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Experienced technicians skilled in repairing all major brands and models</li>
            <li>Use of high-quality replacement parts for all repairs</li>
            <li>Quick turnaround times, often same-day service for common repairs</li>
            <li>Competitive pricing with no hidden fees</li>
            <li>90-day warranty on all parts and labor</li>
            <li>Secure handling of your personal data during the repair process</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Having Issues with Your Smartphone or Tablet?</h2>
          <p className="mb-6">
            In today's connected world, a broken smartphone or tablet can be more than just an inconvenience - it can
            disrupt your entire day. Whether you're dealing with a cracked screen, battery issues, or any other problem,
            PC Mechanix is here to help. Our expert technicians can quickly diagnose and repair your device, getting you
            back to your digital life as soon as possible. Don't let a damaged device slow you down - contact us today
            for fast, reliable mobile device repair services.
          </p>
          <Button size="lg">Schedule Mobile Device Repair</Button>
        </div>
      </div>
    </ServiceLayout>
  )
}

