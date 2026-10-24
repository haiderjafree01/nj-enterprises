import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Properties, About, Services, WhyUs, Reviews, Process } from "@/components/site/Sections";
import { Contact } from "@/components/site/Contact";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { BUSINESS } from "@/lib/business";

const title = "NJ Developers | Real Estate Agency on Pine Avenue, Lahore";
const description =
  "Find residential, commercial and investment property around Pine Avenue and Valencia, Lahore with NJ Developers. Rated 4.8/5 on Google.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: BUSINESS.name,
          telephone: BUSINESS.phoneTel,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Main Pine Ave, near Valencia, Ameer Pura",
            addressLocality: "Lahore",
            addressRegion: "Punjab",
            addressCountry: "PK",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: BUSINESS.rating, reviewCount: BUSINESS.reviews },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-background focus:p-3">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Properties />
        <About />
        <Services />
        <WhyUs />
        <Reviews />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
