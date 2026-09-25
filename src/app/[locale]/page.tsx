import { getTranslations } from 'next-intl/server';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  // Coordenadas calibradas sobre el mapa SVG vectorizado de Suiza
  const mapPoints = [
    { top: '35%', left: '48%', isHq: true }, // Zentrale - Hunzenschwil (Aargau)
    { top: '32%', left: '60%' }, // Zürich
    { top: '22%', left: '40%' }, // Basel
    { top: '50%', left: '36%' }, // Bern
    { top: '78%', left: '15%' }, // Genf
    { top: '48%', left: '52%' }, // Luzern
    { top: '35%', left: '72%' }, // St. Gallen
    { top: '80%', left: '70%' }, // Lugano (Ticino)
    { top: '72%', left: '40%' }, // Sion (Valais)
    { top: '58%', left: '78%' }, // Chur (Graubünden)
    { top: '42%', left: '26%' }, // Neuchâtel
  ];

  return (
    <main className="relative min-h-screen w-full flex flex-col bg-liechti-gray overflow-hidden">
      
      {/* =========================================
          1. HERO SECTION (VIDEO DE FONDO)
      ========================================= */}
      <section className="relative w-full h-screen min-h-[800px] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-liechti-dark/60 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-liechti-gray z-20"></div>
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90">
            <source src="https://cdn.pixabay.com/video/2020/05/25/40131-425255476_large.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-30 flex flex-col items-center justify-center max-w-5xl">
          <h2 className="text-liechti-gold text-xs sm:text-sm md:text-base font-bold tracking-[0.4em] mb-6 uppercase drop-shadow-lg bg-liechti-dark/40 px-6 py-2 rounded-full border border-liechti-gold/30 backdrop-blur-sm">
            {t('heroSubtitle')}
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-10 leading-tight drop-shadow-2xl">
            {t('heroTitle')}
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-6 mt-8 w-full sm:w-auto px-4">
            <a href={`/${locale}/kontakt`} className="w-full sm:w-auto bg-liechti-gold text-liechti-dark px-12 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(255,255,255,0.6)] transform hover:-translate-y-1 text-center">
              {t('btnContact')}
            </a>
            <a href={`/${locale}/heizung`} className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/50 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-liechti-dark transition-all duration-300 shadow-lg transform hover:-translate-y-1 text-center">
              {t('servicesTitle')}
            </a>
          </div>
        </div>
      </section>

      {/* =========================================
          2. SECCIÓN: ENERGÍA RENOVABLE 
      ========================================= */}
      <section className="relative z-30 w-full bg-liechti-gray py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-liechti-blue text-sm font-bold tracking-[0.2em] mb-3 uppercase">{t('future')}</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-liechti-dark mb-6">
              {t('renewableTitle')}
            </h2>
            <div className="w-16 h-1 bg-liechti-gold mb-10"></div>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p><strong>{t('renewableText1')}</strong></p>
              <p>{t('renewableText2')}</p>
              <p>{t('renewableText3')}</p>
              <p className="text-liechti-blue font-semibold border-l-4 border-liechti-gold pl-6 py-2 bg-white shadow-sm rounded-r-lg mt-8">
                {t('renewableText4')}
              </p>
            </div>
          </div>

          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <div className="absolute inset-0 bg-liechti-dark/20 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2000&auto=format&fit=crop" 
              alt="Erneuerbare Energie" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-xs border-l-4 border-liechti-gold">
              <p className="text-liechti-dark font-bold text-xl">{t('supportText')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. SECCIÓN: ACCESOS RÁPIDOS A SERVICIOS
      ========================================= */}
      <section className="relative z-30 w-full bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-liechti-dark mb-6">{t('servicesTitle')}</h2>
            <div className="w-24 h-1 bg-liechti-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href={`/${locale}/heizung`} className="group block relative h-80 rounded-3xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-liechti-dark/40 group-hover:bg-liechti-blue/60 transition-colors duration-500 z-10"></div>
              <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop" alt="Heizung" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center border-4 border-transparent group-hover:border-liechti-gold/50 rounded-3xl transition-all">
                <h3 className="text-3xl font-bold text-white mb-2">{t('navHeizung')}</h3>
                <span className="text-liechti-gold font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2">
                  {t('learnMore')} <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>
            </a>

            <a href={`/${locale}/sanitaer`} className="group block relative h-80 rounded-3xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-liechti-dark/40 group-hover:bg-liechti-blue/60 transition-colors duration-500 z-10"></div>
              <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop" alt="Sanitär" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center border-4 border-transparent group-hover:border-liechti-gold/50 rounded-3xl transition-all">
                <h3 className="text-3xl font-bold text-white mb-2">{t('navSanitaer')}</h3>
                <span className="text-liechti-gold font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2">
                  {t('learnMore')} <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>
            </a>

            <a href={`/${locale}/klima`} className="group block relative h-80 rounded-3xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-liechti-dark/40 group-hover:bg-liechti-blue/60 transition-colors duration-500 z-10"></div>
              <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop" alt="Klima" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center border-4 border-transparent group-hover:border-liechti-gold/50 rounded-3xl transition-all">
                <h3 className="text-3xl font-bold text-white mb-2">{t('navKlima')} & {t('navLueftung')}</h3>
                <span className="text-liechti-gold font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2">
                  {t('learnMore')} <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================
          4. SECCIÓN: MAPA DE SUIZA Y CANTONES (Nativo SVG)
      ========================================= */}
      <section className="relative z-30 w-full bg-[#000033] text-white py-24 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Panel de Estadísticas / Leyenda */}
          <div>
            <h3 className="text-liechti-gold text-sm font-bold tracking-[0.3em] mb-3 uppercase drop-shadow-md">
              {t('presenceSubtitle')}
            </h3>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-white">
              {t('presenceTitle')}
            </h2>

            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md flex items-center gap-6 hover:bg-white/10 transition-colors group">
                <div className="w-16 h-16 rounded-full bg-liechti-gold/20 flex items-center justify-center border border-liechti-gold/50 text-liechti-gold group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="text-4xl font-extrabold text-white">1,254</h4>
                  <p className="text-gray-400 font-medium uppercase tracking-wider text-sm mt-1">{t('statCompleted')}</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md flex items-center gap-6 hover:bg-white/10 transition-colors group">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/50 text-blue-400 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                </div>
                <div>
                  <h4 className="text-4xl font-extrabold text-white">34</h4>
                  <p className="text-gray-400 font-medium uppercase tracking-wider text-sm mt-1">{t('statPending')}</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md flex items-center gap-6 hover:bg-white/10 transition-colors group">
                <div className="w-16 h-16 rounded-full bg-gray-500/30 flex items-center justify-center border border-gray-400 text-gray-300 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
                </div>
                <div>
                  <h4 className="text-4xl font-extrabold text-white">12</h4>
                  <p className="text-gray-400 font-medium uppercase tracking-wider text-sm mt-1">{t('statNegotiation')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa Vectorial Nativo de Suiza por Cantones */}
          <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center px-4">
            <div className="relative w-full max-w-xl aspect-[1.48] flex items-center justify-center bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm shadow-2xl">
              
              {/* SVG Vectorial Nativo (Silueta y Fronteras de Suiza) */}
              <svg viewBox="0 0 1000 650" className="w-full h-full text-white/20 fill-current stroke-white/40" strokeWidth="2">
                <path d="M150,300 C180,250 220,240 280,260 C340,220 400,210 460,230 C520,200 600,210 650,250 C700,230 780,250 820,300 C860,350 850,420 800,460 C750,500 680,520 600,500 C520,550 420,530 350,480 C280,510 200,460 160,400 C120,380 130,320 150,300 Z" fill="#001133" opacity="0.8" />
                {/* Líneas divisorias de cantones simuladas con alta elegancia técnica */}
                <path d="M280,260 L350,350 M460,230 L420,380 M650,250 L580,420 M400,210 L520,200 M600,500 L700,400 M350,480 L480,450" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
              </svg>

              {/* Puntos de calor palpitantes */}
              {mapPoints.map((point, index) => (
                <div 
                  key={index} 
                  className="absolute flex h-3 w-3 md:h-4 md:w-4" 
                  style={{ top: point.top, left: point.left, transform: 'translate(-50%, -50%)' }}
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-liechti-gold opacity-80"></span>
                  <span className="relative inline-flex rounded-full h-full w-full bg-liechti-gold shadow-[0_0_15px_rgba(212,175,55,1)]"></span>
                  
                  {point.isHq && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-liechti-gold text-liechti-dark text-[10px] md:text-xs font-bold px-3 py-1.5 rounded shadow-xl whitespace-nowrap z-20 uppercase tracking-widest">
                      Zentrale
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-liechti-gold"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}