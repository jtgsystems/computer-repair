import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Laptop, HardDrive, Zap, Shield, Wrench, Monitor } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ServiceHero from "@/components/ServiceHero"
import ServiceLayout from "@/components/ServiceLayout"
import ServiceCTA from "@/components/ServiceCTA"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Mac Repair Services Toronto | PC Mechanix",
  description:
    "Expert Mac repair services in Toronto. Fast, reliable fixes for all Apple devices including MacBooks, iMacs, and Mac Pros.",
  keywords: "Mac repair Toronto, MacBook repair, iMac repair, Mac Pro service, Apple computer repair, MacBook screen repair, Mac data recovery, Mac virus removal, Mac hardware upgrade, PC Mechanix, Toronto Mac service, Apple specialist",
}

const features = [
  {
    icon: Laptop,
    title: "MacBook Repairs",
    description: "Expert repairs for all MacBook models and issues",
  },
  {
    icon: Monitor,
    title: "iMac Services",
    description: "Comprehensive repair solutions for iMac computers",
  },
  {
    icon: Shield,
    title: "Virus Protection",
    description: "Remove malware and protect your Mac from threats",
  },
  {
    icon: Zap,
    title: "Performance Boost",
    description: "Optimize your Mac's speed and performance",
  },
  {
    icon: HardDrive,
    title: "Data Services",
    description: "Data recovery and transfer between systems",
  },
  {
    icon: Wrench,
    title: "Hardware Upgrades",
    description: "Strategic upgrades to enhance your Mac's capabilities",
  },
]

export default function MacRepairPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="EXPERT MAC REPAIR SERVICES"
        description="Professional repair solutions for all Apple devices"
        primaryCTA={{ text: "Get Started", href: "/contact" }}
        secondaryCTA={{ text: "Learn More", href: "#features" }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Toronto's Mac Repair Specialists</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            Being Toronto's top computer technicians, we specialize in Mac/Apple Computer Repair. Our expert team
            is adept at fixing all types of Mac issues, from virus removal to hardware repairs. Whether you need
            MacBook Pro screen repairs, keyboard replacements, or system upgrades, we have the expertise to get
            your Mac running at its best.
          </p>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mac Services</h2>
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
              <h2 className="text-3xl font-bold mb-6">Our Mac Repair Process</h2>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">1</span>
                  <div>
                    <h3 className="font-semibold mb-1">Diagnostic Assessment</h3>
                    <p className="text-gray-600">Thorough evaluation of your Mac's issues</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">2</span>
                  <div>
                    <h3 className="font-semibold mb-1">Repair Quote</h3>
                    <p className="text-gray-600">Transparent pricing with detailed explanation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">3</span>
                  <div>
                    <h3 className="font-semibold mb-1">Expert Repair</h3>
                    <p className="text-gray-600">Professional repairs by certified Mac technicians</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">4</span>
                  <div>
                    <h3 className="font-semibold mb-1">Quality Testing</h3>
                    <p className="text-gray-600">Comprehensive testing of all repairs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">5</span>
                  <div>
                    <h3 className="font-semibold mb-1">Final Verification</h3>
                    <p className="text-gray-600">Complete system check before return</p>
                  </div>
                </li>
              </ol>
            </div>
            <div>
              <Image
                src="/placeholder.svg"
                alt="Mac Repair Process"
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
              <AccordionTrigger>What Mac devices do you repair?</AccordionTrigger>
              <AccordionContent>
                We repair all Apple Mac devices including MacBooks (Pro, Air), iMacs, Mac Pros, and Mac Minis.
                Our technicians are experienced with both current and older Mac models, and can handle a wide
                range of hardware and software issues.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long do Mac repairs usually take?</AccordionTrigger>
              <AccordionContent>
                Many common Mac repairs can be completed same-day or within 24-48 hours. For more complex repairs
                or if parts need to be ordered, we'll provide you with a detailed timeline. We always strive to
                complete repairs as quickly as possible without compromising quality.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you use genuine Apple parts?</AccordionTrigger>
              <AccordionContent>
                Yes, we use high-quality parts that meet or exceed Apple's specifications. For certain repairs,
                we can offer both genuine Apple parts and high-quality third-party alternatives, allowing you to
                choose based on your preferences and budget.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What warranty do you offer on Mac repairs?</AccordionTrigger>
              <AccordionContent>
                All our Mac repairs come with a 90-day warranty covering both parts and labor. If any issue
                related to our repair occurs within this period, we'll fix it at no additional cost. We
                thoroughly test all repairs to ensure lasting reliability.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <ServiceCTA
        heading="Ready to Fix Your Mac?"
        description="Don't let Mac issues slow you down. Contact us now for professional repair services."
      />
    </ServiceLayout>
  )
}
