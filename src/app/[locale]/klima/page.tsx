import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export default async function Klima({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'KlimaPage' });

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO SECTION: AIRE PURO Y CONFORT */}
      <section className="relative w-full h-[55vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Capa de azul muy sutil para dar sensación de aire fresco y limpio */}
          <div className="absolute inset-0 bg-liechti-blue/30 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-20"></div>
          {/* Fotografía de un espacio interior brillante y aireado (Unsplash placeholder) */}
          <img 
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop" 
            alt="Clean and airy interior" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        <div className="relative z-30 text-center px-6 max-w-3xl mt-12">
          <h2 className="text-liechti-dark bg-white/80 backdrop-blur-sm inline-block px-6 py-2 rounded-full text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase mb-6 shadow-sm border border-white/50">
            {t('heroSubtitle')}
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-liechti-dark mb-6 leading-tight drop-shadow-sm">
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-xl text-liechti-dark/80 font-medium leading-relaxed bg-white/40 backdrop-blur-md p-4 rounded-2xl shadow-sm">
            {t('intro')}
          </p>
        </div>
      </section>

      {/* 2. SECCIÓN COMPARATIVA: KLIMA VS LÜFTUNG */}
      <section className="relative z-40 max-w-7xl mx-auto px-6 py-16 -mt-10">
        
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-extrabold text-liechti-dark">
            {t('diffTitle')}
          </h3>
          <div className="w-16 h-1 bg-liechti-gold mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          
          {/* Tarjeta: Klimatisierung */}
          <div className="group bg-white rounded-3xl p-10 md:p-12 shadow-[0_15px_50px_rgba(0,0,77,0.08)] border border-liechti-gray hover:border-liechti-blue transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-liechti-blue/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110"></div>
            
            <div>
              <div className="w-16 h-16 rounded-2xl bg-liechti-blue/10 flex items-center justify-center mb-8 text-liechti-blue">
                {/* Icono Termómetro/Clima */}
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h4 className="text-3xl font-extrabold text-liechti-dark mb-4">{t('klimaTitle')}</h4>
              <p className="text-gray-600 text-lg leading-relaxed">{t('klimaDesc')}</p>
            </div>
          </div>

          {/* Tarjeta: Raumlüftung */}
          <div className="group bg-white rounded-3xl p-10 md:p-12 shadow-[0_15px_50px_rgba(0,0,77,0.08)] border border-liechti-gray hover:border-liechti-gold transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-liechti-gold/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110"></div>
            
            <div>
              <div className="w-16 h-16 rounded-2xl bg-liechti-gold/10 flex items-center justify-center mb-8 text-liechti-gold">
                {/* Icono Viento/Flujo de aire */}
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4 className="text-3xl font-extrabold text-liechti-dark mb-4">{t('lueftungTitle')}</h4>
              <p className="text-gray-600 text-lg leading-relaxed">{t('lueftungDesc')}</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SECCIÓN: EXPLICACIÓN DETALLADA Y CALL TO ACTION */}
      <section className="w-full py-20 bg-liechti-dark text-white relative overflow-hidden">
        {/* Elemento de diseño de fondo */}
        <div className="absolute -left-20 top-0 w-64 h-64 bg-liechti-blue/20 blur-3xl rounded-full"></div>
        <div className="absolute -right-20 bottom-0 w-64 h-64 bg-liechti-gold/10 blur-3xl rounded-full"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <svg className="w-12 h-12 text-liechti-gold mx-auto mb-8 opacity-80" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-12">
            {t('detailsText')}
          </p>
          <button className="bg-liechti-gold text-liechti-dark px-12 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transform hover:-translate-y-1">
            {t('btnContact')}
          </button>
        </div>
      </section>

    </main>
  );
}