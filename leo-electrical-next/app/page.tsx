
'use client';

import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Projects";
import { useEffect } from "react";

export default function HomePage() {
  // Inject LocalBusiness schema for SEO
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "LEO Electrical & Plumbing",
      "telephone": process.env.NEXT_PUBLIC_BUSINESS_DISPLAY_PHONE,
      "image": "/logo_elec.jpeg",
      "url": typeof window !== 'undefined' ? window.location.origin : "",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": process.env.BUSINESS_COUNTRY,
        "addressLocality": process.env.BUSINESS_CITY
      },
      "priceRange": "$$",
      "areaServed": ["South Africa"],
      "sameAs": [process.env.NEXT_PUBLIC_WHATSAPP]
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div>
      <Hero />
      <ServicesGrid />
      <Projects />
      <Testimonials />
      <CTA />
    </div>
  );
}
