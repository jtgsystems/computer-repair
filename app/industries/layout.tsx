import ServiceLayout from "@/components/ServiceLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry-Specific IT Solutions | PC Mechanix",
  description: "Tailored IT services and solutions for specific industries in the Toronto area. PC Mechanix delivers industry-specific technology expertise.",
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ServiceLayout renderHeaderAndFooter={true}>
      <main className="flex-grow">{children}</main>
    </ServiceLayout>
  );
}