import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Cpu, HardDrive, Zap, Clock, CheckCircle, ArrowRight } from "lucide-react"
import ServiceLayout from "@/components/ServiceLayout"

export const metadata: Metadata = {
  title: "Desktop Repair Services | PC Mechanix",
  description: "Professional desktop computer repair services in Toronto. Fast, reliable fixes for all desktop issues.",
}

export default function DesktopRepairPage() {
  return (
    <ServiceLayout>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">How PC Mechanix Can Help</h2>
        <p className="text-lg mb-6">
          At PC Mechanix, we understand the critical role that desktop computers play in both personal and professional
          settings. Our expert technicians are equipped with the knowledge and tools to diagnose and repair a wide range
          of desktop issues, from hardware failures to software conflicts. We pride ourselves on providing efficient,
          reliable, and cost-effective desktop repair services to keep your systems running smoothly. With service
          coverage extending across Canada, PC Mechanix is your trusted partner for all your desktop repair needs, no
          matter where you are located.
        </p>
      </div>
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Expert Desktop Repair Services</h1>
            <p className="text-xl mb-8">Fast, reliable fixes for all your desktop computer issues</p>
            <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-100" asChild>
              <Link href="#contact">Get Your Desktop Fixed Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Desktop Repair Process</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Thorough diagnostic assessment</li>
              <li>Identification of hardware or software issues</li>
              <li>Provide detailed repair quote</li>
              <li>Perform necessary repairs or replacements</li>
              <li>Comprehensive system testing</li>
              <li>Final quality assurance check</li>
            </ol>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Desktop Repair Process"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Our Desktop Repair Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">Why Choose PC Mechanix for Desktop Repair?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center" id="contact">
          <h2 className="text-3xl font-bold mb-4 text-primary">Ready to Get Your Desktop Fixed?</h2>
          <p className="text-lg mb-6 text-gray-700">
            Don't let desktop issues slow you down. Contact us today for fast, professional repair services.
          </p>
          <Button size="lg" className="text-lg px-8" asChild>
            <Link href="/contact">
              Schedule Desktop Repair <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </ServiceLayout>
  )
}

const services = [
  {
    icon: Monitor,
    title: "Hardware Repairs",
    description: "We fix issues with monitors, power supplies, motherboards, and other hardware components.",
  },
  {
    icon: Cpu,
    title: "Performance Upgrades",
    description: "Boost your desktop's speed with CPU, RAM, and storage upgrades.",
  },
  {
    icon: HardDrive,
    title: "Data Recovery",
    description: "We can recover your important files from failing or damaged hard drives.",
  },
  {
    icon: Zap,
    title: "Virus Removal",
    description: "We'll clean your system of viruses, malware, and other security threats.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "We strive to complete most repairs within 24-48 hours.",
  },
  {
    icon: CheckCircle,
    title: "Quality Guarantee",
    description: "All our repairs come with a 90-day warranty for your peace of mind.",
  },
]

const benefits = [
  "Experienced technicians specializing in desktop repairs",
  "Fast and reliable service for both personal and business computers",
  "Transparent pricing with no hidden fees",
  "Use of high-quality replacement parts",
  "Comprehensive diagnostic and repair services",
  "Convenient in-shop and on-site repair options",
]

