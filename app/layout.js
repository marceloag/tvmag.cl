import './globals.css';
import { CSPostHogProvider } from './provider';

export const metadata = {
  title: 'TvMag',
  description: 'Televisión de Magallanes y Antártica Chilena'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <CSPostHogProvider>
        <body>{children}</body>
      </CSPostHogProvider>
    </html>
  );
}
