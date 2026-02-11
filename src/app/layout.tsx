import "./globals.css";
import { Archivo, Poppins } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
	<html lang="pt-BR" className={`${archivo} ${poppins}`}>
		<body>
			{children}
		</body>
	</html>
  );
}
