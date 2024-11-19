import { Star } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const courses = [
  {
    id: 1,
    title: "Three.js Domination",
    description: "Create web experiences people won't believe.",
    instructor: "Harsh Sharma",
    price: 2499,
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Animations", "3D", "Designing"],
    rating: 4.4,
    reviews: 3293,
    badge: "INDEPTH",
  },
  {
    id: 2,
    title: "Java & DSA Domination",
    description:
      "Ace your coding interviews! Master Java and DSA with our expert-led course, packed with interactive lessons and practice.",
    instructor: "Adarsh Gupta",
    price: 4999,
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Programming", "Logic Building"],
    rating: 4.6,
    reviews: 3925,
    badge: "INDEPTH",
  },
  {
    id: 3,
    title: "Back-End Domination: Create Efficient Back-End",
    description:
      "Ready to rule the digital world? Learn to build powerful back-ends that drive websites and apps smoothly. From databases to APIs.",
    instructor: "Harsh Sharma",
    price: 5999,
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Web Development", "Logic Building"],
    rating: 4.2,
    reviews: 1860,
    badge: "INDEPTH",
  },
];
export default function CoursesLandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Explore courses from experienced, real-world experts.
        </p>

        <div defaultValue="popular" className="mb-8 flex gap-4">
          <div>Most popular</div>
          <div>New</div>
          <div>Trending</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="bg-primary text-primary-foreground overflow-hidden border-0"
            >
              <div className="relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  {course.badge}
                </Badge>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-muted text-sm mb-4">{course.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-highlight text-highlight" />
                    <span className="ml-1">{course.rating}</span>
                  </div>
                  <span className="text-muted">({course.reviews})</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-muted">
                    By <span className="text-accent">{course.instructor}</span>
                  </div>
                  <div className="text-xl font-bold">₹{course.price}</div>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Buy Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
              <Star className="h-6 w-6 text-accent" />
            </div>
            <p className="text-muted-foreground">
              Learn in-demand skills with over 250,000 video courses
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
              <Star className="h-6 w-6 text-accent" />
            </div>
            <p className="text-muted-foreground">
              Choose courses taught by real-world experts
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
              <Star className="h-6 w-6 text-accent" />
            </div>
            <p className="text-muted-foreground">
              Learn at your own pace, with lifetime access on mobile and desktop
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
