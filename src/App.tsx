import { Routes, Route, Link } from "react-router-dom";

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

function HomePage() {
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

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
