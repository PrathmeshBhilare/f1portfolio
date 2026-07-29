import type { Metadata } from "next";
import { Inter, Chakra_Petch } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { AudioProvider } from "@/context/AudioContext";
import CustomCursor from "@/components/CustomCursor";
import AudioToggle from "@/components/AudioToggle";
import SmoothScroll from "@/components/SmoothScroll";
import SectionIndicator from "@/components/SectionIndicator";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const chakraPetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-chakra-petch",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Developer Portfolio | F1 Inspired",
  description: "A high-performance developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={clsx(
          inter.variable,
          chakraPetch.variable,
          "font-sans bg-bg-primary text-text-primary antialiased"
        )}
      >
        <AudioProvider>
          <SmoothScroll>
            <CustomCursor />
            <AudioToggle />
            <SectionIndicator />
            {children}
          </SmoothScroll>
        </AudioProvider>
      </body>
    </html>
  );
}
