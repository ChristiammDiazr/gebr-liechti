'use client';

import { useTranslations } from 'next-intl';

export default function DatenschutzPage() {
  const t = useTranslations('DatenschutzPage');

  return (
    <main className="min-h-screen bg-[#f7f9fb] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
        
        {/* Cabecera de la página */}
        <div className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#001133] mb-4">
            {t('title')} <br/>
            <span className="text-2xl md:text-3xl font-medium text-gray-500">{t('subtitle')}</span>
          </h1>
          <p className="text-sm font-bold tracking-widest text-[#d4af37] uppercase">{t('company')}</p>
        </div>

        {/* Contenido Legal */}
        <div className="space-y-10 text-gray-700 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-[#0060a9] mb-4">{t('introTitle')}</h2>
            <p>{t('introText')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0060a9] mb-4">{t('controllerTitle')}</h2>
            <p className="mb-2">{t('controllerText')}</p>
            <address className="not-italic bg-gray-50 p-6 rounded-xl border border-gray-100 font-medium">
              <strong>{t('company')}</strong><br/>
              Fabrikweg 1<br/>
              5502 Hunzenschwil<br/>
              Schweiz<br/>
              <br/>
              Telefon: +41 062 844 36 68<br/>
              E-Mail: datenschutz@gebr-liechti.ch
            </address>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0060a9] mb-4">{t('collectionTitle')}</h2>
            <p>{t('collectionText')}</p>
          </section>

          <section className="bg-blue-50 border-l-4 border-[#0060a9] p-6 rounded-r-xl">
            <h2 className="text-xl font-bold text-[#001133] mb-3">{t('sharingTitle')}</h2>
            <p className="font-semibold text-gray-800 mb-2">
              {t('sharingTextBold')}
            </p>
            <p className="text-sm">
              {t('sharingText')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0060a9] mb-4">{t('cookiesTitle')}</h2>
            <p>{t('cookiesText')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0060a9] mb-4">{t('securityTitle')}</h2>
            <p>{t('securityText')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0060a9] mb-4">{t('rightsTitle')}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('right1')}</li>
              <li>{t('right2')}</li>
              <li>{t('right3')}</li>
            </ul>
            <p className="mt-4">{t('rightsText')}</p>
          </section>
          
          <div className="pt-8 border-t border-gray-200 text-sm text-gray-500">
            {t('lastUpdated')}: {new Date().toLocaleDateString('de-CH')}
          </div>

        </div>
      </div>
    </main>
  );
}