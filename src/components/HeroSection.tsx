import { siteConfig } from "@/config/content";
import TwitterFeed from "@/components/TwitterFeed";
import FadeInSection from "@/components/FadeInSection";
import { ArrowRight, FileText } from "lucide-react";

const HeroSection = () => (
  <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 section-padding">
    {/* Subtle grid background */}
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

    <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_380px] lg:gap-16 items-start">
      {/* Left column */}
      <FadeInSection>
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            {siteConfig.conference}
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            {siteConfig.title}
          </h1>

          <p className="text-xl font-medium text-muted-foreground md:text-2xl">
            {siteConfig.subtitle}
          </p>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            {siteConfig.description}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#overview"
              className="inline-flex items-center gap-2 rounded-md gradient-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-md transition-transform hover:scale-[1.02]"
            >
              <FileText size={16} />
              Call for Papers
            </a>
            <a
              href="#program"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            >
              View Program
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </FadeInSection>

      {/* Right column — Twitter feed */}
      <FadeInSection delay={0.15} className="hidden lg:block">
        <TwitterFeed />
      </FadeInSection>
    </div>
  </section>
);

export default HeroSection;
