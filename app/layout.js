import "./globals.css";
import { CSPostHogProvider } from "./provider";

export const metadata = {
	title: "TvMag",
	description: "Televisión de Magallanes y Antártica Chilena",
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<meta name="apple-mobile-web-app-title" content="Tv Mag" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-status-bar-style" content="black" />
			<CSPostHogProvider>
				<body>{children}</body>
			</CSPostHogProvider>
		</html>
	);
}
