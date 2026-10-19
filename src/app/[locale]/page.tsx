'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Comforter_Brush } from 'next/font/google';
import { TrendingUp, AlertTriangle, Leaf, CheckCircle, RefreshCw, MessageSquare, MapPin, Navigation, Train, Truck, Mail, ArrowRight } from 'lucide-react';

const comforterBrush = Comforter_Brush({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

// Datos estadísticos por cantón
const cantonData: Record<string, { name: string, fossil: string, pump: string, wood: string }> = {
  'AG': { name: 'Aargau', fossil: '45.2%', pump: '32.1%', wood: '22.7%' },
  'ZH': { name: 'Zürich', fossil: '48.5%', pump: '28.4%', wood: '23.1%' },
  'BE': { name: 'Bern', fossil: '41.3%', pump: '35.2%', wood: '23.5%' },
  'LU': { name: 'Luzern', fossil: '42.8%', pump: '33.5%', wood: '23.7%' },
  'UR': { name: 'Uri', fossil: '35.1%', pump: '30.2%', wood: '34.7%' },
  'SZ': { name: 'Schwyz', fossil: '40.5%', pump: '38.1%', wood: '21.4%' },
  'OW': { name: 'Obwalden/Nidwalden', fossil: '38.2%', pump: '35.4%', wood: '26.4%' },
  'GL': { name: 'Glarus', fossil: '44.1%', pump: '29.8%', wood: '26.1%' },
  'ZG': { name: 'Zug', fossil: '46.2%', pump: '34.5%', wood: '19.3%' },
  'FR': { name: 'Fribourg', fossil: '43.5%', pump: '32.8%', wood: '23.7%' },
  'SO': { name: 'Solothurn', fossil: '46.8%', pump: '30.1%', wood: '23.1%' },
  'BS': { name: 'Basel', fossil: '52.1%', pump: '15.4%', wood: '32.5%' },
  'SH': { name: 'Schaffhausen', fossil: '47.5%', pump: '29.2%', wood: '23.3%' },
  'AR': { name: 'Appenzell', fossil: '42.1%', pump: '31.5%', wood: '26.4%' },
  'SG': { name: 'St. Gallen', fossil: '45.7%', pump: '30.6%', wood: '23.7%' },
  'GR': { name: 'Graubünden', fossil: '38.5%', pump: '35.0%', wood: '26.5%' },
  'TG': { name: 'Thurgau', fossil: '46.3%', pump: '31.2%', wood: '22.5%' },
  'TI': { name: 'Ticino', fossil: '58.2%', pump: '18.5%', wood: '23.3%' },
  'VD': { name: 'Vaud', fossil: '52.4%', pump: '22.3%', wood: '25.3%' },
  'VS': { name: 'Valais', fossil: '55.1%', pump: '20.4%', wood: '24.5%' },
  'NE': { name: 'Neuchâtel', fossil: '54.2%', pump: '21.5%', wood: '24.3%' },
  'GE': { name: 'Genève', fossil: '60.3%', pump: '15.1%', wood: '24.6%' },
  'JU': { name: 'Jura', fossil: '49.8%', pump: '23.4%', wood: '26.8%' },
  'DEFAULT': { name: 'Schweiz (Ø)', fossil: '50.3%', pump: '25.1%', wood: '24.6%' }
};

// Coordenadas porcentuales seguras para la imagen 3D de Suiza
const cantonSpots = [
  { code: 'AG', x: 50, y: 26 },
  { code: 'ZH', x: 63, y: 28 },
  { code: 'BE', x: 38, y: 48 },
  { code: 'LU', x: 50, y: 39 },
  { code: 'UR', x: 60, y: 50 },
  { code: 'SZ', x: 62, y: 41 },
  { code: 'OW', x: 53, y: 46 }, 
  { code: 'GL', x: 71, y: 45 },
  { code: 'ZG', x: 58, y: 36 },
  { code: 'FR', x: 28, y: 55 },
  { code: 'SO', x: 38, y: 28 },
  { code: 'BS', x: 38, y: 15 },
  { code: 'SH', x: 60, y: 12 },
  { code: 'AR', x: 74, y: 35 },
  { code: 'SG', x: 75, y: 24 },
  { code: 'GR', x: 84, y: 58 },
  { code: 'TG', x: 71, y: 18 },
  { code: 'TI', x: 65, y: 73 },
  { code: 'VD', x: 16, y: 56 },
  { code: 'VS', x: 40, y: 76 },
  { code: 'NE', x: 20, y: 39 },
  { code: 'GE', x: 5, y: 74 },
  { code: 'JU', x: 25, y: 25 },
];

export default function Home() {
  const params = useParams();
  const locale = (params.locale as 'de' | 'es') || 'de';
  const t = useTranslations('HomePage');
  const tContact = useTranslations('ContactPage');

  const [currentIndex, setCurrentIndex] = useState(0);
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, cantonCode: 'DEFAULT' });
  
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const carouselItems = [
    { type: 'video', url: '/hero-video.mp4' },
    { type: 'image', url: '/hero-team.png' },
    { type: 'image', url: '/hero-heizung.png' },
    { type: 'image', url: '/hero-solar.png' },
    { type: 'image', url: '/hero-sanitaer.png' },
    { type: 'image', url: '/hero-klima.png' },
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (carouselItems[currentIndex].type === 'image') {
      timer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
      }, 5000);
    }
    
    carouselItems.forEach((item, idx) => {
      const vid = videoRefs.current[idx];
      if (vid && item.type === 'video') {
        if (idx === currentIndex) {
          vid.currentTime = 0;
          const playPromise = vid.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              console.log("Reproducción automática pausada por el navegador");
            });
          }
        } else {
          vid.pause();
        }
      }
    });

    return () => clearTimeout(timer);
  }, [currentIndex, carouselItems.length]);

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
                <video 
                  ref={(el) => { videoRefs.current[index] = el; }}
                  muted 
                  playsInline
                  autoPlay={index === currentIndex}
                  onEnded={() => {
                    if (index === currentIndex) {
                      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
                    }
                  }}
                  className="w-full h-full object-cover opacity-85"
                >
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

      {/* 4. SECCIÓN TENDENCIAS Y MAPA CANTONAL SUIZO */}
      <section className="relative z-30 w-full bg-[#000a1f] text-white py-24 overflow-hidden">
        
        {/* TOOLTIP INTERACTIVO AHORA TRADUCIDO */}
        {tooltip.show && (
          <div className="fixed z-[100] bg-[#001133]/95 backdrop-blur-md border border-[#d4af37]/30 p-5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] pointer-events-none transform -translate-x-1/2 -translate-y-[115%] transition-opacity duration-200 w-64" style={{ left: tooltip.x, top: tooltip.y }}>
            <h4 className="text-white font-extrabold text-lg mb-1 border-b border-white/10 pb-2">{activeData.name}</h4>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-3">{t('tooltipTitle')}</p>
            <div className="flex flex-col gap-3 text-sm">
               <div className="flex items-center justify-between"><div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span><span className="text-gray-300">{t('tooltipFossil')}</span></div><span className="text-white font-bold">{activeData.fossil}</span></div>
               <div className="flex items-center justify-between"><div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span><span className="text-gray-300">{t('tooltipPump')}</span></div><span className="text-[#d4af37] font-extrabold">{activeData.pump}</span></div>
               <div className="flex items-center justify-between"><div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]"></span><span className="text-gray-300">{t('tooltipWood')}</span></div><span className="text-white font-bold">{activeData.wood}</span></div>
            </div>
          </div>
        )}

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-[#0060a9] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-[#d4af37] text-sm font-bold tracking-[0.3em] mb-3 uppercase drop-shadow-md">{t('trendsTitle')}</h3>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white leading-tight">{t('presenceTitle')}</h2>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="bg-[#121c32]/60 border border-[#d4af37]/40 rounded-xl p-3 text-center backdrop-blur-sm flex flex-col items-center justify-center">
                <CheckCircle className="w-5 h-5 text-[#d4af37] mb-1" />
                <span className="text-2xl font-black text-white leading-none">1,254</span>
                <span className="text-[9px] text-gray-400 font-bold uppercase mt-1 tracking-wider">{t('statCompleted')}</span>
              </div>
              <div className="bg-[#121c32]/60 border border-[#0060a9]/50 rounded-xl p-3 text-center backdrop-blur-sm flex flex-col items-center justify-center">
                <RefreshCw className="w-5 h-5 text-[#4fa8ff] mb-1" />
                <span className="text-2xl font-black text-white leading-none">34</span>
                <span className="text-[9px] text-gray-400 font-bold uppercase mt-1 tracking-wider">{t('statPending')}</span>
              </div>
              <div className="bg-[#121c32]/60 border border-gray-600/50 rounded-xl p-3 text-center backdrop-blur-sm flex flex-col items-center justify-center">
                <MessageSquare className="w-5 h-5 text-gray-400 mb-1" />
                <span className="text-2xl font-black text-white leading-none">12</span>
                <span className="text-[9px] text-gray-400 font-bold uppercase mt-1 tracking-wider">{t('statNegotiation')}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 border border-[#d4af37]/30 p-5 rounded-2xl backdrop-blur-md flex items-center gap-5 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/50 text-green-400 shrink-0"><TrendingUp className="w-6 h-6" /></div>
                <div><h4 className="text-3xl font-extrabold text-white">25.1%</h4><p className="text-gray-400 font-medium uppercase tracking-wider text-[11px] mt-0.5">{t('statPump')}</p></div>
              </div>
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md flex items-center gap-5 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/50 text-red-400 shrink-0"><AlertTriangle className="w-6 h-6" /></div>
                <div><h4 className="text-3xl font-extrabold text-white">50.3%</h4><p className="text-gray-400 font-medium uppercase tracking-wider text-[11px] mt-0.5">{t('statFossil')}</p></div>
              </div>
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md flex items-center gap-5 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center border border-yellow-500/50 text-yellow-400 shrink-0"><Leaf className="w-6 h-6" /></div>
                <div><h4 className="text-3xl font-extrabold text-white">18.7%</h4><p className="text-gray-400 font-medium uppercase tracking-wider text-[11px] mt-0.5">{t('statWood')}</p></div>
              </div>
            </div>
            <p className="text-[11px] text-gray-500 mt-6 leading-tight italic border-l-2 border-[#0060a9] pl-4">{t('quoteText')} <br/><span className="font-semibold text-gray-400 mt-1 block">{t('quoteSource')}</span></p>
          </div>

          <div className="lg:col-span-7 relative w-full flex items-center justify-center px-2">
            <div className="relative w-full max-w-4xl mx-auto bg-gradient-to-br from-[#1a202c] to-[#050b14] border border-white/5 rounded-3xl overflow-hidden shadow-2xl group">
              
              <img 
                src="/mapa-suiza.jpg" 
                alt="Mapa 3D de Suiza" 
                className="absolute inset-0 w-full h-full object-cover md:object-contain drop-shadow-[0_0_25px_rgba(212,175,55,0.1)] group-hover:scale-[1.02] transition-transform duration-700 ease-out z-0 opacity-95 mix-blend-screen"
                useMap="#swissmap"
              />

              {/* MAPA INTERACTIVO INVISIBLE (Áreas superpuestas sobre la imagen para detectar el hover) */}
              <div className="relative w-full aspect-[4/3] max-h-[600px] z-10">
                {cantonSpots.map((spot) => (
                  <div
                    key={spot.code}
                    className="absolute cursor-pointer"
                    style={{
                      left: `${spot.x}%`,
                      top: `${spot.y}%`,
                      width: '6%',
                      height: '6%',
                      transform: 'translate(-50%, -50%)',
                    }}
                    onMouseEnter={(e) => handleMouseEnter(e, spot.code)}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN VISITANOS */}
      <section className="relative z-30 w-full bg-white py-16 md:py-20 border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col h-full justify-center">
            <h3 className="text-[#0060a9] text-sm font-bold tracking-[0.2em] mb-2 uppercase">{tContact('visitSubtitle')}</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#001133] mb-6">{tContact('visitTitle')}</h2>
            
            <div className="bg-[#f8fafc] p-6 md:p-8 rounded-3xl border border-gray-200 mb-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#001133] rounded-full flex items-center justify-center text-[#d4af37] shrink-0 shadow-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-[#001133]">{tContact('addressTitle')}</h4>
                  <p className="text-gray-600 text-base md:text-lg mt-1 leading-relaxed">Gebr. Liechti Heizung Sanitär AG<br/><span className="font-semibold text-gray-800">{tContact('workshopAddress1')}</span><br/>Schweiz</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a href={`/${locale}/kontakt`} className="bg-[#001133] hover:bg-[#d4af37] text-white hover:text-[#001133] w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-colors shadow-lg group border border-transparent hover:border-[#001133]">
                <Mail className="w-6 h-6 group-hover:text-[#001133] text-[#d4af37] transition-colors" />
                {t('btnContact')}
                <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all absolute right-8" />
              </a>

              <div className="flex items-start gap-3 text-gray-500 text-sm max-w-md bg-gray-50 p-3 rounded-xl border border-gray-200 mt-2">
                <Truck className="w-5 h-5 shrink-0 text-gray-400 mt-0.5" />
                <span className="italic leading-snug">{tContact('lkwNote')}</span>
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
                <a href={`https://www.google.com/maps/dir/?api=1&destination=Fabrikweg%201%2C%205502%20Hunzenschwil&dir_action=navigate`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-white hover:bg-gray-50 border-2 border-blue-500 text-gray-800 px-3 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-2xl text-sm md:text-base">
                  <Navigation className="w-5 h-5 text-blue-600" />
                  {tContact('btnGoogleMaps')}
                </a>
                
                <a href={`https://www.sbb.ch/de/kaufen/pages/fahrplan/fahrplan.xhtml?nach=Fabrikweg%201%2C%205502%20Hunzenschwil`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#eb0000] hover:bg-[#cc0000] text-white px-3 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-2xl text-sm md:text-base">
                  <Train className="w-5 h-5" />
                  {tContact('btnSBB')}
                </a>
              </div>

              <a href="https://www.ag.ch/geoportal/apps/onlinekarten/?basemap=base_landeskarten_sw::topicmaps.geo.ag.ch,0.25,true&layers=avk_atr::topicmaps.geo.ag.ch;1;true&center=2649753.58,1250263.02&z=2" target="_blank" rel="noopener noreferrer" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white px-3 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-xl hover:shadow-2xl text-sm md:text-base">
                <Truck className="w-5 h-5" />
                {tContact('btnTruck')}
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}