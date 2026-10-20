import { useEffect, useRef, useState, type ElementType, type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  variant = "reveal",
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  variant?: "reveal" | "reveal-image";
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const style: CSSProperties = { transitionDelay: `${delay}ms` };
  return (
    <Tag ref={ref} style={style} className={cn(variant, visible && "is-visible", className)}>
      {children}
    </Tag>
  );
}
