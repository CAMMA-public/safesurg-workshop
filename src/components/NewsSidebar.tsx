import { siteConfig } from "@/config/content";
import FadeInSection from "@/components/FadeInSection";

const NewsSidebar = () => (
  <div id="news" className="py-10">
    {/* MICCAI 2026 logo */}
    <FadeInSection>
      <div className="mb-10">
        <a href="https://conferences.miccai.org/2026/en/default.asp" target="_blank" rel="noopener noreferrer">
          <img
            src="https://conferences.miccai.org/2026/files/images/layout/en/miccai2026-logo.png"
            alt="MICCAI 2026"
            className="w-full max-w-[260px] object-contain"
          />
        </a>
      </div>
    </FadeInSection>

    <FadeInSection>
      <h2 className="text-xl font-bold tracking-tight text-primary">News</h2>
      <div className="mt-2 h-1 w-10 rounded-full bg-accent" />
    </FadeInSection>

    <div className="mt-6 flex flex-col gap-5">
      {siteConfig.news.map((item, i) => (
        <FadeInSection key={i} delay={i * 0.08}>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">{item.tag}</span>
            <p className="mt-1 text-sm leading-relaxed text-foreground">
              {item.text}{" "}
              {item.linkText && item.linkHref && (
                <a
                  href={item.linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline underline-offset-2 hover:text-accent transition-colors"
                >
                  {item.linkText}
                </a>
              )}
              {item.linkText && "."}
            </p>
            <span className="mt-1 block text-xs text-muted-foreground">{item.date}</span>
          </div>
        </FadeInSection>
      ))}
    </div>
  </div>
);

export default NewsSidebar;
