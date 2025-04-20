import { Button } from "@/components/ui/button";
import Link from "next/link";

interface IndustryCTAProps {
  heading: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export default function IndustryCTA({
  heading,
  description,
  primaryCTA = { text: "Schedule a Consultation", href: "/contact" },
  secondaryCTA = { text: "Explore Other Industries", href: "/industries" },
}: IndustryCTAProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-[#1D4D84] to-[#4B6E97] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">
          {heading}
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 shadow-lg transition-colors duration-300"
            asChild
          >
            <Link href={primaryCTA.href}>
              {primaryCTA.text}
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-white hover:bg-white hover:text-primary border-white shadow-lg transition-colors duration-300"
            asChild
          >
            <Link href={secondaryCTA.href}>
              {secondaryCTA.text}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}