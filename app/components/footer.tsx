type FooterLink = { label: string; href: string };

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Core services", href: "#top" },
      { label: "Dashboard", href: "#top" },
      { label: "Matchmaking", href: "#top" },
      { label: "Pricing", href: "#top" },
      { label: "Changelog", href: "#top" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "#top" },
      { label: "API reference", href: "#top" },
      { label: "SDKs", href: "#top" },
      { label: "Status", href: "#top" },
      { label: "Discord", href: "#top" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#top" },
      { label: "Blog", href: "#top" },
      { label: "Careers", href: "#top" },
      { label: "Press", href: "#top" },
      { label: "Contact", href: "#top" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#top" },
      { label: "Terms", href: "#top" },
      { label: "Security", href: "#top" },
      { label: "DPA", href: "#top" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-edge bg-background">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-md border border-edge bg-surface font-mono text-[11px] font-semibold tracking-tight text-foreground">
                gc
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-foreground">
                GameCore
              </span>
            </div>
            <p className="mt-4 text-[13px] leading-6 text-muted">
              Managed backend infrastructure for multiplayer games. Built for
              Unreal Engine, Unity and custom engines.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-md border border-edge bg-surface px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-live" />
              <span className="font-mono text-[11px] text-muted">
                all systems operational
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-[13px] text-muted transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-edge pt-6 font-mono text-[11px] text-muted sm:flex-row sm:items-center">
          <p>© 2026 GameCore, Inc.</p>
          <p>v2.4.1 · made for game developers</p>
        </div>
      </div>
    </footer>
  );
}
