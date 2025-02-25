"use client"

import ServiceLayoutWithModernMenu from "@/components/ServiceLayoutWithModernMenu"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Shield, Cloud, Network, Monitor, LayoutGrid } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ModernLayoutDemo() {
  return (
    <ServiceLayoutWithModernMenu renderHeaderAndFooter={true}>
      <main className="flex-grow">
        <section className="relative bg-gradient-to-r from-[#1D4D84] to-[#4B6E97] text-white py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1
                className="text-5xl md:text-6xl font-extrabold mb-6 text-shadow-lg uppercase tracking-tight"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
              >
                MODERN MENU DEMO
              </h1>
              <p className="text-xl mb-12 text-shadow">
                Showcasing our new modern and responsive menu design that works well on both desktop and mobile devices.
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-blue-50 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Get Started
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary uppercase tracking-wide">
              KEY FEATURES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
                  </div>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-[#1D4D84] to-[#4B6E97]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-white uppercase tracking-wide">OUR SERVICES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-xl rounded-lg overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                        <service.icon className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 ml-4 group-hover:text-blue-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Button
                      variant="default"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 group-hover:shadow-md"
                      asChild
                    >
                      <Link href="#" className="flex items-center justify-center">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary uppercase tracking-wide">
              EXPERIENCE OUR MODERN MENU
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our new menu design provides a seamless experience across all devices, with improved accessibility and modern aesthetics.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 shadow-lg transition-colors duration-300"
                asChild
              >
                <Link href="/modern-menu">View Menu Demo</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 shadow-lg transition-colors duration-300"
                asChild
              >
                <Link href="/new-menu">Compare with Old Menu</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </ServiceLayoutWithModernMenu>
  )
}

const features = [
  {
    title: "Modern Design",
    description: "Clean, contemporary aesthetics that enhance user experience and brand perception.",
    icon: CheckCircle,
  },
  {
    title: "Fully Responsive",
    description: "Seamlessly adapts to all screen sizes, from mobile phones to large desktop displays.",
    icon: LayoutGrid,
  },
  {
    title: "Improved Accessibility",
    description: "Designed with accessibility in mind, ensuring all users can navigate with ease.",
    icon: Shield,
  },
]

const services = [
  {
    title: "Managed IT Services",
    description: "Comprehensive IT management and support for your business.",
    icon: Monitor,
  },
  {
    title: "Cloud Services",
    description: "Comprehensive cloud solutions to enhance your business operations and scalability.",
    icon: Cloud,
  },
  {
    title: "Network Solutions",
    description: "Design, implementation, and maintenance of robust network solutions.",
    icon: Network,
  },
]