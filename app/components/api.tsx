"use client";

import { Reveal, SectionHeading } from "./primitives";

const ENDPOINTS = [
  { method: "POST", path: "/v1/players/authenticate", note: "sign in · 200" },
  { method: "GET", path: "/v1/players/{id}", note: "profile · 200" },
  { method: "POST", path: "/v1/matchmake/queue", note: "join queue · 202" },
  { method: "DELETE", path: "/v1/matchmake/queue", note: "leave queue · 204" },
  { method: "PUT", path: "/v1/saves/{slot}", note: "cloud save · 200" },
  { method: "GET", path: "/v1/leaderboards/{id}", note: "rankings · 200" },
  { method: "POST", path: "/v1/sessions", note: "open session · 201" },
];

type Seg = { text: string; cls?: string; badge?: boolean };

const REQUEST: Seg[][] = [
  [{ text: "// authenticate a player", cls: "text-zinc-500" }],
  [
    { text: "POST", badge: true },
    { text: " /v1/players/authenticate", cls: "text-emerald-400" },
  ],
  [
    { text: "Host:", cls: "text-zinc-500" },
    { text: " api.gamecore.dev", cls: "text-muted" },
  ],
  [
    { text: "X-Api-Key:", cls: "text-zinc-500" },
    { text: " gck_live_••••••", cls: "text-muted" },
  ],
  [
    { text: "Content-Type:", cls: "text-zinc-500" },
    { text: " application/json", cls: "text-muted" },
  ],
  [{ text: "{", cls: "text-zinc-500" }],
  [
    { text: '  "platform": ', cls: "text-muted" },
    { text: '"unreal"', cls: "text-emerald-400" },
    { text: ",", cls: "text-muted" },
  ],
  [
    { text: '  "external_token": ', cls: "text-muted" },
    { text: '"eyJhbGciOiJIUzI1NiIs…"', cls: "text-emerald-400" },
    { text: ",", cls: "text-muted" },
  ],
  [
    { text: '  "display_name": ', cls: "text-muted" },
    { text: '"kestrel"', cls: "text-emerald-400" },
  ],
  [{ text: "}", cls: "text-zinc-500" }],
  [{ text: "// → 200 OK", cls: "text-zinc-500" }],
  [{ text: "{", cls: "text-zinc-500" }],
  [
    { text: '  "player_id": ', cls: "text-muted" },
    { text: '"ply_8f2c41aa"', cls: "text-emerald-400" },
    { text: ",", cls: "text-muted" },
  ],
  [
    { text: '  "session_token": ', cls: "text-muted" },
    { text: '"sct_9c1d4f…"', cls: "text-emerald-400" },
    { text: ",", cls: "text-muted" },
  ],
  [
    { text: '  "features": [', cls: "text-muted" },
    { text: '"matchmaking"', cls: "text-emerald-400" },
    { text: ", ", cls: "text-muted" },
    { text: '"saves"', cls: "text-emerald-400" },
    { text: ", ", cls: "text-muted" },
    { text: '"leaderboards"', cls: "text-emerald-400" },
    { text: "]", cls: "text-muted" },
  ],
  [{ text: "}", cls: "text-zinc-500" }],
];

export default function Api() {
  return (
    <section
      id="api"
      className="scroll-mt-20 border-t border-edge py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="// api"
          title="A boring, fast, versioned REST API."
          description="Every service is a small set of idempotent endpoints behind one base URL. Batch endpoints, cursor pagination and strong ETags keep clients simple."
        />

        <div className="mt-12 grid gap-3 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="overflow-hidden rounded-lg border border-edge">
              <div className="flex items-center justify-between border-b border-edge bg-surface px-4 py-2.5">
                <span className="font-mono text-[11px] text-muted">
                  api.gamecore.dev — request
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
              </div>
              <pre className="overflow-x-auto bg-surface/60 px-5 py-4 font-mono text-[12.5px] leading-6">
                <code>
                  {REQUEST.map((line, i) => (
                    <span key={i} className="block whitespace-pre">
                      {line.map((seg, j) =>
                        seg.badge ? (
                          <span
                            key={j}
                            className="rounded bg-foreground px-1.5 font-medium text-background"
                          >
                            {seg.text}
                          </span>
                        ) : (
                          <span key={j} className={seg.cls}>
                            {seg.text}
                          </span>
                        )
                      )}
                    </span>
                  ))}
                </code>
              </pre>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col overflow-hidden rounded-lg border border-edge bg-surface">
              <div className="border-b border-edge px-4 py-2.5">
                <p className="font-mono text-[11px] text-muted">
                  commonly used endpoints
                </p>
              </div>
              <div className="flex-1 divide-y divide-edge/60 px-2 py-1">
                {ENDPOINTS.map((ep) => (
                  <div
                    key={`${ep.method}-${ep.path}`}
                    className="flex items-center gap-3 px-2 py-2.5"
                  >
                    <span
                      className={`w-16 shrink-0 rounded px-1.5 py-0.5 text-center font-mono text-[10px] font-medium ${
                        ep.method === "POST" || ep.method === "PUT"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-surface-2 text-muted"
                      }`}
                    >
                      {ep.method}
                    </span>
                    <span className="min-w-0 flex-1 truncate font-mono text-[11.5px] text-foreground">
                      {ep.path}
                    </span>
                    <span className="shrink-0 font-mono text-[10px] text-muted">
                      {ep.note}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-edge px-4 py-3">
                <p className="font-mono text-[11px] leading-5 text-muted">
                  <span className="text-emerald-500">99.95%</span> availability
                  · <span className="text-emerald-500">38ms</span> p50 latency
                  <br />
                  <span className="text-foreground">v1</span> stable ·{" "}
                  <span className="text-foreground">v2</span> in preview
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
