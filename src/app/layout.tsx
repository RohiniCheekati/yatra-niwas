import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Noto_Sans_Telugu } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageProvider";
import { business } from "@/lib/content";

/*
  FONTS — loaded once, used everywhere.
  Each font becomes a CSS variable that globals.css reads.
*/
const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});
const telugu = Noto_Sans_Telugu({
  variable: "--font-telugu",
  subsets: ["telugu"],
  weight: ["400", "500", "600", "700"],
});

/*
  SEO — this is what Google and WhatsApp/Facebook read.
  Good metadata = your guest house shows up when pilgrims search
  "rooms near Kashi Vishwanath" or "annadanam Varanasi".
*/
export const metadata: Metadata = {
  // 👉 Your live website address (custom domain).
  metadataBase: new URL("https://sriumamaheswarayatraniwas.com"),
  title: {
    default: "Sri Uma Maheswara Yatra Niwas | Pilgrim Rooms & Free Annadanam in Varanasi (Kashi)",
    template: "%s | Sri Uma Maheswara Yatra Niwas",
  },
  description:
    "Clean, affordable rooms and daily free Annadanam for pilgrims in Varanasi (Kashi), near Kashi Vishwanath temple and the Ganga ghats. Telugu-friendly stay at Bengali Tola, Pandey Haveli.",
  keywords: [
    "Varanasi pilgrim stay",
    "Kashi rooms",
    "annadanam Varanasi",
    "Telugu yatra niwas Kashi",
    "rooms near Kashi Vishwanath",
    "Sri Uma Maheswara Yatra Niwas",
    "satram Varanasi",
    "Bengali Tola guest house",
  ],
  authors: [{ name: "Sri Uma Maheswara Yatra Niwas" }],
  openGraph: {
    title: "Sri Uma Maheswara Yatra Niwas — Rooms & Free Annadanam in Kashi",
    description:
      "A peaceful home for pilgrims in Varanasi: clean rooms, daily free Annadanam, steps from the Ganga ghats.",
    type: "website",
    locale: "en_IN",
    images: ["/images/logo.png"],
  },
  icons: { icon: "/images/logo.png" },
  alternates: { canonical: "/" },
};

// Structured data: tells search engines this is a lodging business.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Sri Uma Maheswara Yatra Niwas",
  description:
    "Pilgrim guest house with clean rooms and daily free Annadanam in Varanasi (Kashi).",
  image: "https://sriumamaheswarayatraniwas.com/images/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "D.No. 28/176, Pandey Haveli, Bengali Tola",
    addressLocality: "Varanasi",
    addressRegion: "Uttar Pradesh",
    postalCode: "221001",
    addressCountry: "IN",
  },
  telephone: business.phoneDial,
  sameAs: [business.instagram],
  priceRange: "₹",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${telugu.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
