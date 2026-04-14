import { siteConfig } from "@/config/content";
import FadeInSection from "@/components/FadeInSection";

const TimelineSection = () => (
  <section id="timeline" className="relative overflow-hidden section-padding section-alt">
    <div className="mx-auto max-w-5xl">
      <FadeInSection>
        <div className="flex items-center gap-4">
          <div className="h-0.5 w-20 rounded-full bg-[#D9A066]" />
          <h2
            className="text-[2.3rem] leading-none text-primary md:text-[2.8rem]"
            style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "normal", fontWeight: 500 }}
          >
            Timeline
          </h2>
        </div>
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <div className="relative mt-12">
          <div className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full border border-[#4A8FD9]/14" />
          <div className="pointer-events-none absolute -left-6 bottom-4 h-20 w-20 rounded-full border border-[#D9A066]/20" />
          <div className="pointer-events-none absolute right-16 -top-2 hidden h-px w-24 rotate-[24deg] bg-[#D9A066]/35 md:block" />

          <div className="relative flex flex-col gap-8 rounded-[1.75rem] border border-[#185FA5]/10 bg-white/55 px-5 py-8 shadow-[0_16px_50px_rgba(10,22,40,0.05)] backdrop-blur-[1px] sm:flex-row sm:gap-0 md:px-8">
            {/* Connecting line */}
            <div className="absolute top-[39px] left-[10%] right-[10%] hidden h-px bg-[#185FA5]/14 sm:block" />
            <div className="absolute top-[39px] left-[10%] right-[10%] hidden h-px bg-[linear-gradient(90deg,rgba(12,68,124,0.18),rgba(74,143,217,0.42),rgba(217,160,102,0.22))] sm:block" />

            {siteConfig.timeline.map((item, i) => (
              <div key={i} className="relative flex flex-1 flex-col items-center text-center px-3">
                <div className="absolute top-[18px] h-6 w-px bg-[#185FA5]/14" />
                <div
                  className={`relative z-10 h-[18px] w-[18px] rounded-full border-2 border-white shadow-sm ${
                    item.status === "done" ? "bg-[#0C447C]/20" : "bg-[#4A8FD9]"
                  }`}
                />
                <p className={`mt-4 text-sm font-semibold tracking-[0.02em] ${item.status === "done" ? "text-[#0C447C]/55" : "text-[#0C447C]"}`}>{item.date}</p>
                <p className={`mt-1 text-sm leading-snug ${item.status === "done" ? "text-muted-foreground" : "text-foreground"}`}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </div>
  </section>
);

export default TimelineSection;
