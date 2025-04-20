"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Store, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import IndustryCTA from "@/components/IndustryCTA";

export default function RetailIndustryPage() {
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
              IT SOLUTIONS FOR RETAIL
            </h1>
            <p className="text-xl mb-8 text-shadow">
              Specialized technology services to help retail businesses in Toronto thrive in a competitive market.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">
                TECHNOLOGY CHALLENGES IN RETAIL
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                The retail industry faces unique technology challenges in today's digital marketplace. From inventory management to point-of-sale systems, retailers need robust IT solutions that enhance customer experiences while streamlining operations.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                In the Toronto area, retail businesses must stay competitive by leveraging technology that enables omnichannel sales, secure payment processing, and data-driven customer insights.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">Common Retail IT Challenges:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Maintaining consistent inventory across multiple sales channels</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Ensuring secure and efficient payment processing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Implementing effective customer relationship management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Managing in-store and online technology infrastructure</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/retail-it.jpg"
                alt="Retail IT Solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-500 uppercase tracking-wide">
            OUR RETAIL IT SOLUTIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">Point of Sale Systems</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Modern, reliable POS solutions that integrate seamlessly with your inventory management and accounting systems.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Cloud-based POS systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Mobile payment solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Hardware support and maintenance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">Inventory Management</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Comprehensive inventory solutions that provide real-time tracking, automated ordering, and multi-location management.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Barcode and RFID systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Automated stock alerts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Supplier management integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">E-commerce Integration</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Seamless integration between your physical store and online presence for a true omnichannel retail experience.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Website development and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Shopping cart and payment gateway setup</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Cross-platform inventory synchronization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">Security Systems</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Comprehensive security solutions to protect your retail business from both physical and digital threats.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Surveillance camera installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">PCI compliance consulting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Data breach prevention and response</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">Customer Analytics</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Data-driven solutions to help you understand customer behavior and optimize your retail strategy.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Customer relationship management (CRM)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Purchase pattern analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Loyalty program implementation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">IT Support</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Reliable IT support services tailored to the unique needs of retail businesses in the Toronto area.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">24/7 helpdesk support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">On-site technical assistance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Preventative maintenance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-500 uppercase tracking-wide">
            WHY TORONTO RETAILERS CHOOSE PC MECHANIX
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Store className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Retail Expertise</h3>
              <p className="text-gray-700">
                Deep understanding of retail technology needs and challenges in the Toronto market.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Reliability</h3>
              <p className="text-gray-700">
                Consistent, dependable service that ensures your retail operations run smoothly.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <ArrowRight className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Forward-Thinking</h3>
              <p className="text-gray-700">
                Innovative solutions that help your retail business stay ahead of the competition.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Store className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Local Support</h3>
              <p className="text-gray-700">
                Toronto-based team providing prompt, on-site support when you need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      <IndustryCTA
        heading="READY TO TRANSFORM YOUR RETAIL BUSINESS?"
        description="Contact PC Mechanix today to discover how our specialized IT solutions can help your retail business thrive in the competitive Toronto market."
      />
    </>
  );
}