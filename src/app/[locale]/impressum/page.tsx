'use client';

import { useTranslations } from 'next-intl';

export default function ImpressumPage() {
  const t = useTranslations('ImpressumPage');

  return (
    <main className="min-h-screen bg-[#f7f9fb] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
        
        <div className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#001133] mb-4">
            {t('title')} <br/>
            <span className="text-2xl md:text-3xl font-medium text-gray-500">{t('subtitle')}</span>
          </h1>
          <p className="text-sm font-bold tracking-widest text-[#d4af37] uppercase">{t('company')}</p>
        </div>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-[#0060a9] mb-4">{t('contactTitle')}</h2>
            <address className="not-italic bg-gray-50 p-6 rounded-xl border border-gray-100 font-medium whitespace-pre-line">
              {t('contactAddress')}
              <br/><br/>
              {t('contactPhone')}<br/>
              {t('contactEmail')}
            </address>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0060a9] mb-4">{t('registerTitle')}</h2>
            <p>{t('registerText')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0060a9] mb-4">{t('vatTitle')}</h2>
            <p>{t('vatText')}</p>
          </section>
        </div>
      </div>
    </main>
  );
}