"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { GITHUB_URL, GithubMark } from "./icons";

const NAV_LINKS = [
  { label: "Product", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Developers", href: "#sdk" },
  { label: "Documentation", href: "#docs" },
  { label: "Pricing", href: "#pricing" },
];

export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="grid h-7 w-7 place-items-center rounded-md border border-edge bg-surface font-mono text-[11px] font-semibold tracking-tight text-foreground">
        gc
      </span>
      <span className="text-[15px] font-semibold tracking-tight text-foreground">
        GameCore
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled || open
          ? "border-edge bg-background/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GameCore on GitHub"
            className="grid h-9 w-9 place-items-center rounded-md border border-edge text-muted transition-colors hover:border-zinc-600 hover:text-foreground"
          >
            <GithubMark className="h-4 w-4" />
          </a>
          <a
            href="#docs"
            className="inline-flex h-9 items-center rounded-md border border-edge bg-surface px-4 text-sm font-medium text-foreground transition-colors hover:border-zinc-600 hover:bg-surface-2"
          >
            Sign in
          </a>
          <a
            href="#pricing"
            className="inline-flex h-9 items-center rounded-md bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-zinc-300"
          >
            Start Building
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-md border border-edge text-foreground md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-edge bg-background/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-edge/60 py-3 text-sm text-muted transition-colors last:border-0 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex gap-2">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GameCore on GitHub"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-edge bg-surface text-foreground transition-colors hover:border-zinc-600"
              >
                <GithubMark className="h-4 w-4" />
              </a>
              <a
                href="#docs"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 flex-1 items-center justify-center rounded-md border border-edge bg-surface text-sm font-medium text-foreground transition-colors hover:border-zinc-600 hover:bg-surface-2"
              >
                Sign in
              </a>
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 flex-1 items-center justify-center rounded-md bg-foreground text-sm font-medium text-background"
              >
                Start Building
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
