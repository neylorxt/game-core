"use client";

import { Reveal, SectionHeading } from "./primitives";

const REGIONS = [
  { name: "US East", code: "us-east-1", servers: 48, ping: 28 },
  { name: "Europe", code: "eu-west-1", servers: 42, ping: 18 },
  { name: "Asia Pacific", code: "ap-southeast-1", servers: 36, ping: 42 },
  { name: "South America", code: "sa-east-1", servers: 16, ping: 86 },
  { name: "Middle East", code: "me-central-1", servers: 12, ping: 74 },
  { name: "Africa", code: "af-south-1", servers: 8, ping: 112 },
];

const NODES = [
  { code: "us-east", x: 16, y: 26 },
  { code: "sa-east", x: 24, y: 70 },
  { code: "eu-west", x: 46, y: 22 },
  { code: "af-south", x: 50, y: 60 },
  { code: "me-central", x: 60, y: 40 },
  { code: "ap-southeast", x: 78, y: 36 },
];

export default function GlobalInfrastructure() {
  return (
    <section
      id="infrastructure"
      className="scroll-mt-20 border-t border-edge py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="// global infrastructure"
          title="Edge-first compute, close to every player."
          description="Matchmaking and player-facing APIs run at the edge. Dedicated game servers spawn inside the region that gives your players the lowest ping."
        />

        <div className="mt-12 grid gap-3 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-edge bg-surface sm:aspect-[16/10]">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <line
                  x1="50"
                  y1="50"
                  x2="16"
                  y2="26"
                  stroke="#26262a"
                  strokeWidth="0.4"
                  vectorEffect="non-scaling-stroke"
                />
                <line
                  x1="50"
                  y1="50"
                  x2="24"
                  y2="70"
                  stroke="#26262a"
                  strokeWidth="0.4"
                  vectorEffect="non-scaling-stroke"
                />
                <line
                  x1="50"
                  y1="50"
                  x2="46"
                  y2="22"
                  stroke="#26262a"
                  strokeWidth="0.4"
                  vectorEffect="non-scaling-stroke"
                />
                <line
                  x1="50"
                  y1="50"
                  x2="50"
                  y2="60"
                  stroke="#26262a"
                  strokeWidth="0.4"
                  vectorEffect="non-scaling-stroke"
                />
                <line
                  x1="50"
                  y1="50"
                  x2="60"
                  y2="40"
                  stroke="#26262a"
                  strokeWidth="0.4"
                  vectorEffect="non-scaling-stroke"
                />
                <line
                  x1="50"
                  y1="50"
                  x2="78"
                  y2="36"
                  stroke="#26262a"
                  strokeWidth="0.4"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {NODES.map((node) => (
                <div
                  key={node.code}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  <div className="flex items-center gap-1.5 rounded-md border border-edge bg-surface-2 px-2 py-1.5 shadow-lg shadow-black/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-live" />
                    <span className="font-mono text-[10px] text-foreground">
                      {node.code}
                    </span>
                  </div>
                </div>
              ))}

              <div
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: "50%", top: "50%" }}
              >
                <div className="rounded-lg border border-foreground/40 bg-surface px-4 py-3 text-center shadow-xl shadow-black/40">
                  <p className="font-mono text-[11px] font-medium text-foreground">
                    control plane
                  </p>
                  <p className="mt-0.5 font-mono text-[9px] text-muted">
                    scheduling · us-east-1
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col overflow-hidden rounded-lg border border-edge bg-surface">
              <div className="border-b border-edge px-4 py-2.5">
                <p className="font-mono text-[11px] text-muted">
                  live regions
                </p>
              </div>
              <div className="flex-1 divide-y divide-edge/60">
                {REGIONS.map((region) => (
                  <div
                    key={region.code}
                    className="flex items-center justify-between px-4 py-3"
                  >
                    <div>
                      <p className="text-sm text-foreground">{region.name}</p>
                      <p className="font-mono text-[10px] text-muted">
                        {region.code} · {region.servers} servers
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-16 overflow-hidden rounded-full bg-surface-2">
                        <div
                          className="h-full rounded-full bg-zinc-600"
                          style={{
                            width: `${Math.max(10, 100 - region.ping / 1.4)}%`,
                          }}
                        />
                      </div>
                      <span className="w-10 text-right font-mono text-[11px] tabular-nums text-foreground">
                        {region.ping}ms
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-edge px-4 py-3">
                <p className="font-mono text-[11px] leading-5 text-muted">
                  <span className="text-foreground">40</span> regions ·{" "}
                  <span className="text-foreground">6</span> continents
                  <br />
                  &lt;120ms for <span className="text-foreground">90%</span> of
                  the global player base
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
