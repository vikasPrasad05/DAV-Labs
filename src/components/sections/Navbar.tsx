"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // These come with lucide-react (installed by Shadcn)

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#hero" },
    { name: "Services", link: "#services" },
    { name: "Work", link: "#work" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="fixed top-4 inset-x-0 max-w-2xl mx-auto z-50 px-4">
      <div className="relative rounded-full border border-white/10 bg-black/50 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-white font-bold text-lg tracking-wider cursor-pointer">
          DAV <span className="text-cyan-500">Labs</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
            className="md:hidden text-zinc-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-20 inset-x-4 p-4 rounded-2xl bg-black/90 border border-white/10 backdrop-blur-xl md:hidden flex flex-col gap-4">
            {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-sm font-medium text-zinc-300 hover:text-cyan-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}