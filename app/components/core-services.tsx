"use client";

import {
  Award,
  BarChart3,
  Cloud,
  Crosshair,
  KeyRound,
  Network,
  Package,
  Trophy,
  User,
  UserPlus,
} from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

const SERVICES = [
  {
    name: "Authentication",
    api: "POST /auth",
    icon: KeyRound,
    description:
      "Sign in with platform accounts, device IDs or email. Token-based sessions with automatic refresh and one-click migration.",
  },
  {
    name: "Player profiles",
    api: "GET /players",
    icon: User,
    description:
      "Persistent profiles with display names, preferences and progression that follow players across every platform and device.",
  },
  {
    name: "Matchmaking",
    api: "POST /matchmake",
    icon: Crosshair,
    description:
      "Skill-based and region-aware queues that build fair, balanced matches in well under a second.",
  },
  {
    name: "Leaderboards",
    api: "GET /leaderboards",
    icon: Trophy,
    description:
      "Seasonal and lifetime rankings with percentile buckets, tier roll-ups and live position updates.",
  },
  {
    name: "Achievements",
    api: "POST /achievements/unlock",
    icon: Award,
    description:
      "Schema-defined achievements with unlock events, progress tracking and in-game player notifications.",
  },
  {
    name: "Player statistics",
    api: "GET /stats",
    icon: BarChart3,
    description:
      "Aggregate kills, wins, accuracy and custom events per player, per match and per session.",
  },
  {
    name: "Cloud saves",
    api: "PUT /saves",
    icon: Cloud,
    description:
      "Versioned save data synced across devices with conflict resolution and full restore history.",
  },
  {
    name: "Inventory",
    api: "GET /inventory",
    icon: Package,
    description:
      "Item grants, currency and trades backed by a virtual economy ledger with a complete audit trail.",
  },
  {
    name: "Friends",
    api: "GET /friends",
    icon: UserPlus,
    description:
      "Friend lists, presence, invites and social features built in — no separate social service to wire up.",
  },
  {
    name: "Multiplayer sessions",
    api: "POST /sessions",
    icon: Network,
    description:
      "Stateful game sessions with lobby lifecycle, player slots and automatic host migration.",
  },
];

export default function CoreServices() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-edge py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="// core services"
          title="Everything a multiplayer game needs, in one API."
          description="Ten managed services cover the full lifecycle of a player session. Integrate what you need now, switch on the rest when you ship."
        />
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SERVICES.map((service, i) => (
            <Reveal key={service.name} delay={Math.min(i % 5, 4) * 0.05}>
              <div className="group flex h-full flex-col rounded-lg border border-edge bg-surface p-4 transition-colors hover:border-zinc-600">
                <div className="flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-md border border-edge bg-surface-2 text-foreground transition-colors group-hover:border-zinc-600">
                    <service.icon size={16} strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-[10px] text-muted">
                    {service.api}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-medium text-foreground">
                  {service.name}
                </h3>
                <p className="mt-1.5 text-[13px] leading-5 text-muted">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
