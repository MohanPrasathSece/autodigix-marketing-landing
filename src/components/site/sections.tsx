import {
  Bot,
  Briefcase,
  Building2,
  CalendarDays,
  Camera,
  Clock,
  Globe,
  GraduationCap,
  LineChart,
  Megaphone,
  Minus,
  PenLine,
  Plus,
  Radio,
  Repeat,
  Rocket,
  Search,
  Share2,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import { useState } from "react";

import shuttle from "@/assets/shuttle-hero.png";

import { Cta, Label, Shell } from "./parts";
import { Reveal } from "./reveal";

/* 03 — THE DIGITAL SHIFT */
const KEYWORDS = [
  { icon: PenLine, label: "Content" },
  { icon: Search, label: "SEO" },
  { icon: Share2, label: "Social" },
  { icon: Megaphone, label: "Ads" },
  { icon: Workflow, label: "Automation" },
  { icon: Sparkles, label: "AI" },
];

export function DigitalShift() {
  return (
    <section className="py-24 sm:py-32">
      <Shell>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Label>The Digital Shift</Label>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.1] text-navy sm:text-5xl">
            Don't wait until you need the skill to start learning it.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground">
            Digital marketing has quietly become the operating language of modern work. Students,
            professionals, business owners, freelancers, creators and career switchers are all
            competing in the same attention economy — and the people who understand how it works are
            the ones who get chosen.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {KEYWORDS.map((k) => (
              <li
                key={k.label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-tint-2 px-4 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-background hover:shadow-[var(--shadow-soft)]"
              >
                <k.icon className="size-5 text-primary" strokeWidth={1.5} />
                <span className="text-sm font-semibold text-navy">{k.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Shell>
    </section>
  );
}

/* 04 — WEBINAR OVERVIEW */
const CHAIN = ["Content", "Social Media", "SEO", "Paid Ads", "Websites", "Automation", "AI"];

export function Overview() {
  return (
    <section id="webinar" className="py-24 sm:py-28">
      <Shell>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Label>Webinar Overview</Label>
            <h2 className="mt-5 text-3xl font-extrabold leading-[1.08] text-navy sm:text-[2.75rem]">
              What if you could see the entire digital marketing landscape in one session?
            </h2>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-muted-foreground">
              Instead of learning random tools one by one, we'll help you understand the bigger
              picture — how every channel feeds the next, and where your effort actually compounds.
            </p>
            <Cta className="mt-8" />
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-primary/12 bg-[linear-gradient(180deg,oklch(0.975_0.012_255),#ffffff)] p-8 shadow-[var(--shadow-soft)] sm:p-10">
              <ol className="relative grid gap-3">
                {CHAIN.map((c, i) => (
                  <li key={c} className="relative flex items-center gap-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-primary/20 bg-background text-[11px] font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold tracking-tight text-navy">
                      {c.toUpperCase()}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-8 border-t border-border pt-6 text-sm font-medium text-navy/75">
                Understand what to learn — and why you need to learn it.
              </p>
            </div>
          </Reveal>
        </div>
      </Shell>
    </section>
  );
}

/* 05 — WHAT YOU'LL DISCOVER */
const DISCOVER = [
  "What digital marketing actually is",
  "How businesses use digital channels to grow",
  "The major areas of digital marketing",
  "Which skills are worth learning",
  "How SEO and Google Ads work",
  "How social media marketing works",
  "How content and video fit into marketing",
  "How websites and landing pages generate conversions",
  "How automation can save time and improve lead flow",
  "How AI is changing marketing",
  "What career and business opportunities exist",
  "What a complete digital marketing learning roadmap looks like",
];

export function Discover() {
  return (
    <section id="discover" className="bg-tint py-24 sm:py-32">
      <Shell>
        <Reveal className="max-w-2xl">
          <Label>What You'll Discover</Label>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.08] text-navy sm:text-[2.75rem]">
            In this webinar, you'll discover
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-x-10 gap-y-1 md:grid-cols-2">
          {DISCOVER.map((d, i) => (
            <Reveal as="li" key={d} delay={(i % 2) * 60}>
              <div className="flex items-start gap-5 border-b border-border/80 py-5">
                <span className="mt-0.5 text-[13px] font-bold tabular-nums text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15.5px] font-medium leading-relaxed text-navy/85">{d}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Shell>
    </section>
  );
}

/* 06 — ROADMAP */
type RoadSection = {
  n: string;
  category: string;
  title: string;
  topics: string[];
  icon: typeof Rocket;
};

const ROADMAP: RoadSection[] = [
  {
    n: "01",
    category: "Fundamentals",
    title: "Build your digital marketing foundation.",
    icon: Rocket,
    topics: [
      "Intro to Digital Marketing",
      "Canva & Graphic Design",
      "Video Editing & Reels",
      "Content & Copywriting",
      "Website & Landing Pages",
    ],
  },
  {
    n: "02",
    category: "Social Media Marketing",
    title: "Turn attention into engagement.",
    icon: Share2,
    topics: [
      "Facebook & Instagram",
      "LinkedIn & YouTube",
      "Twitter & Snapchat",
      "Content Automation",
      "Social Media SEO",
    ],
  },
  {
    n: "03",
    category: "SEO & Google Ads",
    title: "Get found when people are searching.",
    icon: Search,
    topics: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Off-Page SEO",
      "International SEO",
      "AEO",
      "GEO",
      "Local SEO",
      "Google Search Ads",
      "Display Ads",
      "Shopping Ads",
    ],
  },
  {
    n: "04",
    category: "Industry Expert",
    title: "Build systems. Not just campaigns.",
    icon: Workflow,
    topics: [
      "Zapier Automation",
      "CRM & Lead Flow Setup",
      "WhatsApp Automation & Chatbots",
      "Analytics",
      "Google Tag Manager",
      "Email Marketing",
    ],
  },
  {
    n: "05",
    category: "Personal Growth & Career",
    title: "Turn skills into opportunities.",
    icon: GraduationCap,
    topics: [
      "Influencer & Affiliate Marketing",
      "Personal Branding",
      "Career Pathway & Portfolio",
      "Soft Skills & Aptitude",
      "Resume Building",
      "Mock Interviews",
    ],
  },
  {
    n: "06",
    category: "A.I. Mastery",
    title: "The next generation of marketing is AI-powered.",
    icon: Bot,
    topics: [
      "AI-Powered Content Creation",
      "AI for SEO & Paid Ads",
      "AI Agents & Chat Marketing",
      "AI for Email & Personalization",
      "Ethical AI & Future Trends",
    ],
  },
  {
    n: "07",
    category: "Industry Leader",
    title: "Go from marketer to growth builder.",
    icon: Building2,
    topics: [
      "Funnel Building & Media Buying",
      "Freelancing & Client Acquisition",
      "Agency Setup",
      "Team & SOPs",
      "Campaign Management",
      "Scaling",
    ],
  },
];

function TopicPills({ topics, tone = "light" }: { topics: string[]; tone?: "light" | "dark" }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {topics.map((t) => (
        <li
          key={t}
          className={
            tone === "dark"
              ? "rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1.5 text-[13px] font-medium text-primary-foreground/90"
              : "rounded-lg border border-border bg-tint-2 px-3 py-1.5 text-[13px] font-medium text-navy/75"
          }
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function RoadCard({ s, variant }: { s: RoadSection; variant: "wide" | "half" | "feature" }) {
  const dark = variant === "feature";
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[2rem] border p-8 transition-all duration-500 sm:p-10",
        dark
          ? "border-primary/40 bg-[linear-gradient(135deg,oklch(0.5_0.19_262),oklch(0.62_0.19_259))] text-primary-foreground shadow-[var(--shadow-glow)]"
          : "border-border bg-background shadow-[var(--shadow-soft)] hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]",
        variant === "wide" ? "lg:grid lg:grid-cols-[auto_1fr] lg:items-start lg:gap-10" : "",
      ].join(" ")}
    >
      <div className={variant === "wide" ? "" : "flex items-start justify-between gap-6"}>
        <span
          className={[
            "block text-[3.25rem] font-extrabold leading-none tracking-tight sm:text-[4rem]",
            dark ? "text-primary-foreground/35" : "text-primary/15",
          ].join(" ")}
        >
          {s.n}
        </span>
        <s.icon
          className={dark ? "size-6 text-primary-foreground/80" : "size-6 text-primary"}
          strokeWidth={1.5}
        />
      </div>
      <div className={variant === "wide" ? "mt-6 lg:mt-0" : "mt-6"}>
        <p
          className={[
            "text-[11px] font-bold uppercase tracking-[0.18em]",
            dark ? "text-primary-foreground/75" : "text-primary",
          ].join(" ")}
        >
          {s.category}
        </p>
        <h3
          className={[
            "mt-3 max-w-lg text-2xl font-extrabold leading-tight tracking-tight sm:text-[1.75rem]",
            dark ? "text-primary-foreground" : "text-navy",
          ].join(" ")}
        >
          {s.title}
        </h3>
        <TopicPills topics={s.topics} tone={dark ? "dark" : "light"} />
        {dark && (
          <p className="mt-8 inline-flex rounded-xl bg-primary-foreground/12 px-4 py-2.5 text-sm font-bold uppercase tracking-[0.12em] text-primary-foreground">
            Marketing thinking + AI power
          </p>
        )}
      </div>
    </div>
  );
}

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 sm:py-32">
      <Shell>
        <Reveal className="max-w-3xl">
          <Label>The 7-Section Roadmap</Label>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.08] text-navy sm:text-[3rem]">
            A curriculum that mirrors a real marketing career
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            Digital marketing isn't one skill. It's an ecosystem of interconnected skills.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5">
          <Reveal>
            <RoadCard s={ROADMAP[0]} variant="wide" />
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              <RoadCard s={ROADMAP[1]} variant="half" />
            </Reveal>
            <Reveal delay={80}>
              <RoadCard s={ROADMAP[2]} variant="half" />
            </Reveal>
          </div>
          <Reveal>
            <RoadCard s={ROADMAP[3]} variant="wide" />
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              <RoadCard s={ROADMAP[4]} variant="half" />
            </Reveal>
            <Reveal delay={80}>
              <RoadCard s={ROADMAP[5]} variant="feature" />
            </Reveal>
          </div>
          <Reveal>
            <RoadCard s={ROADMAP[6]} variant="wide" />
          </Reveal>
        </div>
      </Shell>
    </section>
  );
}

/* 07 — BIG PICTURE */
const PATHS = [
  {
    title: "Career",
    icon: Briefcase,
    tone: "bg-tint",
    items: [
      "Digital Marketing Executive",
      "SEO Specialist",
      "Social Media Marketer",
      "Performance Marketer",
      "Content Marketer",
      "Paid Ads Specialist",
      "Marketing Automation Specialist",
      "AI Marketing Specialist",
    ],
  },
  {
    title: "Freelancing",
    icon: PenLine,
    tone: "bg-sky",
    items: [
      "SEO Services",
      "Social Media Management",
      "Content Creation",
      "Paid Advertising",
      "Website & Landing Pages",
      "Marketing Automation",
      "AI Marketing Services",
    ],
  },
  {
    title: "Business",
    icon: LineChart,
    tone: "bg-tint-2",
    items: [
      "Lead Generation",
      "Customer Acquisition",
      "Personal Branding",
      "Marketing Automation",
      "Conversion Optimization",
    ],
  },
  {
    title: "Agency",
    icon: Building2,
    tone: "bg-[oklch(0.94_0.03_250)]",
    items: [
      "Client Acquisition",
      "Service Delivery",
      "Team Building",
      "SOPs",
      "Campaign Management",
      "Scaling",
    ],
  },
];

export function BigPicture() {
  return (
    <section id="opportunities" className="py-24 sm:py-32">
      <Shell>
        <Reveal className="max-w-3xl">
          <Label>The Big Picture</Label>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.08] text-navy sm:text-[3rem]">
            One course. Multiple digital marketing paths.
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            When you understand the complete ecosystem, you stop guessing. You can choose the
            direction that fits your ambition — and switch lanes as the market moves.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {PATHS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 80}>
              <div
                className={`h-full rounded-[2rem] border border-border ${p.tone} p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:p-10`}
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl border border-primary/20 bg-background">
                    <p.icon className="size-5 text-primary" strokeWidth={1.5} />
                  </span>
                  <h3 className="text-xl font-extrabold uppercase tracking-tight text-navy">
                    {p.title}
                  </h3>
                </div>
                <ul className="mt-7 grid gap-2.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-[15px] text-navy/75">
                      <span className="size-1.5 shrink-0 rounded-full bg-primary/60" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Shell>
    </section>
  );
}

/* 08 — WHO IS THIS FOR */
const AUDIENCE = [
  { title: "Students", icon: GraduationCap },
  { title: "Working Professionals", icon: Briefcase },
  { title: "Business Owners", icon: Building2 },
  { title: "Freelancers", icon: Target },
  { title: "Creators", icon: Camera },
  { title: "Career Switchers", icon: Repeat },
];

export function Audience() {
  return (
    <section className="bg-tint py-24 sm:py-32">
      <Shell>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Label>Who Is This Webinar For?</Label>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.08] text-navy sm:text-5xl">
            You don't need to be a marketing expert.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground">
            This webinar is designed for anyone who wants to understand the digital marketing world.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCE.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 70}>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-background px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[var(--shadow-soft)]">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-tint">
                  <a.icon className="size-5 text-primary" strokeWidth={1.5} />
                </span>
                <span className="text-[15px] font-semibold uppercase tracking-tight text-navy">
                  {a.title}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Shell>
    </section>
  );
}

/* 09 — WHY NOW (blue) */
const FLOW = ["Content", "Social Media", "SEO", "Paid Ads", "Data", "Automation", "AI"];

export function WhyNow() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,oklch(0.32_0.11_260),oklch(0.5_0.19_262))] py-24 text-primary-foreground sm:py-32">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay" />
      <Shell className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="label-xs text-primary-foreground/70">Why Digital Marketing Now?</p>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.08] sm:text-5xl">
            The marketing landscape is changing fast.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 overflow-hidden rounded-[2rem] border border-primary-foreground/15 bg-primary-foreground/8 p-6 backdrop-blur-sm sm:p-10">
            <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-4">
              {FLOW.map((f, i) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.08em]">
                    {f}
                  </span>
                  {i < FLOW.length - 1 && (
                    <svg width="26" height="8" viewBox="0 0 26 8" aria-hidden>
                      <line
                        x1="0"
                        y1="4"
                        x2="26"
                        y2="4"
                        stroke="currentColor"
                        strokeOpacity="0.55"
                        strokeWidth="1.5"
                        strokeDasharray="4 5"
                        style={{ animation: "dash-flow 6s linear infinite" }}
                      />
                    </svg>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-xl font-bold leading-snug sm:text-2xl">
            The future belongs to marketers who understand the entire system.
          </p>
        </Reveal>
      </Shell>
    </section>
  );
}

/* 10 — WALK AWAY WITH */
const TAKEAWAYS = [
  "What Digital Marketing really means",
  "Which major skills and channels exist",
  "How SEO, social media, ads, content and websites connect",
  "Where automation and AI fit into modern marketing",
  "Which skills you should consider learning first",
  "What career, freelancing and business paths are available",
  "What a complete digital marketing learning roadmap looks like",
];

export function Takeaways() {
  return (
    <section className="py-24 sm:py-32">
      <Shell>
        <Reveal className="max-w-2xl">
          <Label>What You'll Walk Away With</Label>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.08] text-navy sm:text-[3rem]">
            Leave with clarity.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-0 border-t border-border">
          {TAKEAWAYS.map((t, i) => (
            <Reveal as="li" key={t} delay={30 * i}>
              <div className="grid grid-cols-[auto_1fr] items-center gap-6 border-b border-border py-7 sm:gap-12">
                <span className="text-3xl font-extrabold tabular-nums tracking-tight text-primary/25 sm:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg font-semibold leading-snug text-navy sm:text-2xl">{t}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Shell>
    </section>
  );
}

/* 11 — APPROACH */
export function Approach() {
  return (
    <section className="bg-tint py-24 sm:py-32">
      <Shell>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Label>The AutoDigix Approach</Label>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.06] text-navy sm:text-[3.25rem]">
            Don't just learn tools.
            <span className="mt-1 block text-primary">Learn how the pieces connect.</span>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground">
            A tool is only useful when you know what problem you're solving.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[2rem] border border-border bg-background p-8 sm:p-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Bad question
              </p>
              <p className="mt-5 text-2xl font-semibold leading-snug text-navy/45 line-through decoration-navy/20">
                "Which tool should I learn?"
              </p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="h-full rounded-[2rem] border border-primary/25 bg-background p-8 shadow-[var(--shadow-soft)] sm:p-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                Good question
              </p>
              <p className="mt-5 text-2xl font-semibold leading-snug text-navy">
                "Which problem am I trying to solve?"
              </p>
            </div>
          </Reveal>
        </div>
      </Shell>
    </section>
  );
}

/* 12 — DETAILS / CTA */
const META = [
  { icon: Sparkles, label: "Digital Marketing + AI" },
  { icon: CalendarDays, label: "29 August 2026" },
  { icon: Clock, label: "6:00 PM" },
  { icon: Radio, label: "Live Online" },
  { icon: Users, label: "Limited Seats" },
];

export function Details() {
  return (
    <section id="register" className="py-14 sm:py-20">
      <Shell>
        <Reveal>
          <div className="atmos relative overflow-hidden rounded-[2.5rem] border border-primary/15 px-6 py-16 text-center sm:px-14 sm:py-20">
            <div className="grid-lines pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]" />
            <div className="relative mx-auto max-w-3xl">
              <h2 className="text-3xl font-extrabold leading-[1.08] text-navy sm:text-[3rem]">
                Your first step into the digital marketing world.
              </h2>

              <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
                {META.map((m) => (
                  <li
                    key={m.label}
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/80 px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-navy backdrop-blur"
                  >
                    <m.icon className="size-4 text-primary" strokeWidth={1.6} />
                    {m.label}
                  </li>
                ))}
              </ul>

              <div className="mt-12 flex flex-wrap items-end justify-center gap-4">
                <span className="text-2xl font-semibold text-muted-foreground line-through">₹599</span>
                <span className="text-6xl font-extrabold leading-none tracking-tight text-navy sm:text-7xl">
                  ₹39/-
                </span>
              </div>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-primary">
                Just ₹39 to reserve your seat.
              </p>

              <div className="mt-10 flex justify-center">
                <Cta size="lg">Yes, I want to join for ₹39</Cta>
              </div>
              <p className="mt-4 text-[13px] font-medium text-muted-foreground">
                Live Online • Expert-Led • Limited Seats
              </p>
            </div>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}

/* 13 — VALUE */
const NOISE = [
  "YouTube videos",
  "Random blogs",
  "Instagram reels",
  "Different courses",
  "Different tools",
  "Different opinions",
];

export function Value() {
  return (
    <section className="py-24 sm:py-32">
      <Shell>
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <Label>The Real Cost</Label>
            <h2 className="mt-5 text-3xl font-extrabold leading-[1.08] text-navy sm:text-[2.75rem]">
              How much would it cost to figure all this out on your own?
            </h2>
            <p className="mt-8 text-[17px] leading-relaxed text-muted-foreground">
              This webinar gives you a structured overview of the digital marketing ecosystem so you
              can understand the bigger picture before deciding your next step.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-primary/25 bg-tint px-6 py-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                Your investment today
              </span>
              <span className="text-2xl font-extrabold text-primary">₹39</span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <ul className="grid gap-2.5">
                {NOISE.map((n, i) => (
                  <li
                    key={n}
                    className="rounded-xl border border-border bg-background px-5 py-4 text-[15px] font-medium text-navy/70 shadow-[var(--shadow-soft)]"
                    style={{ marginLeft: `${i * 10}px`, opacity: 1 - i * 0.07 }}
                  >
                    {n}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                And still wonder:
              </p>
              <p className="mt-3 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Where do I actually start?
              </p>
            </div>
          </Reveal>
        </div>
      </Shell>
    </section>
  );
}

/* 14 — FAQ */
const FAQS = [
  {
    q: "Is this webinar suitable for beginners?",
    a: "Yes. It is built for absolute beginners. We start from what digital marketing is and build the full picture from there.",
  },
  {
    q: "Do I need a marketing background?",
    a: "No background is required. If you can use a phone and a browser, you can follow along comfortably.",
  },
  {
    q: "Is the webinar online?",
    a: "Yes, it is a live online session held on 29 August 2026 at 6:00 PM. Joining details are shared after registration.",
  },
  { q: "How much does the webinar cost?", a: "Just ₹39 to reserve your seat. Seats are limited." },
  {
    q: "What will I learn?",
    a: "The complete digital marketing ecosystem — content, social media, SEO, paid ads, websites, automation and AI — plus a structured learning roadmap.",
  },
  {
    q: "Will I learn SEO and Google Ads?",
    a: "You will understand how SEO and Google Ads work, where they fit, and how they drive results — an overview, not a deep technical course.",
  },
  {
    q: "Will AI be covered?",
    a: "Yes. A dedicated part of the session covers how AI is changing content, ads, SEO, personalization and marketing workflows.",
  },
  {
    q: "Who should attend?",
    a: "Students, working professionals, business owners, freelancers, creators and anyone planning a career switch.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-tint py-24 sm:py-32">
      <Shell>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Label>FAQ</Label>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.08] text-navy sm:text-5xl">
            Questions, answered.
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-3xl gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={20 * i}>
                <div className="rounded-[1.25rem] border border-border bg-background">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="text-[15.5px] font-semibold text-navy">{f.q}</span>
                    <span className="grid size-7 shrink-0 place-items-center rounded-lg border border-primary/20 text-primary">
                      {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-400 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[15px] leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Shell>
    </section>
  );
}

/* 15 — FINAL CTA */
export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(160deg,oklch(0.3_0.1_260),oklch(0.5_0.19_262)_60%,oklch(0.58_0.19_258))] py-28 text-primary-foreground sm:py-36">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay" />
      <img
        src={shuttle}
        alt=""
        aria-hidden
        loading="lazy"
        width={1280}
        height={1280}
        className="float-soft pointer-events-none absolute -right-16 bottom-0 w-[420px] opacity-25 sm:opacity-40"
      />
      <Shell className="relative">
        <Reveal className="max-w-3xl">
          <h2 className="text-4xl font-extrabold leading-[1.05] sm:text-6xl">
            Your digital future won't wait.
          </h2>
          <div className="mt-8 grid gap-2 text-[17px] text-primary-foreground/80">
            <p>The world is already digital.</p>
            <p>Businesses are already competing for attention online.</p>
            <p>AI is already changing how marketing works.</p>
          </div>
          <p className="mt-8 text-2xl font-bold sm:text-3xl">It's to understand it.</p>
          <p className="mt-6 max-w-xl leading-relaxed text-primary-foreground/80">
            Start with the basics. Understand the ecosystem. Discover the skills. See where you fit.
            And decide your next move.
          </p>
          <h3 className="mt-12 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Are you keeping up?
          </h3>
          <div className="mt-8">
            <Cta size="lg" variant="inverse">
              Register Now — ₹39
            </Cta>
          </div>
          <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-primary-foreground/70">
            Live Online • 29 August 2026 • 6:00 PM
          </p>
        </Reveal>
      </Shell>
    </section>
  );
}

/* 16 — FOOTER */
export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <Shell>
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-7 place-items-center rounded-lg bg-primary">
                <span className="size-2.5 rounded-[3px] bg-primary-foreground" />
              </span>
              <span className="text-[15px] font-extrabold tracking-tight text-navy">AUTODIGIX</span>
            </div>
            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
              AI Automation &amp; Digital Marketing
            </p>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Helping you understand, learn, and leverage the digital world.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Digital Marketing • AI • Automation • Growth
            </p>
            <div className="mt-6 grid gap-1.5 text-sm text-navy/80">
              <p>
                Contact: <span className="font-semibold">8639191907</span>
              </p>
              <p className="inline-flex items-center gap-2">
                <Globe className="size-4 text-primary" strokeWidth={1.6} />
                <span className="font-semibold">autodigix.com</span>
              </p>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-1 sm:justify-items-end">
            {[
              { l: "Webinar", h: "#webinar" },
              { l: "Roadmap", h: "#roadmap" },
              { l: "FAQ", h: "#faq" },
              { l: "Contact", h: "#footer" },
              { l: "Register", h: "#register" },
            ].map((i) => (
              <a
                key={i.l}
                href={i.h}
                className="font-medium text-muted-foreground transition-colors hover:text-navy"
              >
                {i.l}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © AUTODIGIX
        </div>
      </Shell>
    </footer>
  );
}

/* Mobile sticky CTA */
export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 p-3 backdrop-blur-xl sm:hidden">
      <Cta className="w-full justify-center" size="md" />
    </div>
  );
}
