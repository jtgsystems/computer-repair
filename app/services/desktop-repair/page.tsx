import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Cpu, HardDrive, Zap, Clock, CheckCircle, Shield, Wrench } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ServiceHero from "@/components/ServiceHero"
import ServiceLayout from "@/components/ServiceLayout"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Desktop Repair Services Toronto | PC Mechanix",
  description: "Professional desktop computer repair services in Toronto. Fast, reliable fixes for all desktop issues.",
  keywords: "desktop repair, computer repair Toronto, PC repair, desktop computer fix, hardware repair, computer upgrade, PC Mechanix, desktop troubleshooting, motherboard repair, power supply repair, Toronto computer service, desktop maintenance",
}

const features = [
  {
    icon: Monitor,
    title: "Hardware Repairs",
    description: "Expert repairs for monitors, power supplies, motherboards, and components",
  },
  {
    icon: Cpu,
    title: "Performance Upgrades",
    description: "Strategic upgrades to boost your desktop's speed and performance",
  },
  {
    icon: Wrench,
    title: "Professional Service",
    description: "Skilled technicians with extensive desktop repair experience",
  },
  {
    icon: Shield,
    title: "Quality Parts",
    description: "Only high-quality, genuine replacement parts used for repairs",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Fast repairs with most issues resolved within 24-48 hours",
  },
  {
    icon: CheckCircle,
    title: "Satisfaction Guaranteed",
    description: "90-day warranty on all repairs for your peace of mind",
  },
]

export default function DesktopRepairPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="DESKTOP REPAIR SERVICES"
        description="Professional computer repair solutions for all desktop issues"
        primaryCTA={{ text: "Get Started", href: "/contact" }}
        secondaryCTA={{ text: "Learn More", href: "#features" }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Expert Desktop Computer Repair</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            At PC Mechanix, we understand the critical role that desktop computers play in both personal and
            professional settings. Our expert technicians are equipped with the knowledge and tools to diagnose and
            repair a wide range of desktop issues. From hardware failures to software conflicts, we provide
            efficient, reliable, and cost-effective solutions to keep your systems running smoothly.
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
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Repair Process</h2>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">1</span>
                  <div>
                    <h3 className="font-semibold mb-1">Initial Diagnosis</h3>
                    <p className="text-gray-600">Thorough assessment of hardware and software issues</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">2</span>
                  <div>
                    <h3 className="font-semibold mb-1">Detailed Quote</h3>
                    <p className="text-gray-600">Clear explanation of required repairs and associated costs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">3</span>
                  <div>
                    <h3 className="font-semibold mb-1">Expert Repair</h3>
                    <p className="text-gray-600">Professional repairs using quality replacement parts</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">4</span>
                  <div>
                    <h3 className="font-semibold mb-1">Quality Testing</h3>
                    <p className="text-gray-600">Comprehensive testing to ensure everything works perfectly</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">5</span>
                  <div>
                    <h3 className="font-semibold mb-1">Final Check</h3>
                    <p className="text-gray-600">Thorough quality assurance before return</p>
                  </div>
                </li>
              </ol>
            </div>
            <div>
              <Image
                src="/placeholder.svg"
                alt="Desktop Repair Process"
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
              <AccordionTrigger>What types of desktop computers do you repair?</AccordionTrigger>
              <AccordionContent>
                We repair all major brands and models of desktop computers including Dell, HP, Lenovo, Apple, and
                custom-built systems. Our technicians are experienced with both Windows and Mac operating systems,
                and can handle a wide range of hardware and software issues.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long do repairs typically take?</AccordionTrigger>
              <AccordionContent>
                Most repairs are completed within 24-48 hours, depending on the issue and parts availability. For
                complex repairs or if parts need to be ordered, we'll provide you with a detailed timeline. We
                always strive to complete repairs as quickly as possible without compromising quality.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you offer on-site repairs?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer both in-shop and on-site repair services. For businesses and situations where moving
                the computer isn't practical, our mobile technicians can come to your location. We'll help you
                determine the best option based on your specific situation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What warranty do you offer on repairs?</AccordionTrigger>
              <AccordionContent>
                All our repairs come with a 90-day warranty covering both parts and labor. If any issue related to
                our repair occurs within this period, we'll fix it at no additional cost. We use only high-quality
                parts and thoroughly test all repairs to ensure lasting reliability.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#1D4D84] to-[#4B6E97] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">
            Ready to Fix Your Desktop?
          </h2>
          <p className="text-xl mb-8">
            Don't let computer issues slow you down. Contact us now for fast, professional desktop repair services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#1D4D84] text-white hover:bg-[#4B6E97] shadow-lg transition-colors duration-300"
              asChild
            >
              <Link href="/contact">Schedule Repair</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white hover:bg-white hover:text-primary border-white shadow-lg transition-colors duration-300"
              asChild
            >
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </ServiceLayout>
  )
}
