import FadeInSection from "@/components/FadeInSection";

const base = import.meta.env.BASE_URL;

const keynotes = [
  {
    name: "Prof. Dr. Nassir Navab",
    affiliation: "Chair of Computer Aided Medical Procedures & Augmented Reality, TU Munich",
    photo: `${base}keynotes/nassir-navab.png`,
    photoPosition: "center center",
    pattern: "orbit",
    talk: "Building holistic and trustworthy AI systems for the OR",
  },
  {
    name: "Prof. Dr. Dan Hashimoto",
    affiliation: "Assistant Professor of Surgery, Hospital of the University of Pennsylvania",
    photo: `${base}keynotes/dan-hashimoto.jpg`,
    photoPosition: "center 18%",
    pattern: "field",
    talk: "AI-driven error detection in surgery: a clinical perspective",
  },
];

const KeynotePortrait = ({
  src,
  alt,
  position,
  pattern,
  className,
}: {
  src: string;
  alt: string;
  position?: string;
  pattern?: "orbit" | "field";
  className?: string;
}) => (
  <div className={`relative shrink-0 ${className ?? "h-44 w-44"}`}>
    <div className="absolute inset-[4px] rounded-full border border-[#185FA5]/65" />
    {pattern === "field" ? (
      <svg viewBox="0 0 176 176" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        <circle cx="136" cy="40" r="4" fill="#4A8FD9" opacity="0.88" />
        <circle cx="40" cy="125" r="3.2" fill="#4A8FD9" opacity="0.68" />
        <circle cx="136" cy="101" r="2.8" fill="#185FA5" opacity="0.62" />
        <path d="M118 123c7 6 13 10 19 14" fill="none" stroke="#D9A066" strokeWidth="1.5" strokeLinecap="round" opacity="0.78" />
        <circle cx="117" cy="122" r="2.1" fill="#D9A066" opacity="0.88" />
      </svg>
    ) : (
      <svg viewBox="0 0 176 176" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        <path d="M28 92c11-30 35-51 66-58" fill="none" stroke="#4A8FD9" strokeWidth="1.6" strokeLinecap="round" opacity="0.75" />
        <path d="M114 124c8 5 14 9 20 15" fill="none" stroke="#D9A066" strokeWidth="1.6" strokeLinecap="round" opacity="0.85" />
        <circle cx="113" cy="123" r="2.4" fill="#D9A066" opacity="0.9" />
        <circle cx="44" cy="52" r="3.2" fill="#185FA5" opacity="0.75" />
        <circle cx="135" cy="52" r="3.8" fill="#4A8FD9" opacity="0.85" />
      </svg>
    )}
    <div className="absolute inset-[12px] overflow-hidden rounded-full border border-[#185FA5]/8 bg-[#F4F1EA]">
      <img src={src} alt={alt} className="h-full w-full object-cover" style={{ objectPosition: position }} />
    </div>
  </div>
);

const KeynotesSection = () => (
  <section id="keynotes" className="relative overflow-hidden section-padding">
    <div className="mx-auto max-w-5xl">
      <FadeInSection>
        <div className="flex items-center gap-4">
          <div className="h-0.5 w-20 rounded-full bg-[#D9A066]" />
          <h2
            className="text-[2.3rem] leading-none text-primary md:text-[2.8rem]"
            style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "normal", fontWeight: 500 }}
          >
            Keynotes
          </h2>
        </div>
      </FadeInSection>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {keynotes.map((speaker, i) => (
          <FadeInSection key={speaker.name} delay={i * 0.12}>
            <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-[#185FA5]/10 bg-white px-5 py-5 shadow-[0_16px_50px_rgba(10,22,40,0.06)]">
              {speaker.pattern === "orbit" ? (
                <>
                  <div className="pointer-events-none absolute -right-5 -top-5 h-16 w-16 rounded-full border border-[#4A8FD9]/10 md:-right-6 md:-top-6 md:h-20 md:w-20" />
                  <div className="pointer-events-none absolute right-10 top-8 hidden h-px w-20 rotate-[22deg] bg-[#D9A066]/24 lg:block" />
                  <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-[linear-gradient(180deg,#D9A066,#185FA5)]" />
                </>
              ) : (
                <>
                  <div className="pointer-events-none absolute right-5 top-5 h-14 w-14 rounded-full border border-[#185FA5]/9 md:right-6 md:top-6 md:h-16 md:w-16" />
                  <div className="pointer-events-none absolute right-10 bottom-9 hidden h-px w-[4.5rem] rotate-[-26deg] bg-[#D9A066]/18 lg:block" />
                  <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-[linear-gradient(180deg,#4A8FD9,#185FA5)]" />
                </>
              )}

              <div className="flex flex-col items-center gap-5 text-center md:flex-row md:items-start md:gap-6 md:text-left">
                <KeynotePortrait
                  src={speaker.photo}
                  alt={speaker.name}
                  position={speaker.photoPosition}
                  pattern={speaker.pattern}
                  className="h-32 w-32 md:h-44 md:w-44"
                />
                <div className="flex flex-col gap-2 md:flex-1 md:pt-2">
                  <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#0C447C]/60">
                    Keynote Speaker
                  </p>
                  <p className="text-base font-semibold leading-snug text-primary md:text-lg">
                    {speaker.talk}
                  </p>
                  <div>
                    <p className="text-sm font-medium text-foreground">{speaker.name}</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">{speaker.affiliation}</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

export default KeynotesSection;
