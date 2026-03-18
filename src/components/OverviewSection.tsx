import { siteConfig } from "@/config/content";
import FadeInSection from "@/components/FadeInSection";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const OverviewSection = () => {
  const { overview } = siteConfig;
  const [openTopic, setOpenTopic] = useState<number | null>(0);

  return (
    <section id="overview" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <FadeInSection>
          <h2 className="text-3xl font-bold tracking-tight text-primary">
            Overview &amp; Call for Papers
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-accent" />
        </FadeInSection>

        {/* Overview paragraphs */}
        <div className="mt-10 max-w-3xl space-y-5">
          {overview.intro.map((p, i) => (
            <FadeInSection key={i} delay={i * 0.06}>
              <p className="text-base leading-relaxed text-muted-foreground">{p}</p>
            </FadeInSection>
          ))}
        </div>

        {/* CFP box */}
        <FadeInSection delay={0.15}>
          <div className="mt-14 rounded-xl border border-accent/20 bg-accent/5 p-6 md:p-8">
            <h3 className="text-lg font-semibold text-primary">Call for Papers</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {overview.cfpIntro}
            </p>
          </div>
        </FadeInSection>

        {/* Topics accordion */}
        <div className="mt-12">
          <FadeInSection>
            <h3 className="text-lg font-semibold text-primary">Topics of Interest</h3>
          </FadeInSection>

          <div className="mt-6 space-y-3">
            {overview.topics.map((topic, i) => {
              const isOpen = openTopic === i;
              return (
                <FadeInSection key={i} delay={i * 0.05}>
                  <div className="rounded-lg border border-border bg-card overflow-hidden">
                    <button
                      onClick={() => setOpenTopic(isOpen ? null : i)}
                      className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-foreground transition-colors hover:bg-secondary/50"
                    >
                      <span>
                        <span className="mr-2 text-accent font-semibold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {topic.title}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <ul className="border-t border-border px-5 py-4 space-y-2">
                        {topic.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
