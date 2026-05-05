import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone, Truck, Clock, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Gasóleo A', href: '/gasoleo-a' },
    { name: 'Gasóleo B', href: '/gasoleo-b' },
    { name: 'Gasóleo C', href: '/gasoleo-c' },
    { name: 'Adblue', href: '/adblue' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-2">
              <span className="text-3xl font-black tracking-tighter text-gray-900 leading-none">
                GÍVICA<span className="text-orange-600">.</span>
              </span>
            </NavLink>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    cn(
                      "text-[10px] font-black uppercase tracking-[0.2em] transition-all",
                      isActive ? "text-orange-600" : "text-gray-400 hover:text-black"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-6 border-l border-black/5 pl-6">
              <NavLink 
                to="/contacto"
                className="bg-[#5c72b2] text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-black transition-all shadow-lg shadow-[#5c72b2]/20"
              >
                Contacto
              </NavLink>

              <div className="flex items-center gap-2 text-gray-400">
                <div className="bg-[#5c72b2]/10 p-2 rounded-full">
                  <Mail className="w-3.5 h-3.5 text-[#5c72b2]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] font-black uppercase tracking-widest text-black/30 leading-none mb-1">Horario</span>
                  <span className="text-[9px] font-black uppercase tracking-widest whitespace-nowrap text-gray-500">
                    Lunes a viernes 9 a 17
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
            <a href="tel:918924343" className="p-2 text-orange-600">
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-black/10 overflow-hidden"
          >
            <div className="px-6 pt-4 pb-12 space-y-2 text-center uppercase tracking-[0.2em] font-black text-[11px]">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-4 border-b border-black/5 last:border-0"
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-8 space-y-6">
                <NavLink
                  to="/contacto"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-black text-white px-4 py-4 rounded-full text-center"
                >
                  Contacto
                </NavLink>
                <div className="flex flex-col items-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-[9px]">LUNES A VIERNES 9 A 17</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
