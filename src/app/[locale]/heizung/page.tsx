import { getTranslations } from 'next-intl/server';
// Importamos el componente Image de Next.js para optimización extrema
import Image from 'next/image';

export default async function Heizung({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HeizungPage' });

  return (
    <main className="min-h-screen bg-liechti-gray">
      
      {/* 1. HERO SECTION: DISEÑO TÉCNICO INMERSIVO */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-liechti-dark/80 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-liechti-gray via-transparent to-transparent z-20"></div>
          {/* Aquí usamos un placeholder técnico (blueprint). Más adelante puedes cambiar esta URL por un video 3D renderizado (MP4) */}
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop" 
            alt="Heizung Engineering Blueprint" 
            className="w-full h-full object-cover grayscale opacity-60"
          />
        </div>

        <div className="relative z-30 text-center px-6 max-w-4xl mt-12">
          <h2 className="text-liechti-gold text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4 drop-shadow-md">
            {t('heroSubtitle')}
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-xl">
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
            {t('intro')}
          </p>
        </div>
      </section>

      {/* 2. SECCIÓN BENTO BOX (SERVICIOS Y SISTEMAS) */}
      <section className="relative z-40 max-w-7xl mx-auto px-6 py-20 -mt-20">
        
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-extrabold text-liechti-dark">
            {t('systemsTitle')}
          </h3>
          <div className="w-24 h-1 bg-liechti-gold mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Aire-Agua (AHORA CON IMAGEN 3D/TÉCNICA) */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,77,0.05)] border border-transparent hover:border-liechti-gold hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-500 transform hover:-translate-y-2 flex flex-col">
            {/* Contenedor de la imagen simulando el render 3D */}
            <div className="w-full h-48 relative overflow-hidden bg-liechti-gray">
              <img 
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop" 
                alt="Air Water Heat Pump Technical" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
            </div>
            <div className="p-8 pt-4 flex-grow">
              <h4 className="text-2xl font-bold text-liechti-dark mb-4">{t('airWaterTitle')}</h4>
              <p className="text-gray-600 leading-relaxed">{t('airWaterDesc')}</p>
            </div>
          </div>

          {/* Card 2: Agua-Agua (Mantenemos Icono para contraste de diseño) */}
          <div className="group bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,77,0.05)] border border-transparent hover:border-liechti-gold hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-500 transform hover:-translate-y-2">
            <div className="w-14 h-14 rounded-full bg-liechti-blue/10 flex items-center justify-center mb-6 group-hover:bg-liechti-blue transition-colors duration-500">
              <svg className="w-6 h-6 text-liechti-blue group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h4 className="text-2xl font-bold text-liechti-dark mb-4">{t('waterWaterTitle')}</h4>
            <p className="text-gray-600 leading-relaxed">{t('waterWaterDesc')}</p>
          </div>

          {/* Card 3: Geotermia (AHORA CON IMAGEN TÉCNICA GEOLÓGICA) */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,77,0.05)] border border-transparent hover:border-liechti-gold hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-500 transform hover:-translate-y-2 lg:col-span-1 md:col-span-2 flex flex-col">
            <div className="w-full h-48 relative overflow-hidden bg-liechti-gray">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" 
                alt="Geothermal Drilling Concept" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
            </div>
            <div className="p-8 pt-4 flex-grow">
              <h4 className="text-2xl font-bold text-liechti-dark mb-4">{t('geoTitle')}</h4>
              <p className="text-gray-600 leading-relaxed">{t('geoDesc')}</p>
            </div>
          </div>

          {/* Card 4: Biomasa (Horizontal destacada - Diseño Premium) */}
          <div className="group bg-liechti-dark rounded-2xl p-8 lg:p-12 shadow-[0_10px_30px_rgba(0,0,77,0.1)] border border-liechti-dark hover:border-liechti-gold transition-all duration-500 transform hover:-translate-y-2 md:col-span-2 lg:col-span-2 flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-liechti-blue/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="relative z-10 w-full md:w-2/3">
              <h4 className="text-3xl font-bold text-white mb-4">{t('biomassTitle')}</h4>
              <p className="text-gray-300 leading-relaxed text-lg">{t('biomassDesc')}</p>
            </div>
            <div className="relative z-10 w-full md:w-1/3 flex justify-center md:justify-end">
              <div className="w-24 h-24 rounded-full border-2 border-liechti-gold flex items-center justify-center bg-white/5 backdrop-blur-sm">
                 <svg className="w-10 h-10 text-liechti-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
            </div>
          </div>

          {/* Card 5: Solar */}
          <div className="group bg-gradient-to-br from-white to-liechti-gray rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,77,0.05)] border border-transparent hover:border-liechti-gold hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-500 transform hover:-translate-y-2">
            <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-500">
              <svg className="w-6 h-6 text-yellow-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <h4 className="text-2xl font-bold text-liechti-dark mb-4">{t('solarTitle')}</h4>
            <p className="text-gray-600 leading-relaxed">{t('solarDesc')}</p>
          </div>

        </div>
      </section>

    </main>
  );
}