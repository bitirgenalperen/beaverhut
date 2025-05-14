# BeaverHut

## Color Palette


Below colors should be used:


- Primary Background (Dark Tone):
   + Midnight Charcoal: #1A1F26 (A deep, near-black gray with a subtle blue undertone for a sleek, modern feel that’s easy on the eyes.)
- Secondary Background/Accents:
   + Slate Shadow: #2E353E (A slightly lighter dark gray for card elements, modals, or sections to create depth without stark contrast.)
- Primary Accent (Neon Green - Nature/Forest Inspired):
   + Forest Neon: #39FF85 (A vibrant, electric green reminiscent of lush forest canopies under moonlight, perfect for buttons, highlights, or key text to evoke energy and nature.)
- Secondary Accent (Supporting Nature Theme):
   + Moss Glow: #A8E4A0 (A softer, more muted green for hover states, borders, or subtle gradients to complement the neon green and tie into the natural vibe.)
- Neutral/Utility Color:
   + Frost White: #E8ECEF (A crisp off-white for text, icons, or subtle dividers to ensure readability against the dark background without being harsh.)
- Tertiary Accent (Optional Pop of Contrast):
   + Twilight Blue: #4A90E2 (A deep yet vibrant blue for secondary CTAs, links, or subtle glow effects to add a techy AI feel while harmonizing with the dark and green tones.)


Usage Tips:
- Use Midnight Charcoal for the main background and Slate Shadow for layered elements like cards or sidebars.
- Apply Forest Neon sparingly for high-impact elements like primary buttons, active states, or key headlines to draw attention.
- Use Moss Glow for secondary accents like hover effects or progress bars to maintain cohesion.
- Frost White for body text and icons ensures contrast (WCAG-compliant for accessibility).
- Add Twilight Blue for minor accents, like link underlines or subtle glow effects around AI-related visuals, to enhance the tech vibe.




## Folder and File Structure


Folder and File structure should follow as below:


beaverhut/
├── app/
│   ├── layout.tsx          # Root layout with theme and navbar
│   ├── page.tsx            # Homepage composing sections
│   ├── products/
│   │   └── page.tsx        # Products page
│   ├── services/
│   │   └── page.tsx        # Services page
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   ├── api/
│   │   ├── newsletter/
│   │   │   └── route.ts    # API route for newsletter subscription
│   │   ├── contact/
│   │   │   └── route.ts    # API route for contact form
│   └── globals.css         # Global styles (Tailwind + custom)
├── components/
│   ├── ui/                 # shadcn/ui components (e.g., button.tsx)
│   ├── Navbar.tsx          # Navbar with links to all pages
│   ├── Footer.tsx          # Footer with links to all pages, social media, and newsletter
│   ├── Hero.tsx            # Hero section with basic newsletter form of Homepage
│   ├── FeaturesCard.tsx    # FeatureCard for Features section of Homepage
│   ├── Newsletter.tsx      # Newsletter used in Footer component
│   ├── ProductCard.tsx     # ProductCard for Products page content
│   ├── ServiceCard.tsx     # ServiceCard for Services page content
│   └── ContactForm.tsx     # Detailed Contact Form for Contact page
├── lib/
│   ├── email.ts            # Email sending utility using Resend
│   └── subscribers.ts      # Utility for managing newsletter subscribers
├── public/                 # Static assets (e.g., images)
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── .env.local              # Environment variables (Resend API key)
└── ...                     # Other Next.js files


app/api/: Added newsletter/route.ts and contact/route.ts for API endpoints.
lib/: New directory with email.ts (Resend email logic) and subscribers.ts (subscriber management).
data/: New directory with subscribers.json for storing newsletter emails.
components/: Updated Hero.tsx and Contact.tsx/ContactPage.tsx to include forms.
.env.local: Added for storing the Resend API key.

