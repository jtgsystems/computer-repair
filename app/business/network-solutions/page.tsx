"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Network, Shield, Zap, Users, Cloud, Cog } from "lucide-react"
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
    icon: Network,
    title: "Custom Network Design",
    description: "Tailored network architecture designed specifically for your business needs",
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Robust security measures to protect your network infrastructure",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Network optimization for maximum speed and reliability",
  },
  {
    icon: Users,
    title: "Scalable Solutions",
    description: "Flexible network configurations that grow with your business",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless integration with cloud services and applications",
  },
  {
    icon: Cog,
    title: "Proactive Maintenance",
    description: "Continuous monitoring and maintenance to prevent issues",
  },
]

export default function NetworkSolutionsPage() {
  const isMobile = useMobile()

  return (
    <>
      <ServiceHero
        title="NETWORK SOLUTIONS"
        description="Professional network design and management for your business"
        primaryCTA={{ text: "Get Started", href: "/contact" }}
        secondaryCTA={{ text: "Learn More", href: "#features" }}
      />

      <section className={`
        bg-white
        ${isMobile ? 'py-8' : 'py-16'}
      `}>
        <div className="container mx-auto px-4">
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className={`
              ${isMobile ? 'text-base mb-4' : 'text-lg mb-6'}
            `}>
              A strong network is the backbone of any successful business, and at PC Mechanix, we specialize in designing and maintaining systems that keep you connected. From setting up fast, reliable Wi-Fi to optimizing complex wired networks, we ensure your data flows seamlessly and securely across your organization.
            </p>
            <p className={`
              ${isMobile ? 'text-base mb-6' : 'text-lg mb-8'}
            `}>
              We don't just stop at installation—our team monitors and fine-tunes your network to prevent downtime and boost performance. Whether you're scaling up or troubleshooting a glitch, our Toronto-based experts are ready to deliver solutions that fit your unique needs.
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
            Our Network Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                  <CardContent className={`
                    ${isMobile ? 'p-4' : 'p-6'}
                  `}>
                    <Icon className={`
                      text-primary
                      ${isMobile ? 'h-8 w-8 mb-3' : 'h-12 w-12 mb-4'}
                    `} />
                    <h3 className={`
                      font-semibold
                      ${isMobile ? 'text-lg mb-2' : 'text-xl mb-3'}
                    `}>
                      {feature.title}
                    </h3>
                    <p className={`
                      text-gray-600
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
        bg-[#1D4D84] text-white
        ${isMobile ? 'py-8' : 'py-16'}
      `}>
        <div className="container mx-auto px-4 text-center">
          <h2 className={`
            font-bold
            ${isMobile ? 'text-2xl mb-4' : 'text-3xl mb-6'}
          `}>
            Ready to Optimize Your Network?
          </h2>
          <p className={`
            ${isMobile ? 'text-lg mb-6' : 'text-xl mb-8'}
          `}>
            Let's discuss how we can enhance your business connectivity.
          </p>
          <Button 
            size={isMobile ? "default" : "lg"}
            className={`
              bg-white text-[#1D4D84] hover:bg-[#E4EDEF]
              ${isMobile ? 'min-h-[40px] text-base' : 'min-h-[44px] text-lg'}
            `}
            asChild
          >
            <a href="/contact">Schedule a Network Assessment</a>
          </Button>
        </div>
      </section>
    </>
  )
}
