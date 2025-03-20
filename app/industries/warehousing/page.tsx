"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Package, CheckCircle, BarChart, Truck, Wifi, Database } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function WarehousingIndustryPage() {
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
              IT SOLUTIONS FOR WAREHOUSING
            </h1>
            <p className="text-xl mb-8 text-shadow">
              Specialized technology services to optimize warehousing operations in the Greater Toronto Area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">
                TECHNOLOGY CHALLENGES IN WAREHOUSING
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                The warehousing industry faces unique technology challenges in today's fast-paced logistics environment. From inventory management to order fulfillment, warehouses need robust IT solutions that enhance efficiency while maintaining accuracy.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                In the Toronto area, warehousing operations must leverage technology that enables real-time tracking, efficient space utilization, and seamless integration with transportation systems.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">Common Warehousing IT Challenges:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Maintaining accurate real-time inventory visibility</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Optimizing picking and packing processes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Integrating with multiple shipping and logistics systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Ensuring reliable connectivity throughout large facilities</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/warehousing-it.jpg"
                alt="Warehousing IT Solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary uppercase tracking-wide">
            OUR WAREHOUSING IT SOLUTIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">Warehouse Management Systems</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Comprehensive WMS solutions that optimize inventory control, order processing, and warehouse operations.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">WMS implementation and customization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Integration with ERP and e-commerce platforms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Performance optimization and support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">Barcode & RFID Systems</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Advanced tracking solutions that improve inventory accuracy and streamline warehouse processes.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Barcode scanner implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">RFID tracking solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Mobile scanning device management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">Wireless Infrastructure</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Reliable wireless networking solutions designed for large warehouse environments.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Warehouse-wide Wi-Fi coverage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Network redundancy planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Performance monitoring and optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">Logistics Integration</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Seamless integration solutions that connect your warehouse operations with transportation and logistics systems.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Shipping carrier API integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Transportation management system (TMS) integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Cross-dock operation optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">Data Analytics & Reporting</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Advanced analytics solutions that provide actionable insights to optimize warehouse operations.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Custom KPI dashboard development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Inventory forecasting tools</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Operational efficiency analysis</span>
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
                  Comprehensive security solutions to protect your warehouse facility, inventory, and data.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Video surveillance implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Access control systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Cybersecurity for warehouse systems</span>
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
            WHY TORONTO WAREHOUSES CHOOSE PC MECHANIX
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Package className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Industry Expertise</h3>
              <p className="text-gray-700">
                Deep understanding of warehousing technology needs in the Toronto market.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Wifi className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Reliable Connectivity</h3>
              <p className="text-gray-700">
                Ensuring consistent, high-performance wireless coverage throughout your facility.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <BarChart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Data-Driven Approach</h3>
              <p className="text-gray-700">
                Leveraging analytics to continuously improve warehouse operations.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Database className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Integration Expertise</h3>
              <p className="text-gray-700">
                Seamlessly connecting your warehouse systems with broader supply chain technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#1D4D84] to-[#4B6E97] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">
            OPTIMIZE YOUR WAREHOUSE OPERATIONS WITH TECHNOLOGY
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact PC Mechanix today to discover how our specialized IT solutions can help your warehousing business achieve greater efficiency and accuracy.
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