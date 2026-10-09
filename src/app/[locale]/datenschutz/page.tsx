'use client';

import { useTranslations } from 'next-intl';

export default function DatenschutzPage() {
  const t = useTranslations('HomePage'); // Usa el namespace correcto si tienes uno para Datenschutz, o deja este provisional

  return (
    <main className="min-h-screen bg-[#f7f9fb] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
        
        {/* Cabecera de la página */}
        <div className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#001133] mb-4">
            Datenschutzerklärung <br/>
            <span className="text-2xl md:text-3xl font-medium text-gray-500">(Data Protection Statement)</span>
          </h1>
          <p className="text-sm font-bold tracking-widest text-[#d4af37] uppercase">Gebr. Liechti Heizung Sanitär AG</p>
        </div>

        {/* Contenido Legal */}
        <div className="space-y-10 text-gray-700 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-[#0060a9] mb-4">1. Einleitung (Introduction)</h2>
            <p>
              Die Gebr. Liechti Heizung Sanitär AG nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften der Schweiz, insbesondere dem neuen revidierten Schweizer Datenschutzgesetz (nDSG), sowie dieser Datenschutzerklärung. Soweit anwendbar, berücksichtigen wir zudem die Bestimmungen der europäischen Datenschutz-Grundverordnung (DSGVO).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0060a9] mb-4">2. Verantwortliche Stelle (Controller)</h2>
            <p className="mb-2">Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
            <address className="not-italic bg-gray-50 p-6 rounded-xl border border-gray-100 font-medium">
              <strong>Gebr. Liechti Heizung Sanitär AG</strong><br/>
              Fabrikweg 1<br/>
              5502 Hunzenschwil<br/>
              Schweiz<br/>
              <br/>
              Telefon: +41 062 844 36 68<br/>
              E-Mail: datenschutz@gebr-liechti.ch
            </address>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0060a9] mb-4">3. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <p>
              Wir erheben personenbezogene Daten (wie Name, Adresse, E-Mail, Telefonnummer), wenn Sie uns diese im Rahmen einer Anfrage, bei der Registrierung in unserem Portal oder bei der Abwicklung von Verträgen (Heizung, Sanitär, Photovoltaik) freiwillig mitteilen. 
              Diese Daten werden ausschliesslich zur Erfüllung unserer vertraglichen Pflichten und zur Beantwortung Ihrer Anfragen verwendet.
            </p>
          </section>

          {/* CLÁUSULA ESPECÍFICA SOLICITADA EN LA REVISIÓN (COMPARTICIÓN DE DATOS POR LEY) */}
          <section className="bg-blue-50 border-l-4 border-[#0060a9] p-6 rounded-r-xl">
            <h2 className="text-xl font-bold text-[#001133] mb-3">4. Weitergabe von Daten an Dritte (Sharing of Data)</h2>
            <p className="font-semibold text-gray-800 mb-2">
              Es ist wichtig zu erklären, dass wir Kundendaten weitergeben, wenn dies gesetzlich vorgeschrieben ist.
            </p>
            <p className="text-sm">
              (It is important to declare that we do share customer data which is related by law). 
              Eine Weitergabe Ihrer Daten an Dritte erfolgt grundsätzlich nicht, es sei denn, dies ist zur Vertragsabwicklung notwendig (z.B. Weitergabe an Subunternehmer oder Lieferanten), Sie haben ausdrücklich eingewilligt oder wir sind gesetzlich oder durch behördliche/gerichtliche Anordnung dazu verpflichtet (z.B. steuerliche Aufbewahrungspflichten, Baubewilligungsverfahren).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0060a9] mb-4">5. Cookies und Webanalyse</h2>
            <p>
              Unsere Website verwendet Cookies, um die Nutzung zu erleichtern und bestimmte Funktionen (wie z.B. die Sprachauswahl im Kundenportal) bereitzustellen. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0060a9] mb-4">6. Datensicherheit</h2>
            <p>
              Wir setzen technische und organisatorische Sicherheitsmassnahmen ein, um Ihre durch uns verwalteten Daten gegen Manipulation, Verlust, Zerstörung und gegen den Zugriff unberechtigter Personen zu schützen. Unsere Sicherheitsmassnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert (z.B. durch SSL/TLS-Verschlüsselung der Website).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0060a9] mb-4">7. Ihre Rechte (Your Rights)</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Auskunft:</strong> Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten.</li>
              <li><strong>Berichtigung & Löschung:</strong> Sie haben das Recht auf Berichtigung, Sperrung oder Löschung dieser Daten, sofern dem keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
              <li><strong>Datenübertragbarkeit:</strong> Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung automatisiert verarbeiten, an sich oder an einen Dritten in einem maschinenlesbaren Format aushändigen zu lassen.</li>
            </ul>
            <p className="mt-4">
              Zur Ausübung Ihrer Rechte können Sie uns jederzeit unter der im Abschnitt 2 angegebenen Adresse kontaktieren.
            </p>
          </section>
          
          <div className="pt-8 border-t border-gray-200 text-sm text-gray-500">
            Stand: {new Date().toLocaleDateString('de-CH')}
          </div>

        </div>
      </div>
    </main>
  );
}