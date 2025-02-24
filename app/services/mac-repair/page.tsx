import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Laptop, HardDrive, Zap, Shield, PenToolIcon as Tool, ArrowRight } from "lucide-react"
import ServiceLayout from "@/components/ServiceLayout"

export const metadata: Metadata = {
  title: "Mac Repair Services | PC Mechanix",
  description:
    "Expert Mac repair services in Toronto. Fast, reliable fixes for all Apple devices including MacBooks, iMacs, and Mac Pros.",
}

export default function MacRepairPage() {
  return (
    <ServiceLayout>
      <section className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white py-24">
        <Image
          src="/placeholder.svg?height=400&width=1600"
          alt="Mac Repair"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold mb-6">Expert Mac Repair Services</h1>
            <p className="text-xl mb-8">
              Professional repair services for all Apple devices. We specialize in diagnosing and fixing issues with
              MacBooks, iMacs, Mac Pros, and more.
            </p>
            <Button size="lg" variant="secondary">
              Get Your Mac Fixed
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-primary">Specialists in Toronto MacBook Pro Repair</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Being Toronto's top computer technicians, we specialize in Mac/Apple Computer Repair. We are adept at
                fixing Mac Viruses, Malware and more. Our services extend to MacBook Pro screen, keyboards, jacks,
                wireless, networks, DVD slots, and more.
              </p>
              <p className="text-gray-700 mb-4">
                With years of service in the computer industry, some of the best techs on the planet work at PC
                Mechanix. Experience the difference that hundreds of businesses and thousands of people in Toronto trust
                us for computer repair and server maintenance.
              </p>
              <p className="text-gray-700">
                We've serviced some of the largest companies in Toronto, but we're never too big to help the Small
                Business or even the smallest customer with a simple question.
              </p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="MacBook Pro Repair"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-primary">Our Regular Computer Repair Services Include:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Expert Computer Solutions in Toronto: PC, Laptop, and Mac Repair Services
          </h2>
          <p className="text-gray-700 mb-4">
            Leading the way in Toronto's computer repair industry, we specialize in providing exceptional service for
            PCs, laptops, and Macs. Offering same-day assistance in Toronto and the surrounding GTA, our team of
            dedicated computer repair technicians is ready to meet your every need – from setting up wireless networks
            to server installation and repair.
          </p>
          <p className="text-gray-700 mb-4">
            We've earned the trust of thousands of customers, thanks to our commitment to delivering quality results.
            Whether you need on-site assistance or prefer to visit our computer store in Toronto, we're confident we can
            exceed your expectations.
          </p>
        </section>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Your Mac Fixed?</h2>
          <p className="mb-6">
            Don't let Mac issues slow you down. Contact us today for fast, professional repair services.
          </p>
          <Button size="lg" className="text-lg px-8">
            Schedule Mac Repair <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </ServiceLayout>
  )
}

const services = [
  {
    icon: Zap,
    title: "Computer Software Repair and System Speed Ups",
    description: "Optimize your Mac's performance and fix software issues.",
  },
  {
    icon: Shield,
    title: "Computer Malware Removal, Virus Removal",
    description: "Protect your Mac from viruses and malware threats.",
  },
  {
    icon: Laptop,
    title: "Computer Screen Repair",
    description: "Fix cracked or malfunctioning Mac screens.",
  },
  {
    icon: Tool,
    title: "Custom Computer Builds",
    description: "Build custom Mac systems tailored to your needs.",
  },
  {
    icon: HardDrive,
    title: "Laptop and Desktop Fan Repair",
    description: "Resolve overheating issues with fan repairs.",
  },
  {
    icon: Zap,
    title: "Computer/Laptop/Mac upgrades",
    description: "Upgrade your Mac's hardware for better performance.",
  },
  {
    icon: HardDrive,
    title: "Computer Data Transfer from Mac to PC or PC to Mac",
    description: "Seamlessly transfer your data between different systems.",
  },
  {
    icon: Zap,
    title: "Computer/MacBook pro-Overheating Repair",
    description: "Fix overheating issues to protect your Mac's components.",
  },
  {
    icon: Laptop,
    title: "Computer Software Installation for MAC or PC",
    description: "Install and configure software on your Mac or PC.",
  },
  {
    icon: Tool,
    title: "Computer Hardware Installation for MAC or PC",
    description: "Install new hardware components in your Mac or PC.",
  },
]

