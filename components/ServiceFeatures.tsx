import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  features: Feature[];
}

export default function ServiceFeatures({ features }: ServiceFeaturesProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center text-center p-4 sm:p-6 bg-[#F0F4FF] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <feature.icon className="h-8 w-8 sm:h-12 sm:w-12 text-primary mb-2 sm:mb-3" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#1D4D84]">{feature.title}</h3>
          <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}