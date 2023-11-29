
import './globals.css'


export const metadata = {
  title: 'TvMag',
  description: 'Televisión de Magallanes y Antártica Chilena',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
