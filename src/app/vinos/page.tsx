"use client";

import { useState } from "react";
import Image from "next/image";
import ArtDecoFrame from "@/components/ArtDecoFrame";

const placeholderImage = "https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?q=80&w=800&auto=format&fit=crop";

const menuData = [
  {
    id: "vinos-blancos",
    category: "Vinos Blancos",
    description: "Nuestra selección de vinos blancos",
    items: [
      { name: "José Pariente", price: "24€", origin: "Rueda", flavor: "VERDEJO", ingredients: "Fresco, afrutado y con un toque floral.", image: "https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?q=80&w=800&auto=format&fit=crop" },
      { name: "Terras Gauda", price: "28€", origin: "Rías Baixas", flavor: "ALBARIÑO", ingredients: "Complejo, con notas de manzana y melocotón.", image: placeholderImage },
    ]
  },
  {
    id: "vinos-tintos",
    category: "Vinos Tintos",
    description: "Nuestra selección de vinos tintos",
    items: [
      { name: "Pago de Carraovejas", price: "45€", origin: "Ribera del Duero", flavor: "TEMPRANILLO", ingredients: "Estructurado, notas de fruta madura y roble.", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop" },
      { name: "Marqués de Murrieta", price: "35€", origin: "Rioja", flavor: "TEMPRANILLO / GARNACHA", ingredients: "Clásico, equilibrado con aromas especiados.", image: placeholderImage },
    ]
  },
  {
    id: "champagne",
    category: "Champagne",
    description: "La magia de las burbujas",
    items: [
      { name: "Moët & Chandon Brut Imperial", price: "85€", origin: "Champagne, Francia", flavor: "BRUT", ingredients: "Vibrante, manzana verde y notas cítricas.", image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800&auto=format&fit=crop" },
      { name: "Veuve Clicquot Yellow Label", price: "95€", origin: "Champagne, Francia", flavor: "BRUT", ingredients: "Potente y complejo, con notas de vainilla.", image: placeholderImage },
      { name: "Dom Pérignon Vintage", price: "295€", origin: "Champagne, Francia", flavor: "BRUT VINTAGE", ingredients: "Excepcional, notas florales y tostadas.", image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800&auto=format&fit=crop" },
      { 
        name: "Perrier-Jouët Belle Epoque Rosé", 
        price: "1,5L", 
        origin: "Epernay, France", 
        flavor: "CHAMPAGNE BRUT", 
        ingredients: "Since 1811, the House of Perrier-Jouët has been elegantly nurturing its expertise by combining the exceptional quality of its vineyards with the subtle art of blending.", 
        image: "/Champagne/4 (1).jpg" 
      },
    ]
  }
];

export default function VinosPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen text-white/90 pt-32 pb-40 relative">
      
      {/* Header Section */}
      <div className="max-w-5xl mx-auto px-4 text-center space-y-8 mb-16">
        <h1 className="text-5xl md:text-7xl font-playfair text-[#D3A548] tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          VINOS Y CHAMPAGNE
        </h1>
        <div className="w-16 h-[2px] bg-[#D3A548] mx-auto"></div>
        <p className="text-lg md:text-xl font-light text-white/70 font-playfair italic max-w-2xl mx-auto">
          "El vino es la poesía de la tierra."
        </p>
      </div>

      {/* Menu Sections */}
      <div className="max-w-6xl mx-auto px-4 space-y-24">
        {menuData.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-32 space-y-12">
            
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-playfair text-[#D3A548] tracking-wider">{section.category}</h2>
              {section.description && (
                <p className="text-white/60 font-light tracking-wide italic">{section.description}</p>
              )}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12">
              {section.items.map((item, itemIdx) => (
                <ArtDecoFrame key={itemIdx} className="bg-white/[0.02]">
                  <div className="flex flex-col md:flex-row gap-6 p-2 md:p-4 h-full">
                    {/* Bottle Image */}
                    <div 
                      className="relative w-full md:w-48 h-64 md:h-auto cursor-pointer overflow-hidden group shrink-0 min-h-[200px]"
                      onClick={() => setSelectedImage(item.image)}
                    >
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white text-xs px-3 py-1 border border-[#D3A548] tracking-widest uppercase">
                          Ampliar
                        </span>
                      </div>
                    </div>

                    {/* Bottle Details */}
                    <div className="space-y-3 py-2 pr-2 flex-1 flex flex-col justify-center">
                      <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                        <h3 className="text-xl md:text-2xl font-playfair text-[#D3A548]">{item.name}</h3>
                        <span className="text-lg md:text-xl font-playfair text-[#D3A548] shrink-0 ml-4">{item.price}</span>
                      </div>
                      {item.origin && (
                        <p className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-white/50">{item.origin}</p>
                      )}
                      <p className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-[#D3A548]/70">
                        {item.flavor}
                      </p>
                      <p className="text-xs md:text-sm font-light text-white/80 leading-relaxed italic">
                        {item.ingredients}
                      </p>
                    </div>
                  </div>
                </ArtDecoFrame>
              ))}
            </div>

          </section>
        ))}
      </div>

      {/* App-like Floating Bottom Navigation */}
      <div className="fixed bottom-6 md:bottom-8 left-0 w-full z-40 flex justify-center pointer-events-none pb-safe">
        <div className="px-4 w-full max-w-lg flex justify-center">
          <div className="bg-black/95 backdrop-blur-md border border-[#D3A548]/40 p-4 md:p-6 rounded-[30px] grid grid-cols-3 gap-3 md:gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)] pointer-events-auto w-full">
            {menuData.map((section) => (
              <a 
                key={section.id} 
                href={`#${section.id}`}
                className="text-center border border-[#D3A548] text-[#D3A548] px-2 py-3 rounded-full hover:bg-[#D3A548] hover:text-black transition-all text-[10px] md:text-xs font-bold tracking-widest uppercase"
              >
                {section.category}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 transition-all"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 z-[110] text-[#D3A548] text-[80px] leading-none hover:scale-110 transition-transform cursor-pointer drop-shadow-[0_0_15px_rgba(0,0,0,1)] font-light"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            &times;
          </button>
          
          <div className="relative w-full max-w-3xl aspect-[3/4] md:aspect-square drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]" onClick={(e) => e.stopPropagation()}>
             <Image 
                src={selectedImage} 
                alt="Ampliado" 
                fill 
                className="object-contain"
             />
          </div>
        </div>
      )}

    </div>
  );
}
