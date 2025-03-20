"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Store, Building2, Package, Stethoscope, Truck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const industries = [
  {
    name: "Retail",
    slug: "retail",
    icon: Store,
    description: "Specialized IT solutions for retail businesses in Toronto",
  },
  {
    name: "Real Estate",
    slug: "real-estate",
    icon: Building2,
    description: "Technology services tailored for real estate companies",
  },
  {
    name: "Warehousing",
    slug: "warehousing",
    icon: Package,
    description: "IT infrastructure and solutions for warehousing operations",
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    icon: Stethoscope,
    description: "Secure and compliant IT services for healthcare providers",
  },
  {
    name: "Logistics",
    slug: "logistics",
    icon: Truck,
    description: "Technology solutions for logistics and transportation companies",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="relative bg-gradient-to-r from-[#1D4D84] to-[#4B6E97] text-white pt-36 pb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-5xl font-extrabold mb-6 text-shadow-lg uppercase tracking-tight"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            >
              INDUSTRY-SPECIFIC IT SOLUTIONS
            </h1>
            <p className="text-xl mb-8 text-shadow">
              Tailored technology services designed for the unique challenges and requirements of your industry in the Greater Toronto Area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary uppercase tracking-wide">
            INDUSTRIES WE SERVE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Card 
                key={industry.slug}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-br from-[#1D4D84] to-[#4B6E97] p-6 flex items-center">
                  <industry.icon className="h-10 w-10 text-white mr-4" />
                  <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-6">{industry.description}</p>
                  <Button className="w-full" asChild>
                    <Link href={`/industries/${industry.slug}`}>
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-primary uppercase tracking-wide">
              WHY CHOOSE INDUSTRY-SPECIFIC IT SOLUTIONS
            </h2>
            <p className="text-lg text-gray-700">
              At PC Mechanix, we understand that each industry has unique technology requirements and challenges. Our tailored IT solutions are designed to address the specific needs of your business sector in the Toronto area.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary">Specialized Expertise</h3>
              <p className="text-gray-700">
                Our team has deep knowledge of industry-specific requirements, regulations, and best practices to provide solutions that truly fit your business context.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary">Tailored Technology</h3>
              <p className="text-gray-700">
                We implement technologies and systems that address the unique operational challenges and opportunities in your specific industry.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary">Competitive Advantage</h3>
              <p className="text-gray-700">
                Our industry-focused solutions help you leverage technology more effectively than competitors who use generic IT services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#1D4D84] to-[#4B6E97] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">
            READY TO TRANSFORM YOUR INDUSTRY OPERATIONS?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover how PC Mechanix can help your business leverage industry-specific IT solutions to drive growth, efficiency, and innovation.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 shadow-lg transition-colors duration-300"
            asChild
          >
            <Link href="/contact">
              Schedule a Consultation
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}