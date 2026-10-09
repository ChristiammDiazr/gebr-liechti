'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Comforter_Brush } from 'next/font/google';
import { TrendingUp, AlertTriangle, Leaf, CheckCircle, RefreshCw, MessageSquare, MapPin, Navigation, Train, Truck, Mail, ArrowRight } from 'lucide-react';

const comforterBrush = Comforter_Brush({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

// 1. DICCIONARIO LOCAL PARA TRADUCCIONES AUTOMÁTICAS
const localTranslations = {
  de: {
    trendsTitle: "51 Jahre Erfahrung & Markttrends",
    presenceTitle: "Schweizweit im Einsatz",
    projectsCompleted: "Projekte",
    projectsActive: "In Ausführung",
    projectsPending: "Planung",
    heatPumps: "Wärmepumpen (Stark Steigend)",
    fossilFuels: "Fossile Brennstoffe (Rückläufig)",
    woodElec: "Holz & Elektrizität",
    sourceText: "Obwohl die Nutzung von Heizöl in den letzten 40 Jahren kontinuierlich zurückgegangen ist, wurden im Jahr 2025 noch 50,3 % der Wohngebäude in der Schweiz mit fossilen Brennstoffen beheizt.",
    sourceAuthor: "Quelle: BFS (Bundesamt für Statistik), Energiestatistik 2025",
    tooltipTitle: "Energiestatistik 2025",
    visitTitle: "Besuchen Sie unsere Zentrale",
    visitSubtitle: "ANFAHRT & KONTAKT",
    addressTitle: "Hauptsitz (HQ)",
    address: "Fabrikweg 1, 5502 Hunzenschwil",
    btnMaps: "Navigation starten (GPS)",
    btnSBB: "SBB Fahrplan",
    btnContact: "Jetzt Kontakt aufnehmen",
    btnTruck: "LKW-Routen (Geoportal)",
    truckNote: "Hinweis für Lieferanten: LKW- & Ausnahmetransportrouten gemäss Geoportal Kanton Aargau beachten."
  },
  es: {
    trendsTitle: "51 Años de Experiencia y Mercado",
    presenceTitle: "Presencia en Suiza",
    projectsCompleted: "Proyectos",
    projectsActive: "En Ejecución",
    projectsPending: "Planificación",
    heatPumps: "Bombas de Calor (En Aumento)",
    fossilFuels: "Combustibles Fósiles (En Declive)",
    woodElec: "Madera y Electricidad",
    sourceText: "Aunque el uso de gasóleo ha disminuido en los últimos 40 años, en 2025 el 50,3% de los edificios residenciales en Suiza seguían calentándose con combustibles fósiles.",
    sourceAuthor: "Fuente: BFS (Oficina Federal de Estadística Suiza), 2025",
    tooltipTitle: "Estadística de Energía 2025",
    visitTitle: "Visite nuestra Sede Central",
    visitSubtitle: "CÓMO LLEGAR Y CONTACTO",
    addressTitle: "Sede Central (HQ)",
    address: "Fabrikweg 1, 5502 Hunzenschwil",
    btnMaps: "Iniciar Navegación (GPS)",
    btnSBB: "Horarios SBB",
    btnContact: "Contactar Ahora",
    btnTruck: "Rutas LKW (Geoportal AG)",
    truckNote: "Nota para proveedores: Respete las rutas para camiones (Versorgungsrouten) según el Geoportal de Aargau."
  }
};

// 2. DATOS POR CANTÓN PARA EL TOOLTIP (BFS)
const cantonData: Record<string, { name: string, fossil: string, pump: string, wood: string }> = {
  'AG': { name: 'Aargau', fossil: '45.2%', pump: '32.1%', wood: '22.7%' },
  'ZH': { name: 'Zürich', fossil: '48.5%', pump: '28.4%', wood: '23.1%' },
  'BE': { name: 'Bern', fossil: '41.3%', pump: '35.2%', wood: '23.5%' },
  'VS': { name: 'Valais', fossil: '55.1%', pump: '20.4%', wood: '24.5%' },
  'GE': { name: 'Genève', fossil: '60.3%', pump: '15.1%', wood: '24.6%' },
  'VD': { name: 'Vaud', fossil: '52.4%', pump: '22.3%', wood: '25.3%' },
  'LU': { name: 'Luzern', fossil: '42.8%', pump: '33.5%', wood: '23.7%' },
  'GR': { name: 'Graubünden', fossil: '38.5%', pump: '35.0%', wood: '26.5%' },
  'TI': { name: 'Ticino', fossil: '58.2%', pump: '18.5%', wood: '23.3%' },
  'DEFAULT': { name: 'Schweiz (Ø)', fossil: '50.3%', pump: '25.1%', wood: '24.6%' }
};

export default function Home() {
  const params = useParams();
  const locale = (params.locale as 'de' | 'es') || 'de';
  const t = useTranslations('HomePage');
  const dict = localTranslations[locale] || localTranslations['de'];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, cantonCode: 'DEFAULT' });

  const carouselItems = [
    { type: 'image', url: '/hero-heizung.png' },
    { type: 'image', url: '/hero-solar.png' },
    { type: 'image', url: '/hero-sanitaer.png' },
    { type: 'image', url: '/hero-klima.png' },
    { type: 'image', url: '/hero-team.png' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 8000); 
    return () => clearInterval(timer);
  }, [carouselItems.length]);

  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % carouselItems.length);

  const handleMouseEnter = (e: React.MouseEvent, code: string) => {
    setTooltip({ show: true, x: e.clientX, y: e.clientY, cantonCode: code });
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }));
  };
  const handleMouseLeave = () => {
    setTooltip(prev => ({ ...prev, show: false }));
  };

  const activeData = cantonData[tooltip.cantonCode] || cantonData['DEFAULT'];

  return (
    <main className="relative min-h-screen w-full flex flex-col bg-liechti-gray overflow-hidden">
      
      {/* 1. SECCIÓN HERO */}
      <section className="relative w-full h-screen min-h-[800px] flex overflow-hidden bg-[#001433]">
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-[#001133]/40 mix-blend-multiply z-10"></div>
          {carouselItems.map((item, index) => (
            <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              {item.type === 'video' ? (
                <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-85">
                  <source src={item.url} type="video/mp4" />
                </video>
              ) : (
                <img src={item.url} alt="Gebr. Liechti" className="w-full h-full object-cover opacity-85 scale-105 transition-transform duration-[10000ms]" />
              )}
            </div>
          ))}
        </div>

        <div className="relative z-30 w-full h-full flex flex-col pt-24 px-6 sm:px-12 lg:px-20">
          <div className="w-full text-center mb-8 pointer-events-none mt-6">
             <h2 className="inline-block text-[#d4af37] text-sm md:text-base font-bold tracking-[0.4em] uppercase bg-[#001133]/80 px-10 py-3 rounded-full border border-[#d4af37]/50 backdrop-blur-md shadow-[0_0_25px_rgba(212,175,55,0.4)] pointer-events-auto">
              {t('badge51')}
            </h2>
          </div>
          <div className="w-full lg:w-[50%] flex-1 flex flex-col justify-center pointer-events-none pb-20">
            <h1 className={`${comforterBrush.className} text-5xl sm:text-6xl md:text-[80px] text-[#f8fafc] leading-[1.3] drop-shadow-[2px_4px_10px_rgba(0,17,51,0.9)] transform -rotate-2 opacity-95`}>
                {t('heroTitle')}
            </h1>
          </div>
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full flex flex-col sm:flex-row gap-5 justify-center items-center px-4 z-40 pointer-events-auto">
              <a href={`/${locale}/kontakt`} className="group relative px-8 py-3.5 bg-[#001133]/80 text-[#d4af37] rounded-full border border-[#d4af37] hover:bg-[#d4af37] hover:text-[#001133] hover:border-[#d4af37] font-bold text-sm tracking-[0.1em] uppercase transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md flex justify-center items-center w-full sm:w-auto">
                  <span className="relative z-10">{t('btnContact')}</span>
              </a>
              <a href={`/${locale}/heizung`} className="group relative px-8 py-3.5 bg-[#001133]/80 overflow-hidden rounded-full border border-[#d4af37] text-[#d4af37] hover:text-[#000a1f] hover:border-white font-bold text-sm tracking-[0.1em] uppercase transition-all duration-500 backdrop-blur-md flex justify-center items-center shadow-[0_0_20px_rgba(0,0,0,0.5)] w-full sm:w-auto">
                  <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></span>
                  <span className="relative z-10">{t('servicesTitle')}</span>
              </a>
          </div>
        </div>
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-40 text-white/50 hover:text-[#d4af37] transition-colors p-2 hover:scale-110 bg-black/20 rounded-full backdrop-blur-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg></button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-40 text-white/50 hover:text-[#d4af37] transition-colors p-2 hover:scale-110 bg-black/20 rounded-full backdrop-blur-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></button>
      </section>

      {/* 2. SECCIÓN ENERGÍAS RENOVABLES */}
      <section className="relative z-30 w-full bg-liechti-gray py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-liechti-blue text-sm font-bold tracking-[0.2em] mb-3 uppercase">{t('future')}</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-liechti-dark mb-6">{t('renewableTitle')}</h2>
            <div className="w-16 h-1 bg-liechti-gold mb-10"></div>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p><strong>{t('renewableText1')}</strong></p>
              <p>{t('renewableText2')}</p>
              <p>{t('renewableText3')}</p>
              <p className="text-liechti-blue font-semibold border-l-4 border-liechti-gold pl-6 py-2 bg-white shadow-sm rounded-r-lg mt-8">{t('renewableText4')}</p>
            </div>
          </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
            <div className="absolute inset-0 bg-liechti-dark/20 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
            
            {/* NUEVA IMAGEN: ENERGÍAS RENOVABLES */}
            <img src="/services/solar-service.jpg" alt="Erneuerbare Energie" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"/>
            
            <div className="absolute bottom-8 left-8 z-20 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs border-l-4 border-liechti-gold transform group-hover:-translate-y-2 transition-transform duration-500">
              <p className="text-liechti-dark font-bold text-xl">{t('supportText')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN SERVICIOS */}
      <section className="relative z-30 w-full bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-liechti-dark mb-6">{t('servicesTitle')}</h2>
            <div className="w-24 h-1 bg-liechti-gold mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <a href={`/${locale}/heizung`} className="group block relative h-[350px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="absolute inset-0 bg-liechti-dark/50 group-hover:bg-liechti-blue/60 transition-colors duration-500 z-10"></div>
              
              {/* NUEVA IMAGEN: HEIZUNG */}
              <img src="/services/heizung-service.jpg" alt="Heizung" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center border-4 border-transparent group-hover:border-liechti-gold/50 rounded-3xl transition-all">
                <h3 className="text-3xl font-bold text-white mb-2">{t('navHeizung')}</h3>
                <span className="text-liechti-gold font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2 transform group-hover:translate-y-0 translate-y-4">
                  {t('learnMore')} <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>
            </a>

            <a href={`/${locale}/sanitaer`} className="group block relative h-[350px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="absolute inset-0 bg-liechti-dark/50 group-hover:bg-liechti-blue/60 transition-colors duration-500 z-10"></div>
              
              {/* NUEVA IMAGEN: SANITÄR */}
              <img src="/services/sanitaer-service.jpg" alt="Sanitär" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center border-4 border-transparent group-hover:border-liechti-gold/50 rounded-3xl transition-all">
                <h3 className="text-3xl font-bold text-white mb-2">{t('navSanitaer')}</h3>
                <span className="text-liechti-gold font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2 transform group-hover:translate-y-0 translate-y-4">
                  {t('learnMore')} <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>
            </a>

            <a href={`/${locale}/klima`} className="group block relative h-[350px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="absolute inset-0 bg-liechti-dark/50 group-hover:bg-liechti-blue/60 transition-colors duration-500 z-10"></div>
              
              {/* NUEVA IMAGEN: KLIMA & LÜFTUNG */}
              <img src="/services/klima-service.jpg" alt="Klima" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center border-4 border-transparent group-hover:border-liechti-gold/50 rounded-3xl transition-all">
                <h3 className="text-3xl font-bold text-white mb-2">{t('navKlima')} <br/><span className="text-xl">& {t('navLueftung')}</span></h3>
                <span className="text-liechti-gold font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2 transform group-hover:translate-y-0 translate-y-4">
                  {t('learnMore')} <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* 4. SECCIÓN TENDENCIAS Y MAPA CANTONAL INTERACTIVO */}
      <section className="relative z-30 w-full bg-[#000a1f] text-white py-24 overflow-hidden">
        {tooltip.show && (
          <div className="fixed z-[100] bg-[#001133]/95 backdrop-blur-md border border-[#d4af37]/30 p-5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] pointer-events-none transform -translate-x-1/2 -translate-y-[115%] transition-opacity duration-200 w-64" style={{ left: tooltip.x, top: tooltip.y }}>
            <h4 className="text-white font-extrabold text-lg mb-1 border-b border-white/10 pb-2">{activeData.name}</h4>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-3">{dict.tooltipTitle}</p>
            <div className="flex flex-col gap-3 text-sm">
               <div className="flex items-center justify-between"><div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span><span className="text-gray-300">Fossil (Öl/Gas)</span></div><span className="text-white font-bold">{activeData.fossil}</span></div>
               <div className="flex items-center justify-between"><div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span><span className="text-gray-300">Wärmepumpen</span></div><span className="text-[#d4af37] font-extrabold">{activeData.pump}</span></div>
               <div className="flex items-center justify-between"><div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]"></span><span className="text-gray-300">Holz/Strom</span></div><span className="text-white font-bold">{activeData.wood}</span></div>
            </div>
          </div>
        )}

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-[#0060a9] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-[#d4af37] text-sm font-bold tracking-[0.3em] mb-3 uppercase drop-shadow-md">{dict.trendsTitle}</h3>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white leading-tight">{dict.presenceTitle}</h2>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="bg-[#121c32]/60 border border-[#d4af37]/40 rounded-xl p-3 text-center backdrop-blur-sm flex flex-col items-center justify-center">
                <CheckCircle className="w-5 h-5 text-[#d4af37] mb-1" />
                <span className="text-2xl font-black text-white leading-none">1,254</span>
                <span className="text-[9px] text-gray-400 font-bold uppercase mt-1 tracking-wider">{dict.projectsCompleted}</span>
              </div>
              <div className="bg-[#121c32]/60 border border-[#0060a9]/50 rounded-xl p-3 text-center backdrop-blur-sm flex flex-col items-center justify-center">
                <RefreshCw className="w-5 h-5 text-[#4fa8ff] mb-1" />
                <span className="text-2xl font-black text-white leading-none">34</span>
                <span className="text-[9px] text-gray-400 font-bold uppercase mt-1 tracking-wider">{dict.projectsActive}</span>
              </div>
              <div className="bg-[#121c32]/60 border border-gray-600/50 rounded-xl p-3 text-center backdrop-blur-sm flex flex-col items-center justify-center">
                <MessageSquare className="w-5 h-5 text-gray-400 mb-1" />
                <span className="text-2xl font-black text-white leading-none">12</span>
                <span className="text-[9px] text-gray-400 font-bold uppercase mt-1 tracking-wider">{dict.projectsPending}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 border border-[#d4af37]/30 p-5 rounded-2xl backdrop-blur-md flex items-center gap-5 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/50 text-green-400 shrink-0"><TrendingUp className="w-6 h-6" /></div>
                <div><h4 className="text-3xl font-extrabold text-white">25.1%</h4><p className="text-gray-400 font-medium uppercase tracking-wider text-[11px] mt-0.5">{dict.heatPumps}</p></div>
              </div>
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md flex items-center gap-5 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/50 text-red-400 shrink-0"><AlertTriangle className="w-6 h-6" /></div>
                <div><h4 className="text-3xl font-extrabold text-white">50.3%</h4><p className="text-gray-400 font-medium uppercase tracking-wider text-[11px] mt-0.5">{dict.fossilFuels}</p></div>
              </div>
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md flex items-center gap-5 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center border border-yellow-500/50 text-yellow-400 shrink-0"><Leaf className="w-6 h-6" /></div>
                <div><h4 className="text-3xl font-extrabold text-white">18.7%</h4><p className="text-gray-400 font-medium uppercase tracking-wider text-[11px] mt-0.5">{dict.woodElec}</p></div>
              </div>
            </div>
            <p className="text-[11px] text-gray-500 mt-6 leading-tight italic border-l-2 border-[#0060a9] pl-4">"{dict.sourceText}" <br/><span className="font-semibold text-gray-400 mt-1 block">— {dict.sourceAuthor}</span></p>
          </div>

          <div className="lg:col-span-7 relative w-full h-[450px] md:h-[600px] flex items-center justify-center px-2">
            <div className="relative w-full h-full max-w-3xl flex items-center justify-center bg-[#050b14]/50 border border-white/10 rounded-3xl p-2 md:p-6 backdrop-blur-sm shadow-2xl overflow-visible">
              <svg viewBox="0 0 1200 800" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,96,169,0.2)]">
                <g onMouseEnter={(e)=>handleMouseEnter(e, 'GE')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="group cursor-crosshair"><path className="fill-[#0f172a] stroke-white/20 stroke-2 group-hover:fill-[#0060a9] transition-colors" d="M125.7,654.5l-6.8-6.1l-6-28.7l5.2-11.4l11.4-14.4l30.3-4.5l29.5,0.7l21.2-12.1l2.3-13.6l15.9,0.7l12.9,10.6l10.6,23.5l1.5,12.9l-22,12.1L209,617.3L159.8,631l-18.9,2.3L125.7,654.5z"/><text x="170" y="610" fill="#64748b" fontSize="24" fontWeight="bold" textAnchor="middle" className="pointer-events-none group-hover:fill-white">GE</text></g>
                <g onMouseEnter={(e)=>handleMouseEnter(e, 'VD')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="group cursor-crosshair"><path className="fill-[#0f172a] stroke-white/20 stroke-2 group-hover:fill-[#0060a9] transition-colors" d="M255.2,629.4l41.6-18.9l32.5-40.1l11.4-8.3l12.9,3.8l21.2-22.7l30.3-5.3l35.6-28.8l23.5-31l12.9,15.9l16.6-4.5l4.5-25.7l18.2-12.1l11.4-3.8l10.6,26.5l34.8,25.7l9.8,23.5l-9.8,11.4l1.5,18.9l-12.9,25.7l-26.5-6.8l-15.9,14.4l-12.9,9.8l-18.9,3.8l-42.4,9.1l-13.6,18.9l-34.8,18.9l-61.3-3.8l-32.5-6.8l-11.4,14.4l-27.2,3.8l-40.1,6.8L255.2,629.4z"/><text x="260" y="550" fill="#64748b" fontSize="24" fontWeight="bold" textAnchor="middle" className="pointer-events-none group-hover:fill-white">VD</text></g>
                <g onMouseEnter={(e)=>handleMouseEnter(e, 'DEFAULT')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="group cursor-crosshair"><path className="fill-[#0f172a] stroke-white/20 stroke-2 group-hover:fill-[#0060a9] transition-colors" d="M268.1,437l33.3-25.7l16.6,6.1l21.2-21.2l34.8-10.6l18.9-3l12.1,34.8l-6.1,28.8l-23.5,31l-35.6,28.8l-30.3,5.3l-21.2,22.7l-12.9-3.8l-11.4,8.3l-6.8-23.5l6.8-21.2L268.1,437z"/><text x="295" y="440" fill="#64748b" fontSize="24" fontWeight="bold" textAnchor="middle" className="pointer-events-none group-hover:fill-white">NE</text></g>
                <g onMouseEnter={(e)=>handleMouseEnter(e, 'DEFAULT')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="group cursor-crosshair"><path className="fill-[#0f172a] stroke-white/20 stroke-2 group-hover:fill-[#0060a9] transition-colors" d="M374.1,477.9l6.1-28.8l-12.1-34.8l22.7-8.3l18.9,8.3l43.9-3l22.7,11.4l11.4,24.2l35.6,31.8l-3.8,18.9l12.1,23.5l14.4,5.3l-10.6,16.6l12.9,34.8l-4.5,25.7l-16.6,4.5l-12.9-15.9l-23.5,31l-35.6,28.8l-30.3,5.3l-21.2,22.7l-12.9-3.8l-11.4,8.3L374.1,477.9z"/><text x="350" y="520" fill="#64748b" fontSize="24" fontWeight="bold" textAnchor="middle" className="pointer-events-none group-hover:fill-white">FR</text></g>
                <g onMouseEnter={(e)=>handleMouseEnter(e, 'DEFAULT')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="group cursor-crosshair"><path className="fill-[#0f172a] stroke-white/20 stroke-2 group-hover:fill-[#0060a9] transition-colors" d="M377.9,392.4l-18.9,3l-34.8,10.6l-21.2,21.2l-16.6-6.1l-33.3,25.7l-25.7-18.9l-3.8-25.7l8.3-27.2l12.1-15.9l36.3-13.6l17.4-28.8l12.9-23.5l27.2-24.2l13.6,5.3l27.2,4.5l37.8,24.2l12.1,25.7L377.9,392.4z"/><text x="335" y="340" fill="#64748b" fontSize="24" fontWeight="bold" textAnchor="middle" className="pointer-events-none group-hover:fill-white">JU</text></g>
                <g onMouseEnter={(e)=>handleMouseEnter(e, 'VS')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="group cursor-crosshair"><path className="fill-[#0f172a] stroke-white/20 stroke-2 group-hover:fill-[#0060a9] transition-colors" d="M428.6,634.7l61.3,3.8l34.8-18.9l13.6-18.9l42.4-9.1l18.9-3.8l12.9-9.8l15.9-14.4l26.5,6.8l12.9-25.7l-1.5-18.9l9.8-11.4l-9.8-23.5l27.2,5.3l33.3-15.9l15.9,13.6l23.5,1.5l19.7,18.9l4.5,24.2l-11.4,25.7l-5.3,30.3l15.9,25.7l12.1,25.7l-16.6,11.4l-37.8,22.7l-27.2,34.8l-43.9,25.7l-50,6.8l-43.9,2.3l-34.8-15.9l-30.3-6.1l-24.2-23.5l-40.1-23.5L428.6,634.7z"/><text x="460" y="650" fill="#64748b" fontSize="24" fontWeight="bold" textAnchor="middle" className="pointer-events-none group-hover:fill-white">VS</text></g>
                <g onMouseEnter={(e)=>handleMouseEnter(e, 'BE')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="group cursor-crosshair"><path className="fill-[#0f172a] stroke-white/20 stroke-2 group-hover:fill-[#0060a9] transition-colors" d="M377.9,392.4l-4.5-25.7l12.1-25.7l-37.8-24.2l-27.2-4.5l14.4-15.9l40.1-6.8l21.2-18.9l22.7,6.8l34.8,30.3l18.9,21.2l34.8,5.3l18.9,18.9l14.4,26.5l34.8,28.8l15.9,21.2l-3.8,21.2l-23.5,25.7l-30.3-5.3l-24.2-16.6l-11.4-24.2l-22.7-11.4l-43.9,3l-18.9-8.3L377.9,392.4z"/><text x="430" y="450" fill="#64748b" fontSize="24" fontWeight="bold" textAnchor="middle" className="pointer-events-none group-hover:fill-white">BE</text></g>
                <g onMouseEnter={(e)=>handleMouseEnter(e, 'DEFAULT')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="group cursor-crosshair"><path className="fill-[#0f172a] stroke-white/20 stroke-2 group-hover:fill-[#0060a9] transition-colors" d="M433.9,296.3l21.2-18.9l25.7,2.3l27.2-12.1l15.9,8.3l18.9-3.8l11.4,12.1l25.7,3l-12.1,24.2l-37.8-6.1l-18.9,11.4l-11.4-13.6l-23.5,6.1l-18.9-21.2L433.9,296.3z"/><text x="450" y="335" fill="#64748b" fontSize="24" fontWeight="bold" textAnchor="middle" className="pointer-events-none group-hover:fill-white">SO</text></g>
                <g onMouseEnter={(e)=>handleMouseEnter(e, 'DEFAULT')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="group cursor-crosshair"><path className="fill-[#0f172a] stroke-white/20 stroke-2 group-hover:fill-[#0060a9] transition-colors" d="M465.7,262.2l25.7-27.2l34.8-14.4l30.3,5.3l18.9-10.6l23.5-3.8l27.2,14.4l-8.3,24.2l-14.4,21.2l-25.7-3l-11.4-12.1l-18.9,3.8l-15.9-8.3l-27.2,12.1L465.7,262.2z"/><text x="480" y="250" fill="#64748b" fontSize="24" fontWeight="bold" textAnchor="middle" className="pointer-events-none group-hover:fill-white">BL</text></g>
                <g onMouseEnter={(e)=>handleMouseEnter(e, 'AG')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="group cursor-crosshair"><path className="fill-[#1e293b] stroke-[#d4af37] stroke-[3px] group-hover:fill-[#0060a9] group-hover:stroke-white transition-colors" d="M536.9,285.7l14.4-21.2l8.3-24.2l30.3-6.1l23.5,12.1l27.2,5.3l34.8-6.1l28.8,11.4l11.4,18.9l-15.9,14.4l-4.5,25.7l-15.9,15.9l-30.3,4.5l-21.2,18.9l-22.7-2.3l-27.2-22.7l-37.8-6.1L536.9,285.7z"/><text x="580" y="295" fill="#d4af37" fontSize="28" fontWeight="900" textAnchor="middle" className="pointer-events-none group-hover:fill-white drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">AG</text></g>
                <g onMouseEnter={(e)=>handleMouseEnter(e, 'LU')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="group cursor-crosshair"><path className="fill-[#0f172a] stroke-white/20 stroke-2 group-hover:fill-[#0060a9] transition-colors" d="M542.2,328.8l27.2,22.7l22.7,2.3l21.2-18.9l12.1,13.6l18.9,6.1l9.8,25.7l-3,22.7l16.6,18.9l-11.4,18.9l-16.6,11.4l-12.9-6.8l-23.5-1.5l-18.9,18.9l-22.7-2.3l-11.4-18.9l-27.2-11.4l-14.4-26.5l-18.9-18.9L542.2,328.8z"/><text x="555" y="400" fill="#64748b" fontSize="24" fontWeight="bold" textAnchor="middle" className="pointer-events-none group-hover:fill-white">LU</text></g>
                <g onMouseEnter={(e)=>handleMouseEnter(e, 'ZH')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="group cursor-crosshair"><path className="fill-[#0f172a] stroke-white/20 stroke-2 group-hover:fill-[#0060a9] transition-colors" d="M604.2,234.3l34.8-6.1l28.8-15.9l22.7-25.7l28.8-9.1l43.9,12.1l25.7,21.2l12.1,34.8l-9.8,27.2l-21.2,18.9l-14.4-8.3l-23.5,12.1l-25.7,2.3l-28.8-18.9l-21.2,15.9l-15.9-15.9l4.5-25.7l15.9-14.4l-11.4-18.9l-28.8-11.4L604.2,234.3z"/><text x="665" y="240" fill="#64748b" fontSize="24" fontWeight="bold" textAnchor="middle" className="pointer-events-none group-hover:fill-white">ZH</text></g>
                <g onMouseEnter={(e)=>handleMouseEnter(e, 'DEFAULT')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="group cursor-crosshair"><path className="fill-[#0f172a] stroke-white/20 stroke-2 group-hover:fill-[#0060a9] transition-colors" d="M740.5,178.2l28.8-9.1l22.7-25.7l27.2-3.8l34.8,11.4l43.9,25.7l30.3,12.1l15.9,21.2l-4.5,25.7l-18.9,18.9l-34.8-1.5l-23.5,18.9l-18.9,22.7l-25.7,30.3l-28.8,18.9l-25.7-2.3l-23.5-12.1l14.4-8.3l21.2-18.9l9.8-27.2l-12.1-34.8l-25.7-21.2L740.5,178.2z"/><text x="770" y="250" fill="#64748b" fontSize="24" fontWeight="bold" textAnchor="middle" className="pointer-events-none group-hover:fill-white">SG</text></g>
                <g onMouseEnter={(e)=>handleMouseEnter(e, 'GR')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="group cursor-crosshair"><path className="fill-[#0f172a] stroke-white/20 stroke-2 group-hover:fill-[#0060a9] transition-colors" d="M869.2,274.3l34.8,1.5l18.9-18.9l21.2,8.3l30.3-6.1l28.8,18.9l11.4,30.3l-6.8,25.7l-22.7,34.8l-28.8,37.8l-42.4,22.7l-34.8,5.3l-43.9-3.8l-30.3-15.9l-34.8-28.8l-18.9-30.3l-3.8-37.8l28.8-18.9l25.7-30.3l18.9-22.7L869.2,274.3z"/><text x="860" y="420" fill="#64748b" fontSize="24" fontWeight="bold" textAnchor="middle" className="pointer-events-none group-hover:fill-white">GR</text></g>
                <g onMouseEnter={(e)=>handleMouseEnter(e, 'TI')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="group cursor-crosshair"><path className="fill-[#0f172a] stroke-white/20 stroke-2 group-hover:fill-[#0060a9] transition-colors" d="M856.3,472.6l43.9,3.8l34.8-5.3l42.4-22.7l28.8-37.8l22.7-34.8l18.9,11.4l15.9,34.8l-8.3,42.4l-25.7,37.8l-30.3,34.8l-43.9,22.7l-34.8,11.4l-40.1,6.8l-30.3-6.1l-24.2-25.7l-12.1-34.8l-8.3-30.3L856.3,472.6z"/><text x="780" y="550" fill="#64748b" fontSize="24" fontWeight="bold" textAnchor="middle" className="pointer-events-none group-hover:fill-white">TI</text></g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN VISITANOS */}
      <section className="relative z-30 w-full bg-white py-16 md:py-20 border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col h-full justify-center">
            <h3 className="text-[#0060a9] text-sm font-bold tracking-[0.2em] mb-2 uppercase">{dict.visitSubtitle}</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#001133] mb-6">{dict.visitTitle}</h2>
            
            <div className="bg-[#f8fafc] p-6 md:p-8 rounded-3xl border border-gray-200 mb-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#001133] rounded-full flex items-center justify-center text-[#d4af37] shrink-0 shadow-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-[#001133]">{dict.addressTitle}</h4>
                  <p className="text-gray-600 text-base md:text-lg mt-1 leading-relaxed">Gebr. Liechti Heizung Sanitär AG<br/><span className="font-semibold text-gray-800">{dict.address}</span><br/>Schweiz</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a href={`/${locale}/kontakt`} className="bg-[#001133] hover:bg-[#d4af37] text-white hover:text-[#001133] w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-colors shadow-lg group border border-transparent hover:border-[#001133]">
                <Mail className="w-6 h-6 group-hover:text-[#001133] text-[#d4af37] transition-colors" />
                {dict.btnContact}
                <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all absolute right-8" />
              </a>

              <div className="flex items-start gap-3 text-gray-500 text-sm max-w-md bg-gray-50 p-3 rounded-xl border border-gray-200 mt-2">
                <Truck className="w-5 h-5 shrink-0 text-gray-400 mt-0.5" />
                <span className="italic leading-snug">{dict.truckNote}</span>
              </div>
            </div>
          </div>

          <div className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
            
            <div className="absolute inset-0 bg-[#001133]/5 z-10 pointer-events-none"></div>
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.5976527926227!2d8.1154563!3d47.3807663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47903f001c34a2e5%3A0xc3e16428e20e8b!2sFabrikweg%201%2C%205502%20Hunzenschwil!5e0!3m2!1sen!2sch!4v1700000000000" 
              className="absolute inset-0 w-full h-full border-0 z-0" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>

            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-20 flex flex-col gap-2 md:gap-3">
              
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(dict.address)}&dir_action=navigate`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-white hover:bg-gray-50 border-2 border-blue-500 text-gray-800 px-3 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-2xl text-sm md:text-base">
                  <Navigation className="w-5 h-5 text-blue-600" />
                  {dict.btnMaps}
                </a>
                
                <a href={`https://www.sbb.ch/de/kaufen/pages/fahrplan/fahrplan.xhtml?nach=${encodeURIComponent(dict.address)}`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#eb0000] hover:bg-[#cc0000] text-white px-3 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-2xl text-sm md:text-base">
                  <Train className="w-5 h-5" />
                  {dict.btnSBB}
                </a>
              </div>

              <a href="https://www.ag.ch/geoportal/apps/onlinekarten/?basemap=base_landeskarten_sw::topicmaps.geo.ag.ch,0.25,true&layers=avk_atr::topicmaps.geo.ag.ch;1;true&center=2649753.58,1250263.02&z=2" target="_blank" rel="noopener noreferrer" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white px-3 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-xl hover:shadow-2xl text-sm md:text-base">
                <Truck className="w-5 h-5" />
                {dict.btnTruck}
              </a>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}