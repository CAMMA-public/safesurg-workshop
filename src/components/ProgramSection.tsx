import { siteConfig } from "@/config/content";
import FadeInSection from "@/components/FadeInSection";
import { Mic, Coffee, Presentation } from "lucide-react";

const typeIcon = (type: string) => {
  switch (type) {
    case "keynote": return <Mic size={16} className="text-accent" />;
    case "break": return <Coffee size={16} className="text-muted-foreground" />;
    default: return <Presentation size={16} className="text-muted-foreground" />;
  }
};

const ProgramSection = () => (
  <section id="program" className="section-padding">
    <div className="mx-auto max-w-5xl">
      <FadeInSection>
        <h2 className="text-3xl font-bold tracking-tight text-primary">Workshop Program <span className="text-xl font-normal text-muted-foreground">(Tentative)</span></h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-accent" />
      </FadeInSection>

      <div className="mt-10 space-y-3">
        {siteConfig.program.map((item, i) => (
          <FadeInSection key={i} delay={i * 0.04}>
            <div
              className={`flex items-start gap-4 rounded-lg border px-5 py-4 transition-shadow hover:shadow-sm ${
                item.type === "keynote"
                  ? "border-accent/30 bg-accent/5"
                  : item.type === "break"
                  ? "border-border bg-muted/50"
                  : "border-border bg-card"
              }`}
            >
              <div className="mt-0.5 shrink-0">{typeIcon(item.type)}</div>
              <div className="min-w-[120px] shrink-0 text-sm font-medium text-muted-foreground">
                {item.time}
              </div>
              <div className="flex-1">
                <p className={`text-sm font-semibold ${item.type === "keynote" ? "text-accent" : "text-foreground"}`}>
                  {item.title}
                </p>
                {item.speaker && (
                  <p className="mt-0.5 text-xs text-muted-foreground">{item.speaker}</p>
                )}
                {"affiliation" in item && item.affiliation && (
                  <p className="mt-0.5 text-xs text-muted-foreground/70">{item.affiliation}</p>
                )}
              </div>
              {item.type === "keynote" && (
                <span className="shrink-0 rounded-full bg-accent/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                  Keynote
                </span>
              )}
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramSection;
