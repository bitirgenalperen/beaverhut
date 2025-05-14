import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Innovative Solutions",
    description: "Cutting-edge technology solutions tailored to your needs",
    icon: "🚀"
  },
  {
    title: "Expert Support",
    description: "24/7 technical support from our experienced team",
    icon: "💡"
  },
  {
    title: "Secure & Reliable",
    description: "Enterprise-grade security and reliability",
    icon: "🔒"
  }
]

export default function FeaturesCard() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#2E353E]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-[#1A1F26] border-[#39FF85]">
              <CardHeader>
                <div className="text-4xl mb-2">{feature.icon}</div>
                <CardTitle className="text-[#E8ECEF]">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#A8E4A0]">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 