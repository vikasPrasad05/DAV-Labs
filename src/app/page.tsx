import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact"; // New import
import { Footer } from "@/components/sections/Footer";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { InfiniteMovingCardsDemo } from "@/components/ace-com/InfitiniteMovingCards";
import { GoogleGeminiEffectDemo } from "@/components/ace-com/GoogleGeminiEffectDemo";
InfiniteMovingCardsDemo


export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased selection:bg-cyan-500 selection:text-cyan-900">
      <Navbar />
       
      <Hero />
     <TextHoverEffect text="DAV Labs"/>
     
      <Services />
      <Work />
      <InfiniteMovingCardsDemo />
      
      <Team />
      <Contact />
      <GoogleGeminiEffectDemo/>
      <Footer />
     
    </main>
  );
}