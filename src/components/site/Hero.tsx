import { Star } from "lucide-react";
const hero = "/images/hero.jpg";
import { BUSINESS } from "@/lib/business";

const LINES = ["Find the Right Property.", "Build Your Future."];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh items-end overflow-hidden bg-overlay">
      <img
        src={hero}
        alt="Modern luxury residence at dusk in Lahore"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="animate-slow-zoom absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-overlay/90 via-overlay/45 to-overlay/30" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-10 lg:pb-32">
        <p className="eyebrow animate-fade-in text-ivory" style={{ animationDelay: "200ms" }}>
          Your Trusted Real Estate Partner
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.02] text-ivory sm:text-7xl lg:text-8xl">
          {LINES.map((l, i) => (
            <span key={l} className="block overflow-hidden pb-2">
              <span className="animate-rise block" style={{ animationDelay: `${400 + i * 180}ms` }}>
                {i === 1 ? <em className="italic text-ivory">{l}</em> : l}
              </span>
            </span>
          ))}
        </h1>
        <p className="animate-fade-in mt-8 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg" style={{ animationDelay: "900ms" }}>
          Discover property opportunities around Pine Avenue, Valencia, and Lahore with a real estate partner focused on your needs.
        </p>
        <div className="animate-fade-in mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "1100ms" }}>
          <a href="#properties" className="border border-accent bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground transition-colors hover:bg-transparent hover:text-accent">
            Explore Properties
          </a>
          <a href="#contact" className="border border-ivory/40 px-7 py-4 text-sm font-semibold text-ivory transition-colors hover:border-ivory hover:bg-ivory hover:text-foreground">
            Talk to Our Team
          </a>
        </div>
        <div className="animate-fade-in mt-14 flex items-center gap-3 text-sm text-ivory/80" style={{ animationDelay: "1300ms" }}>
          <span className="flex text-accent" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
          </span>
          Rated {BUSINESS.rating}/5 on Google · {BUSINESS.reviews} Reviews
        </div>
      </div>
      <a href="#properties" aria-label="Scroll down" className="absolute bottom-8 right-8 hidden flex-col items-center gap-3 text-ivory lg:flex">
        <span className="eyebrow [writing-mode:vertical-rl]">Scroll</span>
        <span className="relative h-16 w-px bg-ivory/20">
          <span className="animate-scroll-line absolute inset-0 bg-accent" />
        </span>
      </a>
    </section>
  );
}
