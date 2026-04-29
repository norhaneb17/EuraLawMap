import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "EuraLexMap — Droit européen du numérique",
  description:
    "Cartographiez le droit européen du numérique : DSA, DMA, AI Act, RGPD, DGA et plus. Fiches, glossaire et assistant IA pour étudiants en droit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col antialiased bg-white dark:bg-gray-900 transition-colors duration-200">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
