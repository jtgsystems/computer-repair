import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, HardDrive, MemoryStick, Zap, Monitor, Wrench } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ServiceHero from "@/components/ServiceHero"
import ServiceLayout from "@/components/ServiceLayout"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hardware Upgrade Services Toronto | PC Mechanix",
  description:
    "Professional hardware upgrade services in Toronto. Boost your computer's performance with our expert technicians.",
}

const features = [
  {
    icon: Cpu,
    title: "CPU Upgrades",
    description: "Boost processing power with latest CPU technology",
  },
  {
    icon: MemoryStick,
    title: "RAM Upgrades",
    description: "Improve multitasking with additional memory",
  },
  {
    icon: HardDrive,
    title: "Storage Upgrades",
    description: "Fast SSDs and high-capacity storage solutions",
  },
  {
    icon: Zap,
    title: "Graphics Upgrades",
    description: "Enhanced visual performance with new GPUs",
  },
  {
    icon: Monitor,
    title: "Display Upgrades",
    description: "Better visuals with modern display technology",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    description: "Tailored upgrades for your specific needs",
  },
]

export default function HardwareUpgradesPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="HARDWARE UPGRADE SERVICES"
        description="Boost your computer's performance with professional upgrades"
        primaryCTA={{ text: "Get Started", href: "/contact" }}
        secondaryCTA={{ text: "Learn More", href: "#features" }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Professional Hardware Solutions</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            Don't let outdated hardware hold you back. Our expert technicians can help you identify the
            perfect upgrades to enhance your computer's performance. Whether you need more speed, better
            graphics, or increased storage, we provide professional installation and optimization of
            high-quality components.
          </p>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Upgrade Services</h2>
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
              <h2 className="text-3xl font-bold mb-6">Our Upgrade Process</h2>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">1</span>
                  <div>
                    <h3 className="font-semibold mb-1">Assessment</h3>
                    <p className="text-gray-600">Evaluate your current system and needs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">2</span>
                  <div>
                    <h3 className="font-semibold mb-1">Recommendations</h3>
                    <p className="text-gray-600">Suggest optimal upgrades for your budget</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">3</span>
                  <div>
                    <h3 className="font-semibold mb-1">Installation</h3>
                    <p className="text-gray-600">Professional hardware installation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">4</span>
                  <div>
                    <h3 className="font-semibold mb-1">Configuration</h3>
                    <p className="text-gray-600">Optimize settings for best performance</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">5</span>
                  <div>
                    <h3 className="font-semibold mb-1">Testing</h3>
                    <p className="text-gray-600">Verify everything works perfectly</p>
                  </div>
                </li>
              </ol>
            </div>
            <div>
              <Image
                src="/placeholder.svg"
                alt="Hardware Upgrade Process"
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
              <AccordionTrigger>How do I know if I need a hardware upgrade?</AccordionTrigger>
              <AccordionContent>
                Common signs include slow performance, long load times, inability to run new software,
                or frequent crashes. We can assess your system and recommend the most effective
                upgrades based on your needs and usage patterns.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long do hardware upgrades take?</AccordionTrigger>
              <AccordionContent>
                Most basic upgrades like RAM or storage can be completed within 1-2 hours. More
                complex upgrades might take 2-4 hours. We'll provide a detailed timeline based on
                your specific upgrade needs and ensure minimal downtime.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What about my data during upgrades?</AccordionTrigger>
              <AccordionContent>
                We take great care to protect your data during hardware upgrades. For storage
                upgrades, we can transfer your data to the new drive. We also recommend backing up
                your data before any hardware modifications, which we can assist with.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do you provide warranty on upgrades?</AccordionTrigger>
              <AccordionContent>
                Yes, all hardware components come with manufacturer warranties, and our installation
                service includes a 90-day warranty. We use only high-quality, compatible components
                and thoroughly test everything after installation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#1D4D84] to-[#4B6E97] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">
            Ready to Upgrade Your System?
          </h2>
          <p className="text-xl mb-8">
            Don't settle for slow performance. Contact us now for professional hardware upgrades.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#1D4D84] text-white hover:bg-[#4B6E97] shadow-lg transition-colors duration-300"
              asChild
            >
              <Link href="/contact">Get Started</Link>
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
