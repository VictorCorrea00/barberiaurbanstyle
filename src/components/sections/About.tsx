"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-32 bg-[#FFFFFF] text-[#000000] relative overflow-hidden" id="sobre">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Editorial Visual Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="col-span-1 lg:col-span-5 relative z-10"
          >
            <div className="aspect-[3/4] overflow-hidden border border-[#222222]">
              <img 
                src="https://acyyffohsqxabkksvpae.supabase.co/storage/v1/object/sign/web/Captura%20de%20pantalla%202026-06-14%20091028.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mNjg5Yjc5My03NzdhLTRlNDUtOTEzYy05ZjIwZGQ5ZTliZDciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvQ2FwdHVyYSBkZSBwYW50YWxsYSAyMDI2LTA2LTE0IDA5MTAyOC5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxNjEzMTEyLCJleHAiOjE4MTMxNDkxMTJ9.-YkEzCpUkujSPWrFqE35qDjk0ArCQDvmhfE8xkzJSNk" 
                alt="Urban Style Ambience" 
                className="w-full h-full object-cover grayscale transition-transform duration-[2000ms] hover:scale-105"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none" />
          </motion.div>

          {/* Editorial Text Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="col-span-1 lg:col-span-7 lg:-ml-20 relative z-20"
          >
            <div className="bg-[#FFFFFF] border border-[#CCCCCC] p-10 md:p-14 shadow-xl">
              <span className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Nossa Herança</span>
              <h2 className="text-4xl md:text-6xl font-serif italic text-[#000000] mb-8 leading-[0.9]">
                O refúgio <br /> <span className="text-[#D4AF37]">da elegância.</span>
              </h2>
              <p className="text-[#555555] text-lg leading-relaxed font-light max-w-lg">
                Mais do que cortes, entregamos um ritual. Unimos a precisão da barbearia técnica com a sofisticação que o homem moderno exige em Santana do Livramento.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}