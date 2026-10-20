import { ArrowUpRight, Home, Tag, Building2, TrendingUp, Search, MessageCircle, Star, Quote, MapPin } from "lucide-react";
import logo from "@/assets/nj-logo.png";
import residential from "@/assets/residential.jpg";
import commercial from "@/assets/commercial.jpg";
import community from "@/assets/community.jpg";
import avenue from "@/assets/avenue.jpg";
import interior from "@/assets/interior.jpg";
import { Reveal } from "./Reveal";
import { BUSINESS } from "@/lib/business";
import { cn } from "@/lib/utils";

function SectionHead({ eyebrow, title, light }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <Reveal>
      <p className="eyebrow flex items-center gap-3 text-accent">
        <span className="h-px w-10 bg-accent" />
        {eyebrow}
      </p>
      <h2 className={cn("mt-5 max-w-3xl font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl", light ? "text-ivory" : "text-primary")}>
        {title}
      </h2>
    </Reveal>
  );
}

const PANELS = [
  { title: "Residential Properties", text: "Homes and residential plots suited to your family's needs and budget.", img: residential },
  { title: "Commercial Properties", text: "Shops, offices and commercial spaces for businesses ready to grow.", img: commercial },
  { title: "Investment Opportunities", text: "Discuss property options with long-term value in mind.", img: community },
  { title: "Around Pine Avenue & Valencia", text: "Local options in the neighbourhoods we know best.", img: avenue },
];

