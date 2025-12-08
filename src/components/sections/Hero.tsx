import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/button";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { BackgroundBeams } from "../ui/background-beams";

export function Hero() {
  return (
    <div id="hero" className="h-screen w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center justify-center h-full pt-20 md:pt-0">
        
        <h1 className="font-heading text-5xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-4">
          DAV Labs <br /> 
        </h1>
        
        <p className="mt-6 font-normal text-lg md:text-xl text-neutral-300 max-w-2xl text-center mx-auto leading-relaxed">
          We build pixel-perfect digital experiences. From web development to
          data driven digital marketing 
        </p>
        
        <div className="flex justify-center mt-10 gap-6">
          <Link href="#contact">
            <span className="inline-flex h-14 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-lg cursor-pointer">
              Get Started
            </span>
          </Link>
          
          <Button asChild variant="outline" className="h-14 rounded-full px-8 border-slate-800 text-white hover:bg-slate-800 bg-transparent text-lg">
            <Link href="#work">
              View Work
            </Link>
          </Button>
           
        </div>
        
      </div>
      <BackgroundBeams/>
    </div>
  );
}