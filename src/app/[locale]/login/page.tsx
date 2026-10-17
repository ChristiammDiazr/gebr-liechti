'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

export default function LoginPage() {
  const locale = useLocale();
  const t = useTranslations('LoginPage');
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  // ==========================================
  // VISTA 1: DASHBOARD DE PERSONAL INTERNO
  // ==========================================
  if (selectedRole === 'Personal Interno') {
    return (
      <main className="min-h-screen bg-liechti-gray pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="bg-liechti-dark text-white p-6 md:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row justify-between items-center mb-10 gap-4 border-l-8 border-liechti-gold">
            <div>
              <span className="text-liechti-gold text-xs uppercase tracking-widest font-bold">{t('staffDashSub')}</span>
              <h1 className="text-2xl md:text-3xl font-extrabold mt-1">{t('staffDashTitle')}</h1>
            </div>
            <button onClick={() => setSelectedRole(null)} className="bg-white/10 hover:bg-liechti-gold hover:text-liechti-dark px-6 py-2 rounded-full font-bold text-sm transition-all border border-white/20">
              {t('changeProfileBtn')}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-400 text-xs font-bold uppercase">{t('staffStat1Title')}</p>
              <h3 className="text-3xl font-extrabold text-liechti-dark mt-2">{t('staffStat1Val')}</h3>
              <span className="text-xs text-green-600 font-semibold mt-1 inline-block">{t('staffStat1Sub')}</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-400 text-xs font-bold uppercase">{t('staffStat2Title')}</p>
              <h3 className="text-3xl font-extrabold text-liechti-blue mt-2">{t('staffStat2Val')}</h3>
              <span className="text-xs text-orange-500 font-semibold mt-1 inline-block">{t('staffStat2Sub')}</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-400 text-xs font-bold uppercase">{t('staffStat3Title')}</p>
              <h3 className="text-3xl font-extrabold text-liechti-gold mt-2">{t('staffStat3Val')}</h3>
              <span className="text-xs text-gray-500 font-semibold mt-1 inline-block">{t('staffStat3Sub')}</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-10">
            <h3 className="text-xl font-bold text-liechti-dark mb-6">{t('staffTableTitle')}</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-gray-400 text-xs uppercase tracking-wider">
                    <th className="pb-4">{t('staffTableH1')}</th>
                    <th className="pb-4">{t('staffTableH2')}</th>
                    <th className="pb-4">{t('staffTableH3')}</th>
                    <th className="pb-4">{t('staffTableH4')}</th>
                    <th className="pb-4 text-right">{t('staffTableH5')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-sm">
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 font-bold text-liechti-dark">Wärmepumpe Installation Lenzburg</td>
                    <td className="py-4 text-gray-600">Familia Meier</td>
                    <td className="py-4"><span className="bg-blue-50 text-liechti-blue px-3 py-1 rounded-full text-xs font-bold">Heizung</span></td>
                    <td className="py-4"><span className="text-green-600 font-semibold">{t('staffTableStatus1')}</span></td>
                    <td className="py-4 text-right font-bold text-liechti-dark">CHF 32,500</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 font-bold text-liechti-dark">Sanitär Komplettsanierung Aarau</td>
                    <td className="py-4 text-gray-600">Immobilien AG Aargau</td>
                    <td className="py-4"><span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-bold">Sanitär</span></td>
                    <td className="py-4"><span className="text-amber-600 font-semibold">{t('staffTableStatus2')}</span></td>
                    <td className="py-4 text-right font-bold text-liechti-dark">CHF 58,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    );
  }

  // ==========================================
  // VISTA 2: DASHBOARD DE PROVEEDORES
  // ==========================================
  if (selectedRole === 'Proveedores') {
    return (
      <main className="min-h-screen bg-liechti-gray pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="bg-liechti-dark text-white p-6 md:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row justify-between items-center mb-10 gap-4 border-l-8 border-liechti-gold">
            <div>
              <span className="text-liechti-gold text-xs uppercase tracking-widest font-bold">{t('supDashSub')}</span>
              <h1 className="text-2xl md:text-3xl font-extrabold mt-1">{t('supDashTitle')}</h1>
            </div>
            <button onClick={() => setSelectedRole(null)} className="bg-white/10 hover:bg-liechti-gold hover:text-liechti-dark px-6 py-2 rounded-full font-bold text-sm transition-all border border-white/20">
              {t('changeProfileBtn')}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-400 text-xs font-bold uppercase">{t('supStat1Title')}</p>
              <h3 className="text-3xl font-extrabold text-liechti-dark mt-2">{t('supStat1Val')}</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-400 text-xs font-bold uppercase">{t('supStat2Title')}</p>
              <h3 className="text-3xl font-extrabold text-liechti-blue mt-2">{t('supStat2Val')}</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-400 text-xs font-bold uppercase">{t('supStat3Title')}</p>
              <h3 className="text-3xl font-extrabold text-liechti-gold mt-2">{t('supStat3Val')}</h3>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-10">
            <h3 className="text-xl font-bold text-liechti-dark mb-6">{t('supTableTitle')}</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-gray-400 text-xs uppercase tracking-wider">
                    <th className="pb-4">{t('supTableH1')}</th>
                    <th className="pb-4">{t('supTableH2')}</th>
                    <th className="pb-4">{t('supTableH3')}</th>
                    <th className="pb-4">{t('supTableH4')}</th>
                    <th className="pb-4 text-right">{t('supTableH5')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-sm">
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 font-bold text-liechti-dark">OC-2026-891</td>
                    <td className="py-4"><span className="bg-blue-50 text-liechti-blue px-3 py-1 rounded-full text-xs font-bold">{t('supTableType1')}</span></td>
                    <td className="py-4 text-gray-600">Bombas de calor aire-agua (Lote x4)</td>
                    <td className="py-4"><span className="text-green-600 font-semibold">{t('supTableStatus1')}</span></td>
                    <td className="py-4 text-right font-bold text-liechti-dark">CHF 45,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 font-bold text-liechti-dark">OS-2026-412</td>
                    <td className="py-4"><span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-bold">{t('supTableType2')}</span></td>
                    <td className="py-4 text-gray-600">Sondeo geotérmico especializado (Bohrung)</td>
                    <td className="py-4"><span className="text-amber-600 font-semibold">{t('supTableStatus2')}</span></td>
                    <td className="py-4 text-right font-bold text-liechti-dark">CHF 18,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    );
  }

  // ==========================================
  // VISTA 3: DASHBOARD DE CLIENTES
  // ==========================================
  if (selectedRole === 'Clientes') {
    return (
      <main className="min-h-screen bg-liechti-gray pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="bg-liechti-dark text-white p-6 md:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row justify-between items-center mb-10 gap-4 border-l-8 border-liechti-gold">
            <div>
              <span className="text-liechti-gold text-xs uppercase tracking-widest font-bold">{t('cliDashSub')}</span>
              <h1 className="text-2xl md:text-3xl font-extrabold mt-1">{t('cliDashTitle')}</h1>
            </div>
            <button onClick={() => setSelectedRole(null)} className="bg-white/10 hover:bg-liechti-gold hover:text-liechti-dark px-6 py-2 rounded-full font-bold text-sm transition-all border border-white/20">
              {t('changeProfileBtn')}
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-400 text-xs font-bold uppercase">{t('cliStat1Title')}</p>
              <h3 className="text-3xl font-extrabold text-amber-600 mt-2">{t('cliStat1Val')}</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-400 text-xs font-bold uppercase">{t('cliStat2Title')}</p>
              <h3 className="text-3xl font-extrabold text-green-600 mt-2">{t('cliStat2Val')}</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-400 text-xs font-bold uppercase">{t('cliStat3Title')}</p>
              <h3 className="text-3xl font-extrabold text-red-600 mt-2">{t('cliStat3Val')}</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-400 text-xs font-bold uppercase">{t('cliStat4Title')}</p>
              <h3 className="text-3xl font-extrabold text-gray-400 mt-2">{t('cliStat4Val')}</h3>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-10">
            <h3 className="text-xl font-bold text-liechti-dark mb-6">{t('cliTableTitle')}</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-liechti-dark">Instalación Bomba de Calor (Aire-Agua)</span>
                  <span className="font-bold text-liechti-blue">{t('cliProg1')}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div className="bg-liechti-blue h-3 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{t('cliAmountLabel')} <strong>CHF 24,500</strong></p>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-liechti-dark">Renovación de Baño Principal y Grifería</span>
                  <span className="font-bold text-liechti-gold">{t('cliProg2')}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div className="bg-liechti-gold h-3 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{t('cliAmountLabel')} <strong>CHF 8,200</strong></p>
              </div>
            </div>
          </div>

        </div>
      </main>
    );
  }

  // ==========================================
  // VISTA INICIAL: SELECCIÓN DE ROLES (LOGIN)
  // ==========================================
  return (
    <main className="min-h-screen bg-liechti-gray flex flex-col items-center justify-center px-6 pt-24 pb-12">
      <div className="text-center max-w-2xl mb-12">
        <h2 className="text-liechti-gold text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-3">
          {t('portalBadge')}
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-liechti-dark mb-4">
          {t('title')}
        </h1>
        <p className="text-gray-600 text-lg">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {/* Personal Interno */}
        <div onClick={() => setSelectedRole('Personal Interno')} className="bg-white rounded-3xl p-8 shadow-md border border-transparent hover:border-liechti-gold hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group transform hover:-translate-y-2">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-liechti-blue/10 text-liechti-blue flex items-center justify-center mb-6 group-hover:bg-liechti-blue group-hover:text-white transition-colors">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-liechti-dark mb-3">{t('staffTitle')}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{t('staffDesc')}</p>
          </div>
          <button className="mt-8 w-full bg-liechti-dark text-white py-3 rounded-xl font-bold text-sm group-hover:bg-liechti-gold group-hover:text-liechti-dark transition-colors">
            {t('staffBtn')}
          </button>
        </div>

        {/* Proveedores */}
        <div onClick={() => setSelectedRole('Proveedores')} className="bg-white rounded-3xl p-8 shadow-md border border-transparent hover:border-liechti-gold hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group transform hover:-translate-y-2">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-liechti-gold/10 text-liechti-gold flex items-center justify-center mb-6 group-hover:bg-liechti-gold group-hover:text-liechti-dark transition-colors">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-liechti-dark mb-3">{t('supTitle')}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{t('supDesc')}</p>
          </div>
          <button className="mt-8 w-full bg-liechti-dark text-white py-3 rounded-xl font-bold text-sm group-hover:bg-liechti-gold group-hover:text-liechti-dark transition-colors">
            {t('supBtn')}
          </button>
        </div>

        {/* Clientes */}
        <div onClick={() => setSelectedRole('Clientes')} className="bg-white rounded-3xl p-8 shadow-md border border-transparent hover:border-liechti-gold hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group transform hover:-translate-y-2">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-liechti-blue/10 text-liechti-blue flex items-center justify-center mb-6 group-hover:bg-liechti-blue group-hover:text-white transition-colors">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-liechti-dark mb-3">{t('cliTitle')}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{t('cliDesc')}</p>
          </div>
          <button className="mt-8 w-full bg-liechti-dark text-white py-3 rounded-xl font-bold text-sm group-hover:bg-liechti-gold group-hover:text-liechti-dark transition-colors">
            {t('cliBtn')}
          </button>
        </div>
      </div>

      <div className="mt-12">
        <a href={`/${locale}`} className="text-gray-500 hover:text-liechti-dark font-semibold text-sm transition-colors">
          {t('backBtn')}
        </a>
      </div>
    </main>
  );
}