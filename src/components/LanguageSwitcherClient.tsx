'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Usamos banderas de alta calidad desde un CDN profesional en lugar de emojis de Windows
const languages = [
  { code: 'de', name: 'Deutsch', flag: 'https://flagcdn.com/w40/ch.png' },
  { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/w40/fr.png' },
  { code: 'it', name: 'Italiano', flag: 'https://flagcdn.com/w40/it.png' },
  { code: 'pt', name: 'Português', flag: 'https://flagcdn.com/w40/pt.png' },
  { code: 'es', name: 'Español', flag: 'https://flagcdn.com/w40/es.png' }
];

export default function LanguageSwitcherClient({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  const currentLang = languages.find((l) => l.code === currentLocale) || languages[0];

  const handleChange = (newLocale: string) => {
    setIsOpen(false);
    if (newLocale === currentLocale) return;
    
    // 1. SOLUCIÓN CRÍTICA: Actualizamos la cookie para que next-intl no nos devuelva al idioma anterior
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    
    // 2. Construimos la nueva ruta
    const pathSegments = pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0 && languages.some(l => l.code === pathSegments[0])) {
      pathSegments[0] = newLocale; 
    } else {
      pathSegments.unshift(newLocale); 
    }
    const newPath = '/' + pathSegments.join('/');
    
    // 3. Forzamos la recarga en el idioma correcto
    window.location.href = newPath; 
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative z-[100]" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white text-[#001133] hover:bg-gray-100 px-4 py-2.5 rounded-full border border-gray-200 transition-all shadow-md"
      >
        <span className="font-bold uppercase tracking-wide text-xs flex items-center gap-2">
          {/* Mostramos la bandera en imagen */}
          <img src={currentLang.flag} alt={currentLang.code} className="w-5 h-auto rounded-sm shadow-sm" /> 
          {/* AQUÍ ESTÁ EL BLOQUEO DE TRADUCCIÓN PARA EVITAR "DELAWARE" */}
          <span translate="no" className="notranslate">{currentLang.code}</span>
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden w-48 flex flex-col py-2 z-[100]">
          <div className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 mb-1">
            SELECCIONAR IDIOMA
          </div>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleChange(lang.code)}
              className={`flex items-center gap-3 px-4 py-3 transition-colors w-full text-left ${
                currentLocale === lang.code 
                  ? 'bg-blue-50 text-[#0060a9] font-bold border-l-4 border-[#0060a9]' 
                  : 'text-gray-600 font-medium hover:bg-gray-50 border-l-4 border-transparent hover:border-gray-300'
              }`}
            >
              {/* Mostramos las banderas en imagen en la lista */}
              <img src={lang.flag} alt={lang.name} className="w-6 h-auto shadow-sm rounded-sm" />
              <span className="text-sm notranslate" translate="no">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}