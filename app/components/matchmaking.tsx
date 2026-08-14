"use client";

import { ArrowDown, ArrowRight, Crosshair, Network, Timer, User } from "lucide-react";
import { Fragment } from "react";
import { Reveal, SectionHeading } from "./primitives";

const STEPS = [
  {
    icon: User,
    title: "Player",
    code: 'client.joinQueue("eu-west")',
    desc: "The game client requests a match.",
  },
  {
    icon: Timer,
    title: "Queue",
    code: "region=eu-west · mode=4v4",
    desc: "The player enters a queue keyed by region and game mode.",
  },
  {
    icon: Crosshair,
    title: "Matchmaking",
    code: "skill=1840 · delta<50",
    desc: "A scoring service pairs players by skill, ping and party size.",
  },
  {
    icon: Network,
    title: "Game Session",
    code: "server eu-17 · 16/64",
    desc: "The match is allocated a session and a dedicated server.",
  },
];

const CONNECTIONS = ["1s", "avg 812ms", "allocated"];

export default function Matchmaking() {
  return (
    <section
      id="matchmaking"
      className="scroll-mt-20 border-t border-edge py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="// matchmaking"
          title="From join to match in under a second."
          description="A stateless, horizontally scalable matchmaking pipeline. Queues are scoped by region and mode, then resolved by skill, ping and party constraints."
        />

        <Reveal className="mt-12">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-0">
            {STEPS.map((step, i) => (
              <Fragment key={step.title}>
                <div className="flex-1 rounded-lg border border-edge bg-surface p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-muted">
                      [0{i}]
                    </span>
                    <step.icon size={16} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-3 text-sm font-medium text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 font-mono text-[11px] text-emerald-500">
                    {step.code}
                  </p>
                  <p className="mt-2.5 text-[13px] leading-5 text-muted">
                    {step.desc}
                  </p>
                </div>
                {i < STEPS.length - 1 ? (
                  <div className="flex items-center justify-center gap-1.5 py-1 text-muted lg:mx-3 lg:flex-col lg:py-0">
                    <ArrowRight className="hidden lg:block" size={16} />
                    <ArrowDown className="lg:hidden" size={16} />
                    <span className="font-mono text-[10px]">
                      {CONNECTIONS[i]}
                    </span>
                  </div>
                ) : null}
              </Fragment>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 overflow-hidden rounded-lg border border-edge">
            <div className="flex items-center justify-between border-b border-edge bg-surface px-4 py-2.5">
              <span className="font-mono text-[11px] text-muted">
                matchmaker — eu-west
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-live" />
            </div>
            <div className="bg-surface/60 px-5 py-4 font-mono text-[12px] leading-6">
              <p className="text-muted">
                <span className="text-foreground">$</span> gc matchmake
                --region eu-west --mode 4v4
              </p>
              <p>
                <span className="text-zinc-600">›</span> queueing player_9f2c
                · skill 1840
              </p>
              <p>
                <span className="text-zinc-600">›</span> 204 match found in
                812ms
              </p>
              <p>
                <span className="text-zinc-600">›</span> session allocated ·
                server eu-17 · 16/64
              </p>
              <p className="text-emerald-500">
                <span className="text-emerald-600">✓</span> server ready in
                1.4s
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
