import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Chairman from "@/components/sections/chairman";
import VisionMission from "@/components/sections/vision-mission";
import Goals from "@/components/sections/goals";
import Journey from "@/components/sections/journey";
import Services from "@/components/sections/services";
import Team from "@/components/sections/team";
import Cards from "@/components/sections/cards";
import Quote from "@/components/sections/quote";
import Contact from "@/components/sections/contact";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Chairman />
        <VisionMission />
        <Goals />
        <Journey />
        <Services />
        <Team />
        <Cards />
        <Quote />
        <Contact />
      </main>
    </div>
  );
}
