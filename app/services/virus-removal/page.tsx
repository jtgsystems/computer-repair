import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, CheckCircle, Clock } from "lucide-react"
import ServiceLayout from "@/components/ServiceLayout"

export const metadata: Metadata = {
  title: "Virus Removal Services | PC Mechanix",
  description:
    "Professional virus and malware removal services in Toronto. Protect your devices and data with our expert technicians.",
}

export default function VirusRemovalPage() {
  return (
    <ServiceLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">Virus Removal Services</h1>
        <p className="text-lg mb-12 text-center">
          Protect your devices and data with our professional virus and malware removal services.
        </p>

        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">How PC Mechanix Can Help</h2>
          <p className="text-lg mb-6">
            At PC Mechanix, we understand the critical importance of cybersecurity in today's digital landscape. Our
            expert technicians specialize in comprehensive virus and malware removal, employing advanced tools and
            techniques to thoroughly clean and protect your systems. We offer not just removal services, but also
            implement robust prevention strategies to safeguard your devices against future threats. With our services
            available across Canada, PC Mechanix is your trusted partner in maintaining a secure digital environment for
            both personal and business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Virus Removal Process</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Comprehensive system scan and threat detection</li>
              <li>Isolation and removal of viruses, malware, and other threats</li>
              <li>System cleanup and optimization</li>
              <li>Security software installation and configuration</li>
              <li>Data recovery (if necessary)</li>
              <li>Personalized advice on future prevention</li>
            </ol>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Virus Removal Process"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Advanced Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We use cutting-edge tools and techniques to remove even the most stubborn viruses and malware.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Fast Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Quick turnaround times to get your device clean and back in your hands as soon as possible.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Thorough Cleanup</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We don't just remove viruses; we optimize your system for improved performance.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Clock className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Preventive Measures</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We provide advice and tools to help prevent future infections and keep your device secure.</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Choose PC Mechanix for Virus Removal?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Experienced technicians specializing in virus and malware removal</li>
            <li>State-of-the-art virus detection and removal tools</li>
            <li>Comprehensive approach that goes beyond simple virus scanning</li>
            <li>Data protection and recovery services</li>
            <li>Affordable rates and transparent pricing</li>
            <li>Quick turnaround times to minimize downtime</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Remove Viruses and Protect Your Device?</h2>
          <p className="mb-6">
            Don't let viruses compromise your data and slow down your device. Contact us today for professional virus
            removal services.
          </p>
          <Button size="lg">Schedule Virus Removal Service</Button>
        </div>
      </div>
    </ServiceLayout>
  )
}

