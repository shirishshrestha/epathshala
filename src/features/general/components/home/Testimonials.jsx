import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    course: "Web Development",
    text: "EPathshala has transformed my learning experience. The courses are well-structured and the instructors are top-notch.",
  },
  {
    name: "Jane Smith",
    course: "Data Science",
    text: "I've learned more in 3 months with EPathshala than I did in a year of self-study. The platform is intuitive and the content is cutting-edge.",
  },
  {
    name: "Alex Johnson",
    course: "Digital Marketing",
    text: "The practical projects and real-world applications in EPathshala's courses have given me a significant edge in my career.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 !pb-6 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-center">
          What Our Students Say
        </h2>
        <Carousel
          className="w-full max-w-5xl mx-auto "
          opts={{
            align: "start",
            loop: true,
          }}
          data-carousel
        >
          <CarouselContent className="-ml-2  md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-2  md:pl-4 md:basis-1/2 h-full"
                data-carousel-item
              >
                <Card className="w-full bg-primary text-primary-foreground ">
                  <CardHeader className="py-4 ">
                    <CardTitle>{testimonial.name}</CardTitle>
                    <CardDescription className="text-primary-foreground ">
                      {testimonial.course}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <p className="">&quot;{testimonial.text}&quot;</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center gap-[0.1rem]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 fill-yellow-400 stroke-yellow-400"
                        />
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};