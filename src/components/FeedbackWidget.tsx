"use client";

import { useState } from "react";
import { Star, X, Send } from "lucide-react";

export default function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
    if (selectedRating >= 4) {
      // Redirigir a Google Maps (URL de ejemplo, ajustar a la de Lovo Bar real)
      window.open("https://maps.google.com/?q=Lovo+Bar+Madrid", "_blank");
      setIsOpen(false);
      setRating(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Usamos formsubmit.co para enviar el correo sin necesidad de backend
      await fetch("https://formsubmit.co/ajax/snake33madb@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Estrellas: rating,
            Comentario: feedbackText,
            _subject: `Nuevo feedback de ${rating} estrellas en Lovo Bar`,
            _template: "box"
        })
      });
    } catch (error) {
      console.error("Error enviando feedback:", error);
    }

    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setRating(null);
      setFeedbackText("");
    }, 3000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-72 bg-black border border-[#D3A548] rounded-2xl shadow-[0_4px_20px_rgba(211,165,72,0.3)] overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
          <div className="bg-[#D3A548]/10 p-4 border-b border-[#D3A548]/30 flex justify-between items-center">
            <h3 className="text-[#D3A548] font-playfair font-semibold">Tu experiencia</h3>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>
          
          <div className="p-4">
            {submitted ? (
              <div className="text-center py-4 text-white/90">
                <p>¡Gracias por ayudarnos a mejorar!</p>
              </div>
            ) : rating && rating < 4 ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <p className="text-sm text-white/80">Lamentamos que tu experiencia no haya sido perfecta. ¿Qué podemos mejorar?</p>
                <textarea 
                  className="w-full bg-white/5 border border-white/20 rounded-lg p-2 text-white text-sm outline-none focus:border-[#D3A548] transition-colors resize-none h-24"
                  placeholder="Cuéntanos más detalladamente..."
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  required
                />
                <button 
                  type="submit"
                  className="bg-[#D3A548] text-black font-semibold py-2 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-[#b58c3a] transition-colors"
                >
                  <Send size={14} /> Enviar al buzón
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center gap-3 py-2">
                <p className="text-sm text-white/80 text-center">¿Qué tal tu experiencia hoy? Califícanos aquí</p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button 
                      key={star}
                      onClick={() => handleStarClick(star)}
                      className="text-[#D3A548]/40 hover:text-[#D3A548] transition-all hover:scale-110"
                    >
                      <Star size={28} fill={rating && rating >= star ? "currentColor" : "none"} />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#D3A548] text-black font-bold px-4 py-3 md:px-5 md:py-3.5 rounded-full shadow-[0_0_15px_rgba(211,165,72,0.4)] flex items-center gap-2 hover:bg-[#b58c3a] hover:scale-105 transition-all duration-300 border border-yellow-200/50"
        >
          <div className="bg-white p-1 rounded-full flex items-center justify-center w-6 h-6 shadow-sm">
            <svg viewBox="0 0 48 48" className="w-4 h-4">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
          </div>
          <span className="hidden sm:inline">Déjanos tu reseña en Google</span>
          <span className="sm:hidden">Reseña Google</span>
        </button>
      )}
    </div>
  );
}
