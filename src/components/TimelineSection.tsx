import { siteConfig } from "@/config/content";
import FadeInSection from "@/components/FadeInSection";
import { Circle, CheckCircle2 } from "lucide-react";

const TimelineSection = () => (
  <section id="timeline" className="section-padding section-alt">
    <div className="mx-auto max-w-7xl">
      <FadeInSection>
        <h2 className="text-3xl font-bold tracking-tight text-primary">Timeline</h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-accent" />
      </FadeInSection>

      <div className="relative mt-12 ml-4">
        {/* Vertical line */}
        <div className="absolute left-2.5 top-1 bottom-1 w-px bg-border" />

        <div className="space-y-8">
          {siteConfig.timeline.map((item, i) => (
            <FadeInSection key={i} delay={i * 0.08}>
              <div className="relative flex items-start gap-6 pl-8">
                <div className="absolute left-0 top-0.5">
                  {item.status === "done" ? (
                    <CheckCircle2 size={20} className="text-accent" />
                  ) : (
                    <Circle size={20} className="text-muted-foreground" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.date}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TimelineSection;
