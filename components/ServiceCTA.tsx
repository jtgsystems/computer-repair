import { Button } from "@/components/ui/button"
import Link from "next/link";

interface ServiceCTAProps {
  text: string;
}

export default function ServiceCTA({ text }: ServiceCTAProps) {
  return (
    <Button
      size="lg"
      className="w-full md:w-auto text-base sm:text-lg font-semibold py-3 sm:py-4 min-h-[44px] shadow-md hover:shadow-lg transition-all duration-300 bg-primary hover:bg-white hover:text-primary"
      asChild
    >
      <Link href="/contact">
        {text}
      </Link>
    </Button>
  );
}

