'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Droplet, Bath, Wrench, Building2, ClipboardList, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SanitaerPage() {
  const params = useParams();
  const locale = (params.locale as string) || 'de';

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
            src="/sanitaer/hero-sanitaer-design.jpg" 
            alt="Diseño e Innovaciones Técnicas Sanitarias" 
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
            Instalaciones Sanitarias
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight">
            Diseño e innovaciones técnicas
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
            Las instalaciones sanitarias combinan una amplia gama de estilos, colores y formas con las instalaciones técnicas. Desde las más sencillas hasta las más complejas, la planificación de las instalaciones sanitarias no se limita a los sistemas de tuberías, sino que también incluye el diseño del edificio y los requisitos de su uso final.
          </p>
          <div className="mt-10">
             <Link href={`/${locale}/kontakt`} className="inline-flex items-center gap-2 bg-liechti-gold hover:bg-white text-[#001133] px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:-translate-y-1 group">
                Hacer Contacto <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. PRIVADO, COMERCIAL O INDUSTRIAL */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto border-b border-gray-200/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideLeft}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <Building2 className="w-10 h-10 text-[#0060a9]" />
            </div>
            <h2 className="text-4xl font-extrabold text-[#001133] mb-6 leading-tight">
              Privado, comercial o industrial:<br/>
              <span className="text-[#0060a9]">somos su socio.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Nuestra experiencia se extiende más allá del sector privado e incluye instalaciones de fontanería en edificios comerciales, industriales y judiciales. 
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Como empresa especializada, ofrecemos asistencia experta para todas sus necesidades de fontanería. Garantizamos una planificación óptima y estaremos encantados de asesorarle en el diseño de sus instalaciones.
            </p>
            
            <div className="mt-8 flex items-center gap-4 text-[#001133] font-bold">
               <ShieldCheck className="w-6 h-6 text-liechti-gold" />
               <span>51 años garantizando instalaciones impecables.</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideRight}
            className="order-1 lg:order-2 relative h-[450px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,17,51,0.15)] border-4 border-white group"
          >
            <div className="absolute inset-0 bg-[#0060a9]/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
            <img src="/sanitaer/industrial-scale.jpg" alt="Instalación Industrial" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out" />
          </motion.div>
        </div>
      </section>

      {/* 3. DEL CONCEPTO A LA REALIDAD */}
      <section className="bg-white py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#001133] mb-4">Del concepto a la realidad</h2>
            <p className="text-gray-500 text-lg uppercase tracking-widest font-semibold mb-6">Adaptamos nuestros servicios a sus necesidades</p>
            <div className="w-24 h-1 bg-liechti-gold mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Obra nueva y renovación */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(0,96,169,0.15)] border border-gray-100 flex flex-col transform hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src="/sanitaer/renovation-van.jpg" alt="Obra nueva y renovación" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg text-[#0060a9] z-20 transform group-hover:rotate-12 transition-transform">
                  <ClipboardList className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col bg-white">
                <h3 className="text-2xl font-bold text-[#001133] mb-3 uppercase group-hover:text-[#0060a9] transition-colors">Obra nueva y renovación</h3>
                <p className="text-gray-600 mb-6 font-medium">Contáctenos para programar una visita en el sitio. Le ofrecemos:</p>
                
                <ul className="space-y-3 text-gray-600 flex-1">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-liechti-gold mt-2 shrink-0"></div><span>Consulta in situ</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-liechti-gold mt-2 shrink-0"></div><span>Oferta no vinculante</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-liechti-gold mt-2 shrink-0"></div><span>Planificación</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-liechti-gold mt-2 shrink-0"></div><span>Gestión de la construcción</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-liechti-gold mt-2 shrink-0"></div><span>Coordinación con otros trabajadores de la construcción</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-liechti-gold mt-2 shrink-0"></div><span>Asesoramiento en la selección de electrodomésticos y accesorios.</span></li>
                </ul>
              </div>
            </motion.div>

            {/* Servicio y reparación */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(0,96,169,0.15)] border border-gray-100 flex flex-col transform hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src="/sanitaer/service-repair.jpg" alt="Servicio y Reparación" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg text-[#0060a9] z-20 transform group-hover:rotate-12 transition-transform">
                  <Wrench className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col bg-white">
                <h3 className="text-2xl font-bold text-[#001133] mb-3 uppercase group-hover:text-[#0060a9] transition-colors">Servicio y reparación</h3>
                <p className="text-gray-600 mb-6 font-medium">Cocina, baños, lavaderos, jardín:</p>
                
                <ul className="space-y-3 text-gray-600 flex-1">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-liechti-gold mt-2 shrink-0"></div><span>Servicio de calderas</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-liechti-gold mt-2 shrink-0"></div><span>Reparación de conexiones con fugas</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-liechti-gold mt-2 shrink-0"></div><span>Reparación de tuberías de agua</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-liechti-gold mt-2 shrink-0"></div><span>Reparación de daños por agua</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-liechti-gold mt-2 shrink-0"></div><span className="italic text-gray-400">y mucho más...</span></li>
                </ul>
              </div>
            </motion.div>

          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link href={`/${locale}/kontakt`} className="inline-flex items-center gap-2 bg-[#001133] hover:bg-[#d4af37] text-white hover:text-[#001133] px-12 py-5 rounded-xl font-bold uppercase tracking-wider transition-all shadow-[0_10px_20px_rgba(0,17,51,0.2)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:-translate-y-1">
              Hazte Contacto
            </Link>
          </motion.div>

        </div>
      </section>

    </main>
  );
}