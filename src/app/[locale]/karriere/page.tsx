'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';

export default function KarrierePage() {
  const params = useParams();
  const locale = params.locale || 'de';

  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const jobOpenings = [
    {
      id: 'heizungsinstallateur',
      title: 'Heizungsinstallateur EFZ (m/w/d)',
      department: 'Heizung & Wärmepumpen',
      location: 'Hunzenschwil (Aargau) & Umgebung',
      type: '100% / Festanstellung',
      description: 'Installation, Wartung und Sanierung modernster Heizsysteme, Wärmepumpen und umweltfreundlicher Energietechnologien nach Schweizer Standard.',
    },
    {
      id: 'sanitaerinstallateur',
      title: 'Sanitärinstallateur EFZ (m/w/d)',
      department: 'Sanitär & Badtechnik',
      location: 'Hunzenschwil (Aargau)',
      type: '100% / Festanstellung',
      description: 'Fachgerechte Ausführung von Sanitärinstallationen, Neubauten und hochwertigen Badumbauten unter Einhaltung der Minergie-Richtlinien.',
    },
    {
      id: 'projektleiter-haustechnik',
      title: 'Projektleiter Haustechnik / Sanitär (m/w/d)',
      department: 'Management & Planung',
      location: 'Zentrale Hunzenschwil',
      type: '80% - 100%',
      description: 'Technische Projektleitung von der Offertstellung bis zur Übergabe. Enge Koordination mit Architekten, Kunden und unseren Technikern vor Ort.',
    },
  ];

  const handleSubmitApplication = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-20">
      
      {/* HERO SECTION DE CARRERA */}
      <section className="bg-[#030914] text-white py-20 px-6 relative overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent z-0"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <span className="bg-[#d4af37]/10 border border-[#d4af37]/40 text-[#d4af37] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
            Karriere bei Gebr. Liechti AG
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-mono tracking-tight">
            Gestalten Sie die Zukunft der <span className="text-[#d4af37]">Haustechnik</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light">
            Werden Sie Teil eines traditionsreichen Schweizer Familienunternehmens mit 51 Jahren Erfahrung, flachen Hierarchien und modernsten Technologien.
          </p>
        </div>
      </section>

      {/* LISTADO DE OFERTAS */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-10 border-b border-slate-200 pb-4">
          <h2 className="text-2xl md:text-3xl font-bold font-mono text-[#030914]">
            Offene Stellen ({jobOpenings.length})
          </h2>
          <span className="text-sm text-slate-500">Standort: Aargau, Schweiz</span>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {jobOpenings.map((job) => (
            <div 
              key={job.id} 
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >
              <div className="space-y-3 max-w-2xl">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">
                    {job.department}
                  </span>
                  <span className="bg-amber-50 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full border border-amber-100">
                    {job.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#030914] hover:text-[#d4af37] transition-colors">
                  {job.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {job.description}
                </p>
                <div className="flex items-center text-xs text-slate-500 gap-4 pt-1">
                  <span>📍 {job.location}</span>
                  <span>⚡ Sofort oder nach Vereinbarung</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedJob(job.title)}
                className="w-full md:w-auto bg-[#030914] text-white hover:bg-[#d4af37] hover:text-slate-950 font-bold px-8 py-3.5 rounded-xl transition-all text-sm shadow-md whitespace-nowrap"
              >
                Jetzt Bewerben →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL DE POSTULACIÓN */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl border border-slate-100 relative my-8">
            
            <button 
              onClick={() => { setSelectedJob(null); setSuccessMessage(false); }}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 text-xl font-bold w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            {successMessage ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Bewerbung erfolgreich eingereicht!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Vielen Dank für Ihre Bewerbung als <strong className="text-slate-900">{selectedJob}</strong>. Unsere Personalabteilung wird Ihre Unterlagen prüfen.
                </p>
                <button
                  onClick={() => { setSelectedJob(null); setSuccessMessage(false); }}
                  className="mt-6 bg-[#030914] text-white font-bold px-8 py-3 rounded-xl hover:bg-slate-800 transition-all text-sm"
                >
                  Schliessen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitApplication} className="space-y-5">
                <div>
                  <span className="text-xs font-bold text-[#d4af37] tracking-wider uppercase">Bewerbungsformular</span>
                  <h3 className="text-2xl font-bold text-[#030914]">{selectedJob}</h3>
                  <p className="text-xs text-slate-500 mt-1">Bitte laden Sie Ihre Schweizer Standard-Dokumente hoch.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Vollständiger Name *</label>
                    <input required type="text" placeholder="Max Mustermann" className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37]" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">E-Mail-Adresse *</label>
                    <input required type="email" placeholder="max@beispiel.ch" className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Telefonnummer (+41) *</label>
                    <input required type="tel" placeholder="+41 79 123 45 67" className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37]" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Verfügbarkeit</label>
                    <input type="text" placeholder="Per sofort / Nach Vereinbarung" className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37]" />
                  </div>
                </div>

                <div className="space-y-4 pt-2 border-t border-slate-200">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Lebenslauf (CV) (PDF) *</label>
                    <input required type="file" accept=".pdf,.doc,.docx" className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#d4af37]/10 file:text-[#030914] cursor-pointer" />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Arbeitszeugnisse &amp; Diplome (PDF)</label>
                    <input type="file" multiple accept=".pdf" className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-slate-200 file:text-slate-700 cursor-pointer" />
                    <span className="text-[11px] text-slate-400 mt-1 block">Wichtig in der Schweiz: Bitte fügen Sie Zeugnisse früherer Arbeitgeber bei.</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Nachricht</label>
                  <textarea rows={3} placeholder="Kurze Beschreibung..." className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] resize-none"></textarea>
                </div>

                <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-medium text-sm hover:bg-slate-100 transition-all"
                  >
                    Abbrechen
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#d4af37] text-slate-950 font-bold px-8 py-3 rounded-xl hover:bg-[#e6c55d] transition-all text-sm shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? 'Wird gesendet...' : 'Bewerbung Absenden'}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </main>
  );
}