'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, CheckCircle, X } from 'lucide-react';

export default function KarrierePage() {
  const params = useParams();
  // locale is retrieved from params to ensure type safety if needed
  const locale = (params.locale as string) || 'de';
  
  // Conectamos la página al diccionario JSON bajo la clave "Karriere"
  const t = useTranslations('Karriere');

  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  // Lista de trabajos conectada al diccionario JSON
  const jobOpenings = [
    {
      id: 'heizungsinstallateur',
      title: t('jobs.job1Title'),
      department: t('jobs.job1Dept'),
      location: t('jobs.job1Loc'),
      type: t('jobs.job1Type'),
      description: t('jobs.job1Desc'),
    },
    {
      id: 'sanitaerinstallateur',
      title: t('jobs.job2Title'),
      department: t('jobs.job2Dept'),
      location: t('jobs.job2Loc'),
      type: t('jobs.job2Type'),
      description: t('jobs.job2Desc'),
    },
    {
      id: 'projektleiter-haustechnik',
      title: t('jobs.job3Title'),
      department: t('jobs.job3Dept'),
      location: t('jobs.job3Loc'),
      type: t('jobs.job3Type'),
      description: t('jobs.job3Desc'),
    },
  ];

  const handleSubmitApplication = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage(true);
    }, 1500);
  };

  // Animaciones de Framer Motion
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-24">
      
      {/* 1. HERO SECTION DINÁMICO */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden mb-20 pt-20">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            // Fotografía conceptual de equipo de ingeniería / trabajo
            src="/hero/karriere-bg.jpg" 
            alt="Careers at Gebr. Liechti" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#001133]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16"
        >
          <span className="inline-block bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#d4af37] px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            {t('badge')}
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight leading-tight">
            {t('title')}
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>
      </section>

      {/* 2. LISTADO DE OFERTAS LABORALES */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-slate-200 pb-6 gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#001133] flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-[#d4af37]" />
            {t('openPositions')} ({jobOpenings.length})
          </h2>
          <span className="text-sm font-semibold text-slate-500 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#0060a9]" />
            {t('locationLabel')}
          </span>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-8"
        >
          {jobOpenings.map((job) => (
            <motion.div 
              variants={fadeUp}
              key={job.id} 
              className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_10px_30px_rgba(0,17,51,0.04)] border border-slate-100 hover:shadow-[0_20px_50px_rgba(0,17,51,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group"
            >
              <div className="space-y-4 max-w-3xl">
                <div className="flex flex-wrap gap-3">
                  <span className="bg-[#0060a9]/10 text-[#0060a9] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    {job.department}
                  </span>
                  <span className="bg-[#d4af37]/10 text-[#9a7e24] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    {job.type}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#001133] group-hover:text-[#0060a9] transition-colors">
                  {job.title}
                </h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                  {job.description}
                </p>
                <div className="flex flex-wrap items-center text-sm font-medium text-slate-500 gap-6 pt-2">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400" /> {job.location}</span>
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-slate-400" /> {t('availabilityPlaceholder')}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedJob(job.title)}
                className="w-full md:w-auto bg-[#001133] text-white hover:bg-[#d4af37] hover:text-[#001133] font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl whitespace-nowrap uppercase tracking-wider text-sm flex items-center justify-center gap-2 shrink-0 border border-transparent hover:border-[#d4af37]"
              >
                {t('applyBtn')}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 3. MODAL DE POSTULACIÓN (POPUP) */}
      {selectedJob && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#001133]/80 backdrop-blur-md p-4 overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white rounded-3xl max-w-2xl w-full p-8 md:p-10 shadow-2xl relative my-8"
          >
            
            <button 
              onClick={() => { setSelectedJob(null); setSuccessMessage(false); }}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {successMessage ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-extrabold text-[#001133]">{t('successTitle')}</h3>
                <p className="text-slate-600 text-lg max-w-md mx-auto leading-relaxed">
                  {t('successDesc')} <br/><strong className="text-[#001133] mt-2 block">{selectedJob}</strong>
                </p>
                <button
                  onClick={() => { setSelectedJob(null); setSuccessMessage(false); }}
                  className="mt-8 bg-[#001133] text-white font-bold px-10 py-4 rounded-xl hover:bg-[#d4af37] hover:text-[#001133] transition-all uppercase tracking-wider text-sm shadow-lg"
                >
                  {t('closeBtn')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitApplication} className="space-y-6">
                <div className="mb-8 border-b border-slate-100 pb-6">
                  <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase mb-2 block">{t('formTitle')}</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#001133] mb-2">{selectedJob}</h3>
                  <p className="text-sm text-slate-500">{t('formSub')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#001133] uppercase tracking-wider mb-2">{t('nameLabel')}</label>
                    <input required type="text" placeholder={t('namePlaceholder')} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#0060a9] focus:bg-white focus:ring-1 focus:ring-[#0060a9] transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#001133] uppercase tracking-wider mb-2">{t('emailLabel')}</label>
                    <input required type="email" placeholder={t('emailPlaceholder')} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#0060a9] focus:bg-white focus:ring-1 focus:ring-[#0060a9] transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#001133] uppercase tracking-wider mb-2">{t('phoneLabel')}</label>
                    <input required type="tel" placeholder={t('phonePlaceholder')} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#0060a9] focus:bg-white focus:ring-1 focus:ring-[#0060a9] transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#001133] uppercase tracking-wider mb-2">{t('availabilityLabel')}</label>
                    <input type="text" placeholder={t('availabilityPlaceholder')} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#0060a9] focus:bg-white focus:ring-1 focus:ring-[#0060a9] transition-all" />
                  </div>
                </div>

                <div className="space-y-5 pt-4 border-t border-slate-100">
                  <div>
                    <label className="block text-xs font-bold text-[#001133] uppercase tracking-wider mb-2">{t('cvLabel')}</label>
                    <input required type="file" accept=".pdf,.doc,.docx" className="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-6 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-[#001133] file:text-white hover:file:bg-[#d4af37] hover:file:text-[#001133] file:transition-colors cursor-pointer" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#001133] uppercase tracking-wider mb-2">{t('certsLabel')}</label>
                    <input type="file" multiple accept=".pdf" className="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-6 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-slate-200 file:text-slate-700 hover:file:bg-slate-300 file:transition-colors cursor-pointer" />
                    <span className="text-xs text-slate-400 mt-2 block flex items-center gap-2"><AlertTriangle className="w-3 h-3"/> {t('certsHint')}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <label className="block text-xs font-bold text-[#001133] uppercase tracking-wider mb-2">{t('msgLabel')}</label>
                  <textarea rows={3} placeholder={t('msgPlaceholder')} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#0060a9] focus:bg-white focus:ring-1 focus:ring-[#0060a9] transition-all resize-none"></textarea>
                </div>

                <div className="pt-8 flex flex-col md:flex-row items-center justify-end gap-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="w-full md:w-auto px-8 py-3.5 rounded-xl text-slate-600 font-bold text-sm hover:bg-slate-100 transition-all uppercase tracking-wider"
                  >
                    {t('cancelBtn')}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-[#d4af37] text-[#001133] font-extrabold px-10 py-3.5 rounded-xl hover:bg-[#001133] hover:text-white transition-all text-sm shadow-lg disabled:opacity-50 uppercase tracking-wider"
                  >
                    {isSubmitting ? t('submittingBtn') : t('submitBtn')}
                  </button>
                </div>
              </form>
            )}

          </motion.div>
        </div>
      )}

    </main>
  );
}