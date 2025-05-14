import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies",
    price: "Starting at $999",
    link: "/services#web-development"
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications",
    price: "Starting at $1,499",
    link: "/services#mobile-apps"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment",
    price: "Custom pricing",
    link: "/services#cloud-solutions"
  }
]

export default function ServiceCard() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1A1F26]">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-[#E8ECEF] mb-12">
          Our Services
        </h2>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-[#2E353E] border-[#39FF85]">
              <CardHeader>
                <CardTitle className="text-[#E8ECEF]">{service.title}</CardTitle>
                <CardDescription className="text-[#A8E4A0]">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#E8ECEF] mb-4">{service.price}</p>
                <Link href={service.link}>
                  <Button className="w-full bg-[#39FF85] text-[#1A1F26] hover:bg-[#A8E4A0]">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 