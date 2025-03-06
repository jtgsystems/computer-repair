import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bug, Zap, FileSearch, RefreshCw, CheckCircle, Settings } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ServiceHero from "@/components/ServiceHero"
import ServiceLayout from "@/components/ServiceLayout"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Software Troubleshooting Services Toronto | PC Mechanix",
  description:
    "Expert software troubleshooting services in Toronto. Resolve application issues, system errors, and optimize your computer's performance.",
  keywords: "software troubleshooting, computer repair, system errors, application issues, software optimization, PC Mechanix, Toronto, software issues, performance optimization, software conflicts, driver issues",
}

const features = [
  {
    icon: Bug,
    title: "Error Resolution",
    description: "Fix software errors, crashes, and system glitches",
  },
  {
    icon: Zap,
    title: "Performance Boost",
    description: "Optimize your system for maximum speed",
  },
  {
    icon: FileSearch,
    title: "Issue Diagnosis",
    description: "Thorough analysis of software problems",
  },
  {
    icon: RefreshCw,
    title: "Update Management",
    description: "Keep your software current and compatible",
  },
  {
    icon: Settings,
    title: "System Tuning",
    description: "Fine-tune your system configuration",
  },
  {
    icon: CheckCircle,
    title: "Problem Prevention",
    description: "Proactive measures to prevent future issues",
  },
]

export default function SoftwareTroubleshootingPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="SOFTWARE TROUBLESHOOTING"
        description="Expert solutions for all your software issues"
        primaryCTA={{ text: "Get Help Now", href: "/contact" }}
        secondaryCTA={{ text: "Learn More", href: "#features" }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Professional Software Solutions</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            Don't let software issues slow you down. Our expert technicians can quickly diagnose and resolve
            any software problems, from application errors to system performance issues. We use advanced
            diagnostic tools and proven techniques to get your software running smoothly again.
          </p>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
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
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Process</h2>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">1</span>
                  <div>
                    <h3 className="font-semibold mb-1">Initial Assessment</h3>
                    <p className="text-gray-600">Thorough evaluation of software issues</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">2</span>
                  <div>
                    <h3 className="font-semibold mb-1">Diagnosis</h3>
                    <p className="text-gray-600">Identify root causes of problems</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">3</span>
                  <div>
                    <h3 className="font-semibold mb-1">Solution</h3>
                    <p className="text-gray-600">Apply targeted fixes and optimizations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">4</span>
                  <div>
                    <h3 className="font-semibold mb-1">Testing</h3>
                    <p className="text-gray-600">Verify all issues are resolved</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">5</span>
                  <div>
                    <h3 className="font-semibold mb-1">Prevention</h3>
                    <p className="text-gray-600">Implement measures to prevent future issues</p>
                  </div>
                </li>
              </ol>
            </div>
            <div>
              <Image
                src="/placeholder.svg"
                alt="Software Troubleshooting Process"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Common Questions</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What types of software issues can you fix?</AccordionTrigger>
              <AccordionContent>
                We handle a wide range of software issues including application crashes, system errors,
                performance problems, software conflicts, driver issues, and operating system problems.
                Our technicians are experienced with both Windows and Mac software.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long does troubleshooting usually take?</AccordionTrigger>
              <AccordionContent>
                The duration depends on the complexity of the issue. Many common software problems can be
                resolved within 1-2 hours. For more complex issues, we'll provide an estimated timeline
                after initial diagnosis. We work efficiently to minimize your downtime.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can you help with software optimization?</AccordionTrigger>
              <AccordionContent>
                Yes, we provide comprehensive software optimization services to improve your system's
                performance. This includes removing unnecessary programs, optimizing startup items,
                clearing temporary files, and configuring software for optimal performance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do you offer remote troubleshooting?</AccordionTrigger>
              <AccordionContent>
                Yes, many software issues can be resolved remotely, saving you time and hassle. We use
                secure remote access tools to diagnose and fix problems while you watch. For issues that
                require hands-on work, we also offer on-site service.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#1D4D84] to-[#4B6E97] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">
            Having Software Issues?
          </h2>
          <p className="text-xl mb-8">
            Don't let software problems slow you down. Contact us now for expert troubleshooting services.
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
              <Link href="/services">
                Explore More Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </ServiceLayout>
  )
}
