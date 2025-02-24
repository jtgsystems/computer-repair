import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Laptop, HardDrive, Zap, Shield, CheckCircle, Wifi, WrenchIcon, Thermometer, ArrowRight } from "lucide-react"
import ServiceLayout from "@/components/ServiceLayout"

export const metadata: Metadata = {
  title: "Expert Laptop Repair Services in Toronto | PC Mechanix",
  description:
    "Fast, reliable laptop repairs in Toronto. Same-day service for all brands including Dell, HP, Lenovo, ASUS, and more. On-site and in-shop repairs across the GTA.",
}

export default function LaptopRepairPage() {
  return (
    <ServiceLayout>
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <Image
          src="/placeholder.svg?height=400&width=1600"
          alt="Laptop Repair in Toronto"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold mb-6">Expert Laptop Repair Services in Toronto</h1>
            <p className="text-xl mb-8">
              Fast, reliable fixes for all laptop brands. Get your device back up and running in no time.
            </p>
            <Button size="lg" variant="secondary">
              Schedule a Repair in Toronto
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-4">Toronto's Trusted Laptop Repair Experts</h2>
        <p className="text-lg mb-6">
          Your laptop is your lifeline—whether for work, school, or staying connected in Toronto's fast-paced
          environment. When it breaks, you need a fix you can trust, and fast. At PC Mechanix, we're Toronto's laptop
          repair experts, tackling everything from cracked screens to dead batteries across all brands: Dell, HP,
          Lenovo, ASUS, and more. Our certified technicians have repaired thousands of laptops for GTA residents and
          businesses, delivering same-day service whenever possible.
        </p>
        <p className="text-lg mb-6">
          We understand that downtime isn't an option in Toronto's competitive landscape. That's why we offer on-site
          repairs across the GTA or quick drop-off at our shop, diagnosing issues like slow performance, overheating, or
          hardware failures with precision. Spilled coffee on your keyboard at a downtown café? Hard drive making weird
          noises in your Scarborough home office? We've seen it all and fixed it all.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-primary">Our Toronto Laptop Repair Services</h2>
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
            Why Choose PC Mechanix for Your Toronto Laptop Repair?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Brands We Service in Toronto</h3>
              <div className="grid grid-cols-3 gap-4">
                {brands.map((brand, index) => (
                  <div key={index} className="text-center">
                    <Image
                      src={`/placeholder.svg?text=${brand}&width=100&height=100`}
                      alt={`${brand} logo`}
                      width={100}
                      height={100}
                      className="mx-auto mb-2"
                    />
                    <p className="text-sm">{brand}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Your Laptop Fixed in Toronto?</h2>
          <p className="mb-6">
            Don't let laptop issues slow you down in the bustling GTA. Contact us today for fast, professional repair
            services.
          </p>
          <Button size="lg" className="text-lg px-8">
            Schedule Toronto Laptop Repair <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </ServiceLayout>
  )
}

const services = [
  {
    icon: HardDrive,
    title: "Data Recovery",
    description:
      "Recover lost or corrupted data from your laptop's hard drive or SSD, even in emergency situations across Toronto.",
  },
  {
    icon: WrenchIcon,
    title: "Hardware Repairs",
    description:
      "Fix broken or malfunctioning components, from keyboards damaged by Toronto's infamous coffee spills to worn-out batteries.",
  },
  {
    icon: Thermometer,
    title: "Overheating Solutions",
    description:
      "Resolve overheating issues to protect your laptop's components and improve performance, crucial in Toronto's varying climate.",
  },
  {
    icon: Laptop,
    title: "Screen Repairs",
    description:
      "Replace cracked or malfunctioning laptop screens for all brands, with options for same-day service in the GTA.",
  },
  {
    icon: Zap,
    title: "Performance Upgrades",
    description:
      "Boost your laptop's speed and capability with hardware upgrades, perfect for demanding Toronto professionals.",
  },
  {
    icon: Shield,
    title: "Virus Removal",
    description:
      "Eliminate viruses, malware, and other security threats to keep your data safe in Toronto's digital landscape.",
  },
  {
    icon: Wifi,
    title: "Connectivity Issues",
    description:
      "Solve Wi-Fi and Bluetooth problems to keep you connected in Toronto's fast-paced business environment.",
  },
  {
    icon: WrenchIcon,
    title: "Liquid Damage Repair",
    description:
      "Specialized treatment for laptops that have encountered spills or humidity, a common issue in Toronto's busy cafes and offices.",
  },
  {
    icon: Thermometer,
    title: "Diagnostic Services",
    description:
      "Thorough assessment of your laptop's health, with clear explanations and transparent quotes for Toronto customers.",
  },
]

const benefits = [
  "Experienced technicians specializing in all laptop brands common in Toronto",
  "Fast turnaround times, with same-day service available for many repairs",
  "Convenient on-site repairs across the Greater Toronto Area",
  "Use of high-quality replacement parts sourced from reliable Toronto suppliers",
  "Comprehensive diagnostic and repair services tailored to Toronto's tech needs",
  "Competitive pricing with no hidden fees, respecting Toronto's value-conscious consumers",
  "90-day warranty on all repairs, giving Toronto customers peace of mind",
  "Expert advice on maintaining your laptop in Toronto's diverse environment",
]

const brands = ["Dell", "HP", "Lenovo", "ASUS", "Acer", "Apple", "Microsoft", "Samsung", "Toshiba"]

