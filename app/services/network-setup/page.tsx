import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wifi, Shield, Zap, Users, Settings, Smartphone } from "lucide-react"
import ServiceLayout from "@/components/ServiceLayout"

export const metadata: Metadata = {
  title: "Home Network Setup Services | PC Mechanix",
  description:
    "Professional home network setup and configuration services in Toronto. Secure and efficient Wi-Fi solutions for your home.",
}

export default function NetworkSetupPage() {
  return (
    <ServiceLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">Home Network Setup Services</h1>
        <p className="text-lg mb-12 text-center">
          Expert network setup and configuration for your home. We ensure fast, secure, and reliable connectivity for
          all your devices.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Network Setup Process</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Assess your home layout and connectivity needs</li>
              <li>Design an optimal network configuration</li>
              <li>Install and configure networking equipment</li>
              <li>Set up secure Wi-Fi access</li>
              <li>Connect and configure all devices</li>
              <li>Perform thorough testing and optimization</li>
            </ol>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Home Network Setup"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Wifi className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Wi-Fi Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We ensure maximum coverage and speed throughout your home.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Network Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Implement robust security measures to protect your network and devices.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Performance Tuning</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Optimize your network for the best possible speed and reliability.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Multi-Device Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Ensure seamless connectivity for all your computers, phones, and smart devices.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Settings className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Custom Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Tailor your network settings to your specific needs and preferences.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Smartphone className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Smart Home Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Set up and configure your smart home devices for optimal performance.</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Choose PC Mechanix for Your Home Network Setup?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Experienced technicians with expertise in home networking</li>
            <li>Customized solutions based on your specific home layout and needs</li>
            <li>Use of high-quality, reliable networking equipment</li>
            <li>Comprehensive setup including all your devices</li>
            <li>Post-setup support and troubleshooting</li>
            <li>Affordable pricing with no hidden fees</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready for a Fast, Secure Home Network?</h2>
          <p className="mb-6">
            Contact us today to schedule your professional home network setup and enjoy seamless connectivity.
          </p>
          <Button size="lg">Schedule Network Setup</Button>
        </div>
      </div>
    </ServiceLayout>
  )
}

