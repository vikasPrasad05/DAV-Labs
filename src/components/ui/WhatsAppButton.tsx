"use client";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export function WhatsAppButton() {
  // Replace with your actual number (include country code, no spaces/plus)
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER
  const message = "Hi DAV Labs, I'm interested in your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip text */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>

      {/* The Button */}
      <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] transition-all duration-300 hover:scale-110">
        
        {/* Animate Pulse Ring */}
        <div className="absolute inset-0 rounded-full border border-green-400 animate-ping opacity-75" />
        
        <IconBrandWhatsapp className="text-white w-8 h-8 relative z-10" stroke={2} />
      </div>
    </a>
  );
}