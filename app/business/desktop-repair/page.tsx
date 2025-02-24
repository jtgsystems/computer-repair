import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Cpu, HardDrive, Zap, Clock, CheckCircle, ArrowRight } from "lucide-react"
import ServiceLayout from "@/components/ServiceLayout"

export const metadata: Metadata = {
  title: "Business Desktop Repair Services | PC Mechanix",
  description:
    "Professional desktop computer repair services for businesses in Toronto. Fast, reliable fixes for all desktop issues to minimize downtime and maximize productivity.",
}

export default function BusinessDesktopRepairPage() {
  return (
    <ServiceLayout>
      <section className="relative bg-gradient-to-r from-[#1D4D84] to-[#4B6E97] text-white py-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Expert Business Desktop Repair Services</h1>
            <p className="text-xl mb-8">Fast, reliable fixes to keep your business running smoothly</p>
            <Button size="lg" className="bg-white text-[#1D4D84] hover:bg-[#E4EDEF]" asChild>
              <Link href="#contact">Schedule a Repair Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#1D4D84]">Our Business Desktop Repair Process</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Initial assessment and diagnostics</li>
              <li>Detailed problem identification</li>
              <li>Provide repair quote and timeline</li>
              <li>Perform necessary repairs or replacements</li>
              <li>Thorough system testing and quality assurance</li>
              <li>Data backup and software updates</li>
              <li>Final performance optimization</li>
            </ol>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Business Desktop Repair Process"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center text-[#1D4D84]">Our Business Desktop Repair Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg border-t-4 border-[#1D4D84]">
              <CardHeader>
                <service.icon className="h-12 w-12 text-[#1D4D84] mb-4" />
                <CardTitle className="text-xl text-[#1D4D84]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-[#E4EDEF] rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#1D4D84]">
            Why Choose PC Mechanix for Business Desktop Repair?
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="h-6 w-6 text-[#1D4D84] mr-2" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center" id="contact">
          <h2 className="text-3xl font-bold mb-4 text-[#1D4D84]">Ready to Get Your Business Desktops Fixed?</h2>
          <p className="text-lg mb-6 text-gray-700">
            Don't let desktop issues slow down your business. Contact us today for fast, professional repair services.
          </p>
          <Button size="lg" className="text-lg px-8 bg-[#1D4D84] hover:bg-[#4B6E97]" asChild>
            <Link href="/contact">
              Schedule Business Desktop Repair <ArrowRight className="ml-2 h-5 w-5" />
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
    title: "Hardware Diagnostics & Repair",
    description:
      "We diagnose and fix issues with monitors, power supplies, motherboards, and other hardware components.",
  },
  {
    icon: Cpu,
    title: "Performance Optimization",
    description:
      "Boost your business desktops' speed with CPU, RAM, and storage upgrades tailored for professional use.",
  },
  {
    icon: HardDrive,
    title: "Data Recovery & Backup",
    description:
      "We recover critical business data from failing or damaged hard drives and implement robust backup solutions.",
  },
  {
    icon: Zap,
    title: "Virus & Malware Removal",
    description:
      "We'll clean your systems of viruses, malware, and other security threats to protect your business data.",
  },
  {
    icon: Clock,
    title: "Rapid Turnaround",
    description: "We prioritize business clients to minimize downtime, often completing repairs within 24-48 hours.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "All our business desktop repairs come with a 90-day warranty for your peace of mind.",
  },
]

const benefits = [
  "Experienced technicians specializing in business-grade desktop repairs",
  "Fast and reliable service to minimize business downtime",
  "Transparent pricing with no hidden fees",
  "Use of high-quality, business-grade replacement parts",
  "Comprehensive diagnostic and repair services",
  "Flexible on-site and in-shop repair options",
  "Data security and confidentiality guaranteed",
  "Business continuity planning and IT consulting",
]

