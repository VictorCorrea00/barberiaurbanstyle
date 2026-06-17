"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, Clock, CheckCircle, MessageCircle, ArrowRight, Sparkles } from "lucide-react";

const bookingBenefits = [
  "Confirmação imediata no WhatsApp",
  "Escolha seu profissional favorito",
  "Horários sempre atualizados",
  "Reserva online em 30 segundos",
];

export default function BookingAndLocation() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden" id="agendar">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          
          {/* LEFT: CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#C5A059] font-sans font-bold uppercase tracking-[0.5em] text-[10px] block mb-6">RESERVAR</span>
            <h2 className="text-5xl md:text-8xl font-serif italic text-[#F8F8F8] mb-10 leading-[0.9]">
              Sua melhor <br /> versão <span className="text-[#C5A059]">começa aqui.</span>
            </h2>
            
            <div className="space-y-6 mb-16 border-l border-[#C5A059] pl-8">
              {bookingBenefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-4 text-[#A3A3A3]">
                  <CheckCircle size={12} className="text-[#C5A059]" />
                  <span className="text-sm uppercase tracking-widest font-sans font-medium text-[#F8F8F8]">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: BOOKING CARD & MAP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-[#262626] p-[1px]">
              <div className="aspect-[3/4] md:aspect-[4/5] bg-[#050505] overflow-hidden relative">
                <iframe 
                  src="https://agenda.strivaapp.com/urban-style-barber" 
                  className="w-full h-full border-none"
                  title="Online Booking"
                />
              </div>
            </div>

            {/* Contact Card */}
            <div className="mt-8 bg-[#050505] border border-[#262626] p-8 flex flex-col md:flex-row items-center justify-between gap-8">
               <div className="flex items-center gap-6">
                 <div className="w-16 h-16 bg-[#050505] border border-[#262626] flex items-center justify-center text-[#C5A059]">
                   <Phone size={24} />
                 </div>
                 <div>
                   <p className="text-[#A3A3A3] text-[10px] uppercase font-sans font-bold tracking-widest">WhatsApp Business</p>
                   <p className="text-[#F8F8F8] text-xl font-serif italic">+55 55 99696-0978</p>
                 </div>
               </div>
               <a 
                href="https://wa.me/5555996960978" 
                target="_blank"
                className="bg-[#C5A059] text-[#050505] px-8 py-4 uppercase text-[10px] font-sans font-bold tracking-[0.2em] hover:bg-[#F8F8F8] transition-all flex items-center gap-3"
               >
                 Enviar Mensagem <ArrowRight size={14} />
               </a>
            </div>
          </motion.div>
        </div>

        {/* MAP SECTION */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-3 gap-16 items-center border-t border-[#262626] pt-16">
           <div className="lg:col-span-1 space-y-12">
              <div className="flex gap-6 items-start">
                <MapPin className="text-[#C5A059] shrink-0" size={32} strokeWidth={1} />
                <div>
                  <h4 className="text-[#F8F8F8] font-serif italic text-2xl mb-2">Onde estamos</h4>
                  <p className="text-[#A3A3A3] text-sm leading-relaxed font-sans tracking-widest uppercase">
                    Av. João Belchior Goulart, 1167<br />
                    Centro, Sant&apos;Ana do Livramento - RS
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <Clock className="text-[#C5A059] shrink-0" size={32} strokeWidth={1} />
                <div>
                  <h4 className="text-[#F8F8F8] font-serif italic text-2xl mb-2">Horários</h4>
                  <p className="text-[#A3A3A3] text-sm leading-relaxed font-sans tracking-widest uppercase">
                    Ter - Sáb: 09:00 as 20:00<br />
                    Segunda: Sob Consulta
                  </p>
                </div>
              </div>
           </div>
           <div className="lg:col-span-2 h-[400px] w-full bg-[#050505] border border-[#262626] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.578622176211!2d-55.5147!3d-30.8847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9508d0f7f7f7f7f7%3A0x7f7f7f7f7f7f7f7f!2sAv.%20Jo%C3%A3o%20Belchior%20Goulart%2C%201167%20-%20Centro%2C%20Sant'Ana%20do%20Livramento%20-%20RS%2C%2097574-331!5e0!3m2!1spt-BR!2sbr!4v1718361600000!5m2!1s0x9508d0f7f7f7f7f7!2sbr" 
                className="w-full h-full border-none opacity-50 hover:opacity-100 transition-opacity"
                allowFullScreen
                loading="lazy"
              />
           </div>
        </div>
      </div>
    </section>
  );
}
