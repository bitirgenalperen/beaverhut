import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const products = [
  {
    title: "BeaverCloud",
    description: "Enterprise cloud management platform",
    features: ["Auto-scaling", "Cost optimization", "Security monitoring"],
    link: "/products#beavercloud"
  },
  {
    title: "BeaverAnalytics",
    description: "Advanced data analytics solution",
    features: ["Real-time insights", "Custom dashboards", "AI predictions"],
    link: "/products#beaveranalytics"
  },
  {
    title: "BeaverSecure",
    description: "Comprehensive security suite",
    features: ["Threat detection", "Compliance monitoring", "Access control"],
    link: "/products#beaversecure"
  }
]

export default function ProductCard() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#2E353E]">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-[#E8ECEF] mb-12">
          Our Products
        </h2>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          {products.map((product, index) => (
            <Card key={index} className="bg-[#1A1F26] border-[#39FF85]">
              <CardHeader>
                <CardTitle className="text-[#E8ECEF]">{product.title}</CardTitle>
                <CardDescription className="text-[#A8E4A0]">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-[#E8ECEF] flex items-center">
                      <span className="text-[#39FF85] mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={product.link}>
                  <Button className="w-full bg-[#39FF85] text-[#1A1F26] hover:bg-[#A8E4A0]">
                    View Details
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