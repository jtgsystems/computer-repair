"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Shield, Clock, Zap, Users, Cloud } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ServiceHero from "@/components/ServiceHero"
import { useMobile } from "@/hooks/useMobile"
import type { LucideIcon } from "lucide-react"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Monitor,
    title: "24/7 System Monitoring",
    description: "Round-the-clock monitoring of your IT infrastructure to prevent and address issues before they impact your business",
  },
  {
    icon: Shield,
    title: "Proactive Security",
    description: "Advanced security measures and regular updates to protect your systems from evolving cyber threats",
  },
  {
    icon: Clock,
    title: "Rapid Response Support",
    description: "Quick resolution of IT issues with our dedicated support team available around the clock",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Regular system optimization to ensure peak performance and minimize downtime",
  },
  {
    icon: Users,
    title: "Dedicated IT Team",
    description: "Access to a team of certified IT professionals without the overhead of in-house staff",
  },
  {
    icon: Cloud,
    title: "Cloud Management",
    description: "Expert management of your cloud infrastructure for maximum efficiency and reliability",
  },
]

export default function ManagedITPage() {
  const isMobile = useMobile()

  return (
    <>
      <ServiceHero
        title="MANAGED IT SERVICES IN TORONTO"
        description="Comprehensive IT management solutions to keep your business running smoothly"
        primaryCTA={{ text: "Schedule a Consultation", href: "/contact" }}
        secondaryCTA={{ text: "Explore Our Services", href: "#features" }}
      />

      <section className={`
        bg-white
        ${isMobile ? 'py-8' : 'py-16'}
      `}>
        <div className="container mx-auto px-4">
          <h2 className={`
            font-bold text-center mb-6
            ${isMobile ? 'text-2xl' : 'text-3xl'}
          `}>
            Professional IT Management for Toronto Businesses
          </h2>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <p className={`
              text-center
              ${isMobile ? 'text-base mb-6' : 'text-lg mb-8'}
            `}>
              In today's digital landscape, reliable IT infrastructure is crucial for business success. Our managed IT
              services provide comprehensive support, monitoring, and maintenance to ensure your technology works for you,
              not against you. From small startups to established enterprises in Toronto, we deliver tailored IT solutions
              that drive efficiency and growth.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className={`
        bg-gray-50
        ${isMobile ? 'py-8' : 'py-16'}
      `}>
        <div className="container mx-auto px-4">
          <h2 className={`
            font-bold text-center
            ${isMobile ? 'text-2xl mb-8' : 'text-3xl mb-12'}
          `}>
            Our Managed IT Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader className={`
                    flex flex-col items-center
                    ${isMobile ? 'pt-4 pb-2' : 'pt-6 pb-4'}
                  `}>
                    <Icon className={`
                      text-primary mb-4
                      ${isMobile ? 'h-8 w-8' : 'h-12 w-12'}
                    `} aria-hidden="true" />
                    <CardTitle className={`
                      text-center
                      ${isMobile ? 'text-lg' : 'text-xl'}
                    `}>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={`
                      text-center text-gray-600
                      ${isMobile ? 'text-sm' : 'text-base'}
                    `}>
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className={`
        bg-white
        ${isMobile ? 'py-8' : 'py-16'}
      `}>
        <div className="container mx-auto px-4">
          <h2 className={`
            font-bold text-center
            ${isMobile ? 'text-2xl mb-6' : 'text-3xl mb-8'}
          `}>
            Common Questions
          </h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className={isMobile ? 'text-sm' : 'text-base'}>
                What exactly is included in managed IT services?
              </AccordionTrigger>
              <AccordionContent className={isMobile ? 'text-sm' : 'text-base'}>
                Our managed IT services include 24/7 system monitoring, proactive maintenance, security updates,
                helpdesk support, network management, data backup and recovery, cloud services management, and strategic
                IT planning. We tailor our services to meet your specific business needs and budget.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className={isMobile ? 'text-sm' : 'text-base'}>
                How quickly do you respond to IT issues?
              </AccordionTrigger>
              <AccordionContent className={isMobile ? 'text-sm' : 'text-base'}>
                We provide immediate response to critical issues and guarantee response times based on issue severity.
                Our team is available 24/7, and we typically resolve most issues remotely within minutes to hours.
                For on-site support in Toronto, we can usually be there the same day for urgent matters.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className={isMobile ? 'text-sm' : 'text-base'}>
                Can you support hybrid work environments?
              </AccordionTrigger>
              <AccordionContent className={isMobile ? 'text-sm' : 'text-base'}>
                Yes, we specialize in supporting hybrid work environments. We can help set up and manage secure remote
                access, cloud collaboration tools, VPNs, and mobile device management solutions to keep your team
                productive and secure, whether they're in the office or working remotely.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className={isMobile ? 'text-sm' : 'text-base'}>
                What size businesses do you support?
              </AccordionTrigger>
              <AccordionContent className={isMobile ? 'text-sm' : 'text-base'}>
                We support businesses of all sizes in Toronto, from small startups to large enterprises. Our services
                are scalable and can be customized to match your organization's size, industry, and specific IT needs.
                We grow with you, adjusting our support as your business evolves.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className={`
        bg-gradient-to-br from-[#1D4D84] to-[#4B6E97] text-white
        ${isMobile ? 'py-8' : 'py-16'}
      `}>
        <div className="container mx-auto px-4 text-center">
          <h2 className={`
            font-bold uppercase tracking-tight
            ${isMobile ? 'text-2xl mb-4' : 'text-4xl mb-6'}
          `}>
            PARTNER WITH PC MECHANIX FOR YOUR BUSINESS SUCCESS
          </h2>
          <p className={`
            ${isMobile ? 'text-lg mb-6' : 'text-xl mb-8'}
          `}>
            Discover how PC Mechanix can transform your business's IT infrastructure into a powerful driver of growth
            and success.
          </p>
          <div className={`
            flex gap-4
            ${isMobile ? 'flex-col' : 'flex-col sm:flex-row justify-center'}
          `}>
            <Button
              size={isMobile ? "default" : "lg"}
              className={`
                bg-[#1D4D84] text-white hover:bg-[#4B6E97] shadow-lg transition-colors duration-300
                ${isMobile ? 'text-base' : 'text-lg'}
              `}
              asChild
            >
              <a href="/contact">Schedule a Consultation</a>
            </Button>
            <Button
              size={isMobile ? "default" : "lg"}
              variant="outline"
              className={`
                bg-transparent text-white hover:bg-white hover:text-primary border-white shadow-lg transition-colors duration-300
                ${isMobile ? 'text-base' : 'text-lg'}
              `}
              asChild
            >
              <a href="#features">Explore Our Services</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
