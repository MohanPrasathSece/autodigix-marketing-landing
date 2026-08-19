import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Cta } from "./parts";

const LINKS = [
  { label: "Webinar", href: "#webinar" },
  { label: "What You'll Learn", href: "#discover" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Opportunities", href: "#opportunities" },
  { label: "FAQ", href: "#faq" },
];

function Mark() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="relative grid size-7 place-items-center rounded-lg bg-primary">
        <span className="size-2.5 rounded-[3px] bg-primary-foreground" />
      </span>
      <span className="text-[15px] font-extrabold tracking-[-0.02em] text-navy">AUTODIGIX</span>
    </a>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        className={`mx-auto w-full max-w-[1180px] rounded-2xl border border-border/70 bg-background/75 backdrop-blur-xl transition-shadow duration-300 ${
          scrolled ? "shadow-[var(--shadow-soft)]" : ""
        }`}
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-2.5 sm:px-5">
          <div className="flex min-w-0 items-center gap-8">
            <Mark />
            <ul className="hidden items-center gap-6 lg:flex">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[13.5px] font-medium text-muted-foreground transition-colors hover:text-navy"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Cta size="sm" className="hidden sm:inline-flex" />
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="grid size-9 place-items-center rounded-lg border border-border text-navy lg:hidden"
            >
              {open ? <Menu className="size-4 hidden" /> : null}
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border/70 px-4 pb-4 pt-3 lg:hidden">
            <ul className="grid gap-1">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-2.5 text-sm font-medium text-navy/80 hover:bg-muted"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <Cta className="mt-3 w-full justify-center" size="sm" />
          </div>
        )}
      </nav>
    </header>
  );
}
