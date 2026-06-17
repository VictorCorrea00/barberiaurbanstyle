import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Urban Style Barber | Barbearia Premium em Santana do Livramento",
  description: "Cortes premium, barba impecável e uma experiência de alto padrão em Santana do Livramento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-luxury-black text-luxury-light antialiased`}>
        {children}
      </body>
    </html>
  );
}
