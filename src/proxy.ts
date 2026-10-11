import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Lista exacta de los 6 idiomas que vamos a usar
  locales: ['de', 'en', 'fr', 'it', 'pt', 'es'],
  // Idioma por defecto si el usuario entra a la raíz "/" sin idioma
  defaultLocale: 'de'
});

export const config = {
  // Ignorar las rutas internas de Next.js y Vercel para no procesarlas con el traductor
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};