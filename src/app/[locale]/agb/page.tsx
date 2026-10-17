'use client';

import { useTranslations } from 'next-intl';

export default function AGBPage() {
  const t = useTranslations('AGBPage');

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
            <h2 className="text-2xl font-bold text-[#0060a9] mb-4">{t('introTitle')}</h2>
            <p>{t('introText')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0060a9] mb-4">{t('offersTitle')}</h2>
            <p>{t('offersText')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0060a9] mb-4">{t('executionTitle')}</h2>
            <p>{t('executionText')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0060a9] mb-4">{t('paymentTitle')}</h2>
            <p>{t('paymentText')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0060a9] mb-4">{t('warrantyTitle')}</h2>
            <p>{t('warrantyText')}</p>
          </section>
        </div>
      </div>
    </main>
  );
}