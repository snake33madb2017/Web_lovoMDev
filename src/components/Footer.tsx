"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { MapPin, Clock, Phone, Mail, Star } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  const isCarta = pathname === '/carta';

  return (
    <footer className={`bg-black w-full border-t border-[#D3A548]/20 ${isCarta ? 'pb-48 md:pb-40' : 'pb-8'} pt-12`}>
      <div className="max-w-2xl mx-auto px-4 flex flex-col items-center gap-12">
        
        {/* Info Horario y Ubicación */}
        <div className="w-full flex justify-between text-white/80 text-xs md:text-sm font-light px-1">
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-1.5 text-[#D3A548] font-semibold mb-1">
              <Clock size={16} /> Horario
            </div>
            <span>DOM-JUE: 17:00 - 5:00</span>
            <span>VIE-SÁB: 17:00 - 6:00</span>
          </div>
          <div className="flex flex-col items-start gap-1 text-right sm:text-left">
            <div className="flex items-center justify-end sm:justify-start gap-1.5 text-[#D3A548] font-semibold mb-1 w-full">
              <MapPin size={16} /> Ubicación
            </div>
            <span className="w-full">Calle de Echegaray, 20</span>
            <span className="w-full">28014 Madrid, España</span>
          </div>
        </div>

        {/* Enlaces de Contacto y Footer agrupados */}
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="tel:+34910416298" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#D3A548]/30 flex items-center justify-center text-[#D3A548] hover:bg-[#D3A548] hover:text-black hover:scale-110 transition-all duration-300">
              <Phone size={18} className="md:w-[22px] md:h-[22px]" />
            </Link>
            <Link href="mailto:reservas@lovobar.com" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#D3A548]/30 flex items-center justify-center text-[#D3A548] hover:bg-[#D3A548] hover:text-black hover:scale-110 transition-all duration-300">
              <Mail size={18} className="md:w-[22px] md:h-[22px]" />
            </Link>
            <Link href="https://www.tripadvisor.es/Attraction_Review-g187514-d23822109-Reviews-Lovo_Bar-Madrid.html" target="_blank" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#D3A548]/30 flex items-center justify-center text-[#D3A548] hover:bg-[#D3A548] hover:text-black hover:scale-110 transition-all duration-300">
              <Star size={18} className="md:w-[22px] md:h-[22px]" />
            </Link>
            <Link href="https://www.instagram.com/lovobarmadrid/" target="_blank" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#D3A548]/30 flex items-center justify-center text-[#D3A548] hover:bg-[#D3A548] hover:text-black hover:scale-110 transition-all duration-300">
              <svg width="18" height="18" className="md:w-[22px] md:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </Link>
          </div>

          <div className="text-[10px] text-white/40 text-center font-light tracking-wide w-full">
            Desarrollado por @MDev - Marco Daza 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
