import FadeInSection from "@/components/FadeInSection";

const logos = [
  { name: "IHU Strasbourg", src: "https://www.ihu-strasbourg.eu/wp-content/uploads/2024/02/logo_ihu_en_3.svg", wide: false },
  { name: "University of Strasbourg", src: "/logos/Universität_Straßburg_logo.svg.png", wide: false },
  { name: "European Research Council", src: "/logos/LOGO-ERC.png", wide: false },
  { name: "University College London", src: "https://cdn.ucl.ac.uk/logos/ucl/ucl-logo--primary.svg", wide: false },
  { name: "Chinese University of Hong Kong", src: "/logos/CUHK_7bbbc2a3e2.png", wide: false },
  { name: "Samsung Robotics Institute", src: "https://cdn.codeground.org/nsr/images/layout/logo-sr.png", wide: false },
  { name: "Policlinico Gemelli", src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Logo-policlinico-gemelli_nuovo.png", wide: false },
];

const LogosSection = () => (
  <section className="py-12 px-6 md:px-8 lg:px-16 xl:px-24 border-t border-border">
    <div className="mx-auto max-w-5xl">
      <FadeInSection>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-x-8 gap-y-8 items-center justify-items-center">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center w-full h-14">
              <img
                src={logo.src}
                alt={logo.name}
                title={logo.name}
                className={`max-h-12 w-auto object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0 ${logo.wide ? "max-w-[200px]" : "max-w-[120px]"}`}
              />
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          This workshop is sponsored by the ERC funded{" "}
          <span className="font-medium text-foreground">CompSURG</span> project and the{" "}
          <span className="font-medium text-foreground">IHU Strasbourg</span>, France.
        </p>
      </FadeInSection>
    </div>
  </section>
);

export default LogosSection;
