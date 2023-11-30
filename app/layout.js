
import './globals.css'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'TvMag',
  description: 'Televisión de Magallanes y Antártica Chilena',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
