import FadeInSection from "@/components/FadeInSection";

const base = import.meta.env.BASE_URL;

const logos = [
  { name: "University of Strasbourg", src: `${base}logos/Université_de_Strasbourg.svg.png`, imageClassName: "max-h-[4rem] max-w-[190px]" },
  { name: "IHU Strasbourg", src: "https://www.ihu-strasbourg.eu/wp-content/uploads/2024/02/logo_ihu_en_3.svg", imageClassName: "max-h-[5rem] max-w-[220px]" },
  { name: "European Research Council", src: `${base}logos/LOGO-ERC.png`, imageClassName: "max-h-[3.75rem] max-w-[165px] -translate-y-1" },
  { name: "ENACT AI", src: `${base}logos/Custer IA Grand Est ENACT - LOGO_noir_PNG(2).png`, imageClassName: "max-h-[4rem] max-w-[230px] translate-y-0.5" },
  { name: "ITI HealthTech", src: `${base}logos/iti_healthtech.png`, imageClassName: "max-h-[3.75rem] max-w-[270px] translate-y-0.5" },
  { name: "NVIDIA", src: `${base}logos/nvidia-logo-horz.svg`, imageClassName: "max-h-[4.9rem] max-w-[285px] translate-y-0.5" },
  { name: "University College London", src: "https://www.ucl.ac.uk/brand-and-experience/sites/brand_and_experience/files/styles/all_size_mobile_16_9/public/2026-01/brand-VI-logo-horizontal-fullcolour.png.jpg?itok=fYM0Bm3E", imageClassName: "max-h-12 max-w-[120px]" },
  { name: "Chinese University of Hong Kong", src: `${base}logos/CUHK_7bbbc2a3e2.png`, imageClassName: "max-h-12 max-w-[120px]" },
  { name: "Samsung Robotics Institute", src: "https://cdn.codeground.org/nsr/images/layout/logo-sr.png", imageClassName: "max-h-12 max-w-[120px]" },
  { name: "Policlinico Gemelli", src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Logo-policlinico-gemelli_nuovo.png", imageClassName: "max-h-12 max-w-[120px]" },
];

const LogosSection = () => (
  <section className="py-12 px-6 md:px-8 lg:px-16 xl:px-24 border-t border-border">
    <div className="mx-auto max-w-5xl">
      <FadeInSection>
        <div className="grid grid-cols-1 items-center justify-items-center gap-x-14 gap-y-6 sm:grid-cols-3">
          {logos.slice(0, 3).map((logo) => (
            <div key={logo.name} className="flex h-20 w-full items-center justify-center">
              <img
                src={logo.src}
                alt={logo.name}
                title={logo.name}
                className={`block w-auto object-contain ${logo.imageClassName}`}
              />
            </div>
          ))}
        </div>
        <div className="mt-7 grid grid-cols-1 items-center justify-items-center gap-x-14 gap-y-6 sm:grid-cols-3">
          {logos.slice(3, 6).map((logo) => (
            <div key={logo.name} className="flex h-20 w-full items-center justify-center">
              <img
                src={logo.src}
                alt={logo.name}
                title={logo.name}
                className={`block w-auto object-contain ${logo.imageClassName}`}
              />
            </div>
          ))}
        </div>
        <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-4 items-center justify-items-center sm:grid-cols-4">
          {logos.slice(6).map((logo) => (
            <div key={logo.name} className="flex items-center justify-center w-full h-14">
              <img
                src={logo.src}
                alt={logo.name}
                title={logo.name}
                className={`w-auto object-contain ${logo.imageClassName}`}
              />
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  </section>
);

export default LogosSection;
