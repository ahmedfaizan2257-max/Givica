import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, ChevronRight, Send, CheckCircle2 } from 'lucide-react';

export const Contacto: React.FC = () => {
  return (
    <div className="bg-[#FAFAFA] text-[#1A1A1A] font-sans">
      {/* Contact Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black pt-40">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Oficina Gívica"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-500 border border-orange-500/30 px-6 py-2 rounded-full bg-orange-500/10 backdrop-blur-md">
                Madrid · Atención 24/7
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1] tracking-tighter text-white mb-8 uppercase">
              Contacto <br />
              <span className="text-orange-600">Directo.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 mb-12 font-medium max-w-2xl mx-auto leading-relaxed lowercase tracking-tight italic">
              estamos aquí para asegurar que su energía nunca se detenga. solicite presupuesto o información técnica hoy mismo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            
            {/* Info Column */}
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-16">
                Información <br />
                <span className="text-orange-600">Estratégica.</span>
              </h2>
              
              <div className="space-y-16">
                {[
                  { icon: <MapPin className="w-8 h-8" />, title: 'Ubicación', desc: 'Av. del Príncipe, 46, 28300 Aranjuez, Madrid' },
                  { icon: <Phone className="w-8 h-8" />, title: 'Teléfono Directo', desc: '91 892 43 43' },
                  { icon: <Mail className="w-8 h-8" />, title: 'Consultas Email', desc: 'transportesgivica@gmail.com' },
                  { icon: <Clock className="w-8 h-8" />, title: 'Horario Operativo', desc: 'Lunes a Viernes: 9:00 - 17:00' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <div className="w-16 h-16 shrink-0 bg-[#FAFAFA] rounded-2xl flex items-center justify-center text-orange-600 group-hover:bg-black group-hover:text-white transition-all transform group-hover:scale-110">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-2">{item.title}</h4>
                      <p className="text-xl font-bold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Column */}
            <div className="relative">
              <div className="p-12 md:p-16 bg-[#FAFAFA] rounded-[4rem] border border-black/5 shadow-2xl shadow-black-[0.02]">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-12">Solicitud de <span className="text-orange-600">Presupuesto.</span></h3>
                
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Nombre Completo</label>
                      <input type="text" className="w-full bg-white border border-black/10 rounded-2xl p-6 text-sm outline-none focus:border-orange-600 transition-colors" placeholder="Su nombre" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Empresa / Particular</label>
                      <input type="text" className="w-full bg-white border border-black/10 rounded-2xl p-6 text-sm outline-none focus:border-orange-600 transition-colors" placeholder="Nombre de entidad" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email de Contacto</label>
                    <input type="email" className="w-full bg-white border border-black/10 rounded-2xl p-6 text-sm outline-none focus:border-orange-600 transition-colors" placeholder="email@ejemplo.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Mensaje / Requerimientos</label>
                    <textarea rows={4} className="w-full bg-white border border-black/10 rounded-2xl p-6 text-sm outline-none focus:border-orange-600 transition-colors resize-none" placeholder="Describa su solicitud..."></textarea>
                  </div>

                  <button className="w-full bg-black text-white py-8 rounded-full text-xs font-black uppercase tracking-[0.4em] hover:bg-orange-600 transition-all flex items-center justify-center gap-4 group">
                    Enviar Solicitud
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
              
              {/* Trust Badge */}
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-black/5 hidden md:block">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-10 h-10 text-orange-600" />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Seguridad</p>
                    <p className="text-xs font-black uppercase">Datos Protegidos</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Visual Intermission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="h-[400px] rounded-[3rem] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&q=80&w=1200" 
                alt="Flota Gívica"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="h-[400px] rounded-[3rem] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200" 
                alt="Industria Gívica"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="h-[500px] bg-gray-100 transition-all duration-1000 relative">
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur px-10 py-6 rounded-full shadow-2xl border border-black/5 text-xs font-black uppercase tracking-[0.4em]">
                Sede Central Aranjuez
            </div>
        </div>
        <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" 
            alt="Mapa Madrid"
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
        />
      </section>
    </div>
  );
};
