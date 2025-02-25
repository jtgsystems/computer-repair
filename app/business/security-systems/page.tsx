import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Shield, Bell, Eye, Lock, Smartphone } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Security Systems Toronto | PC Mechanix",
  description:
    "Professional CCTV and alarm system solutions in Toronto. Protect your business with advanced security technology and monitoring services.",
}

const features = [
  {
    icon: Camera,
    title: "CCTV Systems",
    description: "High-definition surveillance cameras with advanced monitoring capabilities",
  },
  {
    icon: Shield,
    title: "Alarm Systems",
    description: "Professional alarm systems with 24/7 monitoring and quick response",
  },
  {
    icon: Bell,
    title: "Alert Systems",
    description: "Customizable alert systems for different security scenarios",
  },
  {
    icon: Eye,
    title: "Remote Monitoring",
    description: "Access your security feeds from anywhere with mobile monitoring",
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Advanced access control systems for secure entry management",
  },
  {
    icon: Smartphone,
    title: "Mobile Integration",
    description: "Smartphone apps for remote system control and monitoring",
  },
]

export default function SecuritySystemsPage() {
  return (
    <>
      <ServiceHero
        title="CCTV & ALARM SYSTEMS"
        description="Protect your business with advanced security solutions"
        primaryCTA={{ text: "Schedule a Consultation", href: "/contact" }}
        secondaryCTA={{ text: "Explore Solutions", href: "#features" }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Advanced Business Security</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            Protect your business with state-of-the-art security systems. We provide comprehensive security
            solutions including CCTV cameras, alarm systems, and access control for Toronto businesses. Our systems
            offer advanced features like HD video, night vision, motion detection, and remote monitoring to ensure
            your property is protected 24/7.
          </p>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Security Solutions</h2>
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
          <h2 className="text-3xl font-bold mb-6 text-center">Security FAQ</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What type of cameras do you install?</AccordionTrigger>
              <AccordionContent>
                We install high-definition IP cameras with features like night vision, motion detection, and wide
                viewing angles. Our cameras provide clear footage in all lighting conditions and can be accessed
                remotely through secure mobile apps. We offer both indoor and outdoor cameras suitable for various
                business environments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do you provide monitoring services?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer 24/7 professional monitoring services for both CCTV and alarm systems. Our monitoring
                center responds quickly to alerts and can notify appropriate authorities when needed. You also have
                the option to monitor your systems yourself through our mobile apps.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How is footage stored and accessed?</AccordionTrigger>
              <AccordionContent>
                We offer both on-site and cloud storage solutions for security footage. Our systems can store
                weeks or months of footage depending on your needs. Footage can be accessed securely through web
                interfaces or mobile apps, with options for instant playback and easy export.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What about system maintenance?</AccordionTrigger>
              <AccordionContent>
                We provide regular maintenance services to ensure your security systems operate reliably. This
                includes system checks, firmware updates, camera cleaning, and prompt repair services when needed.
                We also offer preventive maintenance plans to prevent system issues.
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
