import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Users, Calendar, MessageSquare, Shield, Cloud } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Email & Collaboration Solutions Toronto | PC Mechanix",
  description:
    "Professional email and collaboration solutions for Toronto businesses. Enhance team productivity with secure, reliable communication tools.",
}

const features = [
  {
    icon: Mail,
    title: "Business Email",
    description: "Professional email solutions with advanced features and robust security",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Integrated tools for seamless team communication and collaboration",
  },
  {
    icon: Calendar,
    title: "Calendar & Scheduling",
    description: "Shared calendars and scheduling tools for better team coordination",
  },
  {
    icon: MessageSquare,
    title: "Instant Messaging",
    description: "Secure instant messaging platforms for quick team communication",
  },
  {
    icon: Shield,
    title: "Email Security",
    description: "Advanced email security features to protect against threats",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless integration with cloud storage and productivity tools",
  },
]

export default function EmailCollaborationPage() {
  return (
    <>
      <ServiceHero
        title="EMAIL & COLLABORATION SOLUTIONS"
        description="Enhance your team's productivity with integrated communication tools"
        primaryCTA={{ text: "Schedule a Consultation", href: "/contact" }}
        secondaryCTA={{ text: "Explore Solutions", href: "#features" }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Modern Communication Solutions</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            Transform your business communication with our comprehensive email and collaboration solutions. We help
            Toronto businesses implement and manage secure, efficient communication systems that enhance productivity
            and team collaboration. From email hosting to integrated collaboration tools, we provide everything your
            team needs to work effectively.
          </p>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Communication Solutions</h2>
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
          <h2 className="text-3xl font-bold mb-6 text-center">Common Questions</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What email solutions do you offer?</AccordionTrigger>
              <AccordionContent>
                We offer a range of email solutions including Microsoft 365, Google Workspace, and custom email
                hosting. Each solution includes professional email addresses, spam filtering, virus protection, and
                mobile access. We help you choose and implement the best solution for your business needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How secure are your email solutions?</AccordionTrigger>
              <AccordionContent>
                Our email solutions include enterprise-grade security features such as encryption, spam filtering,
                anti-virus protection, and multi-factor authentication. We also provide regular security updates and
                monitoring to protect against emerging threats.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can you migrate our existing email system?</AccordionTrigger>
              <AccordionContent>
                Yes, we provide complete email migration services with minimal disruption to your business. We can
                migrate from any existing email system while preserving all your important data, contacts, and
                calendar items. Our process ensures a smooth transition to your new email solution.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What collaboration tools do you support?</AccordionTrigger>
              <AccordionContent>
                We support a wide range of collaboration tools including Microsoft Teams, SharePoint, Google
                Workspace, and other popular platforms. We help implement and integrate these tools with your
                existing systems to create a seamless collaboration environment for your team.
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
