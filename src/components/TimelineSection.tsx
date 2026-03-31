import { siteConfig } from "@/config/content";
import FadeInSection from "@/components/FadeInSection";

const TimelineSection = () => (
  <section id="timeline" className="section-padding section-alt">
    <div className="mx-auto max-w-5xl">
      <FadeInSection>
        <h2 className="text-3xl font-bold tracking-tight text-primary">Timeline</h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-accent" />
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <div className="relative mt-12 flex flex-col gap-8 sm:flex-row sm:gap-0">
          {/* Connecting line */}
          <div className="absolute top-[9px] left-[10%] right-[10%] hidden h-px bg-border sm:block" />

          {siteConfig.timeline.map((item, i) => (
            <div key={i} className="relative flex flex-1 flex-col items-center text-center px-3">
              <div className="relative z-10 h-[16px] w-[16px] rounded-full bg-[#d4a017]" />
              <p className="mt-3 text-sm font-bold text-primary">{item.date}</p>
              <p className="mt-0.5 text-sm text-foreground leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  </section>
);

export default TimelineSection;
