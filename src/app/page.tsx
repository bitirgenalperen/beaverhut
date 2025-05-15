import Hero from "@/components/Hero";
import FeaturesCard from "@/components/FeaturesCard";
import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <FeaturesCard />
      <ServiceCard />
      <ProductCard />
      <Footer />
    </main>
  );
}
