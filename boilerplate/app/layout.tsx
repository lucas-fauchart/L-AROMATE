import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Courgette } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { BarreNavigation } from "@/components/common/barreNavigation";
import { PiedPage } from "@/components/common/piedPage";
import { ThemeProvider } from "@/components/themeProvider"
import { ApparitionFonduHautProps } from "@/components/motion/apparitionFonduHaut";

const fontSans = Courgette({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Courgette({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = Courgette({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "L'Aromate",
  description: "Découvrez L'Aromate, le restaurant de Sylvie Lagrand. Une cuisine d'auteur moderne sublimant les aromates, herbes fraîches et plantes sauvages de saison.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("h-full", "antialiased", fontSans.variable, fontSerif.variable, "font-sans", fontMono.variable)}>
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <BarreNavigation/>
          <main>
            {children} 
          </main>
          <ApparitionFonduHautProps>
            <PiedPage/>
          </ApparitionFonduHautProps> 
        </ThemeProvider>
      </body>
    </html>
  );
}
