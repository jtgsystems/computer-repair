"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, CheckCircle, Map, BarChart, Wifi, Smartphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import IndustryCTA from "@/components/IndustryCTA";

export default function LogisticsIndustryPage() {
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
              IT SOLUTIONS FOR LOGISTICS
            </h1>
            <p className="text-xl mb-8 text-shadow">
              Specialized technology services to optimize logistics operations in the Greater Toronto Area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">
                TECHNOLOGY CHALLENGES IN LOGISTICS
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                The logistics industry faces unique technology challenges in today's fast-paced supply chain environment. From fleet management to last-mile delivery, logistics companies need robust IT solutions that enhance visibility, efficiency, and customer satisfaction.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                In the Toronto area, logistics operations must leverage technology that enables real-time tracking, route optimization, and seamless integration with warehouse and customer systems.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">Common Logistics IT Challenges:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Maintaining real-time visibility across the supply chain</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Optimizing routes and delivery schedules</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Integrating with multiple customer and supplier systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Ensuring reliable mobile connectivity for drivers</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/logistics-it.jpg"
                alt="Logistics IT Solutions"
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
            OUR LOGISTICS IT SOLUTIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">Fleet Management Systems</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Comprehensive fleet management solutions that optimize vehicle utilization, maintenance, and driver performance.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">GPS tracking and telematics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Maintenance scheduling and alerts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Driver performance monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">Route Optimization</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Advanced route planning solutions that reduce fuel costs, improve delivery times, and enhance customer satisfaction.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">AI-powered route planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Real-time traffic integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Delivery window optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">Mobile Solutions</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Reliable mobile technology solutions that keep drivers connected and enable efficient delivery operations.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Driver mobile app development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Electronic proof of delivery</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Mobile device management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">Supply Chain Visibility</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  End-to-end visibility solutions that provide real-time tracking and status updates across the entire supply chain.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Shipment tracking platforms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Customer notification systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Exception management tools</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">Transportation Management</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Comprehensive TMS solutions that streamline logistics operations and improve efficiency.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">TMS implementation and customization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Load planning and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Carrier management and rating</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">Analytics & Reporting</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Advanced analytics solutions that provide actionable insights to optimize logistics operations.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Performance dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Cost analysis tools</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Service level monitoring</span>
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
            WHY TORONTO LOGISTICS COMPANIES CHOOSE PC MECHANIX
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Industry Expertise</h3>
              <p className="text-gray-700">
                Deep understanding of logistics technology needs in the Toronto area.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Map className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Local Knowledge</h3>
              <p className="text-gray-700">
                Familiarity with Toronto's transportation landscape and logistics challenges.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <BarChart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Data-Driven Approach</h3>
              <p className="text-gray-700">
                Leveraging analytics to continuously improve logistics operations.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Smartphone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Mobile Expertise</h3>
              <p className="text-gray-700">
                Specialized knowledge in mobile solutions for on-the-go logistics teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <IndustryCTA
        heading="OPTIMIZE YOUR LOGISTICS OPERATIONS WITH TECHNOLOGY"
        description="Contact PC Mechanix today to discover how our specialized IT solutions can help your logistics business achieve greater efficiency and customer satisfaction."
      />
    </>
  );
}