import { Instagram, MapPin, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-black border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-serif italic text-white mb-6 uppercase tracking-wider">
              Urban Style <span className="text-luxury-gold">Barber</span>
            </h2>
            <p className="text-luxury-light/50 text-sm leading-relaxed max-w-sm mb-8">
              A excelência em barbearia em Santana do Livramento. 
              Comprometidos com a precisão, o estilo e a sua melhor versão.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/urban_style_barber_/" target="_blank" className="p-2 border border-white/10 text-white/50 hover:text-luxury-gold hover:border-luxury-gold/50 transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/5555996960978" target="_blank" className="p-2 border border-white/10 text-white/50 hover:text-luxury-gold hover:border-luxury-gold/50 transition-all duration-300">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-6">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-luxury-light/50 text-sm hover:text-luxury-gold transition-colors">Início</a></li>
              <li><a href="#servicos" className="text-luxury-light/50 text-sm hover:text-luxury-gold transition-colors">Serviços</a></li>
              <li><a href="#trabalhos" className="text-luxury-light/50 text-sm hover:text-luxury-gold transition-colors">Galeria</a></li>
              <li><a href="#agendar" className="text-luxury-light/50 text-sm hover:text-luxury-gold transition-colors">Agendamento</a></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-luxury-light/50 text-sm">
                <MapPin size={16} className="text-luxury-gold mt-1 shrink-0" />
                <span>Av. João Belchior Goulart, 1167</span>
              </li>
              <li className="flex items-center gap-3 text-luxury-light/50 text-sm">
                <Phone size={16} className="text-luxury-gold shrink-0" />
                <span>+55 55 99696-0978</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-luxury-light/20 text-[10px] uppercase tracking-[0.3em]">
            &copy; {currentYear} Urban Style Barber. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <span className="text-luxury-light/20 text-[10px] uppercase tracking-[0.3em] cursor-pointer hover:text-luxury-gold transition-colors">Política de Privacidade</span>
            <span className="text-luxury-light/20 text-[10px] uppercase tracking-[0.3em] cursor-pointer hover:text-luxury-gold transition-colors">Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
