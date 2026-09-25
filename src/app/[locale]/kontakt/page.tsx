import { getTranslations } from 'next-intl/server';

export default async function Kontakt({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ContactPage' });

  return (
    <main className="min-h-screen bg-liechti-gray">
      
      {/* 1. SECCIÓN PRINCIPAL: FORMULARIO Y DATOS */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* COLUMNA IZQUIERDA: FORMULARIO */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-liechti-dark mb-4 leading-tight uppercase">
              {t('heroTitle')}
            </h2>
            <p className="text-sm text-gray-500 italic mb-10">
              {t('privacyNote')}
            </p>

            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder={t('formName')} 
                  className="w-full bg-white border border-gray-200 rounded-lg px-6 py-4 text-gray-700 focus:outline-none focus:border-liechti-gold focus:ring-1 focus:ring-liechti-gold transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder={t('formEmail')} 
                  className="w-full bg-white border border-gray-200 rounded-lg px-6 py-4 text-gray-700 focus:outline-none focus:border-liechti-gold focus:ring-1 focus:ring-liechti-gold transition-colors"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder={t('formPhone')} 
                  className="w-full bg-white border border-gray-200 rounded-lg px-6 py-4 text-gray-700 focus:outline-none focus:border-liechti-gold focus:ring-1 focus:ring-liechti-gold transition-colors"
                />
              </div>
              <div>
                <textarea 
                  placeholder={t('formMessage')} 
                  rows={5}
                  className="w-full bg-white border border-gray-200 rounded-lg px-6 py-4 text-gray-700 focus:outline-none focus:border-liechti-gold focus:ring-1 focus:ring-liechti-gold transition-colors resize-none"
                ></textarea>
              </div>
              
              <button 
                type="button" 
                className="bg-liechti-dark text-white px-10 py-4 rounded-full font-bold tracking-wide hover:bg-liechti-blue transition-colors duration-300 w-full sm:w-auto shadow-lg"
              >
                {t('btnSubmit')}
              </button>
            </form>
          </div>

          {/* COLUMNA DERECHA: INFORMACIÓN DE CONTACTO */}
          <div className="bg-white rounded-3xl p-10 shadow-[0_10px_40px_rgba(0,0,77,0.04)] border border-gray-100">
            <h3 className="text-2xl font-extrabold text-liechti-dark mb-8 uppercase tracking-wide border-b border-gray-100 pb-4">
              {t('infoTitle')}
            </h3>

            {/* Ubicaciones */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-liechti-blue mb-4">{t('locationsTitle')}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="font-bold text-liechti-dark">{t('workshopTitle')}</p>
                  <p className="text-gray-600">{t('workshopAddress1')}</p>
                  <p className="text-gray-600">{t('workshopAddress2')}</p>
                </div>
                <div>
                  <p className="font-bold text-liechti-dark">{t('billingTitle')}</p>
                  <p className="text-gray-600">{t('billingAddress1')}</p>
                  <p className="text-gray-600">{t('billingAddress2')}</p>
                </div>
              </div>
            </div>

            {/* Email y Teléfono */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div>
                <h4 className="text-lg font-bold text-liechti-blue mb-2">{t('emailTitle')}</h4>
                <a href={`mailto:${t('emailAddress')}`} className="text-gray-600 hover:text-liechti-gold transition-colors">
                  {t('emailAddress')}
                </a>
              </div>
              <div>
                <h4 className="text-lg font-bold text-liechti-blue mb-2">{t('phoneTitle')}</h4>
                <a href={`tel:${t('phoneNumber')}`} className="text-gray-600 hover:text-liechti-gold transition-colors">
                  {t('phoneNumber')}
                </a>
              </div>
            </div>

            {/* Vacaciones (Alerta en Rojo Institucional) */}
            <div className="bg-red-50 border-l-4 border-liechti-red p-6 rounded-r-lg">
              <h4 className="text-liechti-red font-bold text-lg mb-2">{t('holidayTitle')}</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{t('holidayText1')}</p>
              <p className="text-gray-700 text-sm leading-relaxed mt-1">{t('holidayText2')}</p>
            </div>

          </div>

        </div>
      </section>

      {/* 2. SECCIÓN MAPA: WIR SIND HIER */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-liechti-dark mb-10 uppercase tracking-wider">
            {t('mapTitle')}
          </h2>
          
          <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            {/* Mapa apuntando a Fabrikweg 1, 5502 Hunzenschwil */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2698.813959828551!2d8.118742876615705!3d47.38792017112002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47903bfca2df7d7f%3A0xc3f34423403a4cd1!2sFabrikweg%201%2C%205502%20Hunzenschwil%2C%20Suiza!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

    </main>
  );
}