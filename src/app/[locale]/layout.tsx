import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Inter } from "next/font/google";
import Link from 'next/link';
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
          
          {/* HEADER GLOBAL CON LOGOTIPO, NAVEGACIÓN Y SELECTOR DE IDIOMA */}
          <header className="absolute top-0 left-0 w-full z-50 py-5 px-6 md:px-12 flex justify-between items-center text-white bg-gradient-to-b from-liechti-dark/90 to-transparent">
            
            {/* Logo y Nombre Oficial Corporativo */}
            <Link href={`/${locale}`} className="flex items-center gap-3 group cursor-pointer">
              <img 
                src="/logo.svg" 
                alt="Gebr. Liechti Logo" 
                className="h-10 w-auto object-contain group-hover:scale-105 transition-transform" 
              />
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-extrabold tracking-wider leading-tight drop-shadow-md">
                  GEBR. <span className="text-liechti-gold">LIECHTI</span>
                </span>
                <span className="text-[10px] md:text-xs text-gray-300 font-medium tracking-widest uppercase">
                  Heizung · Sanitär AG
                </span>
              </div>
            </Link>
            
            <nav className="hidden lg:flex gap-8 font-medium text-base xl:text-lg">
              <Link href={`/${locale}/heizung`} className="hover:text-liechti-gold transition-colors duration-300 drop-shadow-md">{t('navHeizung')}</Link>
              <Link href={`/${locale}/sanitaer`} className="hover:text-liechti-gold transition-colors duration-300 drop-shadow-md">{t('navSanitaer')}</Link>
              <Link href={`/${locale}/klima`} className="hover:text-liechti-gold transition-colors duration-300 drop-shadow-md">{t('navKlima')} & {t('navLueftung')}</Link>
              <Link href={`/${locale}/kontakt`} className="hover:text-liechti-gold transition-colors duration-300 drop-shadow-md">{t('btnContact')}</Link>
            </nav>
            
            <div className="flex items-center gap-4">
              {/* Botón de acceso al Portal / Login */}
              <Link 
                href={`/${locale}/login`} 
                className="bg-liechti-gold text-liechti-dark px-5 py-2 rounded-full font-bold text-sm hover:bg-white transition-all shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                Portal Login
              </Link>

              {/* Selector de Idioma Interactivo (DE / ES) */}
              <div className="hidden md:flex items-center gap-1 border border-liechti-gold/50 rounded-full p-1 bg-liechti-dark/40 backdrop-blur-md text-xs font-bold uppercase tracking-widest">
                <a 
                  href="/de" 
                  className={`px-3 py-1 rounded-full transition-colors ${locale === 'de' ? 'bg-liechti-gold text-liechti-dark' : 'text-gray-300 hover:text-white'}`}
                >
                  DE
                </a>
                <a 
                  href="/es" 
                  className={`px-3 py-1 rounded-full transition-colors ${locale === 'es' ? 'bg-liechti-gold text-liechti-dark' : 'text-gray-300 hover:text-white'}`}
                >
                  ES
                </a>
              </div>

              <button className="lg:hidden text-liechti-gold hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </header>

          {children}

          {/* FOOTER CORPORATIVO */}
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
            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
              © 2026 Gebr. Liechti Heizung Sanitär AG. {tFooter('rights')}
            </div>
          </footer>

        </NextIntlClientProvider>
      </body>
    </html>
  );
}