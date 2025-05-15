import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css'
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BeaverHut",
  description: "Your trusted partner in technology solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0A0F14] min-h-screen`}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
