import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/site/hero";
import { SiteNav } from "@/components/site/nav";
import {
  Approach,
  Audience,
  BigPicture,
  Details,
  Discover,
  DigitalShift,
  Faq,
  FinalCta,
  Footer,
  Overview,
  Roadmap,
  StickyCta,
  Takeaways,
  Value,
  WhyNow,
} from "@/components/site/sections";

const TITLE = "AUTODIGIX Webinar — AI + Digital Marketing, Live for ₹39";
const DESC =
  "Join the AUTODIGIX live online webinar on 29 August 2026, 6:00 PM. See the entire digital marketing ecosystem — SEO, ads, content, automation and AI — in one session for ₹39.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="pb-20 sm:pb-0">
        <Hero />
        <DigitalShift />
        <Overview />
        <Discover />
        <Roadmap />
        <BigPicture />
        <Audience />
        <WhyNow />
        <Takeaways />
        <Approach />
        <Details />
        <Value />
        <Faq />
        <FinalCta />
      </main>
      <div id="footer">
        <Footer />
      </div>
      <StickyCta />
    </div>
  );
}
