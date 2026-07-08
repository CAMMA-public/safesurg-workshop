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
              <div className={`flex flex-col gap-3 rounded-lg border p-6 transition-shadow hover:shadow-md ${item.tag === "Deadline Extension" ? "border-red-200 bg-red-50 shadow-sm" : "border-border bg-card"}`}>
                <div className="flex items-center gap-2">
                  <Megaphone size={16} className={item.tag === "Deadline Extension" ? "text-red-600" : "text-accent"} />
                  <span className={`rounded-full px-3 py-0.5 text-xs font-semibold ${item.tag === "Deadline Extension" ? "bg-red-100 text-red-700" : "bg-accent/10 text-accent"}`}>
                    {item.tag}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${item.tag === "Deadline Extension" ? "font-semibold text-red-950" : "text-foreground"}`}>
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
