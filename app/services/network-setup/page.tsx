import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wifi, Shield, Zap, Users, Settings, Smartphone, Network, Cloud } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ServiceHero from "@/components/ServiceHero"
import ServiceLayout from "@/components/ServiceLayout"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Home Network Setup Services Toronto | PC Mechanix",
  description:
    "Professional home network setup and configuration services in Toronto. Secure and efficient Wi-Fi solutions for your home.",
  keywords: "home network setup, WiFi installation Toronto, wireless network configuration, home internet setup, network security, WiFi optimization, mesh network installation, router setup, home network design, PC Mechanix, residential networking, smart home network",
}

const features = [
  {
    icon: Wifi,
    title: "Wi-Fi Optimization",
    description: "Maximum coverage and speed throughout your home",
  },
  {
    icon: Shield,
    title: "Network Security",
    description: "Robust security measures to protect your network",
  },
  {
    icon: Network,
    title: "Network Design",
    description: "Custom network layout for optimal performance",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless integration with cloud services",
  },
  {
    icon: Settings,
    title: "Custom Setup",
    description: "Tailored configuration for your specific needs",
  },
  {
    icon: Smartphone,
    title: "Device Support",
    description: "Connect and configure all your devices",
  },
]

export default function NetworkSetupPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="HOME NETWORK SETUP SERVICES"
        description="Professional network solutions for your home"
        primaryCTA={{ text: "Get Started", href: "/contact" }}
        secondaryCTA={{ text: "Learn More", href: "#features" }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Expert Home Network Solutions</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            In today's connected home, a reliable network is essential. Whether you're working from home,
            streaming entertainment, or managing smart devices, we ensure your network is fast, secure, and
            reliable. Our expert technicians design and implement custom network solutions that provide seamless
            connectivity throughout your home.
          </p>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Network Services</h2>
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
              <h2 className="text-3xl font-bold mb-6">Our Setup Process</h2>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">1</span>
                  <div>
                    <h3 className="font-semibold mb-1">Site Assessment</h3>
                    <p className="text-gray-600">Evaluate your home layout and connectivity needs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">2</span>
                  <div>
                    <h3 className="font-semibold mb-1">Network Design</h3>
                    <p className="text-gray-600">Create optimal network configuration plan</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">3</span>
                  <div>
                    <h3 className="font-semibold mb-1">Equipment Setup</h3>
                    <p className="text-gray-600">Install and configure networking equipment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">4</span>
                  <div>
                    <h3 className="font-semibold mb-1">Device Integration</h3>
                    <p className="text-gray-600">Connect and configure all your devices</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">5</span>
                  <div>
                    <h3 className="font-semibold mb-1">Testing & Optimization</h3>
                    <p className="text-gray-600">Ensure everything works perfectly</p>
                  </div>
                </li>
              </ol>
            </div>
            <div>
              <Image
                src="/placeholder.svg"
                alt="Network Setup Process"
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
              <AccordionTrigger>What areas do you cover for network setup?</AccordionTrigger>
              <AccordionContent>
                We provide network setup services throughout the Greater Toronto Area. Our technicians can
                travel to your location to assess your needs and implement the perfect network solution for
                your home.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long does network setup take?</AccordionTrigger>
              <AccordionContent>
                The duration depends on your home's size and requirements. Basic setups can be completed in
                2-3 hours, while more complex installations might take a full day. We'll provide a detailed
                timeline after assessing your needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What equipment do you recommend?</AccordionTrigger>
              <AccordionContent>
                We recommend high-quality networking equipment from trusted brands like Cisco, Ubiquiti, and
                NETGEAR. Our recommendations are based on your specific needs, budget, and home layout to
                ensure the best possible performance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do you provide ongoing support?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer ongoing support and maintenance for all our network installations. If you
                experience any issues or need to make changes to your network, we're just a phone call away.
                We also provide remote support for quick issue resolution.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#1D4D84] to-[#4B6E97] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">
            Ready for a Better Home Network?
          </h2>
          <p className="text-xl mb-8">
            Contact us now to schedule your professional network setup and enjoy seamless connectivity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#1D4D84] text-white hover:bg-[#4B6E97] shadow-lg transition-colors duration-300"
              asChild
            >
              <Link href="/contact">Schedule Setup</Link>
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
