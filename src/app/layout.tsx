import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, Inter, DM_Sans, Poppins } from "next/font/google";
import "remixicon/fonts/remixicon.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["200", "300", "400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SIDS: Soluções em Inteligência de Dados e Sistemas",
  description:
    "Startup especializada em análise de dados e tecnologia da informação, com 8 anos de experiência no mercado. Nosso objetivo é transformar informações em decisões estratégicas, proporcionando soluções inovadoras que impulsionam o sucesso dos nossos clientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} ${dmSans.variable} ${poppins.variable} w-screen min-h-screen bg-pBackground overflow-x-hidden`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
