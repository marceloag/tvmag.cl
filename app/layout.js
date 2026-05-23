import './globals.css';
import { CSPostHogProvider } from './provider';

export const metadata = {
  title: 'TvMag — Televisión de Magallanes en Vivo',
  description:
    'Disfruta de los canales de la región de Magallanes y Antártica Chilena en vivo, gratis, desde tu celular, tablet o computador.',
  metadataBase: new URL('https://tvmag.cl'),
  openGraph: {
    title: 'TvMag — Televisión de Magallanes en Vivo',
    description: 'Todos los canales de Magallanes, gratis y al instante.',
    url: 'https://tvmag.cl',
    siteName: 'TvMag',
    images: [{ url: '/opengraph.png', width: 1200, height: 630, alt: 'TvMag App' }],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TvMag — Televisión de Magallanes en Vivo',
    description: 'Todos los canales de Magallanes, gratis y al instante.',
    images: ['/opengraph.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/web-app-manifest-192x192.png',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="apple-mobile-web-app-title" content="TvMag" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#06090f" />
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <CSPostHogProvider>
        <body>{children}</body>
      </CSPostHogProvider>
    </html>
  );
}
