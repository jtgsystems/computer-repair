import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ServiceLayout from "@/components/ServiceLayout"

export const metadata: Metadata = {
  title: "Service Areas | PC Mechanix",
  description:
    "Discover the areas served by PC Mechanix for computer repair and IT services in Toronto and surrounding regions.",
  keywords: "PC Mechanix service areas, Toronto computer repair, GTA IT services, Mississauga tech support, Brampton computer services, Markham IT support, Vaughan computer repair, Richmond Hill tech services, Oakville computer help, Burlington IT support",
}

const serviceAreas = [
  { name: "Toronto", slug: "toronto", neighborhoods: ["North York", "Scarborough", "Etobicoke", "York", "East York"] },
  { name: "Mississauga", slug: "mississauga" },
  { name: "Brampton", slug: "brampton" },
  { name: "Markham", slug: "markham" },
  { name: "Vaughan", slug: "vaughan" },
  { name: "Richmond Hill", slug: "richmond-hill" },
  { name: "Oakville", slug: "oakville" },
  { name: "Burlington", slug: "burlington" },
  { name: "Milton", slug: "milton" },
  { name: "Newmarket", slug: "newmarket" },
  { name: "Aurora", slug: "aurora" },
  { name: "Pickering", slug: "pickering" },
  { name: "Ajax", slug: "ajax" },
  { name: "Whitby", slug: "whitby" },
  { name: "Oshawa", slug: "oshawa" },
  { name: "Stouffville", slug: "stouffville" },
  { name: "King City", slug: "king-city" },
  { name: "Woodbridge", slug: "woodbridge" },
  { name: "Maple", slug: "maple" },
]

export default function ServiceAreasPage() {
  return (
    <ServiceLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">Our Service Areas</h1>
        <p className="text-lg mb-12 text-center">
          PC Mechanix provides expert computer repair and IT services across Toronto and the Greater Toronto Area.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceAreas.map((area) => (
            <Card key={area.slug} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>
                  <Link href={`/service-areas/${area.slug}`} className="text-primary hover:underline">
                    {area.name}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {area.neighborhoods && (
                  <ul className="list-disc list-inside">
                    {area.neighborhoods.map((neighborhood) => (
                      <li key={neighborhood} className="text-gray-600">
                        {neighborhood}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </ServiceLayout>
  )
}

