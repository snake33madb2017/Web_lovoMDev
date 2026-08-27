import Image from "next/image";
import Link from "next/link";
import ArtDecoFrame from "@/components/ArtDecoFrame";

export default function Home() {
  return (
    <div className="text-white/90 relative">
      
      {/* Decorative Golden Animals */}
      <div className="absolute top-[30%] left-[10%] text-3xl opacity-60 rotate-45 pointer-events-none select-none z-10" style={{ background: 'linear-gradient(135deg, #F3E5AB 0%, #D3A548 50%, #8B6508 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        🦋
      </div>
      <div className="absolute top-[60%] right-[15%] text-2xl opacity-60 -rotate-12 pointer-events-none select-none z-10" style={{ background: 'linear-gradient(135deg, #F3E5AB 0%, #D3A548 50%, #8B6508 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        🐜
      </div>
      <div className="absolute top-[85%] left-[20%] text-4xl opacity-50 rotate-12 pointer-events-none select-none z-10" style={{ background: 'linear-gradient(135deg, #F3E5AB 0%, #D3A548 50%, #8B6508 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        🦋
      </div>
      <div className="absolute top-[15%] right-[25%] text-2xl opacity-50 rotate-90 pointer-events-none select-none z-10" style={{ background: 'linear-gradient(135deg, #F3E5AB 0%, #D3A548 50%, #8B6508 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        🐜
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4">
        {/* Background image of the bar and tables */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center z-[-2]"></div>
        {/* Dark overlay to ensure text is readable, blending with the starry global background */}
        <div className="absolute inset-0 bg-black/60 z-[-1] pointer-events-none"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto space-y-12 mt-16">
          <h1 className="text-6xl md:text-[8rem] font-playfair text-[#D3A548] tracking-widest drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
            LOVO
          </h1>
          <p className="text-xl md:text-3xl font-light tracking-[0.3em] drop-shadow-md text-white/90">
            COCKTAILS EN MADRID
          </p>
          <div className="w-16 h-[2px] bg-[#D3A548]"></div>
          <p className="text-lg md:text-2xl font-light leading-relaxed text-white/80 max-w-2xl px-4 font-playfair italic">
            "La inspiración por la alta gastronomía y la pasión por el sabor se unen para crear una Coctelería Emocional."
          </p>
          <div className="flex flex-col sm:flex-row gap-8 pt-8">
            <Link href="/reservar" className="border border-[#D3A548] text-[#D3A548] px-12 py-4 hover:bg-[#D3A548] hover:text-black transition-all duration-500 tracking-[0.2em] text-sm font-semibold uppercase backdrop-blur-sm bg-black/20">
              Reservar
            </Link>
          </div>
        </div>
      </section>

      {/* CARTA DE PLACERES Section */}
      <section className="py-24 md:py-32 px-4 relative border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ArtDecoFrame className="relative h-[600px] w-full order-2 lg:order-1 group">
             <Image 
                src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2057&auto=format&fit=crop" 
                alt="Cocktail elegante" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
             />
             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none"></div>
          </ArtDecoFrame>
          <div className="space-y-10 order-1 lg:order-2 lg:pl-12 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-playfair text-[#D3A548] leading-tight drop-shadow-lg">CARTA DE PLACERES<br/>DE JOSÉPHINE</h2>
            <div className="w-12 h-[2px] bg-[#D3A548] mx-auto lg:mx-0"></div>
            <p className="font-light text-xl md:text-2xl text-white/80 leading-relaxed font-playfair italic">
              Los placeres están dispuestos en la mesa, listos para la caza. Queremos verte libre, disfruta la experiencia.
            </p>
            <div className="pt-4">
              <Link href="/carta" className="inline-block border border-[#D3A548] text-[#D3A548] px-10 py-4 hover:bg-[#D3A548] hover:text-black transition-all duration-500 tracking-[0.2em] text-sm font-semibold uppercase backdrop-blur-sm bg-black/20">
                Ver la Carta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience / Eventos Section */}
      <section className="py-24 md:py-32 px-4 relative border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 lg:pr-12 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-playfair text-[#D3A548] leading-tight drop-shadow-lg">CENA Y FIESTA<br/>HASTA EL AMANECER</h2>
            <div className="w-12 h-[2px] bg-[#D3A548] mx-auto lg:mx-0"></div>
            <p className="font-light text-lg text-white/70 leading-relaxed">
              Descubre nuestros espacios, menús y experiencias para celebrar una noche inolvidable en LOVO. La hospitalidad se vive con autenticidad y la diversión fluye sin pausas. Dos ambientes y una experiencia pensada para vivir la ciudad desde el primer cóctel hasta la última copa.
            </p>
            <div className="pt-4">
              <Link href="/eventos" className="inline-block border border-[#D3A548] text-[#D3A548] px-10 py-4 hover:bg-[#D3A548] hover:text-black transition-all duration-500 tracking-[0.2em] text-sm font-semibold uppercase backdrop-blur-sm bg-black/20">
                Ver Dossier de Eventos
              </Link>
            </div>
          </div>
          <ArtDecoFrame className="relative h-[600px] w-full group">
             <Image 
                src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1974&auto=format&fit=crop" 
                alt="Lovo Bar Interior" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
             />
             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none"></div>
          </ArtDecoFrame>
        </div>
      </section>

      {/* Muse Section */}
      <section className="py-32 px-4 relative overflow-hidden border-t border-[#D3A548]/20 bg-black/60">
        
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <h2 className="text-4xl md:text-6xl font-playfair text-[#D3A548] drop-shadow-lg">LOVO & JOSÉPHINE BAKER</h2>
          <div className="w-16 h-[2px] bg-[#D3A548] mx-auto"></div>
          <div className="space-y-6 text-white/70 font-light text-lg leading-relaxed md:text-justify font-playfair italic px-4 md:px-12">
            <p>
              Toda bestia tiene su lado sensible, y de tal modo, nuestro LOVO tiene de musa a Joséphine Baker, una mujer que más allá de solo representar el amor, representa nuestra anhelada liberación.
            </p>
            <p>
              Joséphine es un icono de libertad y de cómo ésta se adquiere en los lugares más oscuros. Ella se autodenominaba un demonio, ya que así era como la apreciaban en su país natal.
            </p>
            <p>
              La noche trae consigo a nuestro yo liberado. Libre del yugo del día a día. Cae la noche y aparece nuestro más anhelado momento, salir al bar.
            </p>
          </div>
          <div className="pt-8">
             <Link href="/nuestra-tribu" className="inline-block border border-[#D3A548] text-[#D3A548] px-10 py-4 hover:bg-[#D3A548] hover:text-black transition-all duration-500 tracking-[0.2em] text-sm font-semibold uppercase backdrop-blur-sm bg-black/20">
              Conoce a la Tribu
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}
