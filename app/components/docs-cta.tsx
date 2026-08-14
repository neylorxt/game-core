import { ArrowRight, BookOpen } from "lucide-react";
import { Reveal } from "./primitives";

export default function DocsCta() {
  return (
    <section
      id="docs"
      className="scroll-mt-20 border-t border-edge bg-surface/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="overflow-hidden rounded-xl border border-edge bg-surface">
            <div className="flex flex-col items-start justify-between gap-8 p-8 sm:p-10 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <p className="font-mono text-xs text-muted">
                  game-core <span className="text-foreground">/</span> docs
                  <span className="text-foreground">/</span> quickstart
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Ship your first match in 20 minutes.
                </h2>
                <p className="mt-4 text-base leading-7 text-muted">
                  Tutorials, API reference and engine guides for Unreal, Unity
                  and custom engines. Most teams go from empty project to a
                  live multiplayer lobby in one afternoon.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href="#docs"
                    className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-zinc-300"
                  >
                    <BookOpen size={16} />
                    Read Documentation
                  </a>
                  <a
                    href="#sdk"
                    className="inline-flex h-11 items-center gap-2 rounded-md border border-edge bg-surface-2 px-6 text-sm font-medium text-foreground transition-colors hover:border-zinc-600"
                  >
                    Browse SDKs
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>

              <div className="w-full shrink-0 rounded-lg border border-edge bg-background p-5 font-mono text-[12.5px] leading-6 lg:w-80">
                <p className="text-zinc-500">{"// 5 minutes in"}</p>
                <p className="text-muted">
                  <span className="text-foreground">$</span> gc init nebula
                  --template matchmaking
                </p>
                <p className="text-emerald-500">✓ project created</p>
                <p className="text-muted">
                  <span className="text-foreground">$</span> gc sdk install
                  unreal5.3
                </p>
                <p className="text-emerald-500">✓ sdk installed</p>
                <p className="text-muted">
                  <span className="text-foreground">$</span> gc deploy
                </p>
                <p className="text-emerald-500">✓ live at gc.nebula.game</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
