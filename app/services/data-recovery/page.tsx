import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HardDrive, Shield, Clock, Database, Cloud, History } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ServiceHero from "@/components/ServiceHero"
import ServiceLayout from "@/components/ServiceLayout"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Data Recovery Services Toronto | PC Mechanix",
  description:
    "Professional data recovery services in Toronto. Recover lost or corrupted data from various storage devices with our expert recovery solutions.",
}

const features = [
  {
    icon: HardDrive,
    title: "Multiple Device Support",
    description: "Recovery from hard drives, SSDs, USB drives, memory cards, and more",
  },
  {
    icon: Shield,
    title: "Secure Recovery",
    description: "Advanced recovery techniques to ensure data integrity and security",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Fast recovery services to minimize downtime and data loss",
  },
  {
    icon: Database,
    title: "All File Types",
    description: "Recovery of documents, photos, videos, emails, and other critical data",
  },
  {
    icon: Cloud,
    title: "Data Security",
    description: "Strict confidentiality and secure handling of your sensitive data",
  },
  {
    icon: History,
    title: "Quality Assurance",
    description: "Thorough verification of recovered data integrity and completeness",
  },
]

export default function DataRecoveryPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="DATA RECOVERY SERVICES"
        description="Professional data recovery solutions to retrieve your valuable information"
        primaryCTA={{ text: "Start Recovery Process", href: "/contact" }}
        secondaryCTA={{ text: "Learn More", href: "#features" }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Expert Data Recovery Solutions</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            At PC Mechanix, we understand the critical nature of your data. Our expert technicians use advanced
            recovery techniques and state-of-the-art tools to retrieve lost or corrupted data from any storage
            device. Whether it's accidental deletion, hardware failure, or system crashes, we have the expertise to
            help you recover your valuable information.
          </p>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Recovery Solutions</h2>
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
              <h2 className="text-3xl font-bold mb-6">Our Recovery Process</h2>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">1</span>
                  <div>
                    <h3 className="font-semibold mb-1">Initial Assessment</h3>
                    <p className="text-gray-600">Thorough evaluation of the storage device and extent of data loss</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">2</span>
                  <div>
                    <h3 className="font-semibold mb-1">Drive Imaging</h3>
                    <p className="text-gray-600">Creation of a sector-by-sector copy to protect original data</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">3</span>
                  <div>
                    <h3 className="font-semibold mb-1">Data Analysis</h3>
                    <p className="text-gray-600">Advanced analysis of file systems and data structures</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">4</span>
                  <div>
                    <h3 className="font-semibold mb-1">Recovery</h3>
                    <p className="text-gray-600">Expert recovery of lost or deleted files using specialized tools</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">5</span>
                  <div>
                    <h3 className="font-semibold mb-1">Verification</h3>
                    <p className="text-gray-600">Thorough testing of recovered data to ensure integrity</p>
                  </div>
                </li>
              </ol>
            </div>
            <div>
              <Image
                src="/placeholder.svg"
                alt="Data Recovery Process"
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
              <AccordionTrigger>What types of storage devices do you support?</AccordionTrigger>
              <AccordionContent>
                We recover data from all types of storage devices including hard drives (HDD), solid-state drives
                (SSD), USB flash drives, memory cards, RAID arrays, and more. Our experts are trained to handle
                various brands and models of storage devices.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long does data recovery take?</AccordionTrigger>
              <AccordionContent>
                Recovery time varies depending on factors like device condition, capacity, and type of data loss.
                Simple recoveries can be completed within 24-48 hours, while complex cases might take several days.
                We'll provide a detailed timeline after initial assessment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What's your success rate for data recovery?</AccordionTrigger>
              <AccordionContent>
                We maintain a high success rate thanks to our advanced recovery techniques and state-of-the-art
                equipment. However, success depends on factors like physical damage and data overwrite. We offer a
                no-data, no-charge policy, so you only pay if we successfully recover your data.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How do you ensure data security during recovery?</AccordionTrigger>
              <AccordionContent>
                We follow strict security protocols including secure facilities, encrypted storage, and
                confidentiality agreements. All recovered data is handled with utmost care, and we provide secure
                transfer methods for returning your recovered files.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#1D4D84] to-[#4B6E97] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">Lost Important Data?</h2>
          <p className="text-xl mb-8">
            Don't risk losing your valuable information forever. Contact us now for professional data recovery
            services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#1D4D84] text-white hover:bg-[#4B6E97] shadow-lg transition-colors duration-300"
              asChild
            >
              <Link href="/contact">Start Recovery Process</Link>
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
