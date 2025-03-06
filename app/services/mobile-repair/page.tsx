import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Tablet, Battery, Wifi, Camera, HardDrive, Shield, Wrench } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ServiceHero from "@/components/ServiceHero"
import ServiceLayout from "@/components/ServiceLayout"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Tablet & Smartphone Repair Services Toronto | PC Mechanix",
  description:
    "Professional repair services for tablets and smartphones in Toronto. Fast, reliable fixes for all major brands and models.",
  keywords: "smartphone repair Toronto, tablet repair, iPhone repair, iPad repair, Samsung repair, screen replacement, battery replacement, mobile device fix, Android repair, phone screen fix, PC Mechanix, cell phone repair GTA",
}

const features = [
  {
    icon: Smartphone,
    title: "Smartphone Repairs",
    description: "Expert repairs for all major smartphone brands and models",
  },
  {
    icon: Tablet,
    title: "Tablet Repairs",
    description: "Professional service for iPads and Android tablets",
  },
  {
    icon: Battery,
    title: "Battery Service",
    description: "Battery replacements to restore device performance",
  },
  {
    icon: Shield,
    title: "Quality Parts",
    description: "High-quality replacement parts for all repairs",
  },
  {
    icon: Wrench,
    title: "Expert Service",
    description: "Skilled technicians with extensive experience",
  },
  {
    icon: Camera,
    title: "Camera Repairs",
    description: "Fix camera issues and restore photo quality",
  },
]

export default function MobileRepairPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="TABLET & SMARTPHONE REPAIR"
        description="Professional repair solutions for all mobile devices"
        primaryCTA={{ text: "Get Started", href: "/contact" }}
        secondaryCTA={{ text: "Learn More", href: "#features" }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Expert Mobile Device Repair</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            In today's connected world, a broken smartphone or tablet can disrupt your entire day. Whether you're
            dealing with a cracked screen, battery issues, or any other problem, our expert technicians can quickly
            diagnose and repair your device. We use only high-quality parts and provide fast, reliable service to
            get you back to your digital life as soon as possible.
          </p>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mobile Services</h2>
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
                    <h3 className="font-semibold mb-1">Initial Assessment</h3>
                    <p className="text-gray-600">Thorough diagnosis of your device's issues</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">2</span>
                  <div>
                    <h3 className="font-semibold mb-1">Repair Quote</h3>
                    <p className="text-gray-600">Clear explanation of needed repairs and costs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">3</span>
                  <div>
                    <h3 className="font-semibold mb-1">Expert Repair</h3>
                    <p className="text-gray-600">Professional repairs using quality parts</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">4</span>
                  <div>
                    <h3 className="font-semibold mb-1">Quality Testing</h3>
                    <p className="text-gray-600">Thorough testing of all repaired components</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">5</span>
                  <div>
                    <h3 className="font-semibold mb-1">Final Check</h3>
                    <p className="text-gray-600">Complete device verification before return</p>
                  </div>
                </li>
              </ol>
            </div>
            <div>
              <Image
                src="/placeholder.svg"
                alt="Mobile Device Repair Process"
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
              <AccordionTrigger>What devices do you repair?</AccordionTrigger>
              <AccordionContent>
                We repair all major brands of smartphones and tablets including Apple iPhones and iPads,
                Samsung Galaxy devices, Google Pixel phones, and other Android devices. Our technicians are
                experienced with both current and older models.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long do repairs typically take?</AccordionTrigger>
              <AccordionContent>
                Many common repairs like screen replacements and battery upgrades can be completed same-day.
                For more complex repairs or if parts need to be ordered, we'll provide you with a detailed
                timeline. We always strive to complete repairs as quickly as possible without compromising quality.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What about my data during repairs?</AccordionTrigger>
              <AccordionContent>
                We take data security seriously. Your personal information is protected throughout the repair
                process, and we can help you back up your data before beginning repairs if needed. We follow
                strict privacy protocols to ensure your data remains secure.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do you offer any warranty?</AccordionTrigger>
              <AccordionContent>
                Yes, all our mobile device repairs come with a 90-day warranty covering both parts and labor.
                If any issue related to our repair occurs within this period, we'll fix it at no additional
                cost. We use high-quality parts and thoroughly test all repairs to ensure reliability.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#1D4D84] to-[#4B6E97] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">
            Ready to Fix Your Device?
          </h2>
          <p className="text-xl mb-8">
            Don't let device issues slow you down. Contact us now for professional repair services.
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
