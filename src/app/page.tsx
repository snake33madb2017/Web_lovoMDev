import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Phone, Mail, Star } from "lucide-react";
import FeedbackWidget from "@/components/FeedbackWidget";

export default function Home() {
  return (
    <main className="fixed inset-0 h-[100dvh] z-[100] flex flex-col bg-black overflow-hidden">
      {/* Mitad Superior: Imagen a pantalla completa con degradado */}
      <div className="relative h-[40%] md:h-[55%] w-full shrink-0">
        <Image
          src="/portada.jpg"
          alt="Lovo Cocktails Bar"
          fill
          className="object-cover"
          priority
        />
        {/* Capa de degradado suave hacia negro */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20"></div>
        
      </div>

      {/* Mitad Inferior: Info y Botones Masivos */}
      <div className="relative flex-1 bg-black flex flex-col items-center justify-evenly px-4 py-4 md:pb-12 w-full max-w-2xl mx-auto z-20">
        
        {/* Títulos agrupados */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-6xl font-playfair text-[#D3A548] tracking-[0.2em] drop-shadow-md mb-1 md:mb-2 mt-2 md:mt-0">
            LOVO
          </h1>
          <h2 className="text-lg md:text-3xl font-playfair text-white italic font-light drop-shadow-md leading-tight">
            La mejor coctelería,<br />
            <span className="text-[#D3A548]">preparada en el momento</span>
          </h2>
        </div>

        {/* Info Horario y Ubicación */}
        <div className="w-full flex justify-between text-white/80 text-xs md:text-sm font-light px-1">
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-1.5 text-[#D3A548] font-semibold mb-1">
              <Clock size={16} /> Horario
            </div>
            <span>DOM-JUE: 17:00 - 5:00</span>
            <span>VIE-SÁB: 17:00 - 6:00</span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-1.5 text-[#D3A548] font-semibold mb-1">
              <MapPin size={16} /> Ubicación
            </div>
            <span>Calle de Echegaray, 20</span>
            <span>28014 Madrid, España</span>
          </div>
        </div>

        {/* Botones de Acción Estilo Píldora */}
        <div className="w-full flex flex-col gap-2 md:gap-4">
          <Link href="https://lovobar.com/reservas-lovo/" target="_blank" className="w-full flex items-center justify-center bg-[#D3A548] text-black rounded-full py-2.5 md:py-5 text-sm md:text-base font-bold tracking-widest uppercase hover:bg-[#b58c3a] transition-all shadow-[0_4px_20px_rgba(211,165,72,0.3)]">
            Reserva una mesa
          </Link>
          <Link href="/carta" className="w-full flex items-center justify-center bg-transparent border border-[#D3A548] text-[#D3A548] rounded-full py-2.5 md:py-5 text-sm md:text-base font-bold tracking-widest uppercase hover:bg-[#D3A548]/10 transition-all">
            Carta
          </Link>
        </div>

        {/* Enlaces de Contacto y Footer agrupados */}
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap">
            <Link href="tel:+34910416298" className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-[#D3A548]/30 flex items-center justify-center text-[#D3A548] hover:bg-[#D3A548] hover:text-black hover:scale-110 transition-all duration-300">
              <Phone size={18} className="md:w-[22px] md:h-[22px]" />
            </Link>
            <Link href="mailto:reservas@lovobar.com" className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-[#D3A548]/30 flex items-center justify-center text-[#D3A548] hover:bg-[#D3A548] hover:text-black hover:scale-110 transition-all duration-300">
              <Mail size={18} className="md:w-[22px] md:h-[22px]" />
            </Link>
            <Link href="https://www.tripadvisor.es/Attraction_Review-g187514-d23822109-Reviews-Lovo_Bar-Madrid.html" target="_blank" className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-[#D3A548]/30 flex items-center justify-center text-[#D3A548] hover:bg-[#D3A548] hover:text-black hover:scale-110 transition-all duration-300">
              <Star size={18} className="md:w-[22px] md:h-[22px]" />
            </Link>
            <Link href="https://www.instagram.com/lovobarmadrid/" target="_blank" className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-[#D3A548]/30 flex items-center justify-center text-[#D3A548] hover:bg-[#D3A548] hover:text-black hover:scale-110 transition-all duration-300">
              <svg width="18" height="18" className="md:w-[22px] md:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </Link>
          </div>

          <div className="text-[10px] text-white/40 text-center font-light tracking-wide w-full">
            Desarrollado por @MDev - Marco Daza 2026
          </div>
        </div>
      </div>
      <FeedbackWidget />
    </main>
  );
}
