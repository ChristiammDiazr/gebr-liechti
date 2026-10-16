'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { History, Heart, Target, Users, Award } from 'lucide-react';

export default function UeberUnsPage() {
  const params = useParams();
  const locale = (params.locale as string) || 'de';

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
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
    <main className="min-h-screen w-full bg-[#f8fafc] overflow-hidden">
      
      {/* 1. HERO SECTION (FOTO AÉREA AARAU) */}
      <section className="relative w-full h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            // Foto Aérea Panorámica (Aarau / Suiza)
            src="/hero/ueber-uns-bg.jpg" 
            alt="Vista panorámica y aérea de Aarau, Cantón de Aargau, Suiza" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#001133]/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] to-transparent"></div>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20"
        >
          <span className="inline-block bg-liechti-gold text-[#001133] px-6 py-2 rounded-full text-sm font-bold tracking-[0.3em] uppercase mb-6 shadow-lg">
            Gebr. Liechti AG • Aarau, Aargau
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] tracking-tight">
            Quiénes Somos
          </h1>
          <div className="w-24 h-1.5 bg-liechti-gold mx-auto rounded-full"></div>
        </motion.div>
      </section>

      {/* 2. HISTORIA: PRESENCIA INTERGENERACIONAL */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        
        {/* Bloque 1974 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideLeft}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <History className="w-10 h-10 text-liechti-gold" />
              <span className="text-xl font-bold text-gray-400 tracking-widest uppercase">1974 - 2022</span>
            </div>
            <h3 className="text-4xl font-extrabold text-[#001133] mb-3">Sobre nosotros</h3>
            <h4 className="text-2xl font-semibold text-[#0060a9] mb-8">Presencia intergeneracional</h4>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Nuestra empresa fue fundada <strong>en 1974</strong> por <strong>Johann Liechti</strong>. Tras los primeros éxitos, la empresa se expandió de forma constante en los años siguientes.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-liechti-gold pl-6 py-2 bg-white shadow-sm rounded-r-lg">
              Entre <strong>1980 y 1990</strong>, la empresa pasó gradualmente a manos de sus hijos, <strong>Ueli y Peter Liechti</strong>, quienes a su vez consolidaron <strong>su éxito durante los siguientes 42 años</strong>.
            </p>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideRight}
            className="order-1 lg:order-2 relative group"
          >
            <div className="absolute inset-0 bg-[#001133] rounded-3xl transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
            <img src="/about/johann-liechti.jpg" alt="Archivo Gebr. Liechti 1974" className="relative z-10 w-full h-auto rounded-3xl shadow-2xl border-4 border-white grayscale group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute -bottom-6 right-6 bg-white px-4 py-2 rounded-lg shadow-lg z-20">
               <p className="text-sm text-gray-500 font-bold italic">Archivo Gebr. Liechti 1974</p>
            </div>
          </motion.div>
        </div>

        {/* Bloque 2022 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideLeft}
            className="relative group"
          >
            <div className="absolute inset-0 bg-liechti-gold rounded-3xl transform -translate-x-4 translate-y-4 group-hover:-translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
            <img src="/about/nueva-era.jpg" alt="Archivo Gebr. Liechti 2022" className="relative z-10 w-full h-auto rounded-3xl shadow-2xl border-4 border-white" />
            <div className="absolute -bottom-6 left-6 bg-white px-4 py-2 rounded-lg shadow-lg z-20">
               <p className="text-sm text-gray-500 font-bold italic">Archivo Gebr. Liechti 2022</p>
            </div>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideRight}
          >
            <div className="flex items-center gap-4 mb-6">
              <Users className="w-10 h-10 text-[#0060a9]" />
              <span className="text-xl font-bold text-gray-400 tracking-widest uppercase">2022 - Presente</span>
            </div>
            <h3 className="text-4xl font-extrabold text-[#001133] mb-8">Una nueva era para Gebr. Liechti AG</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              En <strong>2022</strong>, comenzó una nueva era para Gebr. Liechti AG cuando <strong>Peter</strong> y <strong>Ueli Liechti</strong> cedieron la empresa a <strong>Reinhard</strong> y <strong>Andrea Peterhans</strong>.
            </p>
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,17,51,0.1)" }}
              className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,17,51,0.05)] border border-gray-100 transition-all"
            >
              <p className="text-2xl text-[#001133] font-medium text-center leading-relaxed">
                Los <span className="text-liechti-gold font-bold">valores</span>, la <span className="text-liechti-gold font-bold">pasión</span>, la <span className="text-liechti-gold font-bold">determinación</span> y el <span className="text-liechti-gold font-bold">nombre</span> perduran.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. POR QUÉ NOSOTROS (Valores y Misión) */}
      <section className="bg-white py-24 md:py-32 px-6 border-t border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#001133] mb-6">¿Por qué nosotros?</h2>
            <div className="w-24 h-1.5 bg-liechti-gold mx-auto rounded-full"></div>
          </motion.div>

          {/* Lo que nos mueve */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-[#001133] to-[#001a4d] rounded-3xl p-10 md:p-16 shadow-2xl mb-16 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <Heart className="w-10 h-10 text-liechti-red" />
              <h3 className="text-3xl md:text-4xl font-bold text-white">Lo que nos mueve</h3>
            </div>
            <p className="text-gray-300 text-xl leading-relaxed flex items-start gap-4 relative z-10 font-light">
              <span className="text-4xl text-liechti-gold font-serif leading-none">"</span>
              <span>Un estilo de vida sostenible es mucho más que simplemente reducir la huella de carbono de nuestro planeta. Vivir de forma sostenible significa asumir la responsabilidad del bienestar de nuestros semejantes y de las generaciones futuras.</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Valores */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-10 md:p-12 shadow-[0_15px_50px_rgba(0,17,51,0.06)] border border-gray-100 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-blue-50 rounded-2xl">
                  <Award className="w-8 h-8 text-[#0060a9]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#001133]">Valores fundamentales</h3>
              </div>
              <ul className="space-y-8">
                <li className="flex items-start gap-5">
                  <div className="w-3 h-3 mt-2.5 rounded-full bg-liechti-gold shrink-0 shadow-md"></div>
                  <p className="text-gray-600 text-lg leading-relaxed">Ofrecemos mucho más que servicios, ofrecemos soluciones; nuestros clientes se convierten en amigos y nuestros proyectos en alianzas.</p>
                </li>
                <li className="flex items-start gap-5">
                  <div className="w-3 h-3 mt-2.5 rounded-full bg-liechti-gold shrink-0 shadow-md"></div>
                  <p className="text-gray-600 text-lg leading-relaxed">Invertimos en la formación continua para garantizar a nuestros clientes la mejor ejecución profesional con un alto nivel de calidad.</p>
                </li>
                <li className="flex items-start gap-5">
                  <div className="w-3 h-3 mt-2.5 rounded-full bg-liechti-gold shrink-0 shadow-md"></div>
                  <p className="text-gray-600 text-lg leading-relaxed">Mantenemos nuestra infraestructura en excelentes condiciones. Garantizamos resultados óptimos con una excelente relación calidad-precio.</p>
                </li>
              </ul>
            </motion.div>

            {/* Misión */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-10 md:p-12 shadow-[0_15px_50px_rgba(0,17,51,0.06)] border border-gray-100 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-red-50 rounded-2xl">
                  <Target className="w-8 h-8 text-liechti-red" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#001133]">Nuestra misión</h3>
              </div>
              <ul className="space-y-8">
                <li className="flex items-start gap-5">
                  <div className="w-3 h-3 mt-2.5 rounded-full bg-[#0060a9] shrink-0 shadow-md"></div>
                  <p className="text-gray-600 text-lg leading-relaxed">Proporcionar soluciones, asesoramiento y ejecución para la introducción de tecnologías innovadoras y sostenibles en el campo de la tecnología de la construcción, adaptadas al cliente.</p>
                </li>
                <li className="flex items-start gap-5">
                  <div className="w-3 h-3 mt-2.5 rounded-full bg-[#0060a9] shrink-0 shadow-md"></div>
                  <p className="text-gray-600 text-lg leading-relaxed">Realizar trabajos de mantenimiento en los sistemas tecnológicos de edificios existentes para garantizar su durabilidad y eficiencia continua, a precios razonables.</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}