"use client";

import {
  Activity,
  ArrowRight,
  BarChart3,
  Boxes,
  Cpu,
  Database,
  GitBranch,
  LayoutDashboard,
  Settings2,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { Counter, Eyebrow } from "./primitives";
import { areaPath, smoothPath } from "./chart-utils";

const SIDEBAR_ITEMS = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Players", icon: Users, active: false },
  { label: "Matchmaking", icon: GitBranch, active: false },
  { label: "Sessions", icon: Activity, active: false },
  { label: "Analytics", icon: BarChart3, active: false },
  { label: "Servers", icon: Cpu, active: false },
  { label: "Settings", icon: Settings2, active: false },
];

const STATS = [
  {
    label: "Active Players",
    value: 12482,
    decimals: 0,
    suffix: "",
    delta: "+12.4%",
    good: true,
  },
  {
    label: "Concurrent Sessions",
    value: 3249,
    decimals: 0,
    suffix: "",
    delta: "+8.1%",
    good: true,
  },
  {
    label: "API Requests",
    value: 2.8,
    decimals: 1,
    suffix: "M",
    delta: "+21.3%",
    good: true,
  },
  {
    label: "Avg Latency",
    value: 38,
    decimals: 0,
    suffix: "ms",
    delta: "−4ms",
    good: true,
  },
];

const QUEUE = [
  { user: "kestrel", mode: "4v4 · eu-west", elo: "1840", wait: "1.2s" },
  { user: "voidrunner", mode: "4v4 · eu-west", elo: "1795", wait: "2.4s" },
  { user: "orbit_9", mode: "4v4 · eu-west", elo: "1910", wait: "3.0s" },
];

const LOG = [
  { t: "14:32:07", msg: "match_ok", note: "eu-west · 4v4 · 0.8s" },
  { t: "14:32:05", msg: "join", note: "player_9f2c → queue" },
  { t: "14:31:58", msg: "deploy", note: "server eu-17 · ok" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-32 sm:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Eyebrow label="// managed backend · zero ops · scale on demand" />
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
              Backend infrastructure built for multiplayer games.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Authentication, matchmaking, dedicated servers, cloud saves and
              analytics — all behind one REST API and SDK. Ship multiplayer to
              Unreal Engine, Unity or your own engine without building
              infrastructure.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#pricing"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-zinc-300"
              >
                Start Building
                <ArrowRight size={16} />
              </a>
              <a
                href="#docs"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-edge bg-surface px-6 text-sm font-medium text-foreground transition-colors hover:border-zinc-600 hover:bg-surface-2"
              >
                Read Documentation
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs text-muted">
              <span>
                <span className="text-foreground">120+</span> games shipped
              </span>
              <span>
                <span className="text-foreground">40</span> regions
              </span>
              <span>
                <span className="text-foreground">99.99%</span> uptime
              </span>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="hidden lg:block"
          >
            <SidebarCard />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="mt-16"
        >
          <DashboardWindow />
        </motion.div>
      </div>
    </section>
  );
}

