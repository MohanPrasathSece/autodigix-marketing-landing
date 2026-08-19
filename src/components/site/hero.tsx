import { CalendarDays, Clock, Radio } from "lucide-react";

import shuttle from "@/assets/shuttle-hero.png";

import { Cta, Label, Shell } from "./parts";
import { Reveal } from "./reveal";

const DETAILS = [
  { icon: CalendarDays, text: "29 August 2026" },
  { icon: Clock, text: "6:00 PM" },
  { icon: Radio, text: "Live Online" },
];

export function Hero() {
  return (
    <section id="top" className="atmos relative overflow-hidden pb-24 pt-32 sm:pt-40">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_20%,black,transparent)]" />
      <div className="pointer-events-none absolute -left-40 top-24 size-[520px] rounded-full bg-[radial-gradient(circle,oklch(0.62_0.19_259/0.16),transparent_65%)] blur-2xl" />
      <div className="pointer-events-none absolute -right-32 top-0 size-[560px] rounded-full bg-[radial-gradient(circle,oklch(0.58_0.22_262/0.14),transparent_65%)] blur-2xl" />

      <Shell className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <Label>AutoDigix Digital Marketing Webinar</Label>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-[2.4rem] font-extrabold leading-[1.03] text-navy sm:text-6xl lg:text-[4.1rem]">
                Your competition is learning AI + digital marketing.
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
                What are you waiting for?
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
                Discover the skills shaping careers, businesses &amp; opportunities.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="panel flex items-center gap-4 rounded-2xl px-5 py-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      Live Online Webinar
                    </p>
                    <p className="text-2xl font-extrabold tracking-tight text-navy">₹39/-</p>
                  </div>
                  <span className="h-9 w-px bg-border" />
                  <span className="text-xs font-medium text-muted-foreground">Limited seats</span>
                </div>
                <Cta size="lg" />
              </div>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-4 text-[13px] font-medium text-muted-foreground">
                Live Online • Expert-Led • Limited Seats
              </p>
            </Reveal>

            <Reveal delay={380}>
              <ul className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
                {DETAILS.map((d) => (
                  <li key={d.text} className="flex items-center gap-2 text-sm font-semibold text-navy">
                    <d.icon className="size-4 text-primary" strokeWidth={1.6} />
                    {d.text}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={440}>
              <div className="mt-8 rounded-2xl border border-primary/15 bg-[oklch(0.975_0.012_255)] px-5 py-4">
                <p className="text-sm font-medium text-navy/80">
                  One session. A complete view of the digital marketing ecosystem.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_60%_45%,oklch(0.62_0.19_259/0.18),transparent_62%)] blur-xl" />
            <svg
              viewBox="0 0 500 500"
              className="pointer-events-none absolute inset-0 -z-10 size-full opacity-70"
              aria-hidden
            >
              <circle cx="250" cy="250" r="180" fill="none" stroke="oklch(0.58 0.22 262 / 0.16)" />
              <circle cx="250" cy="250" r="230" fill="none" stroke="oklch(0.58 0.22 262 / 0.1)" />
              <circle cx="430" cy="250" r="3.5" fill="oklch(0.58 0.22 262 / 0.5)" />
              <circle cx="70" cy="250" r="2.5" fill="oklch(0.58 0.22 262 / 0.35)" />
            </svg>
            <img
              src={shuttle}
              alt="Futuristic space shuttle launching upward, symbolising career growth"
              width={1280}
              height={1280}
              className="float-soft mx-auto w-[86%] max-w-[520px] drop-shadow-[0_40px_60px_oklch(0.58_0.22_262/0.22)]"
            />
          </Reveal>
        </div>
      </Shell>
    </section>
  );
}
