import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['de', 'en', 'es', 'it', 'fr', 'pt'] as const;

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as any)) {
    locale = 'de';
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});