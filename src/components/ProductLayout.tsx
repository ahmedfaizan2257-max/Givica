import React from 'react';
import { motion } from 'motion/react';
import { Truck, ChevronRight, CheckCircle2, ShieldCheck, Clock, Mail, Phone, Fuel, Zap, ThermometerSun, Info, Settings, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

interface ProductLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
  forWhom: { icon: React.ReactNode; text: string }[];
  features: string[];
  maintenance?: string[];
  recommendation?: string;
  techSpecs?: { label: string; value: string }[];
  accentColor?: string;
  secondaryImage?: string;
}

export const ProductLayout: React.FC<ProductLayoutProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
  forWhom,
  features,
  maintenance,
  techSpecs,
  secondaryImage,
}) => {
  return (
    <div className="bg-[#FAFAFA] text-[#1A1A1A] font-sans">
      {/* Product Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black pt-40">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          {imageUrl && (
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          )}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
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
                GÍVICA · Suministro Profesional
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter text-white mb-8 uppercase">
              {title.split(' ').map((word, i) => (
                <React.Fragment key={i}>
                  {word === 'Gasóleo' || word === 'AdBlue' ? <span className="text-orange-600">{word}</span> : word}
                  {' '}
                </React.Fragment>
              ))}
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 mb-12 font-medium max-w-2xl mx-auto leading-relaxed lowercase tracking-tight italic">
              {subtitle.toLowerCase()}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
                Descripción <br />
                <span className="text-orange-600">Detallada.</span>
              </h2>
              <div className="space-y-8">
                <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed lowercase">
                  {description}
                </p>
                <div className="flex items-center gap-6 p-8 bg-[#FAFAFA] rounded-3xl border border-black/5">
                  <div className="bg-orange-600 p-4 rounded-2xl text-white">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest mb-1">Garantía de Pureza</h4>
                    <p className="text-xs text-gray-400 font-medium lowercase">Cumplimos estrictamente la normativa EN vigentes.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-orange-600 rounded-[4rem] blur-3xl opacity-5 group-hover:opacity-10 transition-opacity" />
              <img 
                src="https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&q=80&w=1200" 
                alt="Logística Profesional"
                className="w-full aspect-[4/5] object-cover rounded-[4rem] relative z-10 hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-40 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex flex-col lg:flex-row gap-20 mb-24 items-end">
            <div className="lg:w-1/2">
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                Ventajas <br />
                <span className="text-orange-600">Competitivas.</span>
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-lg text-white/40 font-medium leading-relaxed lowercase">
                Infraestructura propia y personal altamente cualificado para garantizar un suministro seguro y eficiente en cualquier circunstancia.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-12 bg-white/5 border border-white/10 rounded-[3rem] group hover:bg-orange-600 transition-all duration-500"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-orange-600/20 text-orange-600 rounded-2xl mb-8 group-hover:bg-white group-hover:text-black transition-colors">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="text-xs font-black uppercase tracking-widest leading-relaxed">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Section - NEW */}
      {secondaryImage && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="relative h-[600px] rounded-[4rem] overflow-hidden group shadow-2xl">
              <img 
                src={secondaryImage} 
                alt="Operativa" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-20 flex flex-col justify-center max-w-xl text-white">
                <h3 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">Excelencia en <br /><span className="text-orange-600">Cada Gota.</span></h3>
                <p className="text-sm font-medium text-white/60 leading-relaxed lowercase mb-12">
                  Nuestro sistema de trazabilidad asegura que el producto que llega a su depósito mantiene todas las propiedades originales de refinería.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-orange-600" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">Calidad Gívica</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Visual Intermission - Added more images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-square rounded-[3rem] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" alt="Detalle" className="w-full h-full object-cover hover:scale-110 transition-all duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square rounded-[3rem] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&q=80&w=800" alt="Operativa" className="w-full h-full object-cover hover:scale-110 transition-all duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square rounded-[3rem] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80&w=800" alt="Logística" className="w-full h-full object-cover hover:scale-110 transition-all duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-40 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="mb-24 text-center">
            <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
              Uso <br />
              <span className="text-orange-600">Profesional.</span>
            </h2>
            <p className="text-xs text-gray-400 font-black uppercase tracking-[0.4em]">¿Para quién está pensado?</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {forWhom.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-6 p-10 bg-white border border-black/5 rounded-[2.5rem] hover:bg-black hover:text-white transition-all group cursor-default shadow-2xl shadow-black-[0.02]">
                <div className="text-orange-600 group-hover:text-white transition-colors scale-150 transform origin-left mb-4">
                  {item.icon}
                </div>
                <span className="text-[11px] font-black uppercase tracking-[0.2em] leading-tight">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical & Maintenance */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {techSpecs && (
              <div className="lg:col-span-7">
                <h3 className="text-4xl font-black uppercase tracking-tighter mb-12">Especificaciones <span className="text-orange-600">Técnicas.</span></h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {techSpecs.map((spec, idx) => (
                    <div key={idx} className="flex justify-between items-center py-6 border-b border-black/5 group overflow-hidden">
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-orange-600 transition-colors">{spec.label}</span>
                      <span className="text-[11px] font-black uppercase tracking-widest translate-x-4 group-hover:translate-x-0 transition-transform">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className={cn("lg:col-span-5", !techSpecs && "lg:col-start-4 lg:col-span-6")}>
              {maintenance ? (
                <div className="p-12 bg-black text-white rounded-[3rem] shadow-2xl">
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-10 flex items-center gap-4">
                    <Settings className="w-6 h-6 text-orange-600" />
                    Mantenimiento
                  </h3>
                  <ul className="space-y-6">
                    {maintenance.map((m, idx) => (
                      <li key={idx} className="text-xs font-medium leading-relaxed text-white/50 flex items-start gap-4">
                        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-1 shrink-0" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="p-12 bg-orange-600 text-white rounded-[3rem] shadow-2xl flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 leading-none">
                      Documentación <br /> Técnica
                    </h3>
                    <p className="text-sm font-medium text-white/60 mb-12 max-w-xs lowercase">
                      Descargue la ficha de seguridad y especificaciones completas para sus registros.
                    </p>
                  </div>
                  <button className="w-full bg-white text-black py-6 rounded-full text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-black hover:text-white transition-all">
                    <FileText className="w-4 h-4" />
                    Descargar PDF
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Global Contact CTA */}
      <section className="relative py-32 bg-black text-white overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12 leading-[0.9]">
            ¿Necesita un <br />
            <span className="text-orange-600">Suministro Crítico?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link 
              to="/contacto"
              className="bg-orange-600 text-white px-12 py-6 rounded-full text-[12px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4 shadow-2xl"
            >
              Contactar Ahora
              <ChevronRight className="w-4 h-4" />
            </Link>
            <a 
              href="tel:918924343"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-6 rounded-full text-[12px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4"
            >
              91 892 43 43
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

