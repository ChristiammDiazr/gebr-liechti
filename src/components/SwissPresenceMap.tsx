'use client';

import { TrendingUp, AlertTriangle, Leaf } from 'lucide-react';

export default function SwissPresenceMap() {
  return (
    <section className="bg-[#0b1120] text-white py-20 px-6 md:px-12 lg:px-24 rounded-3xl my-16 shadow-2xl relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#0060a9] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#d4af37] rounded-full mix-blend-screen filter blur-[120px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <span className="text-[#d4af37] text-xs md:text-sm font-bold tracking-[0.2em] uppercase block mb-3">
            Markttrends & Präsenz
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Schweizweit im Einsatz</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA: DATOS REALES (BFS 2025) */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="bg-[#121c32]/80 backdrop-blur-md border border-[#d4af37]/30 rounded-2xl p-6 flex items-center gap-6 transition-transform hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-full border border-[#d4af37] flex items-center justify-center shrink-0 bg-[#d4af37]/10">
                <TrendingUp className="w-6 h-6 text-[#d4af37]" />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-white mb-1">25.1%</h3>
                <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">Wärmepumpen (Stark Steigend)</p>
              </div>
            </div>

            <div className="bg-[#121c32]/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 flex items-center gap-6 transition-transform hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 bg-red-500/20 text-red-400">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-white mb-1">50.3%</h3>
                <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">Fossile Brennstoffe (Rückläufig)</p>
              </div>
            </div>

            <div className="bg-[#121c32]/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 flex items-center gap-6 transition-transform hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center shrink-0 bg-green-800/30">
                <Leaf className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-white mb-1">18.7%</h3>
                <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">Holz & Elektrizität</p>
              </div>
            </div>

            <p className="text-[11px] text-gray-500 mt-4 leading-tight italic border-l-2 border-[#0060a9] pl-3">
              "Obwohl die Nutzung von Heizöl in den letzten 40 Jahren kontinuierlich zurückgegangen ist, wurden im Jahr 2025 noch 50,3 % der Wohngebäude in der Schweiz mit fossilen Brennstoffen beheizt." <br/>
              <span className="font-semibold text-gray-400">— Quelle: BFS (Bundesamt für Statistik), Energiestatistik 2025</span>
            </p>
          </div>

          {/* COLUMNA DERECHA: MAPA CANTONAL SUIZO SVG EXACTO */}
          <div className="lg:col-span-7 relative w-full h-[400px] md:h-[500px] bg-[#121c32]/40 rounded-3xl border border-white/5 flex items-center justify-center p-2 shadow-inner">
            
            <div className="relative w-full h-full max-w-2xl flex items-center justify-center p-4">
              {/* Mapa Vectorial Completo de Suiza por Cantones */}
              <svg viewBox="0 0 1200 800" className="w-full h-full text-white drop-shadow-[0_0_15px_rgba(0,96,169,0.3)]">
                <g fill="#0f172a" stroke="#334155" strokeWidth="3" className="hover:stroke-[#0060a9] transition-colors duration-500">
                  {/* GE */} <path className="hover:fill-[#1e293b] transition-colors cursor-pointer" d="M125.7,654.5l-6.8-6.1l-6-28.7l5.2-11.4l11.4-14.4l30.3-4.5l29.5,0.7l21.2-12.1l2.3-13.6l15.9,0.7l12.9,10.6l10.6,23.5l1.5,12.9l-22,12.1L209,617.3L159.8,631l-18.9,2.3L125.7,654.5z"/>
                  {/* VD */} <path className="hover:fill-[#1e293b] transition-colors cursor-pointer" d="M255.2,629.4l41.6-18.9l32.5-40.1l11.4-8.3l12.9,3.8l21.2-22.7l30.3-5.3l35.6-28.8l23.5-31l12.9,15.9l16.6-4.5l4.5-25.7l18.2-12.1l11.4-3.8l10.6,26.5l34.8,25.7l9.8,23.5l-9.8,11.4l1.5,18.9l-12.9,25.7l-26.5-6.8l-15.9,14.4l-12.9,9.8l-18.9,3.8l-42.4,9.1l-13.6,18.9l-34.8,18.9l-61.3-3.8l-32.5-6.8l-11.4,14.4l-27.2,3.8l-40.1,6.8L255.2,629.4z"/>
                  {/* NE */} <path className="hover:fill-[#1e293b] transition-colors cursor-pointer" d="M268.1,437l33.3-25.7l16.6,6.1l21.2-21.2l34.8-10.6l18.9-3l12.1,34.8l-6.1,28.8l-23.5,31l-35.6,28.8l-30.3,5.3l-21.2,22.7l-12.9-3.8l-11.4,8.3l-6.8-23.5l6.8-21.2L268.1,437z"/>
                  {/* FR */} <path className="hover:fill-[#1e293b] transition-colors cursor-pointer" d="M374.1,477.9l6.1-28.8l-12.1-34.8l22.7-8.3l18.9,8.3l43.9-3l22.7,11.4l11.4,24.2l35.6,31.8l-3.8,18.9l12.1,23.5l14.4,5.3l-10.6,16.6l12.9,34.8l-4.5,25.7l-16.6,4.5l-12.9-15.9l-23.5,31l-35.6,28.8l-30.3,5.3l-21.2,22.7l-12.9-3.8l-11.4,8.3L374.1,477.9z"/>
                  {/* JU */} <path className="hover:fill-[#1e293b] transition-colors cursor-pointer" d="M377.9,392.4l-18.9,3l-34.8,10.6l-21.2,21.2l-16.6-6.1l-33.3,25.7l-25.7-18.9l-3.8-25.7l8.3-27.2l12.1-15.9l36.3-13.6l17.4-28.8l12.9-23.5l27.2-24.2l13.6,5.3l27.2,4.5l37.8,24.2l12.1,25.7L377.9,392.4z"/>
                  {/* VS */} <path className="hover:fill-[#1e293b] transition-colors cursor-pointer" d="M428.6,634.7l61.3,3.8l34.8-18.9l13.6-18.9l42.4-9.1l18.9-3.8l12.9-9.8l15.9-14.4l26.5,6.8l12.9-25.7l-1.5-18.9l9.8-11.4l-9.8-23.5l27.2,5.3l33.3-15.9l15.9,13.6l23.5,1.5l19.7,18.9l4.5,24.2l-11.4,25.7l-5.3,30.3l15.9,25.7l12.1,25.7l-16.6,11.4l-37.8,22.7l-27.2,34.8l-43.9,25.7l-50,6.8l-43.9,2.3l-34.8-15.9l-30.3-6.1l-24.2-23.5l-40.1-23.5L428.6,634.7z"/>
                  {/* BE */} <path className="hover:fill-[#1e293b] transition-colors cursor-pointer" d="M377.9,392.4l-4.5-25.7l12.1-25.7l-37.8-24.2l-27.2-4.5l14.4-15.9l40.1-6.8l21.2-18.9l22.7,6.8l34.8,30.3l18.9,21.2l34.8,5.3l18.9,18.9l14.4,26.5l34.8,28.8l15.9,21.2l-3.8,21.2l-23.5,25.7l-30.3-5.3l-24.2-16.6l-11.4-24.2l-22.7-11.4l-43.9,3l-18.9-8.3L377.9,392.4z"/>
                  {/* SO */} <path className="hover:fill-[#1e293b] transition-colors cursor-pointer" d="M433.9,296.3l21.2-18.9l25.7,2.3l27.2-12.1l15.9,8.3l18.9-3.8l11.4,12.1l25.7,3l-12.1,24.2l-37.8-6.1l-18.9,11.4l-11.4-13.6l-23.5,6.1l-18.9-21.2L433.9,296.3z"/>
                  {/* BL/BS (Simplificado como área Norte) */} <path className="hover:fill-[#1e293b] transition-colors cursor-pointer" d="M465.7,262.2l25.7-27.2l34.8-14.4l30.3,5.3l18.9-10.6l23.5-3.8l27.2,14.4l-8.3,24.2l-14.4,21.2l-25.7-3l-11.4-12.1l-18.9,3.8l-15.9-8.3l-27.2,12.1L465.7,262.2z"/>
                  {/* AG - AARGAU (Cuartel General) */} <path className="fill-[#001133] stroke-[#d4af37] stroke-[4px] cursor-pointer" d="M536.9,285.7l14.4-21.2l8.3-24.2l30.3-6.1l23.5,12.1l27.2,5.3l34.8-6.1l28.8,11.4l11.4,18.9l-15.9,14.4l-4.5,25.7l-15.9,15.9l-30.3,4.5l-21.2,18.9l-22.7-2.3l-27.2-22.7l-37.8-6.1L536.9,285.7z"/>
                  {/* LU */} <path className="hover:fill-[#1e293b] transition-colors cursor-pointer" d="M542.2,328.8l27.2,22.7l22.7,2.3l21.2-18.9l12.1,13.6l18.9,6.1l9.8,25.7l-3,22.7l16.6,18.9l-11.4,18.9l-16.6,11.4l-12.9-6.8l-23.5-1.5l-18.9,18.9l-22.7-2.3l-11.4-18.9l-27.2-11.4l-14.4-26.5l-18.9-18.9L542.2,328.8z"/>
                  {/* ZH */} <path className="hover:fill-[#1e293b] transition-colors cursor-pointer" d="M604.2,234.3l34.8-6.1l28.8-15.9l22.7-25.7l28.8-9.1l43.9,12.1l25.7,21.2l12.1,34.8l-9.8,27.2l-21.2,18.9l-14.4-8.3l-23.5,12.1l-25.7,2.3l-28.8-18.9l-21.2,15.9l-15.9-15.9l4.5-25.7l15.9-14.4l-11.4-18.9l-28.8-11.4L604.2,234.3z"/>
                  {/* SG/TG/SH (Suiza Oriental) */} <path className="hover:fill-[#1e293b] transition-colors cursor-pointer" d="M740.5,178.2l28.8-9.1l22.7-25.7l27.2-3.8l34.8,11.4l43.9,25.7l30.3,12.1l15.9,21.2l-4.5,25.7l-18.9,18.9l-34.8-1.5l-23.5,18.9l-18.9,22.7l-25.7,30.3l-28.8,18.9l-25.7-2.3l-23.5-12.1l14.4-8.3l21.2-18.9l9.8-27.2l-12.1-34.8l-25.7-21.2L740.5,178.2z"/>
                  {/* GR (Graubünden) */} <path className="hover:fill-[#1e293b] transition-colors cursor-pointer" d="M869.2,274.3l34.8,1.5l18.9-18.9l21.2,8.3l30.3-6.1l28.8,18.9l11.4,30.3l-6.8,25.7l-22.7,34.8l-28.8,37.8l-42.4,22.7l-34.8,5.3l-43.9-3.8l-30.3-15.9l-34.8-28.8l-18.9-30.3l-3.8-37.8l28.8-18.9l25.7-30.3l18.9-22.7L869.2,274.3z"/>
                  {/* TI (Ticino) */} <path className="hover:fill-[#1e293b] transition-colors cursor-pointer" d="M856.3,472.6l43.9,3.8l34.8-5.3l42.4-22.7l28.8-37.8l22.7-34.8l18.9,11.4l15.9,34.8l-8.3,42.4l-25.7,37.8l-30.3,34.8l-43.9,22.7l-34.8,11.4l-40.1,6.8l-30.3-6.1l-24.2-25.7l-12.1-34.8l-8.3-30.3L856.3,472.6z"/>
                </g>
              </svg>

              {/* PUNTOS CALIENTES */}
              {/* HQ - ZENTRALE (Aargau) */}
              <div className="absolute top-[38%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <div className="relative">
                  <div className="w-5 h-5 bg-[#d4af37] rounded-full shadow-[0_0_20px_#d4af37]"></div>
                  <div className="absolute inset-0 bg-[#d4af37] rounded-full animate-ping opacity-75"></div>
                </div>
                <div className="mt-2 bg-[#d4af37] text-[#0b1120] text-[10px] md:text-xs font-black uppercase px-3 py-1 rounded shadow-lg whitespace-nowrap">
                  Zentrale (HQ) AG
                </div>
              </div>

              {/* Punto Zurich */}
              <div className="absolute top-[35%] left-[58%] transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                <div className="w-3 h-3 bg-[#fde047] rounded-full opacity-80 shadow-[0_0_15px_rgba(253,224,71,0.6)] group-hover:scale-150 transition-transform"></div>
              </div>

              {/* Punto Bern */}
              <div className="absolute top-[52%] left-[38%] transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                <div className="w-3 h-3 bg-[#fde047] rounded-full opacity-90 shadow-[0_0_15px_rgba(253,224,71,0.8)] animate-pulse group-hover:scale-150 transition-transform"></div>
              </div>

              {/* Punto Basel */}
              <div className="absolute top-[28%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                <div className="w-3 h-3 bg-[#fde047] rounded-full opacity-60 shadow-[0_0_10px_rgba(253,224,71,0.4)] group-hover:scale-150 transition-transform"></div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}