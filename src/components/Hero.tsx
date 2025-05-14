import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1A1F26] text-[#E8ECEF]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Welcome to BeaverHut
            </h1>
            <p className="mx-auto max-w-[700px] text-[#A8E4A0] md:text-xl">
              Your trusted partner in technology solutions. Stay updated with our latest news and offerings.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-[#2E353E] border-[#39FF85] text-[#E8ECEF]"
              />
              <Button className="bg-[#39FF85] text-[#1A1F26] hover:bg-[#A8E4A0]">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 