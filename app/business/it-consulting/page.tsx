"use client"

import ServiceHero from "@/components/ServiceHero"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/useMobile"
import { BarChart, BrainCircuit, FileCheck, Search, TrendingUp, Users } from "lucide-react"

// Note: Metadata can't be exported from a client component
// The page title will use the default from the parent layout

const features = [
  {
    icon: BrainCircuit,
    title: "Strategic Planning",
    description: "Comprehensive IT strategy development aligned with your business goals",
  },
  {
    icon: TrendingUp,
    title: "Technology Roadmap",
    description: "Clear technology roadmaps to guide your business growth and innovation",
  },
  {
    icon: Search,
    title: "IT Assessment",
    description: "Thorough evaluation of your current IT infrastructure and needs",
  },
  {
    icon: FileCheck,
    title: "Process Optimization",
    description: "IT process improvement recommendations for better efficiency",
  },
  {
    icon: Users,
    title: "Team Training",
    description: "Technology training and knowledge transfer for your team",
  },
  {
    icon: BarChart,
    title: "Performance Analysis",
    description: "Detailed analysis and reporting on IT performance metrics",
  },
]

export default function ITConsultingPage() {
  const isMobile = useMobile()

  return (
    <>
      <ServiceHero
        title="IT CONSULTING SERVICES"
        description="Expert guidance for your business technology needs"
        primaryCTA={{ text: "Schedule a Consultation", href: "/contact" }}
        secondaryCTA={{ text: "Explore Services", href: "#features" }}
      />

      <section className={`
        bg-white
        ${isMobile ? 'py-8' : 'py-16'}
      `}>
        <div className="container mx-auto px-4">
          <h2 className={`
            font-bold text-center mb-6
            ${isMobile ? 'text-2xl' : 'text-3xl'}
          `}>Strategic IT Consulting</h2>
          <p className={`
            text-center max-w-3xl mx-auto
            ${isMobile ? 'text-base mb-6' : 'text-lg mb-8'}
          `}>
            Navigate the complex world of business technology with confidence. Our IT consulting services help Toronto
            businesses make informed technology decisions that drive growth and efficiency. We provide expert guidance
            on IT strategy, infrastructure planning, and digital transformation initiatives.
          </p>
        </div>
      </section>

      <section id="features" className={`
        bg-gradient-to-br from-[#1D4D84] to-[#4B6E97] text-white
        ${isMobile ? 'py-12' : 'py-20'}
        relative overflow-hidden
      `}>
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white/20"></div>
          <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-white/20"></div>
          <div className="absolute -bottom-32 left-1/4 w-80 h-80 rounded-full bg-white/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className={`
              font-extrabold text-center relative inline-block uppercase tracking-wide
              ${isMobile ? 'text-3xl mb-3' : 'text-5xl mb-6'}
            `}>
              <span className="relative z-10">Our Consulting Services</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-white/20 -z-10 transform -rotate-1"></span>
            </h2>
            <p className={`text-white/90 ${isMobile ? 'text-sm' : 'text-xl'} max-w-2xl mx-auto leading-relaxed`}>
              Comprehensive IT consulting solutions tailored to your business needs, delivered by our team of experienced professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`
                  bg-white/10 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden transform transition-all duration-300
                  hover:shadow-2xl hover:-translate-y-1 border border-white/20
                  ${isMobile ? '' : 'hover:scale-[1.02] hover:bg-white/15'}
                `}
              >
                <div className="p-1.5 bg-gradient-to-r from-white/80 to-white/40"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-white/20 mr-4">
                      <feature.icon className={`
                        text-white
                        ${isMobile ? 'h-6 w-6' : 'h-8 w-8'}
                      `} aria-hidden="true" />
                    </div>
                    <h3 className={`font-bold text-white ${isMobile ? 'text-lg' : 'text-2xl'}`}>
                      {feature.title}
                    </h3>
                  </div>
                  <p className={`
                    text-white/80 pl-[60px]
                    ${isMobile ? 'text-sm' : 'text-lg'}
                  `}>{feature.description}</p>
                  <div className="mt-4 pl-[60px]">
                    <a
                      href="/contact"
                      className="inline-flex items-center text-white hover:text-white/80 font-medium text-sm bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/30"
                    >
                      Learn more
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
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
          `}>Consulting FAQ</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className={isMobile ? 'text-sm' : 'text-base'}>
                What does IT consulting include?
              </AccordionTrigger>
              <AccordionContent className={isMobile ? 'text-sm' : 'text-base'}>
                Our IT consulting services include technology strategy development, infrastructure planning, security
                assessments, cloud migration planning, digital transformation guidance, and IT process optimization.
                We tailor our services to meet your specific business needs and objectives.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className={isMobile ? 'text-sm' : 'text-base'}>
                How long does a typical consulting engagement last?
              </AccordionTrigger>
              <AccordionContent className={isMobile ? 'text-sm' : 'text-base'}>
                The duration varies depending on your needs and project scope. Initial assessments typically take
                2-4 weeks, while ongoing strategic consulting relationships can span several months or years. We'll
                provide a detailed timeline based on your specific requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className={isMobile ? 'text-sm' : 'text-base'}>
                How do you measure consulting success?
              </AccordionTrigger>
              <AccordionContent className={isMobile ? 'text-sm' : 'text-base'}>
                We establish clear metrics and KPIs at the start of each engagement, aligned with your business
                objectives. These might include cost savings, efficiency improvements, system uptime, or other
                relevant measures. We provide regular reports tracking progress against these goals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className={isMobile ? 'text-sm' : 'text-base'}>
                Do you provide implementation support?
              </AccordionTrigger>
              <AccordionContent className={isMobile ? 'text-sm' : 'text-base'}>
                Yes, we can support the implementation of our recommendations through project management, vendor
                selection, technical guidance, and change management support. We ensure a smooth transition from
                strategy to execution.
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
              <Link href="/contact">
                Schedule a Consultation
              </Link>
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
              <Link href="#features">
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
