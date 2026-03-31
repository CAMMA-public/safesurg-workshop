import FadeInSection from "@/components/FadeInSection";

const base = import.meta.env.BASE_URL;

const keynotes = [
  {
    name: "Prof. Dr. Nassir Navab",
    affiliation: "Chair of Computer Aided Medical Procedures & Augmented Reality, TU Munich",
    photo: `${base}keynotes/nassir-navab.png`,
    talk: "Building holistic and trustworthy AI systems for the OR",
  },
  {
    name: "Prof. Dr. Dan Hashimoto",
    affiliation: "Assistant Professor of Surgery, Hospital of the University of Pennsylvania",
    photo: `${base}keynotes/dan-hashimoto.jpg`,
    talk: "AI-driven error detection in surgery: a clinical perspective",
  },
];

const KeynotesSection = () => (
  <section id="keynotes" className="section-padding">
    <div className="mx-auto max-w-5xl">
      <FadeInSection>
        <h2 className="text-3xl font-bold tracking-tight text-primary">Keynotes</h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-accent" />
      </FadeInSection>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {keynotes.map((speaker, i) => (
          <FadeInSection key={speaker.name} delay={i * 0.12}>
            <div className="flex items-start gap-5 rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full bg-accent/10">
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 pt-1">
                <p className="text-base font-semibold leading-snug text-primary">
                  {speaker.talk}
                </p>
                <div>
                  <p className="text-sm font-medium text-foreground">{speaker.name}</p>
                  <p className="text-xs text-muted-foreground">{speaker.affiliation}</p>
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
