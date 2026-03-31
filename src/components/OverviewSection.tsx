import { siteConfig } from "@/config/content";
import FadeInSection from "@/components/FadeInSection";
import { ExternalLink } from "lucide-react";

const SUBMIT_ACTIVE_DATE = new Date("2026-04-01T00:00:00");

const OverviewSection = () => {
  const { overview } = siteConfig;
  const isSubmitActive = new Date() >= SUBMIT_ACTIVE_DATE;

  return (
    <section id="overview" className="pt-8 pb-20 px-6 md:pb-28 md:px-8 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-5xl">
        {/* Description paragraphs */}
        <div className="space-y-5">
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
              SafeSurg invites full paper submissions on safety-directed topics across the data-to-deployment pipeline. Papers should follow the Lecture Notes in Computer Science (LNCS) format, up to 8 pages of text and 2 pages of references. Please refer to the{" "}
              <a
                href="https://conferences.miccai.org/2026/en/PAPER-SUBMISSION-GUIDELINES.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline underline-offset-2 hover:text-accent transition-colors"
              >
                MICCAI Author Guidelines
              </a>
              {" "}for more details. All submissions will undergo double-blind peer review. Accepted papers will be published in the MICCAI Satellite Workshop proceedings via Springer LNCS. Authors are requested to submit their papers via OpenReview here:{" "}
              <span className="font-medium text-muted-foreground/70">[Link coming soon]</span>
            </p>
            <div className="mt-5">
              {isSubmitActive ? (
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md gradient-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-md transition-transform hover:scale-[1.02]"
                >
                  <ExternalLink size={16} />
                  Submit Paper
                </a>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center gap-2 rounded-md bg-muted px-6 py-3 text-sm font-semibold text-muted-foreground cursor-not-allowed opacity-60"
                  title="Submissions open soon"
                >
                  <ExternalLink size={16} />
                  Submissions open soon
                </button>
              )}
            </div>
          </div>
        </FadeInSection>

        {/* Topics — all visible */}
        <div className="mt-12">
          <FadeInSection>
            <h3 className="text-lg font-semibold text-primary">Topics of Interest</h3>
          </FadeInSection>

          <div className="mt-6 space-y-6">
            {overview.topics.map((topic, i) => (
              <FadeInSection key={i} delay={i * 0.05}>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    <span className="mr-2 text-[#d4a017]">{String(i + 1).padStart(2, "0")}</span>
                    {topic.title}
                  </h4>
                  <ul className="mt-2 space-y-1.5 pl-7">
                    {topic.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
