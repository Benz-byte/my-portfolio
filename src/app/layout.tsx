import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RevealObserver } from "@/components/layout/RevealObserver";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ben Antonio Belga — Full Stack Developer",
  description:
    "Portfolio of Ben Antonio B. Belga — a Full Stack Developer from Iloilo City crafting performant, accessible, and beautifully designed web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}