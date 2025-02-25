import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Laptop, HardDrive, Battery, Wifi, Camera, Shield, Wrench, Clock } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ServiceHero from "@/components/ServiceHero"
import ServiceLayout from "@/components/ServiceLayout"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Expert Laptop Repair Services Toronto | PC Mechanix",
  description:
    "Fast, reliable laptop repairs in Toronto. Same-day service for all brands including Dell, HP, Lenovo, ASUS, and more. On-site and in-shop repairs across the GTA.",
}

const features = [
  {
    icon: Laptop,
    title: "Screen Repairs",
    description: "Expert repairs for cracked or malfunctioning laptop screens",
  },
  {
    icon: HardDrive,
    title: "Data Recovery",
    description: "Professional recovery of lost or corrupted data",
  },
  {
    icon: Wrench,
    title: "Hardware Repairs",
    description: "Fixes for all laptop hardware issues and components",
  },
  {
    icon: Shield,
    title: "Virus Removal",
    description: "Comprehensive protection against malware and viruses",
  },
  {
    icon: Battery,
    title: "Battery Service",
    description: "Battery replacements to restore device performance",
  },
  {
    icon: Wifi,
    title: "Connectivity Fixes",
    description: "Solutions for Wi-Fi and network connection issues",
  },
]

export default function LaptopRepairPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="EXPERT LAPTOP REPAIR SERVICES"
        description="Fast, reliable laptop repairs for all brands and models"
        primaryCTA={{ text: "Schedule Repair", href: "/contact" }}
        secondaryCTA={{ text: "Learn More", href: "#features" }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Toronto's Trusted Laptop Repair Experts</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            Your laptop is your lifeline—whether for work, school, or staying connected in Toronto's fast-paced
            environment. When it breaks, you need a fix you can trust, and fast. At PC Mechanix, we're Toronto's laptop
            repair experts, tackling everything from cracked screens to dead batteries across all brands. Our certified
            technicians have repaired thousands of laptops for GTA residents and businesses, delivering same-day
            service whenever possible.
          </p>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                <CardHeader className="flex flex-col items-center">
                  <feature.icon className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl text-center">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Repair Process</h2>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">1</span>
                  <div>
                    <h3 className="font-semibold mb-1">Initial Assessment</h3>
                    <p className="text-gray-600">Thorough diagnosis of your laptop's issues</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">2</span>
                  <div>
                    <h3 className="font-semibold mb-1">Repair Quote</h3>
                    <p className="text-gray-600">Clear explanation of needed repairs and costs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">3</span>
                  <div>
                    <h3 className="font-semibold mb-1">Expert Repair</h3>
                    <p className="text-gray-600">Professional repairs by certified technicians</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">4</span>
                  <div>
                    <h3 className="font-semibold mb-1">Quality Testing</h3>
                    <p className="text-gray-600">Comprehensive testing of all repaired components</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">5</span>
                  <div>
                    <h3 className="font-semibold mb-1">Final Check</h3>
                    <p className="text-gray-600">Complete system verification before return</p>
                  </div>
                </li>
              </ol>
            </div>
            <div>
              <Image
                src="/placeholder.svg"
                alt="Laptop Repair Process"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Common Questions</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What laptop brands do you repair?</AccordionTrigger>
              <AccordionContent>
                We repair all major laptop brands including Dell, HP, Lenovo, ASUS, Acer, Apple, Microsoft,
                Samsung, and Toshiba. Our technicians are experienced with both Windows and Mac laptops, and can
                handle a wide range of hardware and software issues.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long do laptop repairs take?</AccordionTrigger>
              <AccordionContent>
                Many common repairs can be completed same-day or within 24-48 hours. For more complex repairs or
                if parts need to be ordered, we'll provide you with a detailed timeline. We always strive to
                complete repairs as quickly as possible without compromising quality.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you offer on-site laptop repairs?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer both in-shop and on-site repair services across the GTA. For businesses and
                situations where bringing the laptop to us isn't convenient, our mobile technicians can come to
                your location. We'll help determine the best option based on your specific situation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What warranty do you provide?</AccordionTrigger>
              <AccordionContent>
                All our laptop repairs come with a 90-day warranty covering both parts and labor. If any issue
                related to our repair occurs within this period, we'll fix it at no additional cost. We use only
                high-quality parts and thoroughly test all repairs to ensure lasting reliability.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#1D4D84] to-[#4B6E97] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">
            Ready to Fix Your Laptop?
          </h2>
          <p className="text-xl mb-8">
            Don't let laptop issues slow you down. Contact us now for fast, professional repair services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#1D4D84] text-white hover:bg-[#4B6E97] shadow-lg transition-colors duration-300"
              asChild
            >
              <Link href="/contact">Schedule Repair</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white hover:bg-white hover:text-primary border-white shadow-lg transition-colors duration-300"
              asChild
            >
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </ServiceLayout>
  )
}
