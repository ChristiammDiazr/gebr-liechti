'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';
// AQUÍ ESTÁ LA CORRECCIÓN: Agregué CheckCircle a la lista de importaciones
import { ArrowRight, ThermometerSun, Droplets, Mountain, Sun, Flame, Wrench, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeizungPage() {
  const params = useParams();
  const locale = (params.locale as string) || 'de';

  // Variantes de animación para reutilizar
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen w-full bg-liechti-gray overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="/heizung/hero-heizung-consulting.jpg" 
            alt="Consultoría de Calefacción Gebr. Liechti" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#001133]/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#000a1f] to-transparent"></div>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20"
        >
          <span className="text-liechti-gold text-sm md:text-base font-bold tracking-[0.3em] uppercase block mb-4">
            Instalaciones de Calefacción
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            ¿Qué sistema es el adecuado para mí?
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
            Hoy en día, la variedad de sistemas de calefacción es enorme, por lo que encontrar el sistema adecuado para un proyecto específico puede resultar complicado. El tamaño de la propiedad, los costes de los sistemas y las normativas legales desempeñan un papel importante. Podemos ayudarle a encontrar la solución ideal.
          </p>
          <div className="mt-10">
             <Link href={`/${locale}/kontakt`} className="inline-flex items-center gap-2 bg-liechti-gold hover:bg-white text-[#001133] px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:-translate-y-1 group">
                Sistemas de Calefacción <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. INNOVACIÓN Y SOSTENIBILIDAD */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideLeft}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl font-extrabold text-[#001133] mb-6">Innovación y sostenibilidad</h2>
            <h3 className="text-2xl font-bold text-[#0060a9] mb-6">Los sistemas de calefacción respetuosos con el medio ambiente son una necesidad hoy en día.</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              <strong>Las bombas de calor</strong> siguen siendo la tecnología más avanzada entre los sistemas de calefacción innovadores que extraen <strong>energía térmica del suelo, el aire o el agua subterránea</strong>. Su eficiencia es especialmente alta cuando se combinan <strong>con calefacción por suelo radiante</strong>.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Sin embargo, un tercio de la energía que produce una bomba de calor se <strong>genera mediante electricidad</strong>. Por lo tanto, <strong>se recomienda instalar un sistema fotovoltaico</strong>, ya que minimiza los costes energéticos. La inversión inicial se compensa con el tiempo gracias al menor coste de generación de energía.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideRight}
            className="order-1 lg:order-2 relative h-[400px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,17,51,0.15)] border-4 border-white group"
          >
            <div className="absolute inset-0 bg-[#0060a9]/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
            <img src="/heizung/sustainability.jpg" alt="Casa sostenible" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out" />
          </motion.div>
        </div>
      </section>

      {/* 3. BOMBAS DE CALOR */}
      <section className="bg-white py-20 md:py-32 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#001133] mb-4">Bombas de calor</h2>
            <div className="w-24 h-1 bg-liechti-gold mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Aire-Agua */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(0,96,169,0.15)] border border-gray-100 flex flex-col transform hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src="/heizung/card-luft-wasser.jpg" alt="Bomba de calor Aire-Agua" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg text-[#0060a9] z-20 transform group-hover:rotate-12 transition-transform">
                  <ThermometerSun className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col bg-white">
                <h3 className="text-2xl font-bold text-[#001133] mb-4 uppercase group-hover:text-[#0060a9] transition-colors">Aire-Agua</h3>
                <p className="text-gray-600 leading-relaxed">
                  La bomba de calor aire-agua, la más popular de todas, se utiliza no solo para calefacción central, sino también para agua caliente sanitaria. Según el fabricante y el modelo, es apta para instalación en interiores como en exteriores. Una bomba de calor aire-agua extrae calor del aire exterior. Un aire exterior más cálido se traduce en un rendimiento más eficiente.
                </p>
              </div>
            </motion.div>

            {/* Agua-Agua */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(0,96,169,0.15)] border border-gray-100 flex flex-col transform hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src="/heizung/card-wasser-wasser.jpg" alt="Bomba de calor Agua-Agua" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg text-[#0060a9] z-20 transform group-hover:rotate-12 transition-transform">
                  <Droplets className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col bg-white">
                <h3 className="text-2xl font-bold text-[#001133] mb-4 uppercase group-hover:text-[#0060a9] transition-colors">Agua-Agua</h3>
                <p className="text-gray-600 leading-relaxed">
                  Es el sistema de bomba de calor más eficiente. Sin embargo, implica una mayor inversión que una bomba de calor geotérmica. Generalmente, se requieren dos pozos para la extracción de energía: uno de suministro y otro de retorno con su correspondiente perforación. Se requieren análisis geológicos y permisos especiales.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. SONDAS GEOTÉRMICAS Y ENERGÍA SOLAR */}
      <section className="bg-liechti-gray py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex flex-col h-full"
          >
            <div className="flex items-center gap-4 mb-6 group cursor-default">
              <div className="p-3 bg-[#0060a9]/10 rounded-xl group-hover:bg-[#0060a9]/20 transition-colors">
                <Mountain className="w-8 h-8 text-[#0060a9] transform group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-3xl font-extrabold text-[#001133] uppercase">Sondas Geotérmicas</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8 flex-1">
              Las bombas de calor geotérmicas se consideran muy eficientes, pero son más caras que las bombas de calor aire-agua, ya que la fuente de calor debe extraerse mediante un pozo. La instalación requiere una perforación de entre 100 y 220 metros de profundidad. Tras un análisis geológico se requiere un permiso especial.
            </p>
            <div className="h-[300px] rounded-2xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.1)] border-4 border-white group">
              <img src="/heizung/card-erdsonden.jpg" alt="Sondas Geotérmicas" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="flex flex-col h-full"
          >
            <div className="flex items-center gap-4 mb-6 group cursor-default">
              <div className="p-3 bg-[#d4af37]/10 rounded-xl group-hover:bg-[#d4af37]/20 transition-colors">
                <Sun className="w-8 h-8 text-[#d4af37] transform group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <h2 className="text-3xl font-extrabold text-[#001133] uppercase">Tecnología Solar</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8 flex-1">
              La energía solar es gratuita y limpia. A medida que aumenta la demanda de energía durante los meses más fríos, disminuye la radiación solar. Para una instalación óptima de paneles solares, es fundamental que cubran una superficie suficiente y estén orientados al sur. Combinar tecnología solar con bombas de calor reduce costes.
            </p>
            <div className="h-[300px] rounded-2xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.1)] border-4 border-white group">
              <img src="/services/solar-service.jpg" alt="Tecnología Solar" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>

        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mt-20 text-center"
        >
          <Link href={`/${locale}/kontakt`} className="inline-flex items-center gap-2 bg-[#001133] hover:bg-[#d4af37] text-white hover:text-[#001133] px-10 py-5 rounded-xl font-bold uppercase tracking-wider transition-all shadow-[0_10px_20px_rgba(0,17,51,0.2)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:-translate-y-1">
            Solicita un Presupuesto <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* 5. CALEFACCIÓN DE BIOMASA */}
      <section className="bg-white py-20 md:py-32 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-extrabold text-[#001133] mb-6">Calefacción de biomasa</h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              Los sistemas de calefacción de pellets, al igual que los de gasóleo, requieren un amplio espacio de almacenamiento. Sin embargo, una sala de depósitos de gasóleo ya existente suele poder adaptarse para almacenar pellets. La madera es una fuente de energía sostenible y reduce el impacto ambiental. Las calderas de pellets son ideales para edificios antiguos con altas temperaturas de impulsión.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-4 border-white mb-12 group"
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
            <img src="/heizung/biomass-boiler.jpg" alt="Calefacción Biomasa Pellets" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" />
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-full shadow-2xl text-orange-500 z-20 group-hover:text-red-500 group-hover:rotate-12 transition-all">
              <Flame className="w-8 h-8" />
            </div>
          </motion.div>

          <div className="text-center">
            <Link href={`/${locale}/kontakt`} className="inline-flex bg-[#001133] hover:bg-[#d4af37] text-white hover:text-[#001133] px-10 py-4 rounded-xl font-bold uppercase tracking-wider transition-all hover:shadow-lg hover:-translate-y-1">
              Solicita un Presupuesto
            </Link>
          </div>
        </div>
      </section>

      {/* 6. SERVICIO Y REPARACIÓN */}
      <section className="bg-liechti-gray py-20 md:py-32 px-6 border-t-2 border-[#001133]/5 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideLeft}
          >
            <div className="w-16 h-1 bg-[#001133] mb-8"></div>
            <h2 className="text-4xl font-extrabold text-[#001133] mb-8">Servicio y reparación de calefacción</h2>
            <h3 className="text-2xl font-bold text-[#0060a9] mb-6 flex items-center gap-3">
              <Wrench className="w-7 h-7 text-[#0060a9]" />
              Resolveremos su problema.
            </h3>
            
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start gap-3 p-3 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-gray-200 hover:shadow-sm">
                <CheckCircle className="w-6 h-6 text-liechti-gold shrink-0 mt-0.5" />
                <span>Servicio de quemadores para sistemas de calefacción de gasóleo y gas.</span>
              </li>
              <li className="flex items-start gap-3 p-3 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-gray-200 hover:shadow-sm">
                <CheckCircle className="w-6 h-6 text-liechti-gold shrink-0 mt-0.5" />
                <span>Sistemas de escape.</span>
              </li>
              <li className="flex items-start gap-3 p-3 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-gray-200 hover:shadow-sm">
                <CheckCircle className="w-6 h-6 text-liechti-gold shrink-0 mt-0.5" />
                <span>Sistema de calefacción solar.</span>
              </li>
              <li className="flex items-start gap-3 p-3 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-gray-200 hover:shadow-sm">
                <CheckCircle className="w-6 h-6 text-liechti-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#001133]">Distribución del calor:</span>
                  <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
                    <li>Calefacción por suelo radiante</li>
                    <li>Gobierno (Regulaciones / Valvulería)</li>
                    <li>Radiador</li>
                  </ul>
                </div>
              </li>
            </ul>

            <div className="mt-10">
              <Link href={`/${locale}/kontakt`} className="inline-flex bg-[#001133] hover:bg-[#d4af37] text-white hover:text-[#001133] px-10 py-5 rounded-xl font-bold uppercase tracking-wider transition-all shadow-[0_10px_20px_rgba(0,17,51,0.15)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:-translate-y-1">
                Ponte en Contacto
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideRight}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,17,51,0.15)] border-4 border-white group"
          >
            <div className="absolute inset-0 bg-[#d4af37]/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
            <img src="/heizung/service-repair.jpg" alt="Servicio y Reparación" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out" />
          </motion.div>

        </div>
      </section>

    </main>
  );
}