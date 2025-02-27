import { Button } from "@/components/ui/button";

interface ServiceCTAProps {
  text: string;
}

export default function ServiceCTA({ text }: ServiceCTAProps) {
  return (
    <Button 
      size="lg" 
      className="w-full md:w-auto text-base sm:text-lg font-semibold py-3 sm:py-4 min-h-[44px] shadow-md hover:shadow-lg transition-all duration-300 bg-[#1D4D84] hover:bg-[#4B6E97]"
    >
      {text}
    </Button>
  );
}

import { Button } from "@/components/ui/button"

interface ServiceCTAProps {
  text: string
}

export default function ServiceCTA({ text }: ServiceCTAProps) {
  return (
    <Button 
      size="lg" 
      className="w-full md:w-auto text-base sm:text-lg font-semibold py-3 sm:py-4 min-h-[44px] shadow-md hover:shadow-lg transition-all duration-300"
    >
      {text}
    </Button>
  )
}

