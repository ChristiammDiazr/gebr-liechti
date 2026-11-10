'use client';

import { useState, useRef, useEffect } from 'react';

// Banderas de alta definición CDN
const languages = [
  { code: 'de', name: 'Deutsch', flag: 'https://flagcdn.com/w40/ch.png' },
  { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/w40/fr.png' },
  { code: 'it', name: 'Italiano', flag: 'https://flagcdn.com/w40/it.png' },
  { code: 'pt', name: 'Português', flag: 'https://flagcdn.com/w40/pt.png' },
  { code: 'es', name: 'Español', flag: 'https://flagcdn.com/w40/es.png' },
  { code: 'sq', name: 'Shqip', flag: 'https://flagcdn.com/w40/al.png' },
  { code: 'pl', name: 'Polski', flag: 'https://flagcdn.com/w40/pl.png' }
];

export default function LanguageSwitcherClient({ currentLocale }: { currentLocale: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLangCode, setCurrentLangCode] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const match = document.cookie.match(/(?:^|; )googtrans=([^;]*)/);
      if (match) {
        const parts = match[1].split('/');
        return parts[parts.length - 1] || currentLocale || 'de';
      }
    }
    return currentLocale || 'de';
  });

  const menuRef = useRef<HTMLDivElement>(null);
  
  const currentLang = languages.find((l) => l.code === currentLangCode) || languages[0];

  const changeGlobalLanguage = (langCode: string) => {
    setIsOpen(false);
    setCurrentLangCode(langCode);

    // 1. Inyección de cookies de Google Translate para persigulidad de sesión
    const hostname = window.location.hostname;
    document.cookie = `googtrans=/de/${langCode}; path=/; domain=${hostname}`;
    document.cookie = `googtrans=/de/${langCode}; path=/`;

    // 2. Disparo de eventos en selectores ocultos de Google Translate si existen en el DOM
    const gtCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (gtCombo) {
      gtCombo.value = langCode;
      gtCombo.dispatchEvent(new Event('change'));
    }

    const gtWrapperSelect = document.querySelector('.gtranslate_wrapper select') as HTMLSelectElement | null;
    if (gtWrapperSelect) {
      gtWrapperSelect.value = `de|${langCode}`;
      gtWrapperSelect.dispatchEvent(new Event('change'));
    }

    // 3. Invocación de función global de soporte si está cargada
    const windowAny = window as any;
    if (typeof windowAny.doGTranslate === 'function') {
      windowAny.doGTranslate(`de|${langCode}`);
    } else {
      // Recarga sutil solo si el widget nativo requiere refresco de cookies
      window.location.reload();
    }
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
        type="button"
      >
        <span className="font-bold uppercase tracking-wide text-xs flex items-center gap-2">
          <img src={currentLang.flag} alt={currentLang.code} className="w-5 h-auto rounded-sm shadow-sm" /> 
          <span translate="no" className="notranslate">{currentLang.code}</span>
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden w-48 flex flex-col py-2 z-[100] animate-fade-in">
          <div className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 mb-1">
            SELECCIONAR IDIOMA
          </div>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeGlobalLanguage(lang.code)}
              type="button"
              className={`flex items-center gap-3 px-4 py-3 transition-colors w-full text-left ${
                currentLangCode === lang.code 
                  ? 'bg-blue-50 text-[#0060a9] font-bold border-l-4 border-[#0060a9]' 
                  : 'text-gray-600 font-medium hover:bg-gray-50 border-l-4 border-transparent hover:border-gray-300'
              }`}
            >
              <img src={lang.flag} alt={lang.name} className="w-6 h-auto shadow-sm rounded-sm" />
              <span className="text-sm notranslate" translate="no">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}