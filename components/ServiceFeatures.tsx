import type { LucideIcon } from "lucide-react"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface ServiceFeaturesProps {
  features: Feature[]
}

export default function ServiceFeatures({ features }: ServiceFeaturesProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <feature.icon className="h-12 w-12 text-primary mb-2" />
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  )
}

