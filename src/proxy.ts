import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['de', 'en-GB', 'es', 'it', 'fr', 'pt', 'sq', 'pl'],
  defaultLocale: 'de'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};