function SidebarCard() {
  return (
    <div className="rounded-xl border border-edge bg-surface">
      <div className="border-b border-edge px-5 py-4">
        <p className="font-mono text-[11px] text-muted">project</p>
        <p className="mt-0.5 text-sm font-medium text-foreground">
          nebula-production
        </p>
      </div>
      <div className="px-3 py-3">
        {SIDEBAR_ITEMS.map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-sm ${
              item.active
                ? "bg-foreground/10 text-foreground"
                : "text-muted"
            }`}
          >
            <item.icon size={15} strokeWidth={1.75} />
            {item.label}
            {item.active ? (
              <span className="ml-auto h-1.5 w-1.5 rounded-full bg-foreground" />
            ) : null}
          </div>
        ))}
      </div>
      <div className="border-t border-edge px-5 py-3">
        <div className="flex items-center justify-between font-mono text-[11px] text-muted">
          <span>prod</span>
          <span className="text-foreground">v2.4.1</span>
        </div>
      </div>
    </div>
  );
}

function DashboardWindow() {
  return (
    <div className="overflow-hidden rounded-xl border border-edge shadow-2xl shadow-black/40">
      {/* chrome */}
      <div className="relative flex h-9 items-center border-b border-zinc-200 bg-zinc-50 px-4">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-zinc-300" />
          <span className="h-3 w-3 rounded-full bg-zinc-300" />
          <span className="h-3 w-3 rounded-full bg-zinc-300" />
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center font-mono text-[11px] text-zinc-500">
          game-core — nebula · production
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-live" />
          <span className="font-mono text-[10px] font-medium tracking-tight text-zinc-600">
            LIVE
          </span>
        </div>
      </div>

      {/* body: light surface */}
      <div className="flex bg-white text-zinc-900">
        <aside className="hidden w-44 shrink-0 border-r border-zinc-200 bg-zinc-950 sm:block">
          <div className="flex items-center gap-2 px-4 py-3.5">
            <Boxes size={14} className="text-zinc-400" />
            <span className="font-mono text-[11px] text-zinc-400">
              gc_console
            </span>
          </div>
          <nav className="px-2.5">
            {SIDEBAR_ITEMS.map((item) => (
              <div
                key={item.label}
                className={`mb-0.5 flex items-center gap-2.5 rounded-md px-3 py-2 font-mono text-[11px] ${
                  item.active
                    ? "bg-zinc-800 text-zinc-100"
                    : "text-zinc-500"
                }`}
              >
                <item.icon size={13} strokeWidth={1.75} />
                {item.label}
              </div>
            ))}
          </nav>
          <div className="mt-4 border-t border-zinc-800 px-4 py-3">
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-500">
              <Database size={11} />
              us-east-1 · healthy
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold tracking-tight">
                  Overview
                </h3>
                <span className="rounded border border-zinc-200 px-1.5 py-0.5 font-mono text-[10px] text-zinc-500">
                  nebula
                </span>
              </div>
              <p className="mt-0.5 font-mono text-[11px] text-zinc-500">
                live overview · updated 2s ago
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden rounded-md border border-zinc-200 px-3 py-1.5 font-mono text-[11px] text-zinc-600 sm:inline-flex">
                invite
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900 px-3 py-1.5 font-mono text-[11px] text-white">
                <GitBranch size={12} />
                deploy
              </span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-zinc-200 p-3.5"
              >
                <p className="font-mono text-[10px] uppercase tracking-wide text-zinc-500">
                  {stat.label}
                </p>
                <p className="mt-1.5 font-mono text-xl font-medium tabular-nums tracking-tight text-zinc-900 sm:text-2xl">
                  <Counter
                    value={stat.value}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                  />
                </p>
                <p
                  className={`mt-1 font-mono text-[10px] ${
                    stat.good ? "text-emerald-600" : "text-zinc-500"
                  }`}
                >
                  {stat.delta}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-3">
            <div className="rounded-lg border border-zinc-200 p-4 lg:col-span-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-zinc-900">
                  Concurrent sessions
                </p>
                <p className="font-mono text-[10px] text-zinc-500">last 24h</p>
              </div>
              <PlayersChart />
            </div>

            <div className="flex flex-col gap-3">
              <div className="rounded-lg border border-zinc-200 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-zinc-900">
                    Match queue
                  </p>
                  <span className="flex items-center gap-1 font-mono text-[10px] text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-live" />
                    open
                  </span>
                </div>
                <div className="mt-3 space-y-2">
                  {QUEUE.map((q) => (
                    <div
                      key={q.user}
                      className="flex items-center justify-between border-b border-zinc-100 pb-2 last:border-0"
                    >
                      <div>
                        <p className="font-mono text-[11px] font-medium text-zinc-900">
                          {q.user}
                        </p>
                        <p className="font-mono text-[10px] text-zinc-500">
                          {q.mode} · elo {q.elo}
                        </p>
                      </div>
                      <span className="font-mono text-[10px] text-zinc-400">
                        {q.wait}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 rounded bg-zinc-50 px-2 py-1.5 text-center font-mono text-[10px] text-zinc-500">
                  +1,204 in queue
                </p>
              </div>

              <div className="flex-1 rounded-lg border border-zinc-200 p-4">
                <p className="text-sm font-medium text-zinc-900">
                  Recent activity
                </p>
                <div className="mt-3 space-y-1.5">
                  {LOG.map((entry) => (
                    <p
                      key={entry.t}
                      className="flex justify-between gap-2 font-mono text-[10px] text-zinc-500"
                    >
                      <span>
                        <span className="text-zinc-400">{entry.t}</span>{" "}
                        <span className="text-zinc-700">{entry.msg}</span>
                      </span>
                      <span className="truncate">{entry.note}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function PlayersChart() {
  const data: [number, number][] = [
    [40, 138],
    [88, 129],
    [136, 134],
    [184, 117],
    [232, 122],
    [280, 106],
    [328, 111],
    [376, 94],
    [424, 82],
    [472, 68],
    [520, 74],
    [568, 56],
    [624, 52],
  ];
  const prev = data.map(([x, y]) => [x, y + 22] as [number, number]);
  const line = smoothPath(data);
  const prevLine = smoothPath(prev);
  const fill = areaPath(data, 180);

  return (
    <div className="mt-3">
      <div className="mb-2 flex items-center gap-4 font-mono text-[10px] text-zinc-500">
        <span className="flex items-center gap-1.5">
          <span className="h-0.5 w-4 rounded-full bg-zinc-900" />
          today
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-0 w-4 border-t border-dashed border-zinc-400" />
          yesterday
        </span>
      </div>
      <svg
        viewBox="0 0 640 224"
        className="h-auto w-full"
        role="img"
        aria-label="Concurrent sessions chart over the last 24 hours"
      >
        {[
          { y: 180, label: "0" },
          { y: 140, label: "4k" },
          { y: 100, label: "8k" },
          { y: 60, label: "12k" },
          { y: 20, label: "16k" },
        ].map((row) => (
          <g key={row.y}>
            <line
              x1="40"
              x2="624"
              y1={row.y}
              y2={row.y}
              stroke="#e4e4e7"
              strokeWidth="1"
            />
            <text
              x="32"
              y={row.y + 3}
              textAnchor="end"
              className="fill-zinc-400"
              fontSize="9"
            >
              {row.label}
            </text>
          </g>
        ))}

        {[186, 332, 478].map((x) => (
          <line
            key={x}
            x1={x}
            x2={x}
            y1="20"
            y2="180"
            stroke="#f4f4f5"
            strokeWidth="1"
          />
        ))}

        <line
          x1="40"
          x2="624"
          y1="90"
          y2="90"
          stroke="#a1a1aa"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <text x="360" y="86" textAnchor="middle" className="fill-zinc-400" fontSize="9">
          capacity 9k
        </text>

        <path
          d={prevLine}
          fill="none"
          stroke="#a1a1aa"
          strokeWidth="1.25"
          strokeDasharray="4 4"
        />
        <path d={fill} fill="#18181b" fillOpacity="0.06" />
        <path
          d={line}
          fill="none"
          stroke="#18181b"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle cx="624" cy="52" r="3.5" fill="#18181b" />
        <circle cx="624" cy="52" r="7" fill="#18181b" fillOpacity="0.15" />
        <text
          x="612"
          y="42"
          textAnchor="end"
          className="fill-zinc-500"
          fontSize="9"
        >
          now · 12.8k
        </text>

        {[
          { x: 40, label: "00:00", anchor: "start" },
          { x: 186, label: "06:00", anchor: "middle" },
          { x: 332, label: "12:00", anchor: "middle" },
          { x: 478, label: "18:00", anchor: "middle" },
          { x: 624, label: "24:00", anchor: "end" },
        ].map((row) => (
          <text
            key={row.x}
            x={row.x}
            y="198"
            textAnchor={row.anchor as "start" | "middle" | "end"}
            className="fill-zinc-400"
            fontSize="9"
          >
            {row.label}
          </text>
        ))}
      </svg>
    </div>
  );
}
