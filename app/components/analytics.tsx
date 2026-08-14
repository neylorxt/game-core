"use client";

import { Counter, Reveal, SectionHeading } from "./primitives";

const METRICS = [
  {
    label: "Daily Active Users",
    value: 182394,
    decimals: 0,
    suffix: "",
    note: "+9.2% vs last week",
    points: "0,28 10,26 20,30 30,24 40,22 50,26 60,18 70,20 80,14 90,12 100,10 110,6 120,4",
  },
  {
    label: "Concurrent Players",
    value: 12482,
    decimals: 0,
    suffix: "",
    note: "peak 14,080",
    points: "0,30 10,28 20,24 30,26 40,20 50,18 60,22 70,14 80,12 90,16 100,8 110,10 120,6",
  },
  {
    label: "Avg Session Duration",
    value: 31,
    decimals: 0,
    suffix: "m",
    note: "median 18m 40s",
    points: "0,22 10,20 20,24 30,18 40,16 50,14 60,16 70,12 80,10 90,8 100,10 110,6 120,4",
  },
  {
    label: "Retention · D7",
    value: 34.8,
    decimals: 1,
    suffix: "%",
    note: "+1.3 pts vs last season",
    points: "0,32 10,30 20,28 30,26 40,24 50,20 60,18 70,16 80,12 90,10 100,8 110,6 120,6",
  },
];

const RETENTION = [
  { day: "D1", pct: 100 },
  { day: "D3", pct: 61 },
  { day: "D7", pct: 34.8 },
  { day: "D14", pct: 22.4 },
  { day: "D30", pct: 15.1 },
];

export default function Analytics() {
  return (
    <section
      id="analytics"
      className="scroll-mt-20 border-t border-edge bg-surface/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="// analytics"
          title="Know why players stay. And why they leave."
          description="Clean event pipelines with retention cohorts, funnel queries and anomaly alerts — no SQL required, but it's there if you want it."
        />

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.06}>
              <div className="rounded-lg border border-edge bg-surface p-5">
                <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                  {metric.label}
                </p>
                <p className="mt-3 font-mono text-3xl font-medium tabular-nums tracking-tight text-foreground">
                  <Counter
                    value={metric.value}
                    decimals={metric.decimals}
                    suffix={metric.suffix}
                  />
                </p>
                <svg
                  viewBox="0 0 120 40"
                  className="mt-4 h-10 w-full"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polyline
                    points={metric.points}
                    fill="none"
                    stroke="#a1a1aa"
                    strokeWidth="1.5"
                  />
                </svg>
                <p className="mt-3 font-mono text-[11px] text-emerald-500">
                  {metric.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-3 rounded-lg border border-edge bg-surface p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-foreground">
                Retention by day
              </p>
              <p className="font-mono text-[11px] text-muted">
                cohort · 2026-07-14
              </p>
            </div>
            <div className="mt-5 space-y-4">
              {RETENTION.map((row) => (
                <div key={row.day} className="flex items-center gap-4">
                  <span className="w-8 shrink-0 font-mono text-[11px] text-muted">
                    {row.day}
                  </span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-2">
                    <div
                      className="h-full rounded-full bg-zinc-600"
                      style={{ width: `${Math.max(row.pct, 3)}%` }}
                    />
                  </div>
                  <span className="w-14 shrink-0 text-right font-mono text-[11px] tabular-nums text-foreground">
                    {row.pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
