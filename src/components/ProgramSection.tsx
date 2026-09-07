import { siteConfig } from "@/config/content";
import FadeInSection from "@/components/FadeInSection";
import { CalendarDays, Clock3, Coffee, MapPin, Mic, Presentation } from "lucide-react";

type ProgramDetail = string | { heading: string; items: string[] };

type ProgramItem = {
  time: string;
  title: string;
  speaker?: string;
  affiliation?: string;
  note?: string;
  type: string;
  details?: ProgramDetail[];
};

const typeIcon = (type: string) => {
  switch (type) {
    case "keynote": return <Mic size={16} className="text-accent" />;
    case "break": return <Coffee size={16} className="text-muted-foreground" />;
    default: return <Presentation size={16} className="text-muted-foreground" />;
  }
};

const ProgramSection = () => (
  <>
    <section className="relative overflow-hidden bg-primary px-6 pt-24 pb-16 md:px-8 md:pt-32 lg:px-16 xl:px-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(74,143,217,0.18),transparent_24%),radial-gradient(circle_at_82%_24%,rgba(217,160,102,0.12),transparent_18%),linear-gradient(180deg,rgba(10,22,40,0.98),rgba(10,22,40,0.92))]" />
      <div className="pointer-events-none absolute inset-0 hero-stripes opacity-50" />

      <div className="relative mx-auto max-w-6xl">
        <div className="pointer-events-none absolute right-0 top-4 hidden h-36 w-36 rounded-full border border-[#4A8FD9]/16 lg:block" />
        <div className="pointer-events-none absolute right-20 top-24 hidden h-px w-24 rotate-[24deg] bg-[#D9A066]/35 lg:block" />
        <div className="pointer-events-none absolute right-32 bottom-2 hidden h-20 w-20 rounded-full border border-[#D9A066]/18 lg:block" />
        <FadeInSection>
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-white/55 backdrop-blur-sm">
              MICCAI 2026 Satellite Event
            </span>

            <h1
              className="mt-7 text-5xl leading-[0.94] text-[#F4F1EA] md:text-6xl lg:text-7xl"
              style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "normal", fontWeight: 500 }}
            >
              Workshop Program
            </h1>

            <div className="mt-7 flex flex-col gap-3 border-l-2 border-[#D9A066] pl-4 text-sm font-semibold text-[#F4F1EA] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:text-base">
              <span className="inline-flex items-center gap-2"><CalendarDays size={18} className="text-[#D9A066]" />October 1, 2026</span>
              <span className="inline-flex items-center gap-2"><Clock3 size={18} className="text-[#D9A066]" />11:30-18:00 hours</span>
              <span className="inline-flex items-center gap-2"><MapPin size={18} className="text-[#D9A066]" />Room Luxembourg</span>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>

    <section id="program" className="relative overflow-hidden px-6 py-20 md:px-8 md:py-28 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-5xl">
        <FadeInSection>
          <div className="flex items-center gap-4">
            <div className="h-0.5 w-20 rounded-full bg-[#D9A066]" />
            <h2
              className="text-[2.3rem] leading-none text-primary md:text-[2.8rem]"
              style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "normal", fontWeight: 500 }}
            >
              Tentative Schedule
            </h2>
          </div>
        </FadeInSection>

        <div className="mt-10 space-y-4">
          {(siteConfig.program as ProgramItem[]).map((item, i) => (
            <FadeInSection key={i} delay={i * 0.04}>
              <div
                className={`relative overflow-hidden rounded-[1.5rem] border px-5 py-5 shadow-[0_12px_36px_rgba(10,22,40,0.05)] ${
                  item.type === "keynote"
                    ? "border-[#185FA5]/16 bg-[#F4F1EA]"
                    : item.type === "break"
                    ? "border-[#185FA5]/10 bg-white/60"
                    : "border-[#185FA5]/10 bg-white"
                }`}
              >
                <div
                  className={`pointer-events-none absolute left-0 top-0 h-full w-1 ${
                    item.type === "keynote"
                      ? "bg-[linear-gradient(180deg,#D9A066,#185FA5)]"
                      : item.type === "break"
                      ? "bg-[#185FA5]/18"
                      : "bg-[#4A8FD9]/18"
                  }`}
                />

                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <div className="flex items-center gap-3 md:min-w-[150px] md:shrink-0">
                    <div className="mt-0.5 shrink-0">{typeIcon(item.type)}</div>
                    <div className="text-sm font-semibold tracking-[0.02em] text-[#0C447C]">{item.time}</div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className={`text-base font-semibold leading-snug ${item.type === "keynote" ? "text-[#0C447C]" : "text-foreground"}`}>
                        {item.title}
                      </p>
                      {item.type === "keynote" && (
                        <span className="rounded-full bg-[#D9A066]/14 px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0C447C]">
                          Keynote
                        </span>
                      )}
                    </div>

                    {item.speaker && (
                      <p className="mt-2 text-sm text-muted-foreground">{item.speaker}</p>
                    )}
                    {"affiliation" in item && item.affiliation && (
                      <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground/75">{item.affiliation}</p>
                    )}
                    {item.note && (
                      <p className="mt-3 inline-flex border-l-2 border-[#D9A066] pl-3 text-xs font-medium text-[#0C447C]/75">
                        {item.note}
                      </p>
                    )}
                    {item.details && (
                      <div className="mt-5 space-y-4 border-t border-[#185FA5]/10 pt-4">
                        {item.details.every((detail) => typeof detail === "string") ? (
                          <ol className="list-decimal space-y-2 pl-5 marker:font-semibold marker:text-[#0C447C]/70">
                            {(item.details as string[]).map((detail) => (
                              <li key={detail} className="pl-1 text-sm leading-6 text-muted-foreground">
                                {detail}
                              </li>
                            ))}
                          </ol>
                        ) : item.details.map((detail, detailIndex) =>
                          typeof detail === "string" ? (
                            <p key={detailIndex} className="text-sm leading-6 text-muted-foreground">
                              {detail}
                            </p>
                          ) : (
                            <div key={detailIndex}>
                              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0C447C]/70">
                                {detail.heading}
                              </p>
                              <ol
                                className="mt-3 list-decimal space-y-2 pl-5 marker:font-semibold marker:text-[#0C447C]/70"
                                start={item.details
                                  ?.slice(0, detailIndex)
                                  .reduce(
                                    (count, previousDetail) =>
                                      count + (typeof previousDetail === "string" ? 0 : previousDetail.items.length),
                                    1
                                  )}
                              >
                                {detail.items.map((detailItem) => (
                                  <li key={detailItem} className="pl-1 text-sm leading-6 text-muted-foreground">
                                    {detailItem}
                                  </li>
                                ))}
                              </ol>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ProgramSection;
