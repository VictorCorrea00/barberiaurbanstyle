"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const HERO_BANNER_URL = "https://acyyffohsqxabkksvpae.supabase.co/storage/v1/object/sign/web/ChatGPT%20Image%2016%20jun%202026,%2013_12_12.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mNjg5Yjc5My03NzdhLTRlNDUtOTEzYy05ZjIwZGQ5ZTliZDciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvQ2hhdEdQVCBJbWFnZSAxNiBqdW4gMjAyNiwgMTNfMTJfMTIucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTYzMDY1OSwiZXhwIjoxODEzMTY2NjU5fQ.PUufMAyTHZQ3CA4wLw9yc4fXCJIqvncR0G26AUD6gT8";

export default function Hero() {
  return (
    <section className="h-screen w-full bg-[#000000] flex flex-col items-center justify-between p-4 md:p-6 overflow-hidden">
      
      {/* 1. Logo Area: Anchored and Dominant */}
      <div className="flex-[3] w-full flex items-center justify-center">
        <motion.img 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          src={HERO_BANNER_URL} 
          alt="Urban Style Barber"
          className="max-h-[60vh] w-auto object-contain"
        />
      </div>

      {/* 2. Content Area: Editorial Hierarchy with High Conversion CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="flex-1 w-full max-w-2xl text-center text-[#FFFFFF] flex flex-col items-center gap-4"
      >
        <h1 className="text-xl md:text-3xl font-serif italic uppercase tracking-[0.05em] text-[#FFFFFF]">
          A BARBEARIA DOS HOMENS QUE SE DESTACAM
        </h1>
        
        <p className="text-sm md:text-base text-[#999999] font-light tracking-[0.15em] uppercase">
          Cortes premium. Atendimento de excelência.
        </p>

        <a
          href="https://agenda.strivaapp.com/urban-style-barber"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-4 bg-[#D4AF37] text-[#000000] font-bold uppercase tracking-[0.25em] hover:bg-[#FFFFFF] transition-all duration-500 text-sm shadow-[0_0_20px_rgba(212,175,55,0.4)]"
        >
          AGENDAR AGORA
        </a>

        <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs text-[#CCCCCC] pt-2">
            <span className="text-[#D4AF37] flex items-center gap-1">
                <Star size={12} fill="currentColor" /> 4.9 de avaliação
            </span>
            <span>•</span>
            <span>+1000 ATENDIMENTOS</span>
        </div>
      </motion.div>
    </section>
  );
}
