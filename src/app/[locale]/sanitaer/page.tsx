'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Droplet, Bath, Wrench, Building2, ClipboardList, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SanitaerPage() {
  const params = useParams();
  const locale = (params.locale as string) || 'de';
  const t = useTranslations('SanitaerPage');
  const globalT = useTranslations('HomePage');

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
            {t('heroSubtitle')}
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight">
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
            {t('intro')}
          </p>
          <div className="mt-10">
             <Link href={`/${locale}/kontakt`} className="inline-flex items-center gap-2 bg-liechti-gold hover:bg-white text-[#001133] px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:-translate-y-1 group">
                {globalT('btnContact')} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
              {t('sectorsTitle')}<br/>
              <span className="text-[#0060a9]">{t('sectorsSubtitle')}</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t('sectorsDesc')}
            </p>
            
            <div className="mt-8 flex items-center gap-4 text-[#001133] font-bold">
               <ShieldCheck className="w-6 h-6 text-liechti-gold" />
               <span>{globalT('badge51')}</span>
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#001133] mb-4">{t('servicesMainTitle')}</h2>
            <p className="text-gray-500 text-lg uppercase tracking-widest font-semibold mb-6">{t('servicesMainSubtitle')}</p>
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
                <h3 className="text-2xl font-bold text-[#001133] mb-3 uppercase group-hover:text-[#0060a9] transition-colors">{t('newBuildTitle')}</h3>
                <p className="text-gray-600 mb-6 font-medium">{t('newBuildIntro')}</p>
                
                <ul className="space-y-3 text-gray-600 flex-1">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-liechti-gold mt-2 shrink-0"></div><span>{t('newBuildList1')}</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-liechti-gold mt-2 shrink-0"></div><span>{t('newBuildList2')}</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-liechti-gold mt-2 shrink-0"></div><span>{t('newBuildList3')}</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-liechti-gold mt-2 shrink-0"></div><span>{t('newBuildList4')}</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-liechti-gold mt-2 shrink-0"></div><span>{t('newBuildList5')}</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-liechti-gold mt-2 shrink-0"></div><span>{t('newBuildList6')}</span></li>
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
                <h3 className="text-2xl font-bold text-[#001133] mb-3 uppercase group-hover:text-[#0060a9] transition-colors">{t('repairTitle')}</h3>
                <p className="text-gray-600 mb-6 font-medium">{t('repairIntro')}</p>
                
                <ul className="space-y-3 text-gray-600 flex-1">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-liechti-gold mt-2 shrink-0"></div><span>{t('repairList1')}</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-liechti-gold mt-2 shrink-0"></div><span>{t('repairList2')}</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-liechti-gold mt-2 shrink-0"></div><span>{t('repairList3')}</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-liechti-gold mt-2 shrink-0"></div><span>{t('repairList4')}</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-liechti-gold mt-2 shrink-0"></div><span className="italic text-gray-400">{t('repairList5')}</span></li>
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
              {globalT('btnContact')}
            </Link>
          </motion.div>

        </div>
      </section>

    </main>
  );
}