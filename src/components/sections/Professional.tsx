"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Professional() {
  return (
    <section className="py-32 bg-[#050505] text-[#F8F8F8] relative overflow-hidden border-t border-[#262626]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Editorial Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Architectural Frame */}
            <div className="relative aspect-[3/4] overflow-hidden border border-[#262626]">
              <img 
                src="https://acyyffohsqxabkksvpae.supabase.co/storage/v1/object/sign/web/Captura%20de%20pantalla%202026-06-14%20091418.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mNjg5Yjc5My03NzdhLTRlNDUtOTEzYy05ZjIwZGQ5ZTliZDciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvQ2FwdHVyYSBkZSBwYW50YWxsYSAyMDI2LTA2LTE0IDA5MTQxOC5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxNjMxMjU0LCJleHAiOjE4MTMxNjcyNTR9.bzddxoHS2KCYhEo32IuM9unBOyhxXcVokA7PeM4ONkU"
                alt="Profissional Urban Style Barber"
                className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
              />
            </div>
            {/* Minimalist Gold Accent */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b border-r border-[#C5A059] pointer-events-none" />
          </motion.div>

          {/* Bio Side - Luxury Editorial Feel */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-block px-4 py-1 border border-[#C5A059] text-[#C5A059] text-[10px] uppercase tracking-[0.3em] font-sans font-bold mb-6">
              Assinatura Mestre
            </div>
            
            <h2 className="text-4xl md:text-7xl font-serif italic mb-10 leading-[0.9]">
              A arquitetura do <br />
              <span className="text-[#C5A059]">seu estilo.</span>
            </h2>
            
            <div className="p-8 border-l border-[#C5A059] mb-10">
              <p className="text-[#A3A3A3] leading-relaxed text-xl font-sans font-light">
                Combinamos a precisão técnica da barbearia contemporânea com uma visão artística refinada. O resultado não é apenas um corte, é a definição da sua marca pessoal.
              </p>
            </div>
            
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://agenda.strivaapp.com/urban-style-barber"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-5 bg-[#C5A059] text-[#050505] font-sans font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#F8F8F8]"
            >
              Agendar consulta <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
