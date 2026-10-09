import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Inter } from "next/font/google";
import Link from 'next/link';
import LanguageSwitcherClient from "@/components/LanguageSwitcherClient";
import "@/app/globals.css"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gebr. Liechti Heizung Sanitär AG",
  description: "Ihr vertrauenswürdiger Partner seit 51 Jahren in Heizung, Sanitär und Photovoltaik.",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  
  const t = await getTranslations({ locale, namespace: 'HomePage' });
  const tFooter = await getTranslations({ locale, namespace: 'Footer' });

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          
          {/* HEADER GLOBAL */}
          <header className="absolute top-0 left-0 w-full z-50 py-5 px-6 md:px-12 flex justify-between items-center text-white bg-gradient-to-b from-[#000a1f]/90 via-[#000a1f]/40 to-transparent">
            
            {/* LOGOTIPO CON AURA DINÁMICA (FORZADO CON CSS PURO PARA EVITAR FALLOS DE TAILWIND) */}
            <Link href={`/${locale}`} className="group cursor-pointer shrink-0 z-50">
              <div className="relative flex items-center justify-center">
                
                {/* 1. EL AURA (Glow Exterior) - CSS puro */}
                <div 
                  className="absolute -inset-2 blur-xl rounded-full transition-all duration-500 group-hover:blur-2xl group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(90deg, #0060a9 0%, #e30613 50%, #d4af37 100%)',
                    opacity: 0.75,
                    zIndex: 0
                  }}
                ></div>
                
                {/* 2. LA PLACA (Efecto Cristal) - CSS puro */}
                <div 
                  className="relative flex items-center px-4 py-2 rounded-xl transition-all duration-500 transform group-hover:scale-105 group-hover:-rotate-1 group-hover:-translate-y-1 shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)', // Soporte para Safari
                    border: '1.5px solid rgba(212, 175, 55, 0.8)',
                    zIndex: 10
                  }}
                >
                  <img 
                    src="/logo.svg" 
                    alt="Gebr. Liechti Logo" 
                    className="h-9 md:h-11 w-auto object-contain transition-transform duration-500 group-hover:rotate-1" 
                  />
                </div>
                
              </div>
            </Link>
            
            {/* NAVEGACIÓN PRINCIPAL */}
            <nav className="hidden lg:flex gap-8 font-medium text-base xl:text-lg items-center">
              <Link href={`/${locale}/heizung`} className="hover:text-liechti-gold transition-colors duration-300 drop-shadow-md">{t('navHeizung')}</Link>
              <Link href={`/${locale}/sanitaer`} className="hover:text-liechti-gold transition-colors duration-300 drop-shadow-md">{t('navSanitaer')}</Link>
              <Link href={`/${locale}/klima`} className="hover:text-liechti-gold transition-colors duration-300 drop-shadow-md">{t('navKlima')} & {t('navLueftung')}</Link>
              <Link href={`/${locale}/karriere`} className="text-liechti-gold font-semibold hover:underline transition-all">Karriere</Link>
              <Link href={`/${locale}/kontakt`} className="hover:text-liechti-gold transition-colors duration-300 drop-shadow-md">{t('btnContact')}</Link>
            </nav>
            
            {/* BOTONES DERECHOS */}
            <div className="flex items-center gap-4">
              <Link 
                href={`/${locale}/login`} 
                className="bg-liechti-gold text-liechti-dark px-5 py-2 rounded-full font-bold text-sm hover:bg-white transition-all shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                Portal Login
              </Link>

              <LanguageSwitcherClient currentLocale={locale} />

              <button className="lg:hidden text-liechti-gold hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </header>

          {children}

          {/* FOOTER CORPORATIVO CON ENLACES LEGALES */}
          <footer className="bg-liechti-dark text-white pt-16 pb-8 border-t-[6px] border-liechti-gold">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              <div>
                <h4 className="text-2xl font-extrabold tracking-wider mb-4">GEBR. <span className="text-liechti-gold">LIECHTI</span> AG</h4>
                <p className="text-gray-400 text-sm">Heizung . Sanitär . Photovoltaik . Solartechnik . Klima . Lüftung</p>
              </div>
              <div>
                <h4 className="text-liechti-gold font-bold mb-4 uppercase tracking-widest">{tFooter('hqTitle')}</h4>
                <p className="text-gray-400">Fabrikweg 1, 5502 Hunzenschwil</p>
                <p className="text-gray-400">+41 062 844 3668</p>
              </div>
              <div>
                <h4 className="text-liechti-gold font-bold mb-4 uppercase tracking-widest">{tFooter('billingTitle')}</h4>
                <p className="text-gray-400">Veilchenweg 1, 5018 Erlinsbach</p>
              </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
              <p>© 2026 Gebr. Liechti Heizung Sanitär AG. {tFooter('rights')}</p>
              
              <div className="flex flex-wrap justify-center gap-6 font-medium">
                <Link href={`/${locale}/datenschutz`} className="hover:text-liechti-gold transition-colors duration-300">
                  Datenschutz
                </Link>
                <Link href={`/${locale}/impressum`} className="hover:text-liechti-gold transition-colors duration-300">
                  Impressum
                </Link>
                <Link href={`/${locale}/agb`} className="hover:text-liechti-gold transition-colors duration-300">
                  AGB
                </Link>
              </div>
            </div>
          </footer>

        </NextIntlClientProvider>
      </body>
    </html>
  );
}