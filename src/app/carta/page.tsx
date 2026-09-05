"use client";

import { useState } from "react";
import Image from "next/image";
import ArtDecoFrame from "@/components/ArtDecoFrame";
import { X } from "lucide-react";

// Using high-quality unsplash placeholders for cocktails
const placeholderImage = "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2057&auto=format&fit=crop";

const menuData = [
  {
    id: "las-tribus",
    category: "Las Tribus",
    description: "Nuestra carta inspirada en las Tribus – Utopía Cultural",
    items: [
      { name: "Bubi", price: "12€", origin: "Isla de Bioko, Costa Oeste de África Central", flavor: "DULCE / REFRESCANTE", ingredients: "Ron Arehucas | Contrití | Platano | Cacao | King Sawa | Ginger Beer", image: "/cocteles/lovo_bubi.webp" },
      { name: "Manabi", price: "13€", origin: "Selvas tropicales de América central", flavor: "AFRUTADO / PICANTE", ingredients: "Ron Bumbu | Piña Centrifugada | Tomate de Árbol | Cacahuete | Coco | Espuma Picante", image: "/cocteles/lovo_manabi.webp" },
      { name: "Inuit", price: "13€", origin: "Ártico norteamericano y Groenlandia", flavor: "CITRICO", ingredients: "Martin Miller's Gin | Licor Salmón & Eneldo | King Sawa | Ruibarbo Bitter", image: "/cocteles/lovo_inuit.webp" },
      { name: "Maori", price: "13€", origin: "Islas del Pacífico Sur", flavor: "CITRICO / REFRESCANTE", ingredients: "Roku Gin | Matcha | Licor Kaffir | Hojas Verdes | Lima | Soda Higuera", image: "/cocteles/Cocktail_Maori.webp" },
    ]
  },
  {
    id: "animal-totem",
    category: "Animal Tótem",
    description: "Energías protectoras y espíritus guía representados en cada trago",
    items: [
      { name: "NGI", price: "13€", origin: "Oeste de África - Energía de paz y autocontrol", flavor: "TOSTADO / COMPLEJO", ingredients: "Brandy Fundador 12 | Cacao | Guinness | King Sawa | Espuma De Banana Ácida", image: "/cocteles/lovo_ngi.webp" },
      { name: "Boazu", price: "12€", origin: "Norte de Europa - Poder personal", flavor: "DULCE / VINICO", ingredients: "Ron Abuelo | Pinot Charentes Fino | Bitter De Nuez | Cordial De Fresas", image: "/cocteles/lovo_boazu.webp" },
      { name: "Tl'iish", price: "13€", origin: "Tótem de transmutación e inmortalidad", flavor: "DULCE / ESPECIADO", ingredients: "Ron Sta.Teresa 1796 | Nuez Moscada King Sawa | Peras Al Horno", image: "/cocteles/lovo_tliish.webp" },
      { name: "Shunme", price: "14€", origin: "Libertad y clarividencia", flavor: "HERBAL / AHUMADO / REFRESCANTE", ingredients: "Laphroaig Whiskey | Lovo Herbal Liquor | Hierba Luisa | King Sawa | Humo | Soda Higuera", image: "/cocteles/Cocktail_Shunme.webp" },
    ]
  },
  {
    id: "lovo-bar-tribe",
    category: "Lovo Bar Tribe",
    description: "Creaciones en honor a las coctelerías amigas alrededor del mundo",
    items: [
      { name: "Sencha By Handshake", price: "14€", origin: "Handshake, México", flavor: "REFRESCANTE / ASTRINGENTE", ingredients: "Maestro Dobel Tequila | Sake Cordial Te Verde Hojicha | Yuzu", image: placeholderImage },
      { name: "Tomato & Strawberry", price: "13€", origin: "Svanen, Oslo", flavor: "CITRICO / LIGERO HUMAMI", ingredients: "Ginebra Tanqueray | Fresas | Amontillado Martini Bitter | Tomate | Lima", image: "/cocteles/Cocktail_TomatoStrawberry-scaled.webp" },
      { name: "EO-Manhattan", price: "15€", origin: "Employees Only, New York City", flavor: "FUERTE", ingredients: "Mitchers Rye | Cocchi Rosso | Grand Marnier Angostura | Twist De Limón", image: placeholderImage },
    ]
  },
  {
    id: "lovo-lovers",
    category: "Lovo Lovers",
    description: "Nuestros clásicos y creaciones inspiradas en la vida de Josephine",
    items: [
      { name: "Jupe Banane", price: "12€", origin: "Icónico y dulce, como la Baker", flavor: "DULCE", ingredients: "Vodka Grey Goose | Yogur | Fresa & frambuesa | Plátano maduro | Limón", image: "/cocteles/lovo-bar-madrid-50-best-bars-jupe-banane-1.webp" },
      { name: "Devil", price: "13€", origin: "Un apodo amargo que esconde dulzura", flavor: "AMARGO", ingredients: "Whisky Hibiki Harmony | Disaronno Originale | Campari | Algarroba | Cinzano | Ruibarbo", image: placeholderImage },
      { name: "Jazz Cleopatra", price: "13€", origin: "La era del jazz y la Baker su reina", flavor: "AFRUTADO / AHUMADO / COMPLEJO", ingredients: "Mezcal 400 Conejos | Coco | Piña | Guayaba | Citric soul | Chipotle", image: placeholderImage },
    ]
  }
];

export default function CartaPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen text-white/90 pt-32 pb-40 relative">
      
      {/* Header Section */}
      <div className="max-w-5xl mx-auto px-4 text-center space-y-8 mb-16">
        <h1 className="text-5xl md:text-7xl font-playfair text-[#D3A548] tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          CARTA
        </h1>
        <div className="w-16 h-[2px] bg-[#D3A548] mx-auto"></div>
        <p className="text-lg md:text-xl font-light text-white/70 font-playfair italic max-w-2xl mx-auto">
          "Los placeres están dispuestos en la mesa, o están listos para la caza, como sea la travesía será increíble."
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
                    {/* Cocktail Image */}
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

                    {/* Cocktail Details */}
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

      {/* App-like Floating Bottom Navigation (Grid layout to prevent horizontal scroll) */}
      <div className="fixed bottom-6 md:bottom-8 left-0 w-full z-40 flex justify-center pointer-events-none pb-safe">
        <div className="px-4 w-full max-w-lg flex justify-center">
          <div className="bg-black/95 backdrop-blur-md border border-[#D3A548]/40 p-4 md:p-6 rounded-[30px] grid grid-cols-2 gap-3 md:gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)] pointer-events-auto w-full">
            {menuData.map((section) => (
              <a 
                key={section.id} 
                href={`#${section.id}`}
                className="text-center border border-[#D3A548] text-[#D3A548] px-2 py-3 rounded-full hover:bg-[#D3A548] hover:text-black transition-all text-[11px] md:text-sm font-bold tracking-widest uppercase"
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
          {/* Large Golden X Button (HTML character to guarantee rendering) */}
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 z-[110] text-[#D3A548] text-[80px] leading-none hover:scale-110 transition-transform cursor-pointer drop-shadow-[0_0_15px_rgba(0,0,0,1)] font-light"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            &times;
          </button>
          
          <div className="relative w-full max-w-3xl aspect-[3/4] md:aspect-square drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]" onClick={(e) => e.stopPropagation()}>
             <Image 
                src={selectedImage} 
                alt="Cocktail Ampliado" 
                fill 
                className="object-contain"
             />
          </div>
        </div>
      )}

    </div>
  );
}
