import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ServiceLayout from "@/components/ServiceLayout"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Brampton Computer Repair Services | PC Mechanix",
  description:
    "Expert computer repair and IT services in Brampton. Fast, reliable, and professional tech support for residents and businesses.",
}

// Removed bramptonAreas

export default function BramptonServiceAreaPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="COMPUTER REPAIR SERVICES IN BRAMPTON"
        description="Professional computer repair and IT support services for Brampton residents and businesses. Fast, reliable solutions from certified technicians."
        primaryCTA={{
          text: "Schedule a Repair",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View All Services",
          href: "/services"
        }}
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>
                  <Link href="/service-areas/brampton/downtown-brampton" className="text-primary hover:underline">
                    Downtown Brampton
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Dedicated services for Downtown Brampton residents and businesses.</p>
              </CardContent>
            </Card>
          </div>
      </div>
    </ServiceLayout>
  )
}
