"use client";

import { Search, UserPlus } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

type Player = {
  name: string;
  id: string;
  platform: string;
  level: number;
  lastOnline: string;
  online: boolean;
};

const PLAYERS: Player[] = [
  { name: "kestrel", id: "ply_8f2c41aa", platform: "Unreal Engine", level: 74, lastOnline: "now", online: true },
  { name: "voidrunner", id: "ply_1a3b9d02", platform: "Unity", level: 61, lastOnline: "2m ago", online: true },
  { name: "orbit_9", id: "ply_c4d1e3f0", platform: "Web", level: 58, lastOnline: "9m ago", online: true },
  { name: "staticnova", id: "ply_77b2a5c6", platform: "Unreal Engine", level: 47, lastOnline: "14m ago", online: false },
  { name: "raven_02", id: "ply_90e4f8b1", platform: "iOS", level: 33, lastOnline: "31m ago", online: false },
  { name: "driftcode", id: "ply_5c0a9e77", platform: "Unity", level: 29, lastOnline: "1h ago", online: false },
  { name: "halcyon", id: "ply_b6f3d2a8", platform: "Android", level: 22, lastOnline: "3h ago", online: false },
  { name: "moonlet", id: "ply_e2a1c4d9", platform: "Custom C++", level: 18, lastOnline: "1d ago", online: false },
];

const platformShorthand = (platform: string) => {
  switch (platform) {
    case "Unreal Engine":
      return "UE5";
    case "Unity":
      return "Unity";
    case "Custom C++":
      return "C++";
    default:
      return platform;
  }
};

export default function PlayerManagement() {
  return (
    <section
      id="players"
      className="scroll-mt-20 border-t border-edge bg-surface/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="// player management"
          title="Every player, in one query."
          description="Search, moderate and export player records across every platform. Profile data is consistent no matter which engine the player is running."
        />

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-lg border border-edge bg-surface">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-edge px-4 py-3">
              <p className="text-sm font-medium text-foreground">
                Players
                <span className="ml-2 rounded bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] text-muted">
                  2,481 total
                </span>
              </p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 rounded-md border border-edge bg-surface-2 px-3 py-1.5">
                  <Search size={13} className="text-muted" />
                  <span className="font-mono text-[11px] text-muted">
                    search players…
                  </span>
                </div>
                <span className="inline-flex h-8 items-center gap-1.5 rounded-md bg-foreground px-3 font-mono text-[11px] text-background">
                  <UserPlus size={12} />
                  invite
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-edge font-mono text-[10px] uppercase tracking-wide text-muted">
                    <th className="px-4 py-3 font-medium">Username</th>
                    <th className="px-4 py-3 font-medium">Player ID</th>
                    <th className="px-4 py-3 font-medium">Platform</th>
                    <th className="px-4 py-3 font-medium">Level</th>
                    <th className="px-4 py-3 font-medium">Last Online</th>
                  </tr>
                </thead>
                <tbody>
                  {PLAYERS.map((player) => (
                    <tr
                      key={player.id}
                      className="border-b border-edge/50 transition-colors last:border-0 hover:bg-surface-2"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2.5">
                          <span className="grid h-6 w-6 place-items-center rounded bg-surface-2 font-mono text-[10px] uppercase text-muted">
                            {player.name[0]}
                          </span>
                          <span className="text-sm text-foreground">
                            {player.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 font-mono text-[11px] text-muted">
                        {player.id}
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex rounded border border-edge bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-foreground">
                          {platformShorthand(player.platform)}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-mono text-[11px] text-foreground">
                        {player.level}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`flex items-center gap-1.5 font-mono text-[11px] ${
                            player.online ? "text-emerald-500" : "text-muted"
                          }`}
                        >
                          {player.online ? (
                            <span className="h-1.5 w-1.5 rounded-full bg-live" />
                          ) : null}
                          {player.lastOnline}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between border-t border-edge px-4 py-3 font-mono text-[10px] text-muted">
              <span>showing 8 of 2,481</span>
              <span>← 1 / 311 →</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
