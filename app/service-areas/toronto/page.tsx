import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ServiceLayout from "@/components/ServiceLayout"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Toronto Computer Repair Services | PC Mechanix",
  description:
    "Expert computer repair and IT services in Toronto and its neighborhoods. Fast, reliable, and professional tech support.",
}

const torontoSubAreas = [ // Changed variable name to torontoSubAreas
  { name: "North York", slug: "north-york" },
  { name: "Scarborough", slug: "scarborough" },
  { name: "Etobicoke", slug: "etobicoke" },
  { name: "York", slug: "york" },
  { name: "East York", slug: "east-york" },
]

export default function TorontoServiceAreaPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="COMPUTER REPAIR SERVICES IN TORONTO"
        description="Professional computer repair and IT support services for Toronto residents and businesses. Fast, reliable, and expert solutions for all your technology needs."
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {torontoSubAreas.map((area) => (
            <Card key={area.slug} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>
                  <span className="text-primary cursor-pointer hover:underline">
                    {area.name}
                  </span>
                  <Badge variant="outline" className="ml-2">Service Area</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Expert computer repair services in {area.name}.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </ServiceLayout>
  )
}
