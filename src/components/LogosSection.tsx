import FadeInSection from "@/components/FadeInSection";

const base = import.meta.env.BASE_URL;

const logos = [
  { name: "University of Strasbourg", src: `${base}logos/Université_de_Strasbourg.svg.png`, imageClassName: "max-h-[3.5rem] max-w-[150px]" },
  { name: "IHU Strasbourg", src: "https://www.ihu-strasbourg.eu/wp-content/uploads/2024/02/logo_ihu_en_3.svg", imageClassName: "max-h-[4.5rem] max-w-[180px]" },
  { name: "European Research Council", src: `${base}logos/LOGO-ERC.png`, imageClassName: "max-h-[4.5rem] max-w-[180px]" },
  { name: "University College London", src: "https://cdn.ucl.ac.uk/logos/ucl/ucl-logo--primary.svg", imageClassName: "max-h-10 max-w-[100px]" },
  { name: "Chinese University of Hong Kong", src: `${base}logos/CUHK_7bbbc2a3e2.png`, imageClassName: "max-h-10 max-w-[100px]" },
  { name: "Samsung Robotics Institute", src: "https://cdn.codeground.org/nsr/images/layout/logo-sr.png", imageClassName: "max-h-10 max-w-[100px]" },
  { name: "Policlinico Gemelli", src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Logo-policlinico-gemelli_nuovo.png", imageClassName: "max-h-10 max-w-[100px]" },
];

const LogosSection = () => (
  <section className="py-12 px-6 md:px-8 lg:px-16 xl:px-24 border-t border-border">
    <div className="mx-auto max-w-5xl">
      <FadeInSection>
        <div className="grid grid-cols-3 gap-x-8 gap-y-4 items-center justify-items-center">
          {logos.slice(0, 3).map((logo) => (
            <div key={logo.name} className="flex items-center justify-center w-full h-20">
              <img
                src={logo.src}
                alt={logo.name}
                title={logo.name}
                className={`w-auto object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0 ${logo.imageClassName}`}
              />
            </div>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-4 gap-x-8 gap-y-4 items-center justify-items-center">
          {logos.slice(3).map((logo) => (
            <div key={logo.name} className="flex items-center justify-center w-full h-12">
              <img
                src={logo.src}
                alt={logo.name}
                title={logo.name}
                className={`w-auto object-contain opacity-40 grayscale transition-all hover:opacity-100 hover:grayscale-0 ${logo.imageClassName}`}
              />
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  </section>
);

export default LogosSection;
