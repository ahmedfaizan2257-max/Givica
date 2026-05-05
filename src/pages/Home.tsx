import { motion } from 'motion/react';
import { Truck, ShieldCheck, Clock, MapPin, ChevronRight, Fuel, ThermometerSun, Zap, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="bg-[#FAFAFA] text-[#1A1A1A] font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black pt-24">
        {/* Background Layer */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=2000" 
            alt="Logística de Energía"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-8"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-orange-500 border border-orange-500/30 px-6 py-2 rounded-full bg-orange-500/10 backdrop-blur-md">
                Madrid · Suministro Directo
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1] tracking-tighter text-white mb-10 uppercase text-center">
              Energía <br />
              <span className="text-orange-600">Total</span> <br />
              Directa
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-14 font-medium max-w-xl mx-auto leading-relaxed lowercase tracking-tight italic">
              potenciamos su actividad, aseguramos el flujo ininterrumpido y maximizamos su rendimiento con el suministro de gasóleo más fiable de madrid.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-lg">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <Link 
                  to="/contacto"
                  className="w-full bg-orange-600 text-white px-10 py-5 rounded-full text-xs font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4 group shadow-2xl shadow-orange-600/40"
                >
                  Solicitar presupuesto
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <a 
                  href="tel:918924343"
                  className="w-full bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-10 py-5 rounded-full text-xs font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4"
                >
                  91 892 43 43
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent" />
          <span className="text-[8px] text-white/30 font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr]">Explorar</span>
        </motion.div>
      </section>

      {/* Floating Buttons */}
      <div className="fixed bottom-10 left-10 z-[100]">
        <a 
          href="tel:918924343" 
          className="w-16 h-16 bg-[#0066CC] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        >
          <Phone className="w-8 h-8 fill-current" />
        </a>
      </div>
      <div className="fixed bottom-10 right-10 z-[100]">
        <a 
          href="https://wa.me/34918924343" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        >
          <Phone className="w-8 h-8 fill-current rotate-[135deg]" />
        </a>
      </div>

      {/* Trust Stats Section */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/3">
              <h2 className="text-5xl font-black uppercase tracking-tighter leading-none mb-8">
                Flujo <br />
                <span className="text-orange-600">Continuo</span>
              </h2>
              <p className="text-sm text-gray-400 font-black uppercase tracking-[0.3em] leading-relaxed">
                Logística de alta precisión para el corazón de su negocio.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { val: '24/48h', label: 'Entrega Crítica', desc: 'Suministros de emergencia y programados.' },
                { val: '100%', label: 'Normativa EN', desc: 'Garantía total de pureza en el combustible.' },
                { val: '30+', label: 'Años Líderes', desc: 'Experiencia contrastada en el sector.' }
              ].map((stat, idx) => (
                <div key={idx} className="group cursor-default">
                  <div className="text-6xl font-black tracking-tighter text-gray-900 group-hover:text-orange-600 transition-colors mb-4">
                    {stat.val}
                  </div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-4 group-hover:text-black transition-colors">
                    {stat.label}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-500 font-medium">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-40 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="mb-24">
            <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
              Nuestros <br />
              <span className="text-orange-600">Productos</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { title: 'Gasóleo A', desc: 'Máximo rendimiento para automoción y flotas.', link: '/gasoleo-a', img: 'https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&q=80&w=1200' },
              { title: 'Gasóleo B', desc: 'Potencia específica para agricultura e industria.', link: '/gasoleo-b', img: 'https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80&w=1200' },
              { title: 'Gasóleo C', desc: 'Calor eficiente para el hogar y comunidades.', link: '/gasoleo-c', img: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=1200' },
              { title: 'Adblue', desc: 'Tecnología limpia para flotas diésel modernas.', link: '/adblue', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200' },
            ].map((product, idx) => (
              <Link 
                key={idx}
                to={product.link}
                className="group relative h-[600px] rounded-[3rem] overflow-hidden bg-white shadow-2xl shadow-black/5"
              >
                <div className="absolute inset-0">
                  <img 
                    src={product.img} 
                    alt={product.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                </div>
                
                <div className="absolute inset-0 p-16 flex flex-col justify-end items-start text-white">
                  <div className="text-xs font-black uppercase tracking-[0.5em] text-orange-500 mb-6 group-hover:-translate-y-4 transition-transform duration-500">
                    Suministro 0{idx + 1}
                  </div>
                  <h3 className="text-5xl font-black uppercase tracking-tighter mb-6 group-hover:-translate-y-4 transition-transform duration-500">
                    {product.title}
                  </h3>
                  <p className="text-sm font-medium text-white/60 mb-8 max-w-xs group-hover:-translate-y-4 transition-transform duration-500">
                    {product.desc}
                  </p>
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-500 delay-100">
                    Saber más <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Strategy */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
                Logística <br />
                <span className="text-orange-600">Imparable.</span>
              </h2>
            </div>
            <div className="lg:w-1/3">
              <p className="text-sm text-gray-500 font-bold uppercase tracking-[0.3em] leading-relaxed">
                Nuestra infraestructura está diseñada para responder cuando el tiempo es el factor crítico. Sin intermediarios, sin demoras.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: '01', title: 'Pedido Centralizado', desc: 'Gestión inmediata a través de nuestra oficina central en Madrid.' },
              { num: '02', title: 'Carga Certificada', desc: 'Suministro directo desde los principales centros de almacenamiento.' },
              { num: '03', title: 'Entrega en 24h', desc: 'Distribución capilar con camiones de última generación.' }
            ].map((step, idx) => (
              <div key={idx} className="relative p-12 bg-[#FAFAFA] rounded-[3rem] group hover:bg-black transition-colors duration-500">
                <div className="text-6xl font-black tracking-tighter text-orange-600/20 group-hover:text-orange-600 transition-colors mb-8">
                  {step.num}
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter text-gray-900 group-hover:text-white mb-6">
                  {step.title}
                </h3>
                <p className="text-sm font-medium text-gray-500 group-hover:text-white/60 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-40 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-600 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <h2 className="text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-12">
                Sectores <br />
                <span className="text-gray-600">Servidos.</span>
              </h2>
              <p className="text-xl text-white/40 font-medium max-w-md leading-relaxed lowercase mb-16">
                Adaptamos nuestra logística a las necesidades específicas de cada industria, garantizando siempre el cumplimiento normativo.
              </p>
              
              <div className="space-y-12">
                {[
                  { icon: <ThermometerSun className="w-10 h-10" />, title: 'Urbano & Hogar', desc: 'Calefacción eficiente para comunidades y viviendas.' },
                  { icon: <Fuel className="w-10 h-10" />, title: 'Transporte & Flotas', desc: 'Gasóleo A de máxima pureza para motores diésel.' },
                  { icon: <Zap className="w-10 h-10" />, title: 'Industrial & Agro', desc: 'Potencia constante para maquinaria y producción.' }
                ].map((sector, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <div className="text-orange-600 group-hover:scale-110 transition-transform">{sector.icon}</div>
                    <div>
                      <h4 className="text-xl font-black uppercase tracking-tighter mb-2">{sector.title}</h4>
                      <p className="text-sm text-white/40 font-medium">{sector.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 group">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200" 
                  alt="Industrial Supply"
                  className="w-full h-full object-cover group-hover:brightness-105 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-12 left-12 right-12">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl">
                    <p className="text-xs font-black uppercase tracking-[0.4em] mb-4 text-orange-500">Misión</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] leading-relaxed text-white/80">
                      Garantizar que ninguna actividad se detenga por falta de energía. Nuestra red cubre cada rincón de la Comunidad de Madrid.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-40 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-orange-600 rounded-[4rem] blur-3xl opacity-5 group-hover:opacity-20 transition-opacity" />
                <img 
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1200" 
                  alt="Madrid Logistics"
                  className="relative rounded-[4rem] shadow-2xl transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-7xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.8] mb-12">
                Presencia <br />
                <span className="text-orange-600">Regional.</span>
              </h2>
              <div className="space-y-10">
                <p className="text-sm text-gray-500 font-bold uppercase tracking-[0.3em] leading-relaxed max-w-md">
                  Nuestra red logística se expande por toda la Comunidad de Madrid, asegurando que el gasóleo llegue a su destino sin importar la ubicación.
                </p>
                <ul className="space-y-6">
                  {['Madrid Capital', 'Corredor del Henares', 'Zona Sur', 'Sierra Norte'].map((zone, idx) => (
                    <li key={idx} className="flex items-center gap-6 group cursor-default">
                      <div className="w-12 h-px bg-black/10 group-hover:w-20 group-hover:bg-orange-600 transition-all" />
                      <span className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 group-hover:text-black transition-colors">{zone}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-orange-600 opacity-20 skew-x-12 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-5xl md:text-7xl font-serif italic leading-[1] mb-10">¿Prioridad en su <span className="text-orange-600">suministro</span>?</h2>
              <p className="text-lg text-white/50 mb-12 leading-loose font-medium max-w-xl">
                Realizamos repartos diarios en toda la Comunidad de Madrid. Solicite su presupuesto personalizado y reciba el combustible en menos de 48 horas.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="h-px bg-white/20 w-12" />
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em]">Logística</h4>
                  <p className="text-xs text-white/50">Flota propia preparada para accesos difíciles y suministros urgentes.</p>
                </div>
                <div className="space-y-4">
                  <div className="h-px bg-white/20 w-12" />
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em]">Certificación</h4>
                  <p className="text-xs text-white/50">Productos que cumplen con los más estrictos estándares de la UE.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-white p-12 rounded-[2rem] shadow-2xl">
                <h3 className="text-2xl font-serif italic text-black mb-8">Contacto Directo</h3>
                <form className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Nombre</label>
                    <input type="text" className="w-full bg-transparent border-b border-black/10 py-3 text-black focus:outline-none focus:border-orange-600 font-medium" placeholder="Escriba su nombre" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Teléfono</label>
                    <input type="tel" className="w-full bg-transparent border-b border-black/10 py-3 text-black focus:outline-none focus:border-orange-600 font-medium" placeholder="Su contacto" />
                  </div>
                  <button className="w-full bg-black text-white font-black uppercase tracking-[0.3em] py-5 rounded-full hover:bg-orange-600 transition-all text-[11px]">
                    Enviar Solicitud
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
