import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/business";
import { cn } from "@/lib/utils";
import logo from "@/assets/nj-logo.png";

export function Logo({ light }: { light?: boolean }) {
  return (
    <a href="#home" className="flex items-center" aria-label="NJ Enterprises home">
      <img
        src={logo}
        alt="NJ Enterprises"
        width={116}
        height={98}
        className={cn(
          "h-12 w-auto transition-opacity hover:opacity-80 lg:h-14",
          light && "drop-shadow-[0_1px_10px_rgba(0,0,0,0.45)]",
        )}
      />
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const solid = scrolled || open;
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid ? "bg-background/95 py-3 shadow-sm backdrop-blur" : "bg-transparent py-6",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Logo light={!solid} />
        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={cn(
                "link-underline pb-1 text-sm font-medium transition-colors",
                solid ? "text-foreground/80 hover:text-foreground" : "text-ivory/85 hover:text-ivory",
                active === n.id && (solid ? "!text-foreground bg-[length:100%_1px]" : "!text-ivory bg-[length:100%_1px]"),
              )}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#properties"
          className="hidden border border-primary bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-transparent hover:text-foreground lg:inline-block"
        >
          Explore Properties
        </a>
        <button
          className={cn("lg:hidden", solid ? "text-foreground" : "text-ivory")}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div
        className={cn(
          "grid overflow-hidden transition-all duration-500 lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="min-h-0">
          <div className="flex flex-col gap-1 px-6 pb-6 pt-4">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className={cn("border-b border-border py-3 font-display text-2xl", active === n.id ? "text-foreground" : "text-foreground")}
              >
                {n.label}
              </a>
            ))}
            <a href="#properties" onClick={() => setOpen(false)} className="mt-4 bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground">
              Explore Properties
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
