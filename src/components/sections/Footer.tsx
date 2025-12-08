import React from "react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-zinc-400 text-sm">
            © 2024 DAV Labs. All rights reserved.
        </div>
        <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Twitter</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">LinkedIn</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Instagram</a>
        </div>
      </div>
    </footer>
  );
}