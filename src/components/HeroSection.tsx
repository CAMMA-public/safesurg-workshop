import { siteConfig } from "@/config/content";
import FadeInSection from "@/components/FadeInSection";
import { ArrowRight, ExternalLink } from "lucide-react";

const SUBMIT_URL = "https://openreview.net/group?id=MICCAI.org/2026/Workshop/SafeSurg";

const MasterMark = () => (
  <div className="relative mx-auto w-full max-w-[440px]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(217,160,102,0.1),_transparent_52%)] blur-2xl" />
    <svg viewBox="0 0 280 280" className="relative h-auto w-full" aria-hidden="true">
      <g transform="translate(140, 140)">
        <path d="M 91.74 -24.59 A 95 95 0 0 1 -24.59 91.74" fill="none" stroke="#D9A066" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M -91.74 24.59 A 95 95 0 0 1 -24.59 -91.74" fill="none" stroke="#D9A066" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="0" cy="0" r="15" fill="none" stroke="#185FA5" strokeWidth="1" />
        <circle cx="58" cy="1" r="17" fill="none" stroke="#185FA5" strokeWidth="1" />
        <circle cx="29" cy="-51" r="14" fill="none" stroke="#185FA5" strokeWidth="1" />
        <circle cx="-30" cy="-49" r="18" fill="none" stroke="#185FA5" strokeWidth="1" />
        <circle cx="-58" cy="1" r="15" fill="none" stroke="#185FA5" strokeWidth="1" />
        <circle cx="-28" cy="51" r="17" fill="none" stroke="#185FA5" strokeWidth="1" />
        <circle cx="30" cy="50" r="14" fill="none" stroke="#185FA5" strokeWidth="1" />
        <line x1="0" y1="-122" x2="0" y2="-106" stroke="#0C447C" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="0" y1="106" x2="0" y2="122" stroke="#0C447C" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="-122" y1="0" x2="-106" y2="0" stroke="#0C447C" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="106" y1="0" x2="122" y2="0" stroke="#0C447C" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="67.18" cy="67.18" r="4" fill="#D9A066" />
      </g>
    </svg>
  </div>
);

const HeroSection = () => (
  <section className="relative overflow-hidden bg-primary px-6 pt-24 pb-14 md:px-8 md:pt-32 md:pb-20 lg:px-16 xl:px-24">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(74,143,217,0.18),transparent_28%),radial-gradient(circle_at_82%_24%,rgba(217,160,102,0.14),transparent_20%),linear-gradient(180deg,rgba(10,22,40,0.98),rgba(10,22,40,0.92))]" />
    <div className="pointer-events-none absolute inset-0 hero-stripes opacity-60" />
    <div className="pointer-events-none absolute -top-28 left-[10%] h-72 w-72 rounded-full border border-[#4A8FD9]/20" />
    <div className="pointer-events-none absolute -right-16 top-24 h-96 w-96 rounded-full border border-[#4A8FD9]/10" />

    <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
      <FadeInSection>
        <div className="max-w-xl text-left">
          <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-white/55 backdrop-blur-sm">
            {siteConfig.conference}
          </span>

          <h1
            className="mt-6 text-5xl leading-[0.94] text-[#F4F1EA] md:text-6xl lg:text-7xl"
            style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "normal", fontWeight: 500 }}
          >
            <span className="text-[#F4F1EA]">Safe</span>
            <span
              className="mx-[-0.04em] inline-block text-[#D9A066]"
              style={{ fontWeight: 400 }}
              aria-hidden="true"
            >
              /
            </span>
            <span className="text-[#4A8FD9]">Surg</span>
          </h1>

          <p className="mt-5 max-w-2xl text-2xl leading-tight text-[#F4F1EA] md:text-3xl">
            First Workshop on AI for Safe Surgery
          </p>

          <p className="mt-6 text-xs uppercase tracking-[0.28em] text-[#4A8FD9]">
            Sept 27 - Oct 1, 2026, Strasbourg, France
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SUBMIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md gradient-accent px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-transform hover:scale-[1.02]"
            >
              <ExternalLink size={16} />
              Submit
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdrzGCAp2-sE1CuPg80EwPpjRpzYeTOwCWCQio7s38B_8C5jQ/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Review for SafeSurg
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-8 flex w-fit flex-wrap items-center gap-10 rounded-2xl border border-white/10 bg-[#F4F1EA] px-6 py-4 shadow-[0_30px_80px_rgba(0,0,0,0.22)]">
            <a href="https://camma.unistra.fr" target="_blank" rel="noopener noreferrer">
              <img
                src={`${import.meta.env.BASE_URL}logos/camma.png`}
                alt="CAMMA"
                className="h-8 w-auto object-contain md:h-10"
              />
            </a>
            <img
              src="https://www.ihu-strasbourg.eu/wp-content/uploads/2024/02/logo_ihu_en_3.svg"
              alt="IHU Strasbourg"
              className="h-8 w-auto object-contain md:h-10"
            />
          </div>
        </div>
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <div className="relative">
          <MasterMark />
        </div>
      </FadeInSection>
    </div>
  </section>
);

export default HeroSection;
