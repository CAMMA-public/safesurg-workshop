import { siteConfig } from "@/config/content";
import FadeInSection from "@/components/FadeInSection";

const TeamSection = () => (
  <section id="team" className="pt-12 pb-20 px-6 md:pb-28 md:px-8 lg:px-16 xl:px-24 section-alt">
    <div className="mx-auto max-w-5xl">
      <FadeInSection>
        <h2 className="text-3xl font-bold tracking-tight text-primary">Team</h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-accent" />
      </FadeInSection>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {siteConfig.team.organizers.map((member, i) => (
          <FadeInSection key={i} delay={i * 0.08}>
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="h-20 w-20 overflow-hidden rounded-full bg-accent/10">
                <img
                  src={`${import.meta.env.BASE_URL}${member.photo.replace(/^\//, "")}`}
                  alt={member.name}
                  className={`h-full w-full object-cover ${member.name === "Prof. Hongliang Ren" ? "object-top" : ""}`}
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{member.name}</p>
                {member.affiliation && (
                  <p className="text-xs text-muted-foreground">{member.affiliation}</p>
                )}
                {member.country && (
                  <p className="text-xs text-muted-foreground/70">{member.country}</p>
                )}
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>

    </div>
  </section>
);

export default TeamSection;
