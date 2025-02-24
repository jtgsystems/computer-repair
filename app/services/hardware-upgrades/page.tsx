import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, HardDrive, MemoryStickIcon as Memory, Zap } from "lucide-react"
import ServiceLayout from "@/components/ServiceLayout"

export const metadata: Metadata = {
  title: "Hardware Upgrade Services | PC Mechanix",
  description:
    "Professional hardware upgrade services in Toronto. Boost your computer's performance with our expert technicians.",
}

export default function HardwareUpgradesPage() {
  return (
    <ServiceLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">Hardware Upgrade Services</h1>
        <p className="text-lg mb-12 text-center">
          Boost your computer's performance with our professional hardware upgrade services.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Hardware Upgrade Process</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Initial assessment of your current system</li>
              <li>Recommendation of suitable upgrades based on your needs and budget</li>
              <li>Procurement of high-quality hardware components</li>
              <li>Professional installation and configuration</li>
              <li>System testing and optimization</li>
              <li>Data migration (if necessary)</li>
            </ol>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Hardware Upgrade Process"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Cpu className="h-10 w-10 text-primary mb-2" />
              <CardTitle>CPU Upgrades</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Boost your computer's processing power with the latest CPU technology.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Memory className="h-10 w-10 text-primary mb-2" />
              <CardTitle>RAM Upgrades</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Improve multitasking and overall system performance with additional RAM.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <HardDrive className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Storage Upgrades</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Upgrade to faster SSDs or larger capacity drives for improved speed and storage.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Graphics Card Upgrades</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Enhance your visual experience with powerful graphics card upgrades.</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Choose PC Mechanix for Hardware Upgrades?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Experienced technicians with deep knowledge of computer hardware</li>
            <li>Customized upgrade recommendations based on your specific needs</li>
            <li>Use of high-quality, compatible components</li>
            <li>Careful handling of your equipment and data</li>
            <li>Competitive pricing on both parts and labor</li>
            <li>Post-upgrade support and troubleshooting</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Boost Your Computer's Performance?</h2>
          <p className="mb-6">
            Don't settle for a slow, outdated system. Contact us today to discuss your hardware upgrade options.
          </p>
          <Button size="lg">Schedule Hardware Upgrade Consultation</Button>
        </div>
      </div>
    </ServiceLayout>
  )
}

