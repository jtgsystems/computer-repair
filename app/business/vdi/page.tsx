import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Lock, Zap, Globe, LaptopIcon as DeviceLaptop, CloudCog, Shield, Users, Rocket } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ServiceLayout from "@/components/ServiceLayout"

export const metadata: Metadata = {
  title: "Virtual Desktop Infrastructure (VDI) for Toronto Businesses | PC Mechanix",
  description:
    "Secure and flexible Virtual Desktop Infrastructure solutions for enhanced productivity and simplified IT management in Toronto. Expert VDI implementation and support services for GTA businesses.",
}

const services = [
  {
    icon: Monitor,
    title: "Toronto-Optimized Centralized Management",
    description:
      "Easily manage and deploy virtual desktops from a central location, perfect for Toronto's diverse business districts from downtown to the suburbs.",
  },
  {
    icon: Lock,
    title: "GTA-Focused Enhanced Security",
    description:
      "Improve data protection with centralized storage and advanced access controls, tailored to Toronto's stringent cybersecurity needs.",
  },
  {
    icon: Zap,
    title: "Toronto-Speed Performance",
    description:
      "Deliver high-performance computing experiences to any device, leveraging Toronto's cutting-edge network infrastructure.",
  },
  {
    icon: Globe,
    title: "GTA-Wide Remote Accessibility",
    description:
      "Access your desktop environment from anywhere in the Greater Toronto Area, enabling flexibility for hybrid and remote teams.",
  },
  {
    icon: DeviceLaptop,
    title: "Toronto Business Device Flexibility",
    description:
      "Support a variety of devices—thin clients, laptops, or tablets—catering to Toronto's diverse and mobile workforce.",
  },
  {
    icon: CloudCog,
    title: "Toronto-Ready Scalability",
    description:
      "Scale your VDI environment seamlessly as your business grows in Toronto’s fast-paced and competitive market.",
  },
]

export default function VDIPage() {
  return (
    <ServiceLayout>
      <div className="flex flex-col min-h-screen">
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Virtual Desktop Infrastructure (VDI) for Toronto Businesses</h1>
              <p className="text-xl mb-8">
                Boost productivity, enhance security, and simplify IT management with our tailored VDI solutions,
                designed for Toronto's dynamic and innovative business landscape.
              </p>
              <div className="flex justify-center space-x-4">
                <Button asChild size="lg" className="bg-white text-blue-800 hover:bg-blue-100">
                  <Link href="#services">Explore Toronto VDI Services</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-800"
                >
                  <Link href="#contact">Get a Toronto-Specific Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our VDI Services for Toronto Businesses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="flex flex-col items-center">
                    <service.icon className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
                    <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose VDI for Your Toronto Business?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Robust Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Protect sensitive data with centralized storage and encryption, critical for Toronto's regulated
                    industries like finance and healthcare.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Employee Flexibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Empower your team to work from anywhere in the GTA, supporting Toronto's shift toward hybrid work
                    environments.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Rocket className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Business Agility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Quickly adapt to market changes and scale operations efficiently in Toronto's fast-evolving
                    business ecosystem.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <div className="mb-16">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Virtual Desktop Infrastructure in Action for Toronto Businesses"
            width={800}
            height={400}
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>

        <div className="bg-gray-100 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">VDI Implementation Process for Toronto Companies</h2>
          <ol className="list-decimal list-inside space-y-4 max-w-2xl mx-auto text-gray-700">
            <li className="font-semibold">
              Toronto-Specific Assessment and Planning
              <p className="font-normal ml-6 mt-2">
                We analyze your current IT setup, workforce needs, and Toronto-specific compliance requirements to
                craft a custom VDI strategy.
              </p>
            </li>
            <li className="font-semibold">
              GTA-Optimized Infrastructure Setup
              <p className="font-normal ml-6 mt-2">
                Our team deploys high-performance servers and software, leveraging Toronto’s robust connectivity for
                seamless operation.
              </p>
            </li>
            <li className="font-semibold">
              Toronto-Tailored Virtual Desktop Creation
              <p className="font-normal ml-6 mt-2">
                We design virtual desktops optimized for your industry—whether tech, finance, or creative—meeting
                Toronto's diverse business demands.
              </p>
            </li>
            <li className="font-semibold">
              Seamless Toronto User Onboarding
              <p className="font-normal ml-6 mt-2">
                We migrate data and apps with minimal downtime, ensuring your Toronto team stays productive during the
                transition.
              </p>
            </li>
            <li className="font-semibold">
              Toronto Performance Testing and Optimization
              <p className="font-normal ml-6 mt-2">
                We test across GTA network conditions—from downtown towers to suburban offices—optimizing for speed and
                reliability.
              </p>
            </li>
            <li className="font-semibold">
              GTA-Focused Training and Support
              <p className="font-normal ml-6 mt-2">
                Receive hands-on training for your Toronto staff and 24/7 local support from our GTA-based team.
              </p>
            </li>
          </ol>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions from Toronto Businesses</h2>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does VDI improve security for Toronto businesses?</AccordionTrigger>
              <AccordionContent>
                By centralizing data in secure Toronto-based data centers, VDI minimizes risks from device theft or
                loss—a key concern in a bustling city. It also enables rapid deployment of security patches and
                compliance with local regulations like PIPEDA, vital for Toronto's finance and healthcare sectors.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can VDI support remote work for Toronto businesses?</AccordionTrigger>
              <AccordionContent>
                Absolutely. VDI provides secure, reliable access to desktops from anywhere in the GTA or beyond, making
                it ideal for Toronto's hybrid workforce. Whether your team is in Mississauga, Scarborough, or downtown,
                they get the same high-quality experience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What are the cost implications of implementing VDI in Toronto?</AccordionTrigger>
              <AccordionContent>
                Initial setup costs are offset by long-term savings, such as reduced hardware expenses and lower IT
                support needs. In Toronto’s pricey real estate market, VDI also supports space-saving strategies like
                hot-desking. We’ll provide a tailored cost-benefit analysis for your business.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Is VDI suitable for small Toronto businesses?</AccordionTrigger>
              <AccordionContent>
                Yes! VDI is scalable, making it perfect for small startups in Toronto’s tech hubs like Liberty Village
                or MaRS. It offers enterprise-grade features without requiring a large upfront investment in hardware.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-primary text-white rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Toronto Client Success Stories</h2>
          <blockquote className="text-center italic">
            "PC Mechanix’s VDI solution revolutionized our operations. As a Toronto financial firm, security and
            compliance are non-negotiable. VDI gave us peace of mind while allowing our team to work securely from home
            or the office. The implementation was flawless, and their local support is top-notch."
          </blockquote>
          <p className="text-center mt-4">- Michael Lee, CTO of FinSecure GTA</p>
          <blockquote className="text-center italic mt-6">
            "Our creative agency in Toronto needed flexibility without compromising performance. VDI from PC Mechanix
            lets our designers access high-powered tools from anywhere in the city, boosting collaboration and
            efficiency."
          </blockquote>
          <p className="text-center mt-4">- Priya Patel, Founder of StudioVibe Toronto</p>
        </div>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Toronto Business with VDI?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join leading GTA companies leveraging VDI for security, flexibility, and growth. Contact us today for a
              free consultation tailored to your Toronto business needs.
            </p>
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary-dark">
              <Link href="#contact">Schedule Your Free Toronto VDI Consultation</Link>
            </Button>
          </div>
        </section>
      </div>
    </ServiceLayout>
  )
}

