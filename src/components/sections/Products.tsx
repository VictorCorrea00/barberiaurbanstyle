"use client";

import { motion } from "framer-motion";
import { ShoppingBag, MessageCircle } from "lucide-react";

const products = [
  {
    name: "Pomada Modeladora",
    price: "45,00",
    desc: "Fixação forte e efeito matte para o dia todo.",
    img: "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Óleo para Barba",
    price: "35,00",
    desc: "Hidratação profunda e brilho natural.",
    img: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Shampoo Premium",
    price: "55,00",
    desc: "Limpeza refrescante para cabelo e barba.",
    img: "https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Products() {
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="produtos">
      {/* Decorative Wood Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-luxury-gold" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-luxury-gold font-bold uppercase tracking-[0.5em] text-xs block mb-4"
            >
              Essential Care
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-serif italic text-luxury-black leading-[0.9]"
            >
              Leve a experiência <br /> <span className="text-luxury-gold">para casa.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-black/40 max-w-sm text-sm uppercase tracking-widest leading-relaxed"
          >
            Produtos selecionados para manter o padrão Urban Style todos os dias.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square bg-gray-100 mb-8 overflow-hidden rounded-sm">
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white text-black p-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShoppingBag size={20} />
                </div>
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-serif italic text-luxury-black">{product.name}</h3>
                <span className="text-luxury-gold font-bold tracking-tighter">R$ {product.price}</span>
              </div>
              <p className="text-black/50 text-sm mb-8 leading-relaxed">{product.desc}</p>
              <a 
                href={`https://wa.me/5555996960978?text=Olá! Gostaria de comprar o produto: ${product.name}`}
                target="_blank"
                className="flex items-center justify-center gap-3 w-full py-4 border border-black/10 text-black font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-black hover:text-white transition-all"
              >
                <MessageCircle size={14} />
                Comprar via WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
