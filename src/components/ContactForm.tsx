import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-[#E8ECEF]">Name</label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              className="bg-[#2E353E] border-[#39FF85] text-[#E8ECEF]"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-[#E8ECEF]">Email</label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              className="bg-[#2E353E] border-[#39FF85] text-[#E8ECEF]"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="text-[#E8ECEF]">Subject</label>
          <Input
            id="subject"
            type="text"
            placeholder="What is this regarding?"
            className="bg-[#2E353E] border-[#39FF85] text-[#E8ECEF]"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-[#E8ECEF]">Message</label>
          <Textarea
            id="message"
            placeholder="Your message..."
            className="bg-[#2E353E] border-[#39FF85] text-[#E8ECEF] min-h-[150px]"
          />
        </div>
        <Button className="w-full bg-[#39FF85] text-[#1A1F26] hover:bg-[#A8E4A0]">
          Send Message
        </Button>
      </form>
    </div>
  )
} 