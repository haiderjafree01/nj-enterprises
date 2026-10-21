import { MessageCircle } from "lucide-react";
import { BUSINESS, NAV } from "@/lib/business";
import { Logo } from "./Header";

export function Footer() {
  return (
    <footer className="bg-overlay text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div>
          <Logo light />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/60">
            A real estate agency helping clients explore property opportunities around Pine Avenue, Valencia and Lahore.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow text-ivory">Navigate</p>
          <ul className="mt-5 grid grid-cols-2 gap-3 text-sm text-ivory/70">
            {NAV.map((n) => (
              <li key={n.id}><a href={`#${n.id}`} className="link-underline hover:text-ivory">{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="space-y-3 text-sm text-ivory/70">
          <p className="eyebrow text-ivory">Visit & Call</p>
          <p className="pt-2">{BUSINESS.addressShort}</p>
          <p><a href={`tel:${BUSINESS.phoneTel}`} className="link-underline hover:text-ivory">{BUSINESS.phoneDisplay}</a></p>
          <p><a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-ivory">WhatsApp</a></p>
          <p><a href={BUSINESS.maps} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-ivory">Google Maps directions</a></p>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs text-ivory/40 lg:px-10">© {new Date().getFullYear()} NJ Enterprises. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={BUSINESS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with NJ Enterprises on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
