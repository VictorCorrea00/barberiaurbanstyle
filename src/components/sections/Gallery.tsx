"use client";

import { motion } from "framer-motion";
import { Maximize2, ExternalLink, Sparkles } from "lucide-react";

const galleryImages = [
  {
    url: "https://acyyffohsqxabkksvpae.supabase.co/storage/v1/object/sign/web/Captura%20de%20pantalla%202026-06-14%20092056.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mNjg5Yjc5My03NzdhLTRlNDUtOTEzYy05ZjIwZGQ5ZTliZDciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvQ2FwdHVyYSBkZSBwYW50YWxsYSAyMDI2LTA2LTE0IDA5MjA1Ni5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxNjIzMDk0LCJleHAiOjE4MTMxNTkwOTR9.wtl-zBPztYsR2wftpyUOLBhU-NRiYxE0H91RZ-wIHpU",
    category: "Corte Moderno",
    title: "Side Part Executivo",
  },
  {
    url: "https://acyyffohsqxabkksvpae.supabase.co/storage/v1/object/sign/web/Captura%20de%20pantalla%202026-06-14%20091959.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mNjg5Yjc5My03NzdhLTRlNDUtOTEzYy05ZjIwZGQ5ZTliZDciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvQ2FwdHVyYSBkZSBwYW50YWxsYSAyMDI2LTA2LTE0IDA5MTk1OS5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxNjIzMTA5LCJleHAiOjE4MTMxNTkxMDl9.67Veif_XKA_9eTcEykqMDgRNnj9H0lmJ4D8xqygxuQY",
    category: "Técnica Fade",
    title: "Degradê de Precisão",
  }
];

export default function Gallery() {
  return (
    <section className="py-32 bg-luxury-black relative overflow-hidden" id="galeria">
      {/* Texture Layer */}
      <div className="absolute inset-0 bg-wood opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-luxury-gold/50" />
            <span className="text-luxury-gold font-bold uppercase tracking-[0.6em] text-[10px]">Trabalhos Selecionados</span>
            <div className="h-px w-8 bg-luxury-gold/50" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif italic text-white"
          >
            A Arte do <span className="text-luxury-gold">Corte.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer border border-white/5 shadow-2xl"
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
              />
              {/* Luxury Glass Card Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-[2px] flex flex-col justify-end p-10 text-left">
                <span className="text-luxury-gold text-[10px] uppercase tracking-[0.5em] mb-4 font-bold flex items-center gap-2">
                  <Sparkles size={12} /> {image.category}
                </span>
                <h4 className="text-white text-4xl font-serif italic mb-8">{image.title}</h4>
                <div className="flex items-center gap-4 text-white/40 group-hover:text-luxury-gold transition-colors duration-500">
                  <Maximize2 size={20} />
                  <span className="text-xs uppercase tracking-widest font-bold">Ver Obra Completa</span>
                </div>
              </div>
              
              {/* Artistic Wood Accent on Hover */}
              <div className="absolute inset-0 border-[0px] group-hover:border-[16px] border-luxury-wood/10 transition-all duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center"
        >
          <p className="text-white/30 text-xs uppercase tracking-[0.4em] mb-10 italic">Mais transformações em tempo real</p>
          <a 
            href="https://www.instagram.com/urban_style_barber_/" 
            target="_blank" 
            className="btn-outline min-w-[300px] inline-flex items-center justify-center gap-4"
          >
            Acompanhe no Instagram 
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
