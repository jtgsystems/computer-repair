import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bug, Zap, FileSearch, RefreshCw, CheckCircle } from "lucide-react"
import ServiceLayout from "@/components/ServiceLayout"

export const metadata: Metadata = {
  title: "Software Troubleshooting Services | PC Mechanix",
  description:
    "Expert software troubleshooting services in Toronto. Resolve application issues, system errors, and optimize your computer's performance.",
}

export default function SoftwareTroubleshootingPage() {
  return (
    <ServiceLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">Software Troubleshooting Services</h1>
        <p className="text-lg mb-12 text-center">
          Resolve software issues and optimize your computer's performance with our expert troubleshooting services.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Software Troubleshooting Process</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Initial assessment and problem identification</li>
              <li>Systematic diagnosis of software issues</li>
              <li>Application of targeted solutions and fixes</li>
              <li>System optimization and performance tuning</li>
              <li>Thorough testing to ensure resolution</li>
              <li>Preventive measures and recommendations</li>
            </ol>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Software Troubleshooting Process"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Bug className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Error Resolution</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We diagnose and fix various software errors, crashes, and glitches affecting your system.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Performance Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Improve your computer's speed and responsiveness through software optimization techniques.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <FileSearch className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Software Conflicts</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Identify and resolve conflicts between different software applications or drivers.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <RefreshCw className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Update Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Ensure your software and operating system are up-to-date and functioning correctly.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Malware Removal</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Detect and remove malware that may be causing software issues or performance problems.</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Choose PC Mechanix for Software Troubleshooting?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Experienced technicians with extensive software knowledge</li>
            <li>Comprehensive approach to identifying and resolving software issues</li>
            <li>Use of advanced diagnostic tools and techniques</li>
            <li>Clear communication throughout the troubleshooting process</li>
            <li>Preventive advice to avoid future software problems</li>
            <li>Competitive pricing and efficient service</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Experiencing Software Issues?</h2>
          <p className="mb-6">
            Don't let software problems slow you down. Contact us today for expert troubleshooting and optimization
            services.
          </p>
          <Button size="lg">Schedule Software Troubleshooting</Button>
        </div>
      </div>
    </ServiceLayout>
  )
}

