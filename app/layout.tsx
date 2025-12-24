import type { Metadata } from "next";
import { DreamOrphans, Dream_Orphans_Light, ElementaryGothic, Oskon, Times } from './fonts';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Slow Risers",
  description: "Siga sua percepção",
  icons: {
    icon: '/images/vesquicio-icon.webp', // Note a barra inicial
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${Oskon.variable} ${DreamOrphans.variable} ${ElementaryGothic.variable} ${Dream_Orphans_Light.variable} ${Times.className}`}
      >
        {children}
      </body>
    </html>
  );
}