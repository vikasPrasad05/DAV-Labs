import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact"; // New import
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased selection:bg-cyan-500 selection:text-cyan-900">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}