'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

// Usamos imágenes SVG reales de banderas circulares para garantizar que se vean perfectas en Windows y Mac
const languages = [
  { code: 'es', short: 'ES', name: 'Español', flagUrl: 'https://hatscripts.github.io/circle-flags/flags/es.svg' },
  { code: 'de', short: 'DE', name: 'Deutsch', flagUrl: 'https://hatscripts.github.io/circle-flags/flags/de.svg' }
];

export default function LanguageSwitcherClient({ currentLocale }: { currentLocale: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const currentLang = languages.find((l) => l.code === currentLocale) || languages[0];

  const handleSelect = (code: string) => {
    setIsOpen(false);
    if (code === currentLocale) return;
    const newPath = pathname.replace(`/${currentLocale}`, `/${code}`);
    router.push(newPath);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      
      {/* BOTÓN PRINCIPAL */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white text-gray-900 px-3 py-1.5 rounded-full shadow-md border border-gray-200 hover:border-[#0060a9] transition-all cursor-pointer"
      >
        {/* Globo Azul */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-[#0060a9]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.998 8.998 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
        <span className="font-extrabold text-[15px]">{currentLang.short}</span>
        
        {/* Imagen de la bandera circular */}
        <img src={currentLang.flagUrl} alt={currentLang.name} className="w-5 h-5 rounded-full object-cover shadow-sm" />
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ml-1 ${isOpen ? 'rotate-180' : ''}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {/* MENÚ DESPLEGABLE */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-[#f7f9fb] rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-[100] py-3 animate-fade-in-down">
          
          <div className="px-5 pb-2 mb-2 border-b border-gray-200/60">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#7a8b9a]">SELECCIONAR IDIOMA</span>
          </div>

          <div className="flex flex-col">
            {languages.map((lang) => {
              const isSelected = currentLocale === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className={`flex items-center gap-3 px-5 py-3 transition-all w-full text-left ${
                    isSelected 
                      ? 'bg-[#e5eff6] text-[#0060a9] font-bold border-l-4 border-[#0060a9]' 
                      : 'bg-transparent text-[#5c6e7f] font-medium border-l-4 border-transparent hover:bg-white hover:text-gray-800'
                  }`}
                >
                  <img src={lang.flagUrl} alt={lang.name} className="w-6 h-6 rounded-full object-cover shadow-sm" />
                  <span className="text-[15px]">{lang.name}</span>
                </button>
              );
            })}
          </div>
          
        </div>
      )}
    </div>
  );
}