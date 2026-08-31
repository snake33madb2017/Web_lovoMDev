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
    if (selectedRating === 5) {
      // Redirigir a Google Maps (URL de ejemplo, ajustar a la de Lovo Bar real)
      window.open("https://maps.google.com/?q=Lovo+Bar+Madrid", "_blank");
      setIsOpen(false);
      setRating(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se enviaría el feedback al backend/buzón interno
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
            ) : rating && rating < 5 ? (
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
          <Star size={20} fill="currentColor" />
          <span className="hidden sm:inline">¿Qué tal tu experiencia hoy?</span>
          <span className="sm:hidden">Califícanos</span>
        </button>
      )}
    </div>
  );
}
