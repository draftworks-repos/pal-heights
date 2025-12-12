import type { Metadata } from "next";
import "@styles/globals.css";
import "@styles/variables.css";
import Cursor from "@components/custom-cursor/CustomCursor";
import { Merriweather, Inter, Alegreya_Sans, Habibi } from "next/font/google";

const palHeading = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
});

const palSmallHeading = Inter({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-small-heading",
});

const palParagraph = Alegreya_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-paragraph",
});

const palAllCaps = Habibi({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-allcaps",
});

export const metadata: Metadata = {
  title: "Pal Heights",
  description: "Pal Heights Hotel Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${palHeading.variable}
          ${palSmallHeading.variable}
          ${palParagraph.variable}
          ${palAllCaps.variable}
        `}
      >
        <Cursor />
        {children}
      </body>
    </html>
  );
}
