import type { Metadata } from "next";
import { Ripple } from "@components/ui/Ripple";
export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"),
  title: "Pal Heights | Premier Hotel & Hospitality Experience",
  description:
    "Discover Pal Heights — elegant rooms, fine dining, premium banquets, and exceptional hospitality in the heart of Bhubaneswar.",
  keywords: [
    "Pal Heights",
    "Hotel Bhubaneswar",
    "Luxury Hotel",
    "Fine Dining",
    "Banquet Halls",
    "Hospitality",
    "Rooms",
    "Restaurant",
    "Events",
  ],
  openGraph: {
    title: "Pal Heights | Premier Hotel & Hospitality Experience",
    description:
      "Experience premium rooms, gourmet dining, banquets, and warm hospitality at Pal Heights.",
    url: "http://localhost:3000/",
    siteName: "Pal Heights",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero/og-image.jpg", // replace when you add real image
        width: 1200,
        height: 630,
        alt: "Pal Heights Hotel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pal Heights | Premier Hotel Experience",
    description:
      "Premium rooms, dining, and banquet spaces at Pal Heights, Bhubaneswar.",
    images: ["/images/hero/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <main
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <section>
        <button
          data-cursor="hover"
          style={{
            padding: "10px 20px",
            borderRadius: "6px",
            border: "1px solid #000",
            background: "#fff",
            cursor: "pointer",
          }}
        >
          Test Cursor
        </button>
      </section>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "600px",
          overflow: "hidden",
        }}
      >
        <Ripple />
      </div>
    </main>
  );
}
