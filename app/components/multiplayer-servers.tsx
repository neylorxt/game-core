"use client";

import { MapPin, Server as ServerIcon } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

type Server = {
  region: string;
  code: string;
  server: string;
  players: number;
  cap: number;
  ping: number;
  status: "online" | "full" | "draining";
};

const SERVERS: Server[] = [
  { region: "US East", code: "us-east-1", server: "us-17", players: 52, cap: 64, ping: 28, status: "online" },
  { region: "EU West", code: "eu-west-1", server: "eu-17", players: 61, cap: 64, ping: 24, status: "online" },
  { region: "Asia Pacific", code: "ap-southeast-1", server: "ap-09", players: 40, cap: 64, ping: 46, status: "online" },
  { region: "US West", code: "us-west-2", server: "us-31", players: 64, cap: 64, ping: 34, status: "full" },
  { region: "EU North", code: "eu-north-1", server: "eu-23", players: 12, cap: 64, ping: 31, status: "draining" },
  { region: "South America", code: "sa-east-1", server: "sa-04", players: 33, cap: 64, ping: 78, status: "online" },
  { region: "Middle East", code: "me-central-1", server: "me-02", players: 28, cap: 64, ping: 88, status: "online" },
  { region: "Africa", code: "af-south-1", server: "af-03", players: 19, cap: 64, ping: 112, status: "online" },
];

const STATUS_STYLE: Record<Server["status"], string> = {
  online: "text-emerald-500",
  full: "text-amber-500",
  draining: "text-muted",
};

export default function MultiplayerServers() {
  return (
    <section
      id="servers"
      className="scroll-mt-20 border-t border-edge py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="// multiplayer servers"
          title="A server fleet that scales itself."
          description="On-demand dedicated servers are allocated by matchmaking, spun up in under a minute and torn down when the session ends. You only pay for playtime."
        />

        <Reveal className="mt-12">
          <div className="mb-3 flex flex-wrap gap-3">
            {[
              ["128", "servers running"],
              ["8", "regions"],
              ["100%", "autoscaled"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="flex items-baseline gap-1.5 rounded-md border border-edge bg-surface px-3 py-2"
              >
                <span className="font-mono text-sm font-medium text-foreground">
                  {value}
                </span>
                <span className="font-mono text-[10px] text-muted">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-lg border border-edge bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-edge font-mono text-[10px] uppercase tracking-wide text-muted">
                    <th className="px-4 py-3 font-medium">Region</th>
                    <th className="px-4 py-3 font-medium">Server</th>
                    <th className="px-4 py-3 font-medium">Players</th>
                    <th className="px-4 py-3 font-medium">Ping</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {SERVERS.map((server) => (
                    <tr
                      key={server.server}
                      className="border-b border-edge/50 transition-colors last:border-0 hover:bg-surface-2"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <MapPin size={13} className="text-muted" />
                          <div>
                            <p className="text-sm text-foreground">
                              {server.region}
                            </p>
                            <p className="font-mono text-[10px] text-muted">
                              {server.code}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <ServerIcon size={13} className="text-muted" />
                          <span className="font-mono text-[11px] text-foreground">
                            {server.server}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="w-28">
                          <div className="flex items-baseline justify-between font-mono text-[11px]">
                            <span className="text-foreground">
                              {server.players}
                              <span className="text-muted">/{server.cap}</span>
                            </span>
                            <span className="text-[10px] text-muted">
                              {Math.round((server.players / server.cap) * 100)}%
                            </span>
                          </div>
                          <div className="mt-1 h-1 overflow-hidden rounded-full bg-surface-2">
                            <div
                              className={`h-full rounded-full ${
                                server.status === "full"
                                  ? "bg-amber-500"
                                  : "bg-zinc-600"
                              }`}
                              style={{
                                width: `${(server.players / server.cap) * 100}%`,
                              }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 font-mono text-[11px] text-foreground">
                        {server.ping}
                        <span className="text-muted">ms</span>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center gap-1.5 font-mono text-[11px] capitalize ${STATUS_STYLE[server.status]}`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              server.status === "online"
                                ? "bg-live"
                                : server.status === "full"
                                ? "bg-amber-500"
                                : "bg-zinc-500"
                            }`}
                          />
                          {server.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between border-t border-edge px-4 py-3 font-mono text-[10px] text-muted">
              <span>fleet status · synced 5s ago</span>
              <span>124 online · 3 full · 1 draining</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
