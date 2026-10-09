'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const languages = [
  { code: 'es', name: 'ES', flag: '🇪🇸' },
  { code: 'de', name: 'DE', flag: '🇨🇭' }
];

export default function Navbar() {
  const locale = useLocale();
  const t = useTranslations('HomePage');
  const router = useRouter();
  const pathname = usePathname();
  
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    setIsLangOpen(false);
    if (newLocale === locale) return;
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-4 px-4 sm:px-6 md:px-12 lg:px-24 flex items-center justify-between bg-gradient-to-b from-[#000a1f]/90 via-[#000a1f]/40 to-transparent">
      
      <Link 
        href={`/${locale}`} 
        className="relative z-50 bg-white border-2 border-[#d4af37] rounded-xl px-5 py-2.5 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-transform hover:scale-105"
      >
        <img 
          src="/logo.png" 
          alt="Gebr. Liechti Logo" 
          className="h-8 md:h-10 lg:h-12 w-auto" 
        />
      </Link>

      <div className="hidden lg:flex items-center gap-6 xl:gap-8">
        <Link href={`/${locale}/heizung`} className="text-white font-bold hover:text-[#d4af37] transition-colors tracking-wide drop-shadow-md text-sm xl:text-base">{t('navHeizung')}</Link>
        <Link href={`/${locale}/sanitaer`} className="text-white font-bold hover:text-[#d4af37] transition-colors tracking-wide drop-shadow-md text-sm xl:text-base">{t('navSanitaer')}</Link>
        <Link href={`/${locale}/klima`} className="text-white font-bold hover:text-[#d4af37] transition-colors tracking-wide drop-shadow-md text-sm xl:text-base">{t('navKlima')} & {t('navLueftung')}</Link>
        <Link href={`/${locale}/karriere`} className="text-[#d4af37] font-extrabold hover:text-white transition-colors tracking-wider drop-shadow-md text-sm xl:text-base">Karriere</Link>
        <Link href={`/${locale}/kontakt`} className="text-white font-bold hover:text-[#d4af37] transition-colors tracking-wide drop-shadow-md text-sm xl:text-base">{t('btnContact')}</Link>
      </div>

      <div className="flex items-center gap-3 md:gap-4 z-50">
        <Link 
          href={`/${locale}/portal`} 
          className="hidden md:flex bg-[#d4af37] text-[#001133] hover:bg-white px-4 md:px-5 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm transition-colors items-center gap-2 shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
          </svg>
          <span className="hidden xl:inline">Portal Login</span>
        </Link>
        
        <div className="relative z-[100]" ref={langMenuRef}>
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-1.5 md:gap-2 bg-[#001433]/80 hover:bg-[#000a1f] px-3 md:px-4 py-2 rounded-full border border-white/30 hover:border-[#d4af37] transition-all backdrop-blur-md shadow-lg"
          >
            <span className="font-bold text-white uppercase tracking-wide text-xs">{currentLang.name}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-3 h-3 text-white transition-transform ${isLangOpen ? 'rotate-180' : ''}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          {isLangOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-32 flex flex-col py-2 z-[100]">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`flex items-center justify-between px-4 py-3 transition-colors w-full text-left ${
                    locale === lang.code 
                      ? 'bg-[#001133]/5 text-[#001133] font-bold border-l-4 border-[#001133]' 
                      : 'text-gray-600 font-medium hover:bg-gray-50 border-l-4 border-transparent hover:border-gray-200'
                  }`}
                >
                  <span className="text-sm">{lang.name}</span>
                  <span className="text-sm">{lang.flag}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

    </nav>
  );
}