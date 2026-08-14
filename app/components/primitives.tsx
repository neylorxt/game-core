"use client";

import { animate, motion } from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

export function MonoTag({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[11px] tracking-tight ${className}`}
    >
      {children}
    </span>
  );
}

export function Eyebrow({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2 font-mono text-xs text-muted ${className}`}>
      <span className="h-2 w-2 rounded-[2px] bg-foreground/80" />
      <span className="tracking-tight">{label}</span>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : ""
      } ${className}`}
    >
      <Eyebrow
        label={eyebrow}
        className={align === "center" ? "justify-center" : ""}
      />
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted">{description}</p>
      ) : null}
    </Reveal>
  );
}

function useInViewOnce<T extends Element>(rootMargin = "-80px") {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let io: IntersectionObserver | undefined;
    let fallbackId: ReturnType<typeof setTimeout> | undefined;
    if (typeof IntersectionObserver === "undefined") {
      fallbackId = setTimeout(() => setInView(true), 0);
    } else {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setInView(true);
              io?.disconnect();
              break;
            }
          }
        },
        { rootMargin, threshold: 0.01 }
      );
      io.observe(el);
    }
    return () => {
      io?.disconnect();
      if (fallbackId) clearTimeout(fallbackId);
    };
  }, [rootMargin]);

  return { ref: ref as RefObject<T | null>, inView };
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>("-80px");
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : y }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

export function Counter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.5,
  className = "",
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const { ref, inView } = useInViewOnce<HTMLSpanElement>("-40px");
  const [display, setDisplay] = useState(
    (0).toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  );

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => {
        setDisplay(
          v.toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })
        );
      },
    });
    return () => controls.stop();
  }, [inView, value, decimals, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function PrimaryButton({
  children,
  href = "#",
}: {
  children: ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-zinc-300"
    >
      {children}
    </a>
  );
}

export function SecondaryButton({
  children,
  href = "#",
}: {
  children: ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-edge bg-surface px-5 text-sm font-medium text-foreground transition-colors hover:border-zinc-600 hover:bg-surface-2"
    >
      {children}
    </a>
  );
}
