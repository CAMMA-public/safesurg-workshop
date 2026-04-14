import { siteConfig } from "@/config/content";
import FadeInSection from "@/components/FadeInSection";

const TeamPortrait = ({
  src,
  alt,
  position,
  pattern,
}: {
  src: string;
  alt: string;
  position?: string;
  pattern: "orbit" | "field";
}) => (
  <div className="relative h-32 w-32 shrink-0">
    <div className="absolute inset-[4px] rounded-full border border-[#185FA5]/65" />
    {pattern === "field" ? (
      <svg viewBox="0 0 128 128" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        <circle cx="97" cy="30" r="3.4" fill="#4A8FD9" opacity="0.88" />
        <circle cx="30" cy="92" r="3" fill="#4A8FD9" opacity="0.68" />
        <path d="M88 88c6 4 10 8 15 11" fill="none" stroke="#D9A066" strokeWidth="1.4" strokeLinecap="round" opacity="0.78" />
        <circle cx="87" cy="87" r="1.9" fill="#D9A066" opacity="0.88" />
      </svg>
    ) : (
      <svg viewBox="0 0 128 128" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        <path d="M20 68c8-22 25-37 48-43" fill="none" stroke="#4A8FD9" strokeWidth="1.4" strokeLinecap="round" opacity="0.72" />
        <path d="M82 88c5 4 10 8 15 11" fill="none" stroke="#D9A066" strokeWidth="1.4" strokeLinecap="round" opacity="0.82" />
        <circle cx="81" cy="87" r="1.9" fill="#D9A066" opacity="0.9" />
        <circle cx="98" cy="38" r="3.1" fill="#185FA5" opacity="0.74" />
      </svg>
    )}
    <div className="absolute inset-[11px] overflow-hidden rounded-full border border-[#185FA5]/8 bg-[#F4F1EA]">
      <img src={src} alt={alt} className="h-full w-full object-cover" style={{ objectPosition: position }} />
    </div>
  </div>
);

const TeamSection = () => (
  <section id="team" className="relative overflow-hidden pt-12 pb-20 px-6 md:pb-28 md:px-8 lg:px-16 xl:px-24 section-alt">
    <div className="pointer-events-none absolute -left-12 top-24 h-32 w-32 rounded-full border border-[#4A8FD9]/8" />
    <div className="pointer-events-none absolute right-[-2rem] bottom-16 h-24 w-24 rounded-full border border-[#185FA5]/8" />
    <div className="pointer-events-none absolute left-[18%] bottom-20 hidden h-px w-28 rotate-[24deg] bg-[#D9A066]/22 md:block" />
    <div className="mx-auto max-w-5xl">
      <FadeInSection>
        <div className="flex items-center gap-4">
          <div className="h-0.5 w-20 rounded-full bg-[#D9A066]" />
          <h2
            className="text-[2.3rem] leading-none text-primary md:text-[2.8rem]"
            style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "normal", fontWeight: 500 }}
          >
            Team
          </h2>
        </div>
      </FadeInSection>

      <div className="mt-10 grid gap-x-5 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
        {siteConfig.team.organizers.map((member, i) => (
          <FadeInSection key={i} delay={i * 0.08}>
            <div className="flex flex-col items-center gap-3 px-2 text-center">
              <TeamPortrait
                src={`${import.meta.env.BASE_URL}${member.photo.replace(/^\//, "")}`}
                alt={member.name}
                position={member.name === "Prof. Hongliang Ren" ? "center top" : "center center"}
                pattern={i % 2 === 0 ? "orbit" : "field"}
              />
              <div>
                <p className="text-sm font-semibold text-foreground">{member.name}</p>
                {member.affiliation && (
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{member.affiliation}</p>
                )}
                {member.country && (
                  <p className="mt-1 text-xs text-muted-foreground/70">{member.country}</p>
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
