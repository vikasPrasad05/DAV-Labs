import React from "react";
import {
  IconAppWindow,
  IconBrandInstagram,
  IconShoppingCart,
  IconDeviceMobile,
  IconSpeakerphone,
  IconWorld,
} from "@tabler/icons-react";
import { TiltCard } from "@/components/ui/TileCard";
import { TextReveal } from "../ui/TextReveal";

export function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 py-20 relative z-10">
      <TextReveal className="font-heading text-3xl md:text-5xl font-bold text-foreground text-center mb-12 justify-center">
        Our Services
      </TextReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto perspective-1000">

        {/* 1. Modern Landing Pages (Big - Wide) */}
        <TiltCard className="md:col-span-2 relative overflow-hidden rounded-3xl border border-border bg-card hover:bg-accent/50 p-8 hover:border-cyan-500/50 transition-colors duration-500 group flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative z-10">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Modern Landing Pages</h3>
            <p className="text-muted-foreground max-w-md">
              High-impact designs for <strong>new age companies</strong>. We build responsive, high-converting digital experiences.
            </p>
          </div>
          <div className="bg-accent p-4 rounded-full group-hover:bg-cyan-500/20 transition-colors relative z-10">
            <IconAppWindow className="text-muted-foreground group-hover:text-cyan-500 transition-colors" size={32} />
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/20 blur-[60px] rounded-full group-hover:bg-cyan-500/30 transition-all duration-500" />
        </TiltCard>

        {/* 2. Shopify Store (Small) */}
        <TiltCard className="relative overflow-hidden rounded-3xl border border-border bg-card hover:bg-accent/50 p-6 hover:border-green-500/50 transition-colors duration-500 group">
          <IconShoppingCart className="text-muted-foreground mb-4 group-hover:text-green-500 transition-colors" size={32} />
          <h3 className="font-heading text-lg font-bold text-foreground">Shopify Store</h3>
          <p className="text-muted-foreground text-sm mt-2">Custom design & payment integration.</p>
          <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </TiltCard>

        {/* 3. Social Media & Content (Small) */}
        <TiltCard className="relative overflow-hidden rounded-3xl border border-border bg-card hover:bg-accent/50 p-6 hover:border-pink-500/50 transition-colors duration-500 group">
          <IconBrandInstagram className="text-muted-foreground mb-4 group-hover:text-pink-500 transition-colors" size={32} />
          <h3 className="font-heading text-lg font-bold text-foreground">Social Media & Content</h3>
          <p className="text-muted-foreground text-sm mt-2">Management & creative content creation.</p>
          <div className="absolute inset-0 bg-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </TiltCard>

        {/* 4. Custom App Solutions (Big - Wide) */}
        <TiltCard className="md:col-span-2 relative overflow-hidden rounded-3xl border border-border bg-card hover:bg-accent/50 p-8 hover:border-blue-500/50 transition-colors duration-500 group flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative z-10">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Custom App Solutions</h3>
            <p className="text-muted-foreground max-w-md">
              Tailored mobile & web applications built to scale with your business needs.
            </p>
          </div>
          <div className="bg-accent p-4 rounded-full group-hover:bg-blue-500/20 transition-colors relative z-10">
            <IconDeviceMobile className="text-muted-foreground group-hover:text-blue-500 transition-colors" size={32} />
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/20 blur-[60px] rounded-full group-hover:bg-blue-500/30 transition-all duration-500" />
        </TiltCard>

        {/* 5. Custom Website Development (Big - Wide) */}
        <TiltCard className="md:col-span-2 relative overflow-hidden rounded-3xl border border-border bg-card hover:bg-accent/50 p-8 hover:border-purple-500/50 transition-colors duration-500 group flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative z-10">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Custom Website Development</h3>
            <p className="text-muted-foreground max-w-md">
              Bespoke website solutions developed according to your specific business needs and requirements.
            </p>
          </div>
          <div className="bg-accent p-4 rounded-full group-hover:bg-purple-500/20 transition-colors relative z-10">
            <IconWorld className="text-muted-foreground group-hover:text-purple-500 transition-colors" size={32} />
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/20 blur-[60px] rounded-full group-hover:bg-purple-500/30 transition-all duration-500" />
        </TiltCard>

        {/* 6. Facebook & Google Ads (Small) */}
        <TiltCard className="relative overflow-hidden rounded-3xl border border-border bg-card hover:bg-accent/50 p-6 hover:border-orange-500/50 transition-colors duration-500 group">
          <IconSpeakerphone className="text-muted-foreground mb-4 group-hover:text-orange-500 transition-colors" size={32} />
          <h3 className="font-heading text-lg font-bold text-foreground">Ads Campaign</h3>
          <p className="text-muted-foreground text-sm mt-2">Facebook & Google Ads for maximum ROI.</p>
          <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </TiltCard>

      </div>
    </section>
  );
}