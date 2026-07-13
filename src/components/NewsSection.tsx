import { siteConfig } from "@/config/content";
import FadeInSection from "@/components/FadeInSection";
import TwitterFeed from "@/components/TwitterFeed";
import { Megaphone } from "lucide-react";

const NewsSection = () => (
  <section id="news" className="section-padding section-alt">
    <div className="mx-auto max-w-7xl">
      <FadeInSection>
        <h2 className="text-3xl font-bold tracking-tight text-primary">News</h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-accent" />
      </FadeInSection>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px] items-start">
        {/* News cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {siteConfig.news.map((item, i) => (
            <FadeInSection key={i} delay={i * 0.08}>
              <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md">
                <div className="flex items-center gap-2">
                  <Megaphone size={16} className="text-accent" />
                  <span className="rounded-full bg-accent/10 px-3 py-0.5 text-xs font-semibold text-accent">
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-foreground">
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
                  {item.linkText && !item.linkHref && (
                    <span className="font-medium text-muted-foreground/65">{item.linkText}</span>
                  )}
                  {item.linkText && "."}
                </p>
                <span className="text-xs text-muted-foreground">{item.date}</span>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Twitter feed */}
        <FadeInSection delay={0.15} className="hidden lg:block">
          <TwitterFeed />
        </FadeInSection>
      </div>
    </div>
  </section>
);

export default NewsSection;
