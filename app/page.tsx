import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Menu />
      <Hero />
    </div>
  );
}
