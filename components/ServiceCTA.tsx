import { Button } from "@/components/ui/button"

interface ServiceCTAProps {
  text: string
}

export default function ServiceCTA({ text }: ServiceCTAProps) {
  return (
    <Button size="lg" className="w-full md:w-auto">
      {text}
    </Button>
  )
}

