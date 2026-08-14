"use client";

import { Counter, Reveal, SectionHeading } from "./primitives";

const METRICS = [
  {
    label: "Active Players",
    value: 12482,
    decimals: 0,
    prefix: "",
    suffix: "",
    note: "unique · last 24h",
  },
  {
    label: "Concurrent Sessions",
    value: 3249,
    decimals: 0,
    prefix: "",
    suffix: "",
    note: "peak 4,102",
  },
  {
    label: "API Requests",
    value: 2.8,
    decimals: 1,
    prefix: "",
    suffix: "M",
    note: "past 24 hours",
  },
  {
    label: "Average Latency",
    value: 38,
    decimals: 0,
    prefix: "",
    suffix: "ms",
    note: "p50 · worldwide",
  },
];

const BARS = [
  30, 42, 38, 34, 28, 32, 40, 52, 48, 60, 72, 66, 58, 64, 70, 78, 84, 90, 82,
  88, 94, 100, 96, 92,
];

const ENDPOINTS = [
  { name: "POST /matchmake", pct: 42 },
  { name: "GET /players", pct: 18 },
  { name: "POST /auth", pct: 16 },
  { name: "PUT /saves", pct: 9 },
  { name: "other", pct: 15 },
];

export default function GameDashboard() {
  return (
    <section
      id="solutions"
      className="scroll-mt-20 border-t border-edge bg-surface/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="// game dashboard"
          title="Your whole live game on one screen."
          description="Real-time telemetry from every player, server and API call, aggregated into the metrics that actually matter at 2 a.m."
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
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                  />
                </p>
                <p className="mt-2 font-mono text-[11px] text-muted">
                  {metric.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-3 flex flex-col gap-3 rounded-lg border border-edge bg-surface p-5 lg:flex-row">
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-foreground">
                  API requests
                </p>
                <p className="font-mono text-[11px] text-muted">last hour</p>
              </div>
              <RequestBars />
            </div>
            <div className="w-full shrink-0 lg:w-72 lg:border-l lg:border-edge lg:pl-5">
              <p className="text-sm font-medium text-foreground">
                Traffic by endpoint
              </p>
              <div className="mt-4 space-y-3">
                {ENDPOINTS.map((ep) => (
                  <div key={ep.name}>
                    <div className="flex items-center justify-between font-mono text-[11px]">
                      <span className="text-muted">{ep.name}</span>
                      <span className="text-foreground">{ep.pct}%</span>
                    </div>
                    <div className="mt-1 h-1 overflow-hidden rounded-full bg-surface-2">
                      <div
                        className="h-full rounded-full bg-zinc-600"
                        style={{ width: `${ep.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 font-mono text-[11px] leading-5 text-muted">
                <span className="text-foreground">2.8M</span> requests
                <br />
                <span className="text-foreground">100k/min</span> peak
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function RequestBars() {
  const axisMax = 120;
  const plotTop = 20;
  const plotBottom = 180;
  const plotHeight = plotBottom - plotTop;
  const slot = 584 / BARS.length;
  const barWidth = 14;
  const x0 = 40;
  const yOf = (value: number) => plotBottom - (value / axisMax) * plotHeight;

  return (
    <div className="mt-4">
      <svg
        viewBox="0 0 640 224"
        className="h-auto w-full"
        role="img"
        aria-label="Bar chart of API requests over the last hour"
      >
        {[
          { v: 0, y: 180, label: "0" },
          { v: 40, y: yOf(40), label: "40k" },
          { v: 80, y: yOf(80), label: "80k" },
          { v: 120, y: 20, label: "120k" },
        ].map((row) => (
          <g key={row.v}>
            <line
              x1="40"
              x2="624"
              y1={row.y}
              y2={row.y}
              stroke="#26262a"
              strokeWidth="1"
            />
            <text
              x="32"
              y={row.y + 3}
              textAnchor="end"
              className="fill-muted"
              fontSize="9"
            >
              {row.label}
            </text>
          </g>
        ))}

        {BARS.map((value, i) => {
          const h = (value / axisMax) * plotHeight;
          const x = x0 + i * slot + (slot - barWidth) / 2;
          const highlighted = i >= BARS.length - 3;
          return (
            <rect
              key={i}
              x={x}
              y={plotBottom - h}
              width={barWidth}
              height={h}
              rx="1.5"
              className={
                highlighted ? "fill-zinc-200" : "fill-zinc-700"
              }
            >
              <title>{`${value}k req/min`}</title>
            </rect>
          );
        })}

        {[
          { x: 40, label: "17:00", anchor: "start" },
          { x: 186, label: "18:00", anchor: "middle" },
          { x: 332, label: "19:00", anchor: "middle" },
          { x: 478, label: "20:00", anchor: "middle" },
          { x: 624, label: "now", anchor: "end" },
        ].map((row) => (
          <text
            key={row.x}
            x={row.x}
            y="198"
            textAnchor={row.anchor as "start" | "middle" | "end"}
            className="fill-muted"
            fontSize="9"
          >
            {row.label}
          </text>
        ))}
      </svg>
    </div>
  );
}
