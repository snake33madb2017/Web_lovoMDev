"use client";

import { useState } from "react";
import { Send, MessageSquare } from "lucide-react";

export default function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");

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
            Asunto: "Sugerencia Privada",
            Comentario: feedbackText,
            _subject: `Sugerencia privada en Lovo Bar`,
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
      setFeedbackText("");
    }, 3000);
  };

  return (
    <div className="w-full flex flex-col items-center gap-3 mt-2 animate-in fade-in">
      {!isOpen && !submitted && (
        <div className="flex flex-row gap-3 w-full justify-center">
          <a 
            href="https://maps.google.com/?q=Lovo+Bar+Madrid" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-transparent border border-white/20 text-white font-medium px-4 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transition-colors text-xs shadow-sm"
          >
            <div className="bg-white p-0.5 rounded-full flex items-center justify-center w-5 h-5 shadow-sm">
              <svg viewBox="0 0 48 48" className="w-3.5 h-3.5">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
            </div>
            Reseña Google
          </a>
          <button 
            onClick={() => setIsOpen(true)}
            className="bg-transparent border border-white/20 text-white/80 font-medium px-4 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-white/10 hover:text-white transition-colors text-xs"
          >
            <MessageSquare size={14} />
            Buzón privado
          </button>
        </div>
      )}

      {isOpen && !submitted && (
        <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-2 bg-white/5 border border-white/10 rounded-xl p-3 animate-in fade-in slide-in-from-bottom-2">
          <p className="text-xs text-white/70 text-center">Ayúdanos a mejorar. Este mensaje es privado.</p>
          <textarea 
            className="w-full bg-white/5 border border-white/20 rounded-lg p-2 text-white text-xs outline-none focus:border-[#D3A548] transition-colors resize-none h-16"
            placeholder="¿Qué podemos mejorar?"
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            required
          />
          <div className="flex gap-2 justify-end mt-1">
            <button 
              type="button"
              onClick={() => setIsOpen(false)}
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