export function Properties() {
  return (
    <section id="properties" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHead eyebrow="Property Discovery" title="Explore what you're looking for." />
        <Reveal delay={150} className="max-w-sm text-muted-foreground">
          Tell us your requirement and we'll share suitable options currently available through our team.
        </Reveal>
      </div>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PANELS.map((p, i) => (
          <Reveal key={p.title} delay={i * 120} className={cn(i % 2 === 1 && "lg:mt-16")}>
            <a href="#contact" className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img src={p.img} alt={p.title} loading="lazy" width={896} height={1152} className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-overlay/80 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 font-display text-lg text-ivory/80">0{i + 1}</span>
                <h3 className="absolute inset-x-5 bottom-5 font-display text-2xl leading-tight text-ivory">{p.title}</h3>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                <span className="link-underline">Enquire Now</span>
                <ArrowUpRight className="h-4 w-4 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function About() {
  const principles = ["Client-Focused Guidance", "Local Market Understanding", "Professional Communication"];
  return (
    <section id="about" className="bg-secondary">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-2 lg:px-10 lg:py-36">
        <Reveal variant="reveal-image" className="relative">
          <img src={interior} alt="Elegant modern living space" loading="lazy" width={896} height={1152} className="aspect-[4/5] w-full object-cover" />
          <div className="absolute -bottom-6 -right-6 hidden h-40 w-40 border border-accent lg:block" aria-hidden />
        </Reveal>
        <div>
          <img src={logo} alt="NJ Enterprises logo" loading="lazy" className="mb-8 h-24 w-auto" />
          <SectionHead eyebrow="About NJ Enterprises" title="Real Estate Decisions Deserve the Right Guidance." />
          <Reveal delay={150} as="p" className="mt-8 text-lg leading-relaxed text-muted-foreground">
            At NJ Enterprises, we help property seekers explore real estate opportunities around Pine Avenue, Valencia, and nearby areas of Lahore. Our approach focuses on understanding your requirements, identifying suitable options, and helping you move forward with greater confidence.
          </Reveal>
          <ul className="mt-10 border-t border-border">
            {principles.map((p, i) => (
              <Reveal as="li" key={p} delay={250 + i * 100} className="flex items-center gap-6 border-b border-border py-5">
                <span className="font-display text-xl text-accent">0{i + 1}</span>
                <span className="font-display text-2xl text-primary">{p}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { icon: Home, title: "Residential Property Buying", text: "Find a home or plot that fits your family, location and budget." },
  { icon: Tag, title: "Property Selling Assistance", text: "Support in presenting your property and connecting with serious buyers." },
  { icon: Building2, title: "Commercial Property Enquiries", text: "Guidance on shops, offices and commercial spaces for your business." },
  { icon: TrendingUp, title: "Property Investment Consultation", text: "Talk through investment options and what suits your goals." },
  { icon: Search, title: "Property Search & Shortlisting", text: "We narrow down the options so you only visit what matters." },
  { icon: MessageCircle, title: "Real Estate Enquiries & Guidance", text: "Straight answers to your property questions, whenever you need them." },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
      <SectionHead eyebrow="Our Services" title="Support at every stage of your property journey." />
      <div className="mt-16 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 100} className="group relative border-b border-r border-border p-10 transition-colors duration-500 hover:bg-primary">
            <s.icon className="h-6 w-6 text-accent" strokeWidth={1.25} />
            <h3 className="mt-8 font-display text-2xl text-primary transition-colors group-hover:text-ivory">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-ivory/70">{s.text}</p>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Rating({ light }: { light?: boolean }) {
  return (
    <div className={cn("inline-flex items-center gap-4 border px-5 py-4", light ? "border-ivory/20" : "border-border")}>
      <span className={cn("font-display text-4xl", light ? "text-ivory" : "text-primary")}>{BUSINESS.rating}</span>
      <span>
        <span className="flex text-accent" aria-label={`${BUSINESS.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
        </span>
        <span className={cn("mt-1 block text-xs", light ? "text-ivory/70" : "text-muted-foreground")}>
          Google rating · {BUSINESS.reviews} reviews
        </span>
      </span>
    </div>
  );
}

export function WhyUs() {
  const points = [
    ["Local Focus", "Serving clients interested in Pine Avenue, Valencia, and surrounding Lahore areas."],
    ["Personalized Approach", "Property discussions tailored to individual requirements."],
    ["Clear Communication", "Straightforward conversations about property needs."],
    ["Client Confidence", "A professional, approachable enquiry experience."],
  ];
  return (
    <section className="grid bg-primary lg:grid-cols-2">
      <Reveal variant="reveal-image" className="min-h-[420px]">
        <img src={community} alt="Green residential community in Lahore" loading="lazy" width={1280} height={960} className="h-full w-full object-cover" />
      </Reveal>
      <div className="px-6 py-24 sm:px-12 lg:px-20 lg:py-32">
        <SectionHead light eyebrow="Why Choose Us" title="A Better Way to Navigate Real Estate." />
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {points.map(([t, d], i) => (
            <Reveal key={t} delay={i * 100}>
              <div className="h-px w-8 bg-accent" />
              <h3 className="mt-5 font-display text-2xl text-ivory">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/70">{d}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={400} className="mt-12">
          <Rating light />
        </Reveal>
      </div>
    </section>
  );
}

const REVIEWS = [
  { name: "Dr Sania Nargis", text: "Staff is well educated and I get my required inventory on Main Pine Avenue. Highly satisfied." },
  { name: "BAZMI", text: "Quality over quantity, best real estate advisor on Pine Avenue. Highly satisfied." },
  { name: "Murtaza Khan", text: "Amazing experience." },
];

export function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHead eyebrow="Client Reviews" title="In our clients' words." />
        <Reveal delay={150}><Rating /></Reveal>
      </div>
      <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.name} delay={i * 150} as="figure" className="flex flex-col justify-between bg-background p-10">
            <div>
              <Quote className="h-8 w-8 text-accent" strokeWidth={1} />
              <blockquote className="mt-6 font-display text-2xl leading-snug text-primary">“{r.text}”</blockquote>
            </div>
            <figcaption className="mt-10 flex items-center justify-between border-t border-border pt-5">
              <span className="text-sm font-semibold">{r.name}</span>
              <span className="text-xs text-muted-foreground">Google review</span>
            </figcaption>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10">
        <a href={BUSINESS.maps} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
          <MapPin className="h-4 w-4 text-accent" />
          <span className="link-underline">See us on Google Maps</span>
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </Reveal>
    </section>
  );
}

export function Process() {
  const steps = [
    ["Share Your Requirements", "Tell us what type of property you are looking for and your preferred location."],
    ["Explore Suitable Options", "Discuss relevant opportunities with the agency."],
    ["Take Your Next Step", "Contact the team to discuss the property and the way forward."],
  ];
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <SectionHead eyebrow="How It Works" title="Three simple steps." />
        <ol className="mt-16 grid gap-12 md:grid-cols-3">
          {steps.map(([t, d], i) => (
            <Reveal as="li" key={t} delay={i * 180} className="relative border-t border-primary/20 pt-8">
              <span className="absolute -top-px left-0 h-px w-16 bg-accent" />
              <span className="font-display text-7xl font-light text-accent">0{i + 1}</span>
              <h3 className="mt-4 font-display text-3xl text-primary">{t}</h3>
              <p className="mt-3 max-w-xs leading-relaxed text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
