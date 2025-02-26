"use client"

import ServiceLayoutWithModernMenu from "@/components/ServiceLayoutWithModernMenu"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Shield, Cloud, Network, Monitor, LayoutGrid, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ModernLayoutDemo() {
  return (
    <ServiceLayoutWithModernMenu renderHeaderAndFooter={true}>
      <main className="flex-grow">
        <section className="relative bg-gradient-to-r from-[#1D4D84] to-[#4B6E97] text-white pt-36 pb-24">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden border-none rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={service.backgroundImage || `/images/service-bg-${index + 1}.jpg`}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
                  </div>
                  
                  <div className="flex flex-col h-full p-8 relative z-10">
                    {/* Service icon */}
                    <div className="mb-6 flex items-center">
                      <div className="p-3 rounded-full bg-blue-600/20 backdrop-blur-sm">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white ml-4 drop-shadow-md">
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Description with frosted glass effect */}
                    <div className="mb-8 p-4 bg-white/10 backdrop-blur-md rounded-lg shadow-lg">
                      <p className="text-white text-shadow">{service.description}</p>
                    </div>
                    
                    {/* Feature list - unique to each service */}
                    <div className="mb-8 p-4 bg-white/10 backdrop-blur-md rounded-lg shadow-lg">
                      {service.features && service.features.map((feature, i) => (
                        <div key={i} className="flex items-start mb-2">
                          <CheckCircle className="h-4 w-4 text-blue-300 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm text-white text-shadow">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Button with frosted glass effect */}
                    <Button
                      className="w-full bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-medium py-3 rounded-md transition-all duration-300 group-hover:shadow-md border border-white/30"
                      asChild
                    >
                      <Link href="#" className="flex items-center justify-center">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-white" />
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
    title: "Modern Navigation",
    description: "Intuitive and responsive navigation system with improved accessibility and user experience.",
    icon: Monitor,
    backgroundImage: "/images/modern-navigation.jpg",
    features: [
      "Responsive across all devices",
      "Improved keyboard navigation",
      "Semantic HTML structure",
      "Optimized for screen readers"
    ]
  },
  {
    title: "Performance Optimization",
    description: "Enhanced loading speed and interaction responsiveness for better user engagement.",
    icon: Cloud,
    backgroundImage: "/images/performance-optimization.jpg",
    features: [
      "Reduced animation complexity",
      "Optimized image loading",
      "Efficient event handling",
      "Code splitting for faster loads"
    ]
  },
  {
    title: "Enterprise Design System",
    description: "Cohesive visual language that maintains brand consistency across all touchpoints.",
    icon: Network,
    backgroundImage: "/images/design-system.jpg",
    features: [
      "Corporate-themed components",
      "Consistent color palette",
      "Typography hierarchy",
      "Reusable UI patterns"
    ]
  }
]
