'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Wind, Snowflake, Thermometer, ShieldCheck, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function KlimaPage() {
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
      <section className="relative w-full h-[60vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="/klima/hero-klima.jpg" 
            alt="Tecnología de aire acondicionado y ventilación" 
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
            Climatización y Ventilación
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight">
            Tecnología de aire acondicionado y ventilación
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
            Los aires acondicionados suelen confundirse con los sistemas de ventilación. Si bien algunos aires acondicionados sí proporcionan ventilación, no siempre es así. Entonces, ¿cuál es exactamente la diferencia entre un aire acondicionado y un sistema de ventilación?
          </p>
          <div className="mt-10 flex justify-center gap-4">
             <Link href={`/${locale}/kontakt`} className="inline-flex items-center gap-2 bg-liechti-gold hover:bg-white text-[#001133] px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:-translate-y-1 group">
                Hacer Contacto <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. AIRE ACONDICIONADO O VENTILACIÓN DE LA HABITACIÓN */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideLeft}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <Wind className="w-10 h-10 text-[#0060a9]" />
              <Snowflake className="w-8 h-8 text-[#4fa8ff]" />
            </div>
            <h2 className="text-4xl font-extrabold text-[#001133] mb-8 leading-tight">
              ¿Aire acondicionado o ventilación de la habitación?
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                En general, el aire acondicionado se refiere a la <strong>refrigeración o calefacción</strong>, así como al <strong>control de la humedad</strong> en una habitación. La ventilación, por otro lado, se refiere a la <strong>circulación de aire fresco</strong> entre el interior y el exterior.
              </p>
              
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <p>
                  Algunos tipos de aires acondicionados están diseñados para aspirar aire fresco del exterior y ventilar una habitación, mientras que otros no. Puede que ni siquiera necesites ventilación.
                </p>
              </div>

              <p className="font-medium text-[#001133] border-l-4 border-liechti-gold pl-4 py-2">
                También ofrecemos soluciones climáticas adaptadas a su situación para promover el bienestar. Contáctanos para obtener más detalles sobre lo que mejor se adapte a tus necesidades.
              </p>
            </div>
            
            <div className="mt-10">
               <Link href={`/${locale}/kontakt`} className="inline-flex items-center gap-2 bg-[#001133] hover:bg-[#d4af37] text-white hover:text-[#001133] px-10 py-4 rounded-xl font-bold uppercase tracking-wider transition-all shadow-lg hover:-translate-y-1">
                 Hazte Contacto
               </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideRight}
            className="order-1 lg:order-2 relative h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,17,51,0.15)] border-4 border-white group"
          >
            <div className="absolute inset-0 bg-[#0060a9]/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
            {/* Imagen limpia de ambiente interior moderno */}
            <img src="/klima/indoor-climate.jpg" alt="Climatización y Confort" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out" />
            
            {/* Tarjeta flotante indicadora de temperatura perfecta */}
            <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 group-hover:-translate-y-2 transition-transform">
              <Thermometer className="w-8 h-8 text-[#0060a9]" />
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest">Confort Ideal</span>
                <span className="block text-2xl font-black text-[#001133]">21°C</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. RESUMEN DE EXPERIENCIA (Bonus Section para confianza) */}
      <section className="bg-[#f8fafc] py-20 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <ShieldCheck className="w-12 h-12 text-[#d4af37] mb-4" />
              <h3 className="text-xl font-bold text-[#001133] mb-2">51 Años de Experiencia</h3>
              <p className="text-gray-500">Planificación, instalación y mantenimiento de sistemas climáticos complejos.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <Wind className="w-12 h-12 text-[#0060a9] mb-4" />
              <h3 className="text-xl font-bold text-[#001133] mb-2">Calidad del Aire</h3>
              <p className="text-gray-500">Garantizamos una circulación de aire puro y fresco para su bienestar y salud.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-[#001133] mb-2">Asesoramiento Experto</h3>
              <p className="text-gray-500">Le ayudamos a elegir exactamente el sistema que su espacio necesita.</p>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}