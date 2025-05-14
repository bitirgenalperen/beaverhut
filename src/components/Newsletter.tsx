import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <div className="w-full">
      <form className="flex flex-col space-y-2">
        <Input
          type="email"
          placeholder="Enter your email"
          className="bg-[#2E353E] border-[#39FF85] text-[#E8ECEF]"
        />
        <Button className="bg-[#39FF85] text-[#1A1F26] hover:bg-[#A8E4A0]">
          Subscribe to Newsletter
        </Button>
      </form>
      <p className="mt-2 text-sm text-[#A8E4A0]">
        Stay updated with our latest news and offerings.
      </p>
    </div>
  )
} 