import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HardDrive, CloudLightning, Clock, Shield, RefreshCw, FileCheck, ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ServiceLayout from "@/components/ServiceLayout"

export const metadata: Metadata = {
  title: "Backup & Recovery Solutions for Toronto Businesses | PC Mechanix",
  description:
    "Robust backup and recovery solutions to protect your critical business data in Toronto. Ensure business continuity with our comprehensive disaster recovery planning tailored for the GTA.",
}

const services = [
  {
    icon: HardDrive,
    title: "On-site Backup for Toronto Businesses",
    description:
      "Secure local backups for quick access and recovery, ensuring your data is always within reach in your Toronto office.",
  },
  {
    icon: CloudLightning,
    title: "GTA-Optimized Cloud Backup",
    description:
      "Off-site cloud backups leveraging Toronto's robust infrastructure for added security and accessibility, protecting your data from local disasters.",
  },
  {
    icon: Clock,
    title: "Rapid Recovery for Toronto's Fast-Paced Business Environment",
    description:
      "Quick data restoration to minimize downtime and get your Toronto business back up and running fast in the competitive GTA market.",
  },
  {
    icon: Shield,
    title: "Toronto-Focused Data Encryption",
    description:
      "Advanced encryption techniques to keep your backed-up data secure from unauthorized access, compliant with Toronto and Ontario regulations.",
  },
  {
    icon: RefreshCw,
    title: "Automated Backups Tailored for GTA Businesses",
    description:
      "Scheduled, automatic backups optimized for Toronto business hours to ensure your data is always up-to-date without manual intervention.",
  },
  {
    icon: FileCheck,
    title: "Toronto-Specific Data Integrity Checks",
    description:
      "Regular verification of backup integrity, considering Toronto's unique business landscape to ensure your data is recoverable when needed.",
  },
]

export default function BackupRecoveryPage() {
  return (
    <ServiceLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">
          Backup & Recovery Solutions for Toronto Businesses
        </h1>
        <p className="text-lg mb-12 text-center max-w-3xl mx-auto">
          Data loss can cripple a business in Toronto's fast-paced environment. We make sure it doesn't. Our backup and
          recovery solutions protect your critical files with secure, automated backups and fast restoration when
          disaster strikes. Whether it's a server crash, ransomware, or human error, our Toronto-based experts recover
          your data quickly and reliably. We've helped countless GTA businesses bounce back—let us safeguard your
          operations in Canada's largest business hub.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardHeader className="flex flex-col items-center">
                <service.icon className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Why Choose Our Toronto-Focused Backup & Recovery Solutions?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span>
                    Comprehensive protection with both on-site and off-site backups, leveraging Toronto's advanced data
                    center infrastructure
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span>
                    Tailored solutions to meet your specific Toronto business needs and comply with Ontario's data
                    protection regulations
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span>Rapid recovery options to minimize downtime in Toronto's competitive business landscape</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span>
                    Advanced encryption and security measures to protect your sensitive data from Toronto-specific cyber
                    threats
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span>
                    24/7 monitoring and support from our Toronto-based team to ensure your backups are always running
                    smoothly, even during Toronto's unpredictable weather events
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions for Toronto Businesses</h2>
            <Accordion type="single" collapsible className="max-w-2xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>How often should Toronto businesses back up their data?</AccordionTrigger>
                <AccordionContent>
                  The frequency of backups depends on how often your data changes and how much data loss your Toronto
                  business can tolerate. For many GTA businesses, we recommend daily backups of critical data. However,
                  for systems with frequent changes, such as those in Toronto's financial district, we might implement
                  continuous data protection for real-time backups. We'll work with you to determine the optimal backup
                  schedule for your specific needs in Toronto's dynamic business environment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How long does data recovery typically take for a Toronto business?</AccordionTrigger>
                <AccordionContent>
                  Recovery time can vary depending on the amount of data and the nature of the disaster. For small
                  amounts of data or single-file recoveries, we can often restore data within minutes. For larger
                  recoveries, it might take several hours. In cases of complete system failure, recovery could take a
                  day or more. We prioritize critical systems and data to minimize business disruption in Toronto's
                  fast-paced market. Our goal is always to get you operational as quickly as possible to maintain your
                  competitive edge in the GTA.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Is our backed-up data secure in the cloud, considering Toronto's cybersecurity landscape?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we take extensive measures to ensure the security of your cloud-based backups, especially
                  considering the unique cybersecurity challenges in Toronto. All data is encrypted both in transit and
                  at rest using industry-standard encryption protocols. We use reputable cloud providers with data
                  centers in and around Toronto, ensuring multiple layers of physical and digital security.
                  Additionally, we implement strict access controls to ensure only authorized personnel can access your
                  backups. Regular security audits are conducted to maintain the highest level of protection for your
                  data, in compliance with Toronto and Ontario data protection regulations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Toronto Business Data?</h2>
            <p className="text-xl mb-8">
              Don't wait for a disaster to strike in the bustling GTA. Protect your valuable Toronto business
              information today.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="#contact">Get Your Free Toronto-Focused Consultation</Link>
            </Button>
          </div>
        </section>
      </div>
    </ServiceLayout>
  )
}

