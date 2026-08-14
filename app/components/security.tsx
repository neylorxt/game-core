"use client";

import { Gauge, KeyRound, Lock, ShieldCheck } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

const ITEMS = [
  {
    icon: KeyRound,
    title: "Authentication",
    detail: "JWT · platform SSO · MFA",
    description:
      "Token-based auth with platform single sign-on, device verification and optional multi-factor for privileged accounts.",
  },
  {
    icon: Gauge,
    title: "Rate limiting",
    detail: "per-key · per-IP · 10k req/s",
    description:
      "Distributed rate limits applied per API key, per IP and per player, with sensible defaults tuned for game traffic.",
  },
  {
    icon: Lock,
    title: "Encryption",
    detail: "TLS 1.3 · AES-256 · KMS",
    description:
      "Encryption in transit and at rest, managed keys, and per-tenant secrets isolated from other titles on the platform.",
  },
  {
    icon: ShieldCheck,
    title: "Server validation",
    detail: "signed tickets · anti-cheat hooks",
    description:
      "Game servers verify signed session tickets before accepting connections, with hooks for your anti-cheat stack.",
  },
];

export default function Security() {
  return (
    <section
      id="security"
      className="scroll-mt-20 border-t border-edge bg-surface/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="// security"
          title="Security handled at the platform layer."
          description="Every endpoint is authenticated, rate limited and audited. Your team ships gameplay; the security model is already in place."
        />

        <Reveal className="mt-12">
          <div className="mb-3 flex flex-wrap gap-2">
            {["SOC 2 Type II", "ISO 27001", "GDPR", "CCPA"].map((cert) => (
              <span
                key={cert}
                className="rounded-md border border-edge bg-surface px-2.5 py-1 font-mono text-[10px] text-muted"
              >
                {cert}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="h-full rounded-lg border border-edge bg-surface p-5 transition-colors hover:border-zinc-600">
                <div className="flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-md border border-edge bg-surface-2">
                    <item.icon size={16} strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-[10px] text-emerald-500">
                    enabled
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 font-mono text-[11px] text-muted">
                  {item.detail}
                </p>
                <p className="mt-2.5 text-[13px] leading-5 text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
