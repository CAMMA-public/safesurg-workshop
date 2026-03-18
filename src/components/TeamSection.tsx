import { siteConfig } from "@/config/content";
import FadeInSection from "@/components/FadeInSection";
import { User } from "lucide-react";

const TeamSection = () => (
  <section id="team" className="section-padding section-alt">
    <div className="mx-auto max-w-7xl">
      <FadeInSection>
        <h2 className="text-3xl font-bold tracking-tight text-primary">Team</h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-accent" />
      </FadeInSection>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {siteConfig.team.organizers.map((member, i) => (
          <FadeInSection key={i} delay={i * 0.08}>
            <div className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center transition-shadow hover:shadow-md">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <User size={28} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{member.name}</p>
                {member.role && (
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                )}
                {member.affiliation && (
                  <p className="text-xs text-muted-foreground">{member.affiliation}</p>
                )}
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>

      {siteConfig.team.note && (
        <FadeInSection delay={0.2}>
          <p className="mt-8 text-center text-sm text-muted-foreground italic">
            {siteConfig.team.note}
          </p>
        </FadeInSection>
      )}
    </div>
  </section>
);

export default TeamSection;
