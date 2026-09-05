"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "RESERVAR", href: "#" },
    { name: "CARTA", href: "/carta", hasDropdown: true },
    { name: "EVENTOS", href: "#" },
    { name: "NUESTRA TRIBU", href: "#" },
    { name: "BLOG", href: "#" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Lovo Bar Logo" width={100} height={40} className="object-contain h-10 w-auto drop-shadow-[0_0_8px_rgba(211,165,72,0.4)]" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link 
                  href={link.href} 
                  className="text-sm font-playfair font-semibold tracking-[0.15em] text-white/80 hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-1"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} className="text-[#D4AF37]" />}
                </Link>
                {/* Simple Dropdown placeholder for 'CARTA' */}
                {link.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-black border border-[#D4AF37]/30 py-2">
                    <Link href="/carta" className="block px-4 py-2 text-xs text-white/80 hover:text-[#D4AF37] hover:bg-white/5">Cócteles</Link>
                    <Link href="/vinos" className="block px-4 py-2 text-xs text-white/80 hover:text-[#D4AF37] hover:bg-white/5">Vinos y Champagne</Link>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Section (Search & Lang) */}
          <div className="hidden md:flex items-center space-x-6 text-white/80">
            <button className="hover:text-[#D4AF37] transition-colors">
              <Search size={18} />
            </button>
            <div className="flex items-center gap-2 border border-white/20 px-3 py-1.5 rounded bg-black/50 hover:border-[#D4AF37] transition-colors cursor-pointer">
              <span className="text-sm">🇪🇸</span>
              <span className="text-xs font-semibold">Spanish</span>
              <ChevronDown size={14} className="text-[#D4AF37]" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white/80 hover:text-[#D4AF37] transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="block text-sm font-playfair font-semibold tracking-widest text-white/80 hover:text-[#D4AF37]"
                  onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                >
                  {link.name} {link.hasDropdown && "▼"}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-4 mt-2 mb-4 space-y-3 border-l border-white/10">
                    <Link href="/carta" className="block text-xs text-white/60 hover:text-[#D4AF37]" onClick={() => setIsMobileMenuOpen(false)}>Cócteles</Link>
                    <Link href="/vinos" className="block text-xs text-white/60 hover:text-[#D4AF37]" onClick={() => setIsMobileMenuOpen(false)}>Vinos y Champagne</Link>
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button className="text-white/80 hover:text-[#D4AF37] flex items-center gap-2 text-sm font-playfair font-semibold tracking-widest">
                <Search size={16} /> BÚSQUEDA
              </button>
              <div className="flex items-center gap-2">
                <span className="text-sm">🇪🇸</span>
                <span className="text-xs font-semibold text-white/80">ES</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
