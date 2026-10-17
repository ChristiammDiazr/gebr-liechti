import { getTranslations } from 'next-intl/server';
import { MapPin, Navigation, Train, Truck, Mail, Phone, Calendar } from 'lucide-react';

export default async function Kontakt({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ContactPage' });

  // Dirección exacta para los enlaces de mapas
  const companyAddress = "Fabrikweg 1, 5502 Hunzenschwil, Schweiz";

  return (
    <main className="min-h-screen bg-liechti-gray overflow-hidden">
      
      {/* 0. HERO CON FOTOGRAFÍA DE INDUSTRIA / HVAC / ALMACÉN */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero/kontakt-bg.jpg" 
            alt="Infraestructura Industrial y Almacenes HVAC" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-[#001133]/75 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#000a1f] to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
          <span className="text-liechti-gold text-sm md:text-base font-bold tracking-[0.3em] uppercase block mb-3">
            Gebr. Liechti AG • Aarau & Aargau
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg tracking-tight">
            {t('heroTitle')}
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto italic font-light">
            {t('privacyNote')}
          </p>
        </div>
      </section>

      {/* 1. SECCIÓN PRINCIPAL: FORMULARIO Y DATOS */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* COLUMNA IZQUIERDA: FORMULARIO MODERNO */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_15px_50px_rgba(0,0,77,0.06)] border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-extrabold text-liechti-dark mb-8 uppercase tracking-wide border-b border-gray-100 pb-4">
              {t('formTitle')}
            </h2>

            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder={t('formName')} 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 text-gray-700 focus:outline-none focus:border-liechti-gold focus:bg-white focus:ring-1 focus:ring-liechti-gold transition-all"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder={t('formEmail')} 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 text-gray-700 focus:outline-none focus:border-liechti-gold focus:bg-white focus:ring-1 focus:ring-liechti-gold transition-all"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder={t('formPhone')} 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 text-gray-700 focus:outline-none focus:border-liechti-gold focus:bg-white focus:ring-1 focus:ring-liechti-gold transition-all"
                />
              </div>
              
              {/* NUEVO CAMPO: TIPO DE CONSULTA (Corregido para React) */}
              <div>
                <select 
                  defaultValue="" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 text-gray-700 focus:outline-none focus:border-liechti-gold focus:bg-white focus:ring-1 focus:ring-liechti-gold transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>{t('formType')}</option>
                  <option value="general">{t('typeOption1')}</option>
                  <option value="visit">{t('typeOption2')}</option>
                  <option value="quote">{t('typeOption3')}</option>
                  <option value="support">{t('typeOption4')}</option>
                  <option value="admin">{t('typeOption5')}</option>
                </select>
              </div>

              <div>
                <textarea 
                  placeholder={t('formMessage')} 
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 text-gray-700 focus:outline-none focus:border-liechti-gold focus:bg-white focus:ring-1 focus:ring-liechti-gold transition-all resize-none"
                ></textarea>
              </div>
              
              <button 
                type="button" 
                className="bg-[#001133] hover:bg-liechti-gold text-white hover:text-[#001133] w-full py-4 rounded-xl font-bold tracking-wider uppercase transition-all duration-300 shadow-lg hover:-translate-y-0.5"
              >
                {t('btnSubmit')}
              </button>
            </form>
          </div>

          {/* COLUMNA DERECHA: INFORMACIÓN DE CONTACTO */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_15px_50px_rgba(0,0,77,0.06)] border border-gray-100 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-extrabold text-liechti-dark mb-8 uppercase tracking-wide border-b border-gray-100 pb-4">
                {t('infoTitle')}
              </h3>

              {/* Ubicaciones */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-liechti-blue uppercase tracking-widest mb-4">{t('locationsTitle')}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <div>
                    <p className="font-bold text-liechti-dark">{t('workshopTitle')}</p>
                    <p className="text-gray-600 text-sm mt-1">{t('workshopAddress1')}</p>
                    <p className="text-gray-600 text-sm">{t('workshopAddress2')}</p>
                  </div>
                  <div>
                    <p className="font-bold text-liechti-dark">{t('billingTitle')}</p>
                    <p className="text-gray-600 text-sm mt-1">{t('billingAddress1')}</p>
                    <p className="text-gray-600 text-sm">{t('billingAddress2')}</p>
                  </div>
                </div>
              </div>

              {/* Email y Teléfono (Formato de teléfono actualizado +41 62 844 3668) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-blue-50 rounded-xl text-liechti-blue">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t('emailTitle')}</h4>
                    <a href={`mailto:${t('emailAddress')}`} className="text-gray-700 font-semibold hover:text-liechti-gold transition-colors text-sm">
                      {t('emailAddress')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 bg-blue-50 rounded-xl text-liechti-blue">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t('phoneTitle')}</h4>
                    <a href="tel:+41628443668" className="text-gray-700 font-semibold hover:text-liechti-gold transition-colors text-sm">
                      +41 62 844 3668
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Vacaciones (Alerta en Rojo Institucional) */}
            <div className="bg-red-50/80 border-l-4 border-liechti-red p-6 rounded-r-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-liechti-red" />
                <h4 className="text-liechti-red font-bold text-base">{t('holidayTitle')}</h4>
              </div>
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed">{t('holidayText1')}</p>
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed mt-1">{t('holidayText2')}</p>
            </div>

          </div>

        </div>
      </section>

      {/* 2. SECCIÓN MAPA Y BOTONES DE RUTAS ÓPTIMAS */}
      <section className="w-full bg-white py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-liechti-dark uppercase tracking-wider">
                {t('mapTitle')}
              </h2>
              <p className="text-gray-500 text-sm mt-1">Fabrikweg 1, 5502 Hunzenschwil, Schweiz</p>
            </div>
            <div className="flex items-center gap-2 text-liechti-blue font-bold text-sm bg-blue-50 px-4 py-2 rounded-xl">
              <MapPin className="w-4 h-4 text-liechti-gold" /> Sede Central (HQ)
            </div>
          </div>
          
          {/* Contenedor del Mapa con los 3 botones flotantes integrados abajo */}
          <div className="relative w-full h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100 group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.5976527926227!2d8.1154563!3d47.3807663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47903f001c34a2e5%3A0xc3e16428e20e8b!2sFabrikweg%201%2C%205502%20Hunzenschwil!5e0!3m2!1sen!2sch!4v1700000000000" 
              className="absolute inset-0 w-full h-full border-0 z-0" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* PANEL INFERIOR CON LOS 3 BOTONES DE RUTAS */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-20 flex flex-col gap-2 md:gap-3">
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                
                {/* Botón Google Maps */}
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(companyAddress)}&dir_action=navigate`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 bg-white hover:bg-gray-50 border-2 border-blue-500 text-gray-800 px-3 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-2xl text-sm md:text-base"
                >
                  <Navigation className="w-5 h-5 text-blue-600" />
                  {t('btnGoogleMaps')}
                </a>
                
                {/* Botón SBB */}
                <a 
                  href={`https://www.sbb.ch/de/kaufen/pages/fahrplan/fahrplan.xhtml?nach=${encodeURIComponent(companyAddress)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 bg-[#eb0000] hover:bg-[#cc0000] text-white px-3 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-2xl text-sm md:text-base"
                >
                  <Train className="w-5 h-5" />
                  {t('btnSBB')}
                </a>
              </div>

              {/* Botón Geoportal */}
              <a 
                href="https://www.ag.ch/geoportal/apps/onlinekarten/?basemap=base_landeskarten_sw::topicmaps.geo.ag.ch,0.25,true&layers=avk_atr::topicmaps.geo.ag.ch;1;true&center=2649753.58,1250263.02&z=2" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white px-3 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-xl hover:shadow-2xl text-sm md:text-base"
              >
                <Truck className="w-5 h-5" />
                {t('btnTruck')}
              </a>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}