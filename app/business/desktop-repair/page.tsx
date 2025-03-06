import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Wrench, Clock, Zap, HardDrive, Cpu } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Business Desktop Repair Toronto | PC Mechanix",
  description:
    "Professional desktop repair services for Toronto businesses. Fast, reliable computer repair and maintenance to minimize downtime and maximize productivity.",
}

const features = [
  {
    icon: Monitor,
    title: "Hardware Diagnostics",
    description: "Comprehensive hardware testing and diagnostics to identify issues quickly",
  },
  {
    icon: Wrench,
    title: "Professional Repairs",
    description: "Expert repair services for all types of desktop computers and workstations",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Quick repair services to minimize business disruption and downtime",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "System optimization services to improve speed and reliability",
  },
  {
    icon: HardDrive,
    title: "Data Recovery",
    description: "Professional data recovery services for failed or damaged hard drives",
  },
  {
    icon: Cpu,
    title: "Hardware Upgrades",
    description: "Strategic hardware upgrades to enhance system performance and capabilities",
  },
]

export default function BusinessDesktopRepairPage() {
  return (
    <>
      <ServiceHero
        title="BUSINESS DESKTOP REPAIR SERVICES"
        description="Professional computer repair solutions for Toronto businesses"
        primaryCTA={{ text: "Schedule a Consultation", href: "/contact" }}
        secondaryCTA={{ text: "Explore Services", href: "#features" }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Expert Business Computer Repair</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            Keep your business running smoothly with our professional desktop repair services. We understand that
            computer issues can severely impact your operations, which is why we provide fast, reliable repair
            solutions for businesses across Toronto. Our certified technicians handle everything from hardware repairs
            to system optimization.
          </p>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Repair Services</h2>
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
              <AccordionTrigger>How quickly can you repair business computers?</AccordionTrigger>
              <AccordionContent>
                Our response time depends on the issue and your service level agreement. For emergency repairs, we
                offer same-day service in the Toronto area. Many common issues can be resolved within 24-48 hours.
                We'll provide a detailed timeline after initial diagnosis.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do you offer on-site repairs for businesses?</AccordionTrigger>
              <AccordionContent>
                Yes, we provide on-site repair services for Toronto businesses. Our mobile technicians are equipped to
                handle most repairs at your location, minimizing disruption to your operations. For more complex
                issues, we may need to take the system to our repair center.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What types of computers do you repair?</AccordionTrigger>
              <AccordionContent>
                We repair all major brands and models of desktop computers and workstations, including Dell, HP,
                Lenovo, Apple, and custom-built systems. Our technicians are certified and experienced with both
                Windows and Mac operating systems.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do you offer maintenance plans?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer preventive maintenance plans for businesses. These include regular system checks,
                updates, optimization, and priority support. Our maintenance plans help prevent issues before they
                impact your business operations.
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
              asChild
            >
              <Link href="/contact">
                Schedule a Consultation
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white hover:bg-white hover:text-primary border-white shadow-lg transition-colors duration-300"
              asChild
            >
              <Link href="/business">
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
