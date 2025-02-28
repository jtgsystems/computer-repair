import type { ReactNode } from "react"
import ServiceLayout from "@/components/ServiceLayout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Business IT Solutions Toronto | PC Mechanix",
  description: "Comprehensive IT services for Toronto businesses. Network solutions, managed IT, cloud services, cybersecurity, and more.",
  keywords: "business IT solutions, Toronto IT services, managed IT, network solutions, cloud services, cybersecurity, IT consulting, business technology, PC Mechanix, GTA IT support",
}

interface BusinessLayoutProps {
  children: ReactNode
}

export default function BusinessLayout({ children }: BusinessLayoutProps) {
  // This layout wraps all business pages
  return <ServiceLayout renderHeaderAndFooter={true}>{children}</ServiceLayout>
}
