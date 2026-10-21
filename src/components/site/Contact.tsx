import { useState, type FormEvent } from "react";
import { Phone, MapPin, MessageCircle, Navigation, CheckCircle2 } from "lucide-react";
import { BUSINESS, whatsappLink } from "@/lib/business";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<"name" | "phone" | "interest", string>>;

const field =
  "w-full border-0 border-b border-ivory/35 bg-transparent px-0 py-3 text-ivory placeholder:text-ivory/75 focus:border-accent focus:outline-none focus:ring-0";

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const errs: Errors = {};
    if (v("name").length < 2) errs.name = "Please enter your full name.";
    if (!/^\+?[\d\s-]{10,15}$/.test(v("phone"))) errs.phone = "Please enter a valid phone number.";
    if (!v("interest")) errs.interest = "Please choose an option.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const msg = [
      "Property enquiry — NJ Enterprises website",
      `Name: ${v("name")}`,
      `Phone: ${v("phone")}`,
      `Interested in: ${v("interest")}`,
      v("location") && `Preferred location: ${v("location")}`,
      v("message") && `Message: ${v("message")}`,
    ].filter(Boolean).join("\n");
    const win = window.open(whatsappLink(msg), "_blank", "noopener");
    if (!win) window.location.href = whatsappLink(msg);
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="bg-primary text-ivory">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-[1fr_1.1fr] lg:px-10 lg:py-36">
        <div>
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-ivory"><span className="h-px w-10 bg-accent" />Contact</p>
            <h2 className="mt-5 font-display text-5xl font-medium leading-tight lg:text-6xl">Let's Find Your Next Property.</h2>
            <p className="mt-6 max-w-md text-lg text-ivory/85">Tell us what you are looking for. Our team is ready to discuss your real estate requirements.</p>
          </Reveal>
          <Reveal delay={150} className="mt-12 space-y-6">
            <a href={`tel:${BUSINESS.phoneTel}`} className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-accent" strokeWidth={1.5} />
              <span className="link-underline font-display text-2xl">{BUSINESS.phoneDisplay}</span>
            </a>
            <p className="flex items-start gap-4 text-ivory/80">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
              {BUSINESS.addressShort}
            </p>
          </Reveal>
          <Reveal delay={250} className="mt-10 flex flex-wrap gap-4">
            <a href={whatsappLink("Hello NJ Enterprises, I'd like to enquire about a property.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-ivory bg-ivory px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-transparent hover:text-ivory">
              <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
            </a>
            <a href={BUSINESS.maps} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-ivory/30 px-6 py-3.5 text-sm font-semibold transition-colors hover:border-ivory hover:bg-ivory hover:text-foreground">
              <Navigation className="h-4 w-4" /> Get Directions
            </a>
          </Reveal>
        </div>

        <Reveal delay={200}>
          {sent ? (
            <div role="status" className="flex h-full flex-col justify-center border border-ivory/15 p-10">
              <CheckCircle2 className="h-10 w-10 text-accent" strokeWidth={1.25} />
              <h3 className="mt-6 font-display text-3xl">Thank you — almost done.</h3>
              <p className="mt-3 text-ivory/70">Your enquiry has opened in WhatsApp. Just press send and our team will get back to you.</p>
              <button onClick={() => setSent(false)} className="link-underline mt-8 self-start text-sm font-semibold text-accent">Send another enquiry</button>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} className="grid gap-8 border border-ivory/15 p-8 sm:grid-cols-2 sm:p-10">
              <Field label="Full Name" error={errors.name} id="name">
                <input id="name" name="name" autoComplete="name" className={field} placeholder="Your name" aria-invalid={!!errors.name} />
              </Field>
              <Field label="Phone Number" error={errors.phone} id="phone">
                <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} placeholder="03XX XXXXXXX" aria-invalid={!!errors.phone} />
              </Field>
              <Field label="Interested In" error={errors.interest} id="interest">
                <select id="interest" name="interest" defaultValue="" className={cn(field, "[&>option]:text-foreground")} aria-invalid={!!errors.interest}>
                  <option value="" disabled>Select an option</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Investment</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="Preferred Location" id="location">
                <input id="location" name="location" className={field} placeholder="e.g. Pine Avenue" />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Message" id="message">
                  <textarea id="message" name="message" rows={3} className={cn(field, "resize-none")} placeholder="Tell us about your requirement" />
                </Field>
              </div>
              <button type="submit" className="bg-ivory px-7 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-accent sm:col-span-2 sm:justify-self-start">
                Submit Enquiry
              </button>
              <p className="-mt-4 text-xs text-ivory/85 sm:col-span-2">Your enquiry is sent to our team via WhatsApp.</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, error, id, children }: { label: string; error?: string | undefined; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow text-ivory">{label}</label>
      {children}
      {error && <p role="alert" className="mt-2 text-xs text-accent">{error}</p>}
    </div>
  );
}
