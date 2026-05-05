import { Phone, Mail, MapPin, Clock, Truck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-black text-white/50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter text-white">
                GÍVICA<span className="inline-block translate-y-[-1px] ml-1.5 h-2 w-2 bg-orange-600 rounded-full" />
              </span>
            </div>
            <p className="text-[11px] leading-relaxed uppercase tracking-widest font-medium">
              Especialistas en la distribución de gasóleo a domicilio en Madrid y alrededores. 
              Compromiso, rapidez y calidad en cada suministro profesional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-8">
              Nuestros Productos
            </h4>
            <ul className="space-y-4">
              {['Gasóleo A', 'Gasóleo B', 'Gasóleo C', 'Adblue'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-xs font-bold uppercase tracking-widest hover:text-orange-500 transition-colors flex items-center gap-2">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-8">
              Contacto
            </h4>
            <ul className="space-y-6 text-xs font-medium uppercase tracking-widest">
              <li className="leading-relaxed">
                Av. del Príncipe, 46, 1º dcha.<br />28300 Aranjuez, Madrid.
              </li>
              <li>
                <a href="tel:918924343" className="text-white hover:text-orange-500 transition-colors text-lg font-black tracking-tighter">91 892 43 43</a>
              </li>
              <li>
                <a href="mailto:transportesgivica@gmail.com" className="hover:text-white transition-colors truncate block">transportesgivica@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-8">
              Horario
            </h4>
            <div className="text-xs font-medium uppercase tracking-widest space-y-2">
              <p className="text-white font-black">Lunes - Viernes</p>
              <p>9:00 — 17:00</p>
              <div className="mt-4 inline-block px-3 py-1 border border-white/20 rounded-full text-[9px] text-white">
                Suministros 24/48h
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
          <p>© {new Date().getFullYear()} Gasóleos Gívica.</p>
          <p>Expertos en distribución de combustible</p>
        </div>
      </div>
    </footer>
  );
};
