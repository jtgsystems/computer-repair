import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HardDrive, Shield, Clock, Database, Cloud, History } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Data Backup & Recovery Services Toronto | PC Mechanix",
  description:
    "Professional data backup and recovery solutions in Toronto. Protect your business data with secure, reliable backup systems and rapid recovery services.",
}

const features = [
  {
    icon: HardDrive,
    title: "Automated Backups",
    description: "Scheduled automatic backups to ensure your data is always protected without manual intervention",
  },
  {
    icon: Shield,
    title: "Secure Storage",
    description: "Enterprise-grade encryption and secure storage facilities for your sensitive business data",
  },
  {
    icon: Clock,
    title: "Rapid Recovery",
    description: "Quick data recovery solutions to minimize downtime and keep your business running",
  },
  {
    icon: Database,
    title: "Multiple Backup Points",
    description: "Multiple recovery points to restore data from different time periods as needed",
  },
  {
    icon: Cloud,
    title: "Cloud Backup",
    description: "Secure cloud backup solutions for accessibility and protection against physical disasters",
  },
  {
    icon: History,
    title: "Version Control",
    description: "Advanced version control to track changes and restore specific file versions",
  },
]

export default function BusinessBackupRecoveryPage() {
  return (
    <>
      <ServiceHero
        title="DATA BACKUP & RECOVERY SOLUTIONS"
        description="Protect your business data with comprehensive backup and recovery services"
        primaryCTA={{ text: "Schedule a Consultation", href: "/contact" }}
        secondaryCTA={{ text: "Explore Solutions", href: "#features" }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Secure Data Protection for Toronto Businesses</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            In today's digital world, data loss can be catastrophic for your business. Our comprehensive backup and
            recovery solutions ensure your critical business data is always protected and quickly recoverable. We
            implement robust systems that safeguard your information against hardware failure, cyber threats, natural
            disasters, and human error.
          </p>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Backup & Recovery Solutions</h2>
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
          <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How often should we back up our business data?</AccordionTrigger>
              <AccordionContent>
                The frequency of backups depends on how often your data changes and its criticality. We typically
                recommend daily backups for most businesses, with real-time or near-real-time backup solutions for
                critical systems. We'll help you determine the optimal backup schedule based on your specific needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How quickly can you recover our data in case of an emergency?</AccordionTrigger>
              <AccordionContent>
                Our recovery time varies depending on the amount of data and type of backup solution implemented. With
                our cloud-based solutions, we can often begin recovery immediately. For most scenarios, we can restore
                critical data within hours. We'll work with you to establish recovery time objectives (RTO) that meet
                your business needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Where is our backup data stored?</AccordionTrigger>
              <AccordionContent>
                We utilize a multi-location approach to data storage. Your data is typically stored both on-site for
                quick recovery and in secure Canadian data centers for added protection. All storage locations meet
                strict security standards and comply with Canadian data privacy regulations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How secure are your backup solutions?</AccordionTrigger>
              <AccordionContent>
                We implement enterprise-grade encryption for all backup data, both in transit and at rest. Our
                solutions include advanced access controls, audit trails, and regular security updates. We also
                perform regular testing to ensure both the security and integrity of your backup data.
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
