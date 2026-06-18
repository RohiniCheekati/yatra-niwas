/*
  THE HOMEPAGE.
  Think of this file as the "table of contents": it just lists the
  sections in order, top to bottom. Each section lives in its own file
  inside src/components/ — so this page stays short and easy to read.
*/

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Annadanam from "@/components/Annadanam";
import Rooms from "@/components/Rooms";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Highlight from "@/components/Highlight";
import KashiGallery from "@/components/KashiGallery";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { business } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Annadanam />
        <Rooms />
        <Services />
        <Packages />
        <Highlight />
        <KashiGallery />
        <BookingForm />
        <Contact />
      </main>
      <Footer />

      {/* Floating WhatsApp button — always visible, one tap to message you. */}
      <a
        href={`https://wa.me/${business.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2zm5.8 14.1c-.24.68-1.42 1.3-1.95 1.35-.5.05-1.13.07-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-2.99s.75-2.12 1.01-2.41c.27-.29.58-.36.77-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.27.71 1.17 1.53 1.9 1.05.93 1.93 1.22 2.21 1.36.27.14.43.12.59-.07.16-.19.68-.79.86-1.07.18-.27.36-.22.61-.13.24.09 1.55.73 1.82.86.27.14.45.2.51.31.07.11.07.63-.17 1.31z" />
        </svg>
      </a>
    </>
  );
}
