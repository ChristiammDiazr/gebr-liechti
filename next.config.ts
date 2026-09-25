import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

// Le indicamos al motor exactamente dónde está nuestro archivo de configuración de idiomas
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
  // Aquí irán futuras configuraciones de imágenes o redirecciones SEO
};

export default withNextIntl(nextConfig);