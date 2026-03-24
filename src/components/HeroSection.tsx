import { siteConfig } from "@/config/content";
import FadeInSection from "@/components/FadeInSection";
import Logo from "@/components/Logo";
import { ArrowRight, ExternalLink } from "lucide-react";

const HeroSection = () => (
  <section className="relative overflow-hidden pt-24 pb-14 md:pt-32 md:pb-20 px-6 md:px-8 lg:px-16 xl:px-24 bg-primary">
    <div className="pointer-events-none absolute inset-0 hero-stripes" />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-primary/80" />

    <div className="relative mx-auto max-w-4xl text-center">
      <FadeInSection>
        <div className="flex flex-col items-center">

          {/* Conference label */}
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
            {siteConfig.conference}
          </span>

          {/* Wordmark */}
          <div className="mt-5">
            <Logo variant="light" size="lg" />
          </div>

          {/* Subtitle — treated as a proper second headline */}
          <p className="mt-5 text-xl font-light text-white/85 md:text-2xl lg:text-3xl tracking-normal leading-snug max-w-2xl">
            {siteConfig.subtitle}
          </p>

          {/* Amber rule — thin, precise, like a document underline */}
          <div className="mt-6 h-px w-12 bg-amber-400/60" />

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="#overview"
              className="inline-flex items-center gap-2 rounded-md gradient-accent px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-transform hover:scale-[1.02]"
            >
              <ExternalLink size={16} />
              Submit
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdrzGCAp2-sE1CuPg80EwPpjRpzYeTOwCWCQio7s38B_8C5jQ/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Review for SafeSurg
              <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </FadeInSection>
    </div>
  </section>
);

export default HeroSection;
