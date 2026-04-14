import { siteConfig } from "@/config/content";
import FadeInSection from "@/components/FadeInSection";
import { ExternalLink } from "lucide-react";

const SUBMIT_ACTIVE_DATE = new Date("2026-04-01T00:00:00");

const CFPMark = () => (
  <svg viewBox="0 0 280 280" className="h-24 w-24 opacity-90" aria-hidden="true">
    <g transform="translate(140, 140)">
      <circle cx="0" cy="0" r="52" fill="none" stroke="#185FA5" strokeWidth="3" />
      <circle cx="0" cy="0" r="92" fill="none" stroke="#185FA5" strokeWidth="3" />
      <circle cx="0" cy="0" r="57" fill="none" stroke="#4A8FD9" strokeWidth="2" />
      <line x1="-80" y1="15" x2="88" y2="-12" stroke="#185FA5" strokeWidth="4" strokeLinecap="round" />
      <circle cx="-80" cy="15" r="8" fill="#185FA5" />
      <circle cx="88" cy="-12" r="8" fill="#D9A066" />
    </g>
  </svg>
);

const OverviewSection = () => {
  const { overview } = siteConfig;
  const isSubmitActive = new Date() >= SUBMIT_ACTIVE_DATE;

  return (
    <section id="overview" className="relative overflow-hidden px-6 pt-8 pb-20 md:px-8 md:pb-28 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-5xl">
        <div className="space-y-5">
          {overview.intro.map((p, i) => (
            <FadeInSection key={i} delay={i * 0.06}>
              <p className="max-w-4xl text-base leading-8 text-muted-foreground md:text-[1.02rem]">{p}</p>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.12}>
          <div className="relative mt-14 overflow-hidden rounded-[1.75rem] border border-[#185FA5]/14 bg-[#F4F1EA] px-6 py-7 text-primary shadow-[0_24px_80px_rgba(10,22,40,0.08)] md:px-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,143,217,0.10),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.12),transparent)]" />
            <div className="pointer-events-none absolute right-6 top-5 hidden md:block">
              <CFPMark />
            </div>

            <div className="relative max-w-3xl pr-0 md:pr-28">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#D9A066]" />
                <p className="text-[11px] uppercase tracking-[0.26em] text-[#0C447C]/70">MICCAI 2026 Satellite Event</p>
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-primary md:text-[2rem]">Call for Papers</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                SafeSurg invites full paper submissions on safety-directed topics across the data-to-deployment pipeline. Papers should follow the Lecture Notes in Computer Science (LNCS) format, up to 8 pages of text and 2 pages of references. Please refer to the{" "}
                <a
                  href="https://conferences.miccai.org/2026/en/PAPER-SUBMISSION-GUIDELINES.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#0C447C] underline underline-offset-2 transition-colors hover:text-[#D9A066]"
                >
                  MICCAI Author Guidelines
                </a>
                {" "}for more details. All submissions will undergo double-blind peer review. Accepted papers will be published in the MICCAI Satellite Workshop proceedings via Springer LNCS. Authors are requested to submit their papers via OpenReview here:{" "}
                <span className="font-medium text-[#0C447C]/50">[Link coming soon]</span>
              </p>

              <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#0C447C]">
                <span className="inline-block h-2 w-2 rounded-full bg-[#D9A066]" />
                Deadline: July 1, 2026
              </div>

              <div className="mt-6">
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
                    className="inline-flex items-center gap-2 rounded-md bg-[#0C447C]/8 px-6 py-3 text-sm font-semibold text-[#0C447C]/45 cursor-not-allowed"
                    title="Submissions open soon"
                  >
                    <ExternalLink size={16} />
                    Submissions open soon
                  </button>
                )}
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.15}>
          <div className="mt-16 flex items-center gap-4">
            <div className="h-0.5 w-20 rounded-full bg-[#D9A066]" />
            <h3
              className="text-[2.3rem] leading-none text-primary md:text-[2.8rem]"
              style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "normal", fontWeight: 500 }}
            >
              Topics of Interest
            </h3>
          </div>
        </FadeInSection>

        <div className="mt-8">
          <div className="space-y-5">
            {overview.topics.map((topic, i) => (
              <FadeInSection key={i} delay={i * 0.05}>
                <div className="border-b border-[#185FA5]/12 px-1 py-4 md:px-2">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-2xl leading-none text-[#0C447C]"
                      style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "normal", fontWeight: 400 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="text-base font-semibold text-foreground">{topic.title}</h4>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {topic.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#185FA5]" />
                        <span>{item}</span>
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
