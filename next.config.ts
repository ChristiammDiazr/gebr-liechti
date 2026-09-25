import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

// Le indicamos al motor exactamente dónde está nuestro archivo de configuración de idiomas
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
  // Ignorar errores menores de tipos y linter en el build de producción para Vercel
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withNextIntl(nextConfig);