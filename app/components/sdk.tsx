"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Reveal, SectionHeading } from "./primitives";

const SDKS = [
  {
    id: "ue",
    name: "Unreal Engine",
    tag: "C++ · Blueprints",
    mono: "UE5",
    code: [
      { text: "$ gc plugin add GameCore --engine unreal5.3" },
      { text: "" },
      { text: "#include \"GameCore/Client.h\"" },
      { text: "auto* Client = FGameCoreModule::Get().CreateClient(\"nebula\");" },
      { text: "Client->Authenticate(GCPlatform::Epic, Token);" },
    ],
  },
  {
    id: "unity",
    name: "Unity",
    tag: "C# scripts",
    mono: "U",
    code: [
      { text: "$ gc package add GameCore --engine unity" },
      { text: "" },
      { text: "using GameCore;" },
      { text: "var client = GameCoreClient.Create(\"nebula\");" },
      { text: "await client.AuthenticateAsync(Platform.Epic, token);" },
    ],
  },
  {
    id: "cpp",
    name: "C++",
    tag: "native",
    mono: "C++",
    code: [
      { text: "$ gc sdk install cpp" },
      { text: "" },
      { text: "#include <gamecore/client.hpp>" },
      { text: "auto client = gamecore::Client::create(\"nebula\");" },
      { text: "client->authenticate(gamecore::Platform::Steam, token);" },
    ],
  },
  {
    id: "cs",
    name: "C#",
    tag: ".NET 8",
    mono: "C#",
    code: [
      { text: "$ gc sdk install csharp" },
      { text: "" },
      { text: "using GameCore;" },
      { text: "var client = GameCoreClient.Create(\"nebula\");" },
      { text: "await client.AuthenticateAsync(Platform.Steam, token);" },
    ],
  },
  {
    id: "ts",
    name: "TypeScript",
    tag: "node · browsers",
    mono: "TS",
    code: [
      { text: "$ npm install @gamecore/sdk" },
      { text: "" },
      { text: "import { GameCoreClient } from \"@gamecore/sdk\";" },
      { text: "const client = new GameCoreClient({ titleId: \"nebula\" });" },
      { text: "await client.authenticate({ platform: \"steam\", token });" },
    ],
  },
];

export default function Sdk() {
  const [active, setActive] = useState(0);
  const sdk = SDKS[active];

  return (
    <section
      id="sdk"
      className="scroll-mt-20 border-t border-edge bg-surface/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="// sdk"
          title="One SDK for every engine you ship."
          description="Native bindings with the same API surface everywhere. Feature flags keep clients in sync even when you release on three engines at once."
        />

        <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {SDKS.map((item, i) => {
            const selected = i === active;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-lg border p-4 text-left transition-colors ${
                  selected
                    ? "border-foreground bg-surface-2"
                    : "border-edge bg-surface hover:border-zinc-600"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-8 w-8 place-items-center rounded-md border border-edge bg-surface font-mono text-[11px] font-semibold text-foreground">
                    {item.mono}
                  </span>
                  {selected ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-live" />
                  ) : null}
                </div>
                <p className="mt-3 text-sm font-medium text-foreground">
                  {item.name}
                </p>
                <p className="mt-0.5 font-mono text-[10px] text-muted">
                  {item.tag}
                </p>
              </button>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-3 overflow-hidden rounded-lg border border-edge">
            <div className="flex items-center justify-between border-b border-edge bg-surface px-4 py-2.5">
              <span className="font-mono text-[11px] text-muted">
                sdk — {sdk.name.toLowerCase()}
              </span>
              <span className="font-mono text-[10px] text-muted">
                v2.4.1
              </span>
            </div>
            <div className="bg-surface/60 px-5 py-4">
              <motion.div
                key={sdk.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                {sdk.code.map((line, i) => (
                  <p
                    key={i}
                    className={`whitespace-pre-wrap break-all font-mono text-[12.5px] leading-6 ${
                      line.text.startsWith("$")
                        ? "text-foreground"
                        : line.text.includes("#") || line.text.includes("using")
                        ? "text-zinc-500"
                        : line.text.trim() === ""
                        ? "text-muted"
                        : "text-muted"
                    }`}
                  >
                    {line.text}
                  </p>
                ))}
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
