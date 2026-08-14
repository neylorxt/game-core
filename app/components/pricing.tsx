"use client";

import { ArrowRight, Check } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

const TIERS = [
  {
    name: "Indie",
    price: "$0",
    period: "forever",
    blurb: "For prototypes, jams and first launches.",
    cta: "Start free",
    featured: false,
    features: [
      "100 concurrent players",
      "1 game title",
      "All core services included",
      "Community support",
      "99.5% uptime SLA",
    ],
  },
  {
    name: "Studio",
    price: "$199",
    period: "/ month",
    blurb: "For live games with real players.",
    cta: "Start Building",
    featured: true,
    features: [
      "25,000 concurrent players",
      "Up to 5 game titles",
      "Dedicated servers included",
      "Analytics + retention cohorts",
      "Priority support, 24/7",
      "99.9% uptime SLA",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact sales",
    blurb: "For AAA titles and large-scale operations.",
    cta: "Contact sales",
    featured: false,
    features: [
      "Unlimited concurrent players",
      "Unlimited titles",
      "Private regions on request",
      "Custom SLAs & DDoS protection",
      "Dedicated support engineers",
      "On-prem / private cloud options",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-20 border-t border-edge py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="// pricing"
          title="Pricing that scales with your player count."
          description="No per-request fees, no surprise bills. Every plan includes the full API and SDK — you only move up when your game grows."
        />

        <div className="mt-12 grid grid-cols-1 gap-3 lg:grid-cols-3">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <div
                className={`relative flex h-full flex-col rounded-lg border p-6 ${
                  tier.featured
                    ? "border-foreground bg-surface-2"
                    : "border-edge bg-surface"
                }`}
              >
                {tier.featured ? (
                  <span className="absolute -top-3 left-6 rounded bg-foreground px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide text-background">
                    most popular
                  </span>
                ) : null}

                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-foreground">
                    {tier.name}
                  </h3>
                  <span className="font-mono text-[10px] text-muted">
                    tier_{i + 1}
                  </span>
                </div>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-mono text-4xl font-medium tracking-tight text-foreground">
                    {tier.price}
                  </span>
                  <span className="font-mono text-[11px] text-muted">
                    {tier.period}
                  </span>
                </div>
                <p className="mt-2 text-[13px] text-muted">{tier.blurb}</p>

                <div className="mt-6 flex-1 space-y-2.5 border-t border-edge pt-5">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <Check size={14} className="mt-0.5 shrink-0 text-emerald-500" />
                      <span className="text-[13px] leading-5 text-muted">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#docs"
                  className={`mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors ${
                    tier.featured
                      ? "bg-foreground text-background hover:bg-zinc-300"
                      : "border border-edge bg-surface-2 text-foreground hover:border-zinc-600"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight size={15} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-6 text-center font-mono text-[11px] text-muted">
            Need something between plans?{" "}
            <a href="#docs" className="text-foreground underline underline-offset-4 hover:text-zinc-300">
              talk to us
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
