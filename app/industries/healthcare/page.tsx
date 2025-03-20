"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, CheckCircle, Shield, Database, Cloud, Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HealthcareIndustryPage() {
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
              IT SOLUTIONS FOR HEALTHCARE
            </h1>
            <p className="text-xl mb-8 text-shadow">
              Specialized technology services to support healthcare providers in the Greater Toronto Area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/healthcare-it.jpg"
                alt="Healthcare IT Solutions"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">
                TECHNOLOGY CHALLENGES IN HEALTHCARE
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                The healthcare industry faces unique technology challenges in today's digital environment. From electronic health records to telemedicine platforms, healthcare providers need robust IT solutions that enhance patient care while maintaining strict compliance with privacy regulations.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                In the Toronto area, healthcare organizations must leverage technology that enables secure data management, seamless communication, and efficient patient care workflows.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">Common Healthcare IT Challenges:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Maintaining PHIPA compliance and data security</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Integrating various healthcare systems and applications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Implementing reliable telemedicine solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Ensuring 24/7 system availability for critical care</span>
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
            OUR HEALTHCARE IT SOLUTIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">PHIPA Compliant Infrastructure</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Secure IT infrastructure designed to meet the strict requirements of the Personal Health Information Protection Act.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Compliant network architecture</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Secure data storage solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Regular compliance auditing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">Electronic Health Records</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Comprehensive EHR solutions that streamline patient information management and clinical workflows.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">EHR system implementation and support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Data migration and integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Custom workflow optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">Telemedicine Solutions</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Secure, reliable virtual care platforms that enhance patient access and provider efficiency.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">PHIPA-compliant video consultation platforms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Remote patient monitoring integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Virtual waiting room solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">Healthcare Data Security</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Advanced security solutions designed specifically for protecting sensitive patient information.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Multi-layered security architecture</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Encryption for data at rest and in transit</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Security awareness training for staff</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">Healthcare System Integration</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Seamless integration solutions that connect various healthcare systems for improved information flow.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Integration between EHR and practice management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Lab and diagnostic system connectivity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Health information exchange implementation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">Disaster Recovery</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Comprehensive disaster recovery solutions to ensure continuity of care during system disruptions.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Healthcare-specific DR planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Automated backup solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">Rapid recovery testing and validation</span>
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
            WHY TORONTO HEALTHCARE PROVIDERS CHOOSE PC MECHANIX
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Stethoscope className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Healthcare Expertise</h3>
              <p className="text-gray-700">
                Deep understanding of healthcare technology needs and regulatory requirements.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">PHIPA Compliance</h3>
              <p className="text-gray-700">
                Ensuring all solutions meet strict privacy and security regulations.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Cloud className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Reliable Solutions</h3>
              <p className="text-gray-700">
                High-availability systems designed for critical healthcare environments.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Lock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Data Protection</h3>
              <p className="text-gray-700">
                Advanced security measures to safeguard sensitive patient information.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#1D4D84] to-[#4B6E97] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">
            ENHANCE PATIENT CARE WITH ADVANCED TECHNOLOGY
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact PC Mechanix today to discover how our specialized IT solutions can help your healthcare organization improve patient care while maintaining strict regulatory compliance.
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