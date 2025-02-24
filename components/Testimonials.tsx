import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface Testimonial {
  quote: string
  name: string
  title: string
  avatar: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <Card className="bg-white shadow-lg hover:shadow-xl border-l-4 border-[#1D4D84] transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="rounded-full mx-auto mb-4"
                    />
                    <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.title}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

export default Testimonials

