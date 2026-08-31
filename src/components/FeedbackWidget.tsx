"use client";

import { useState } from "react";
import { Star, Send } from "lucide-react";

export default function FeedbackWidget() {
  const [rating, setRating] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
    if (selectedRating >= 4) {
      window.open("https://maps.google.com/?q=Lovo+Bar+Madrid", "_blank");
      // Reseteamos después de un tiempo corto
      setTimeout(() => setRating(null), 2000);
    } else {
      setShowForm(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await fetch("https://formsubmit.co/ajax/snake33madb@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Estrellas: rating,
            Comentario: feedbackText,
            _subject: `Feedback de ${rating} estrellas en Lovo Bar`,
            _template: "box"
        })
      });
    } catch (error) {
      console.error("Error enviando feedback:", error);
    }

    setSubmitted(true);
    setShowForm(false);
    setTimeout(() => {
      setSubmitted(false);
      setRating(null);
      setFeedbackText("");
    }, 3000);
  };

  return (
    <div className="w-full flex flex-col items-center gap-3 mt-4 animate-in fade-in">
      {!showForm && !submitted && (
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs md:text-sm text-white/80 font-medium">¿Qué tal tu experiencia hoy? Califícanos aquí</p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button 
                key={star}
                onClick={() => handleStarClick(star)}
                className="text-[#D3A548]/40 hover:text-[#D3A548] transition-all hover:scale-110"
              >
                <Star size={26} fill={rating && rating >= star ? "currentColor" : "none"} />
              </button>
            ))}
          </div>
        </div>
      )}

      {showForm && !submitted && (
        <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-2 bg-white/5 border border-white/10 rounded-xl p-3 animate-in fade-in slide-in-from-bottom-2">
          <p className="text-xs text-white/70 text-center">Lamentamos que no haya sido perfecta. ¿Qué podemos mejorar?</p>
          <textarea 
            className="w-full bg-white/5 border border-white/20 rounded-lg p-2 text-white text-xs outline-none focus:border-[#D3A548] transition-colors resize-none h-16"
            placeholder="Escribe tu sugerencia aquí..."
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            required
          />
          <div className="flex gap-2 justify-end mt-1">
            <button 
              type="button"
              onClick={() => {
                setShowForm(false);
                setRating(null);
              }}
              className="text-xs text-white/50 hover:text-white/80 transition-colors px-2"
            >
              Cancelar
            </button>
            <button 
              type="submit"
              className="bg-[#D3A548] text-black font-semibold py-1.5 px-3 rounded-lg text-xs flex items-center justify-center gap-1 hover:bg-[#b58c3a] transition-colors"
            >
              <Send size={12} /> Enviar
            </button>
          </div>
        </form>
      )}

      {submitted && (
        <div className="w-full text-center py-2 text-[#D3A548] text-sm animate-in fade-in">
          <p>¡Gracias por ayudarnos a mejorar!</p>
        </div>
      )}
    </div>
  );
}
