import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout, Cloud, Shield, Users, Zap, Laptop } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Virtual Desktop Infrastructure Toronto | PC Mechanix",
  description:
    "Professional VDI solutions in Toronto. Enable secure remote work with scalable virtual desktop infrastructure for your business.",
}

const features = [
  {
    icon: Layout,
    title: "Virtual Desktops",
    description: "Secure, customized virtual desktop environments for your team",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless integration with cloud services and applications",
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Advanced security features to protect remote work environments",
  },
  {
    icon: Users,
    title: "User Management",
    description: "Centralized user administration and access control",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimized performance for smooth remote work experience",
  },
  {
    icon: Laptop,
    title: "Device Flexibility",
    description: "Access from any device with internet connectivity",
  },
]

export default function VDIPage() {
  return (
    <>
      <ServiceHero
        title="VIRTUAL DESKTOP INFRASTRUCTURE"
        description="Enable secure remote work with scalable VDI solutions"
        primaryCTA={{ text: "Schedule a Consultation", href: "/contact" }}
        secondaryCTA={{ text: "Explore Solutions", href: "#features" }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Modern Virtual Desktop Solutions</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            Transform your workplace with our Virtual Desktop Infrastructure (VDI) solutions. We help Toronto
            businesses implement secure, efficient virtual desktop environments that enable productive remote work.
            Our VDI solutions provide the flexibility and security your team needs while maintaining control and
            compliance.
          </p>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our VDI Solutions</h2>
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
          <h2 className="text-3xl font-bold mb-6 text-center">VDI FAQ</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What are the benefits of VDI?</AccordionTrigger>
              <AccordionContent>
                VDI offers numerous benefits including enhanced security, simplified IT management, reduced hardware
                costs, and improved flexibility for remote work. It enables centralized control while allowing
                users to access their work environment from any device, anywhere.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How secure is VDI?</AccordionTrigger>
              <AccordionContent>
                Our VDI solutions incorporate multiple security layers including encryption, multi-factor
                authentication, and detailed access controls. Data remains secure in the data center rather than on
                end-user devices, reducing the risk of data loss or theft.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What about performance and reliability?</AccordionTrigger>
              <AccordionContent>
                We optimize VDI environments for performance, ensuring smooth operation even with
                resource-intensive applications. Our solutions include redundancy and failover capabilities to
                maintain high availability. Users experience desktop-like performance from any location.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How do you handle VDI implementation?</AccordionTrigger>
              <AccordionContent>
                We follow a structured implementation process that includes assessment, planning, pilot testing,
                and phased rollout. We provide comprehensive training and support to ensure a smooth transition
                for your team. Our experts handle all technical aspects while minimizing disruption to your
                operations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#1D4D84] to-[#4B6E97] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">
            PARTNER WITH PC MECHANIX FOR YOUR BUSINESS SUCCESS
          </h2>
          <p className="text-xl mb-8">
            Discover how PC Mechanix can transform your business's IT infrastructure into a powerful driver of growth
            and success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#1D4D84] text-white hover:bg-[#4B6E97] shadow-lg transition-colors duration-300"
            >
              Schedule a Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white hover:bg-white hover:text-primary border-white shadow-lg transition-colors duration-300"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
