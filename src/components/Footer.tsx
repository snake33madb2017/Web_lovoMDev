"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isCarta = pathname === '/carta';

  return (
    <footer className={`bg-black text-white/70 pt-16 border-t border-white/10 text-sm ${isCarta ? 'pb-48 md:pb-40' : 'pb-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          
          {/* Brand & Hours */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h2 className="text-2xl font-serif text-[#D4AF37] tracking-widest">LOVO</h2>
            <p className="font-light">DOM-JUE 17:00 - 5:00<br/>VIE-SÁB 17:00 - 6:00</p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-[#D4AF37] tracking-widest font-semibold text-xs mb-2">CONTACTO</h3>
            <p className="font-light">+34 910 41 62 98</p>
            <p className="font-light">reservas@lovobar.com</p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-[#D4AF37] tracking-widest font-semibold text-xs mb-2">DIRECCIÓN</h3>
            <p className="font-light max-w-[200px]">Calle de Echegaray, 20,<br/>28014 Madrid, España</p>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="text-[#D4AF37] tracking-widest font-semibold text-xs mb-2">LEGAL</h3>
            <a href="#" className="font-light hover:text-[#D4AF37] transition-colors">Condiciones de contratación</a>
            <a href="#" className="font-light hover:text-[#D4AF37] transition-colors">Aviso Legal</a>
            <a href="#" className="font-light hover:text-[#D4AF37] transition-colors">Política de Cookies</a>
            <a href="#" className="font-light hover:text-[#D4AF37] transition-colors">Política de Privacidad</a>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center font-light text-xs flex flex-col items-center gap-4">
          <span className="text-white/40">Desarrollado por @MDev - Marco Daza 2026</span>
        </div>
      </div>
    </footer>
  );
}
