"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Carlos Eduardo",
    text: "O atendimento e a precisão no corte são inigualáveis. É a melhor experiência de barbearia que já tive.",
  },
  {
    name: "Ricardo Mendes",
    text: "Urban Style Barber é sinônimo de status e qualidade. Saio sempre renovado.",
  },
  {
    name: "Felipe Souza",
    text: "Profissionais que realmente entendem de estilo. Atendimento impecável do início ao fim.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-[#050505] text-[#F8F8F8] border-t border-[#262626]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[#C5A059] uppercase tracking-[0.4em] text-xs font-sans font-bold mb-4 block">Depoimentos</span>
          <h2 className="text-4xl md:text-6xl font-serif italic text-[#F8F8F8]">O que dizem sobre nós</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-8 border border-[#262626] hover:border-[#C5A059] transition-colors duration-500"
            >
              <div className="text-[#C5A059] mb-6 font-serif">★★★★★</div>
              <p className="text-[#A3A3A3] italic mb-8 leading-relaxed font-sans font-light">&quot;{item.text}&quot;</p>
              <p className="font-sans font-bold uppercase tracking-widest text-sm text-[#F8F8F8]">— {item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
