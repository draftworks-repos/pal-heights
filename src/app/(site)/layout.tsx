import type { Metadata } from "next";
import "@styles/globals.css";
import "@styles/variables.css";
import { Merriweather, Inter, Alegreya_Sans, Habibi } from "next/font/google";
import Cursor from "@components/layout/Cursor/morphing-outline/CustomCursor";
import Header from "@components/layout/Header/Header";
import Footer from "@components/layout/Footer/Footer";

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
  metadataBase: new URL("http://localhost:3000/"),

  title: {
    default: "Pal Heights | Luxury Hotel, Dining & Banquets",
    template: "%s | Pal Heights",
  },

  description:
    "Pal Heights is a luxury hotel offering premium stays, fine dining, elegant banquets, and exceptional hospitality experiences.",

  keywords: [
    "Pal Heights",
    "Luxury Hotel",
    "Hotel in Bhubaneswar",
    "Fine Dining",
    "Banquet Hall",
    "Resort",
    "Business Hotel",
    "Wedding Venue",
    "Premium Hospitality",
  ],

  authors: [{ name: "Pal Heights" }],
  creator: "Pal Heights",
  publisher: "Pal Heights",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Pal Heights | Luxury Hotel, Dining & Banquets",
    description:
      "Experience premium hospitality at Pal Heights — luxury rooms, fine dining, and elegant banquets.",
    url: "http://localhost:3000/",
    siteName: "Pal Heights",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/seo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pal Heights Hotel",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pal Heights | Luxury Hotel & Hospitality",
    description: "Luxury stays, dining, and banquets at Pal Heights.",
    images: ["/images/seo/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "http://localhost:3000/",
  },
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
