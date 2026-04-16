import { siteConfig } from "@/config/content";
import FadeInSection from "@/components/FadeInSection";

const base = import.meta.env.BASE_URL;

const NewsSidebar = () => (
  <div id="news" className="relative py-10">
    <div className="pointer-events-none absolute -right-8 top-24 hidden h-20 w-20 rounded-full border border-[#4A8FD9]/8 lg:block" />
    <div className="pointer-events-none absolute left-2 top-[13.5rem] hidden h-px w-20 rotate-[24deg] bg-[#D9A066]/18 lg:block" />

    <FadeInSection>
      <div className="mb-10 border-b border-[#185FA5]/10 pb-6">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.24em] text-[#0C447C]/60">Hosted Within</p>
        <a href="https://conferences.miccai.org/2026/en/default.asp" target="_blank" rel="noopener noreferrer">
          <img
            src={`${base}logos/miccai2026-logo-new.png`}
            alt="MICCAI 2026"
            className="w-full max-w-[250px] object-contain"
          />
        </a>
      </div>
    </FadeInSection>

    <FadeInSection>
      <h2
        className="text-[2rem] leading-none text-primary"
        style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "normal", fontWeight: 500 }}
      >
        News
      </h2>
    </FadeInSection>

    <div className="mt-6 flex flex-col gap-5">
      {siteConfig.news.map((item, i) => (
        <FadeInSection key={i} delay={i * 0.08}>
          <div className="border-b border-[#185FA5]/10 pb-5 last:border-b-0">
            <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#0C447C]/65">{item.tag}</span>
            <p className="mt-2 text-sm leading-7 text-foreground">
              {item.text}{" "}
              {item.linkText && item.linkHref && (
                <a
                  href={item.linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#0C447C] underline underline-offset-2 transition-colors hover:text-[#D9A066]"
                >
                  {item.linkText}
                </a>
              )}
              {item.linkText && "."}
            </p>
            <span className="mt-3 block text-xs uppercase tracking-[0.18em] text-muted-foreground/85">{item.date}</span>
          </div>
        </FadeInSection>
      ))}
    </div>
  </div>
);

export default NewsSidebar;
