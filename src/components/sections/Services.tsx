"use client";

import { motion } from "framer-motion";

const services = [
  { title: "Corte Masculino", description: "Precisão técnica e acabamento artesanal." },
  { title: "Degradê Fade", description: "A técnica que define o padrão do seu estilo." },
  { title: "Barba Premium", description: "Ritual completo com toalha quente e óleos de elite." },
];

export default function Services() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden" id="servicos">
      {/* Subtle Radial Spotlight Effect for Depth */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header with Motion */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-serif italic text-[#F8F8F8] leading-none mb-4"
          >
            Nossa <br /> <span className="text-[#C5A059]">Excelência.</span>
          </motion.h2>
          <div className="w-20 h-1 bg-[#C5A059]" />
        </div>

        {/* Grid of Boxes with Enhanced Motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col border border-[#222222] p-8 hover:border-[#C5A059] bg-[#0a0a0a]/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#C5A059]/10"
            >
              <span className="text-[#C5A059] font-bold uppercase tracking-[0.3em] text-[10px] mb-8">0{index + 1}</span>
              <h3 className="text-3xl font-serif italic mb-6 text-[#F8F8F8]">{service.title}</h3>
              <p className="text-[#A3A3A3] font-light mb-10 flex-grow leading-relaxed">{service.description}</p>
              
              {/* Boxed CTA */}
              <a 
                href="https://agenda.strivaapp.com/urban-style-barber"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full border border-[#FFFFFF] py-4 text-center font-bold uppercase tracking-widest text-xs transition-all duration-500 hover:border-[#C5A059]"
              >
                <span className="relative z-10 group-hover:text-[#050505] transition-colors duration-500">AGENDAR</span>
                <div className="absolute inset-0 bg-[#C5A059] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
