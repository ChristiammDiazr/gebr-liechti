import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['de', 'en-GB', 'es', 'it', 'fr', 'pt', 'sq', 'pl'];

export default getRequestConfig(async ({ requestLocale }) => {
  // En las versiones recientes, usamos requestLocale
  let locale = await requestLocale;

  // Si no hay un idioma detectado, usamos el alemán por defecto
  if (!locale || !locales.includes(locale as any)) {
    locale = 'de';
  }

  return {
    locale, // DEBEMOS devolver el locale aquí
    messages: (await import(`../messages/${locale}.json`)).default
  };
});