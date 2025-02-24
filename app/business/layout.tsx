import type { ReactNode } from "react"
import ServiceLayout from "@/components/ServiceLayout"

interface BusinessLayoutProps {
  children: ReactNode
}

export default function BusinessLayout({ children }: BusinessLayoutProps) {
  // This layout wraps all business pages
  return <ServiceLayout renderHeaderAndFooter={true}>{children}</ServiceLayout>
}
