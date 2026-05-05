/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Contacto } from './pages/Contacto';
import { ProductLayout } from './components/ProductLayout';
import { Truck, Car, Construction, Tractor, Factory, Home as HomeIcon, Settings, Thermometer, Zap } from 'lucide-react';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/gasoleo-a" element={
              <ProductLayout 
                title="Gasóleo A en tus instalaciones de Madrid y alrededores"
                subtitle="¿Qué es el Gasóleo A?"
                description="El gasóleo A es un combustible de alta calidad destinado exclusivamente a vehículos de automoción. Es el tipo de gasóleo más refinado, diseñado para ofrecer un rendimiento óptimo en motores modernos, tanto en turismos como en vehículos industriales."
                imageUrl="https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&q=80&w=1200"
                secondaryImage="https://images.unsplash.com/photo-1580674271209-400cd324e934?auto=format&fit=crop&q=80&w=1200"
                forWhom={[
                  { icon: <Truck />, text: "Flotas de camiones" },
                  { icon: <Car />, text: "Taxis y vehículos de servicio" },
                  { icon: <Truck />, text: "Autobuses y autocares" },
                  { icon: <Construction />, text: "Empresas con surtidores" },
                ]}
                features={[
                  "Alto nivel de refinado y pureza",
                  "Combustión eficiente y estable",
                  "Mejora el rendimiento del motor",
                  "Reduce emisiones contaminantes",
                  "Protege el sistema de inyección",
                  "Compatible con normativa EN 590",
                ]}
                techSpecs={[
                  { label: "Número de cetano", value: "mínimo 51,0" },
                  { label: "Densidad a 15ºC", value: "820,0 a 845,0 kg/m³" },
                  { label: "Contenido de azufre", value: "máximo 10,0 mg/kg" },
                  { label: "Punto de inflamación", value: "superior a 55,0 ºC" },
                  { label: "Viscosidad a 40ºC", value: "2,000 a 4,500 mm²/s" },
                ]}
                accentColor="blue"
              />
            } />

            <Route path="/gasoleo-b" element={
              <ProductLayout 
                title="Gasóleo B para maquinaria y empresas"
                subtitle="¿Qué es el Gasóleo B?"
                description="El gasóleo B es un combustible destinado principalmente a usos profesionales, agrícolas e industriales. Es obligatorio para determinados tipos de maquinaria y vehículos fuera de la automoción convencional."
                imageUrl="https://images.unsplash.com/photo-1574015974293-817f0efebb1b?auto=format&fit=crop&q=80&w=1200"
                secondaryImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200"
                forWhom={[
                  { icon: <Tractor />, text: "Maquinaria agrícola" },
                  { icon: <Construction />, text: "Equipos de obra" },
                  { icon: <Zap />, text: "Generadores eléctricos" },
                  { icon: <HomeIcon />, text: "Sistemas de calefacción" },
                ]}
                features={[
                  "Combustible eficiente para uso profesional",
                  "Menor coste frente al gasóleo de automoción",
                  "Buena estabilidad y rendimiento",
                  "Apto para calefacción",
                  "Cumple normativa vigente",
                ]}
                maintenance={[
                  "Realizar revisiones anuales de la instalación",
                  "Limpiar filtros, quemadores y componentes",
                  "Mantener el depósito limpio para evitar acumulación de residuos",
                ]}
                recommendation="Evita apurar el depósito completamente y realiza mantenimientos periódicos para garantizar el correcto funcionamiento."
                techSpecs={[
                  { label: "Número de cetano", value: "mínimo 49,0" },
                  { label: "Densidad a 15ºC", value: "820 a 880 kg/m³" },
                  { label: "Contenido de azufre", value: "máximo 10 mg/kg" },
                  { label: "Punto de inflamación", value: "mínimo 60 ºC" },
                  { label: "Viscosidad a 40ºC", value: "2,0 a 4,5 mm²/s" },
                ]}
                accentColor="amber"
              />
            } />

            <Route path="/gasoleo-c" element={
              <ProductLayout 
                title="Gasóleo C para calefacción a domicilio Madrid"
                subtitle="¿Qué es el Gasóleo C?"
                description="El gasóleo C es un combustible diseñado específicamente para sistemas de calefacción. Ofrece un alto poder calorífico, lo que se traduce en mayor eficiencia y mejor rendimiento en instalaciones térmicas."
                imageUrl="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=1200"
                secondaryImage="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200"
                forWhom={[
                  { icon: <HomeIcon />, text: "Calefacción de viviendas" },
                  { icon: <HomeIcon />, text: "Comunidades de vecinos" },
                  { icon: <Factory />, text: "Instalaciones industriales" },
                  { icon: <Thermometer />, text: "Hornos industriales" },
                ]}
                features={[
                  "Alto poder calorífico",
                  "Gran eficiencia energética",
                  "Rendimiento estable en calefacción",
                  "Combustible económico para uso continuo",
                  "Adaptado a instalaciones térmicas",
                ]}
                maintenance={[
                  "Revisiones periódicas (recomendado anual)",
                  "Limpiar quemadores y filtros",
                  "Limpiar el depósito para evitar residuos",
                ]}
                recommendation="Un buen mantenimiento reduce el consumo y alarga la vida útil de la caldera."
                techSpecs={[
                  { label: "Índice de cetano", value: "mínimo 40" },
                  { label: "Densidad a 15ºC", value: "máximo 890,0 kg/m³" },
                  { label: "Contenido de azufre", value: "máximo 1000 mg/kg" },
                  { label: "Punto de inflamación", value: "mínimo 60,0 ºC" },
                  { label: "Viscosidad a 40ºC", value: "2,0 a 6,0 mm²/s" },
                ]}
                accentColor="red"
              />
            } />

            <Route path="/adblue" element={
              <ProductLayout 
                title="Suministro de AdBlue para empresas y flotas"
                subtitle="¿Qué es el AdBlue?"
                description="El AdBlue es una solución a base de urea de alta pureza que reduce las emisiones contaminantes en vehículos diésel mediante el sistema SCR."
                imageUrl="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
                secondaryImage="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1200"
                forWhom={[
                  { icon: <Truck />, text: "Camiones y transporte pesado" },
                  { icon: <Truck />, text: "Vehículos industriales" },
                  { icon: <Truck />, text: "Autobuses" },
                  { icon: <Car />, text: "Turismos diésel modernos" },
                ]}
                features={[
                  "Reduce emisiones contaminantes (NOx)",
                  "Cumple normativa Euro IV, V y VI",
                  "Producto certificado ISO 22241",
                  "Compatible con sistemas SCR",
                  "Suministro a granel disponible",
                ]}
                techSpecs={[
                  { label: "Riqueza (Urea)", value: "31,8% - 33,2%" },
                  { label: "Densidad (20ºC)", value: "1,0870 - 1,0930 g/cm³" },
                  { label: "Índice de Refracción", value: "1,3814 - 1,3843" },
                  { label: "Alcalinidad (como NH3)", value: "0,2% máx." },
                  { label: "Biuret", value: "0,3% máx." },
                ]}
                accentColor="green"
              />
            } />

            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// End of file
