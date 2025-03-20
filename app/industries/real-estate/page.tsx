"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, CheckCircle, Shield, Cloud, Wifi, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function RealEstateIndustryPage() {
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
              IT SOLUTIONS FOR REAL ESTATE
            </h1>
            <p className="text-xl mb-8 text-shadow">
              Specialized technology services to empower real estate businesses in the Greater Toronto Area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/real-estate-it.jpg"
                alt="Real Estate IT Solutions"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">
                TECHNOLOGY CHALLENGES IN REAL ESTATE
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                The real estate industry relies heavily on technology for property management, client communications, and transaction processing. In today's competitive market, having the right IT infrastructure is essential for success.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Real estate professionals in Toronto need reliable, secure, and mobile-friendly technology solutions that enable them to serve clients effectively while managing properties efficiently.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">Common Real Estate IT Challenges:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Secure access to property and client data while on the go</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Reliable communication systems for client interactions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Integration between multiple real estate platforms and MLS</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Protecting sensitive client and transaction information</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary uppercase tracking-wide">
            OUR REAL ESTATE IT SOLUTIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">Mobile Office Solutions</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Comprehensive mobile technology solutions that allow real estate professionals to work effectively from anywhere.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Secure remote access to office systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Mobile device management and security</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Cloud-based document management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">Property Management Systems</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Integrated software solutions for efficient property management, tenant communications, and maintenance tracking.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Property management software implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Tenant portal setup and management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Maintenance request tracking systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">Data Security & Compliance</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Robust security solutions to protect sensitive client information and ensure compliance with real estate regulations.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Secure document storage and sharing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Encrypted communication channels</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Compliance auditing and reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">Virtual Tour Technology</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Advanced virtual tour solutions that help showcase properties effectively in today's digital marketplace.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">360° virtual tour implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Virtual staging technology</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Video conferencing for remote showings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">CRM & Marketing Systems</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Integrated customer relationship management and marketing solutions tailored for real estate professionals.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Real estate-specific CRM implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Automated marketing campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Lead tracking and management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">Network Infrastructure</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Reliable network solutions for real estate offices, ensuring consistent connectivity and performance.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">High-speed internet solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Secure Wi-Fi for offices and open houses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">VPN solutions for remote access</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary uppercase tracking-wide">
            WHY TORONTO REAL ESTATE PROFESSIONALS CHOOSE PC MECHANIX
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Building2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Industry Expertise</h3>
              <p className="text-gray-700">
                Deep understanding of real estate technology needs in the Toronto market.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Security Focus</h3>
              <p className="text-gray-700">
                Prioritizing the protection of sensitive client and transaction data.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Cloud className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Cloud Solutions</h3>
              <p className="text-gray-700">
                Enabling mobility and flexibility through advanced cloud technologies.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Local Support</h3>
              <p className="text-gray-700">
                Toronto-based team providing prompt, personalized service when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#1D4D84] to-[#4B6E97] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">
            ELEVATE YOUR REAL ESTATE BUSINESS WITH TECHNOLOGY
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact PC Mechanix today to discover how our specialized IT solutions can help your real estate business thrive in the competitive Toronto market.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 shadow-lg transition-colors duration-300"
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
              <Link href="/industries">
                Explore Other Industries
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}