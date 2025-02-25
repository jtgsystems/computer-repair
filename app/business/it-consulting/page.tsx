import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainCircuit, TrendingUp, Search, FileCheck, Users, BarChart } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "IT Consulting Services Toronto | PC Mechanix",
  description:
    "Expert IT consulting services in Toronto. Strategic technology guidance to help your business grow and succeed.",
}

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
  return (
    <>
      <ServiceHero
        title="IT CONSULTING SERVICES"
        description="Expert guidance for your business technology needs"
        primaryCTA={{ text: "Schedule a Consultation", href: "/contact" }}
        secondaryCTA={{ text: "Explore Services", href: "#features" }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Strategic IT Consulting</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            Navigate the complex world of business technology with confidence. Our IT consulting services help Toronto
            businesses make informed technology decisions that drive growth and efficiency. We provide expert guidance
            on IT strategy, infrastructure planning, and digital transformation initiatives.
          </p>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Consulting Services</h2>
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
          <h2 className="text-3xl font-bold mb-6 text-center">Consulting FAQ</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What does IT consulting include?</AccordionTrigger>
              <AccordionContent>
                Our IT consulting services include technology strategy development, infrastructure planning, security
                assessments, cloud migration planning, digital transformation guidance, and IT process optimization.
                We tailor our services to meet your specific business needs and objectives.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long does a typical consulting engagement last?</AccordionTrigger>
              <AccordionContent>
                The duration varies depending on your needs and project scope. Initial assessments typically take
                2-4 weeks, while ongoing strategic consulting relationships can span several months or years. We'll
                provide a detailed timeline based on your specific requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How do you measure consulting success?</AccordionTrigger>
              <AccordionContent>
                We establish clear metrics and KPIs at the start of each engagement, aligned with your business
                objectives. These might include cost savings, efficiency improvements, system uptime, or other
                relevant measures. We provide regular reports tracking progress against these goals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do you provide implementation support?</AccordionTrigger>
              <AccordionContent>
                Yes, we can support the implementation of our recommendations through project management, vendor
                selection, technical guidance, and change management support. We ensure a smooth transition from
                strategy to execution.
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
