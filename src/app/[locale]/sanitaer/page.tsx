import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export default async function Sanitaer({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SanitaerPage' });

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO SECTION: LIFESTYLE & LUJO MINIMALISTA */}
      <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Capa sutil de azul para mantener identidad de marca sin oscurecer el "lifestyle" */}
          <div className="absolute inset-0 bg-liechti-dark/50 mix-blend-multiply z-10"></div>
          {/* Imagen de un baño moderno de altísima calidad (Unsplash placeholder) */}
          <img 
            src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Modern Bathroom" 
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl mt-12">
          <h2 className="text-liechti-gold text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4 drop-shadow-lg">
            {t('heroSubtitle')}
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-xl">
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-xl text-white font-light leading-relaxed drop-shadow-md">
            {t('intro')}
          </p>
        </div>
      </section>

      {/* 2. SECCIÓN: SECTORES (DISEÑO DIVIDIDO / SPLIT SCREEN) */}
      <section className="w-full py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 relative z-10">
            <h3 className="text-liechti-blue text-sm font-bold tracking-[0.2em] mb-3">
              {t('sectorsTitle')}
            </h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-liechti-dark mb-6 leading-snug">
              {t('sectorsSubtitle')}
            </h2>
            <div className="w-16 h-1 bg-liechti-gold mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              {t('sectorsDesc')}
            </p>
          </div>

          <div className="w-full lg:w-1/2 relative">
            {/* Elementos decorativos de fondo */}
            <div className="absolute -inset-4 bg-liechti-gray rounded-3xl transform rotate-3 z-0"></div>
            <div className="absolute -inset-4 bg-liechti-blue/5 rounded-3xl transform -rotate-2 z-0"></div>
            
            {/* Imagen corporativa/industrial (Unsplash placeholder) */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" 
                alt="Commercial Plumbing Installation" 
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN: SERVICIOS (NEUBAU VS REPARATUR) EN GRIS CLARO */}
      <section className="w-full py-24 bg-liechti-gray">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-liechti-dark mb-4">
              {t('servicesMainTitle')}
            </h2>
            <p className="text-xl text-gray-500 font-light">
              {t('servicesMainSubtitle')}
            </p>
            <div className="w-24 h-1 bg-liechti-gold mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            
            {/* Columna Izquierda: Obra Nueva (Neubau) */}
            <div className="bg-white rounded-3xl p-10 md:p-12 shadow-[0_10px_40px_rgba(0,0,77,0.06)] border border-transparent hover:border-liechti-gold/30 transition-all duration-500">
              <div className="w-16 h-16 bg-liechti-blue text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-liechti-blue/30 transform -rotate-3">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-3xl font-extrabold text-liechti-dark mb-4">{t('newBuildTitle')}</h3>
              <p className="text-gray-500 mb-8 font-medium">{t('newBuildIntro')}</p>
              
              <ul className="space-y-4 text-gray-700">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <li key={`newbuild-${num}`} className="flex items-start">
                    <svg className="w-6 h-6 text-liechti-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg">{t(`newBuildList${num}` as keyof IntlMessages['SanitaerPage'])}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna Derecha: Reparación (Reparatur) */}
            <div className="bg-liechti-dark rounded-3xl p-10 md:p-12 shadow-2xl border border-liechti-dark relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 w-64 h-64 bg-liechti-blue/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm text-liechti-gold border border-liechti-gold/30 rounded-2xl flex items-center justify-center mb-8 transform rotate-3">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                
                <h3 className="text-3xl font-extrabold mb-4">{t('repairTitle')}</h3>
                <p className="text-liechti-gold mb-8 font-medium tracking-wide">{t('repairIntro')}</p>
                
                <ul className="space-y-4">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <li key={`repair-${num}`} className="flex items-start text-gray-300">
                      <svg className="w-6 h-6 text-liechti-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-lg">{t(`repairList${num}` as keyof IntlMessages['SanitaerPage'])}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-12 bg-liechti-gold text-liechti-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-lg transform hover:-translate-y-1 w-full sm:w-auto">
                  {t('btnContact')}
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}