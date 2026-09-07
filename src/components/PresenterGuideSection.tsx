import FadeInSection from "@/components/FadeInSection";
import {
  CalendarDays,
  Clock3,
  ExternalLink,
  FileImage,
  Mail,
  MapPin,
  Presentation,
  UserRoundCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const workshopEmail = "safesurgworkshop@gmail.com";

const PresenterGuideSection = () => (
  <>
    <section className="relative overflow-hidden bg-primary px-6 pb-16 pt-24 md:px-8 md:pt-32 lg:px-16 xl:px-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(74,143,217,0.18),transparent_24%),radial-gradient(circle_at_82%_24%,rgba(217,160,102,0.12),transparent_18%),linear-gradient(180deg,rgba(10,22,40,0.98),rgba(10,22,40,0.92))]" />
      <div className="pointer-events-none absolute inset-0 hero-stripes opacity-50" />

      <div className="relative mx-auto max-w-6xl">
        <FadeInSection>
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-white/55 backdrop-blur-sm">
              MICCAI 2026 Satellite Event
            </span>
            <h1
              className="mt-7 text-5xl leading-[0.94] text-[#F4F1EA] md:text-6xl lg:text-7xl"
              style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "normal", fontWeight: 500 }}
            >
              Presentation Guidelines
            </h1>
            <div className="mt-7 flex flex-col gap-3 border-l-2 border-[#D9A066] pl-4 text-sm font-semibold text-[#F4F1EA] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:text-base">
              <span className="inline-flex items-center gap-2"><CalendarDays size={18} className="text-[#D9A066]" />October 1, 2026</span>
              <span className="inline-flex items-center gap-2"><Clock3 size={18} className="text-[#D9A066]" />11:30-18:00 hours</span>
              <span className="inline-flex items-center gap-2"><MapPin size={18} className="text-[#D9A066]" />Room Luxembourg</span>
            </div>
            <Link to="/program" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#F4F1EA] underline decoration-[#D9A066] underline-offset-4 transition-colors hover:text-[#D9A066]">
              View the Workshop program
              <ExternalLink size={14} />
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>

    <section className="px-6 py-16 md:px-8 md:py-20 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-5xl">
        <FadeInSection>
          <div className="overflow-hidden rounded-lg border border-[#D9A066]/45 bg-[#FFF8EC] shadow-[0_16px_48px_rgba(10,22,40,0.06)]">
            <div className="h-1 bg-[#D9A066]" />
            <div className="flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D9A066]/18 text-[#0C447C]">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-base leading-7 text-[#0A1628]">
                  Please send us the <strong>name and email of the presenting author</strong> by <strong>11 September 2026</strong>, so we can contact them about the presentation on the workshop day.
                </p>
                <a href={`mailto:${workshopEmail}`} className="mt-3 inline-flex text-sm font-semibold text-[#0C447C] underline underline-offset-4 hover:text-[#D9A066]">
                  {workshopEmail}
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>

        <div className="mt-14 pb-14">
          <FadeInSection delay={0.1}>
            <div className="flex max-w-4xl gap-4">
              <UserRoundCheck size={22} className="mt-1 shrink-0 text-[#4A8FD9]" />
              <div>
                <h2 className="text-xl font-semibold text-primary">Presenter registration</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Please ensure that the presenting author is registered for the correct workshop day, <strong className="text-foreground">1 October</strong>, as required by MICCAI policy.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>

        <FadeInSection>
          <div className="mt-14 flex items-center gap-4">
            <div className="h-0.5 w-16 bg-[#D9A066]" />
            <h2
              className="text-[2.3rem] leading-none text-primary md:text-[2.8rem]"
              style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "normal", fontWeight: 500 }}
            >
              What to prepare
            </h2>
          </div>
        </FadeInSection>

        <div className="mt-9 divide-y divide-[#185FA5]/12">
          <FadeInSection delay={0.04}>
            <article className="flex gap-5 py-7">
              <FileImage size={22} className="mt-1 shrink-0 text-[#D9A066]" />
              <div>
                <h3 className="text-xl font-semibold text-primary">Poster</h3>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-muted-foreground">
                  <strong className="text-foreground">All</strong> accepted papers, including papers invited to give an oral presentation, have an assigned poster session. Prepare the printed poster in <strong className="text-foreground">PORTRAIT</strong> format. The printed poster must not exceed <strong className="text-foreground">A0 size</strong> (33.1 x 46.8 in / 841 x 1189 mm).
                </p>
              </div>
            </article>
          </FadeInSection>

          <FadeInSection delay={0.08}>
            <article className="flex gap-5 py-7">
              <Presentation size={22} className="mt-1 shrink-0 text-[#4A8FD9]" />
              <div>
                <h3 className="text-xl font-semibold text-primary">Short teaser presentation</h3>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-muted-foreground">
                  The teaser presentation allows the audience to get to know your work and then extend the discussions during the poster session. Prepare a 1-2 min presentation (should strictly not extend 2 minutes). You may use a <strong className="text-foreground">maximum of 2 slides</strong>. Please make the slides preferably with Microsoft PowerPoint in 16:9 aspect ratio. Please upload this presentation using the Dropbox link sent to you by email by <strong className="text-foreground">21st September</strong>, so we can check everything from our end. Please name the presentation using this convention:
                </p>
                <p className="mt-3 break-words font-mono text-xs text-[#0C447C]">SafeSurg_Teaser_&lt;Submission_number&gt;.ppt</p>
              </div>
            </article>
          </FadeInSection>

          <FadeInSection delay={0.12}>
            <article className="flex gap-5 py-7">
              <Clock3 size={22} className="mt-1 shrink-0 text-[#D9A066]" />
              <div>
                <h3 className="text-xl font-semibold text-primary">Long oral</h3>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-muted-foreground">
                  Authors selected for a long oral have an <strong className="text-foreground">8-minute presentation</strong> followed by 4 minutes of questions. Please make your slides preferably with Microsoft PowerPoint in 16:9 aspect ratio and upload your prepared presentation using the Dropbox link sent to you by email by <strong className="text-foreground">23rd September</strong>. Please name the presentation using this convention:
                </p>
                <p className="mt-3 break-words font-mono text-xs text-[#0C447C]">SafeSurg_LongOral_&lt;Submission_number&gt;.ppt</p>
              </div>
            </article>
          </FadeInSection>

          <FadeInSection delay={0.16}>
            <article className="flex gap-5 py-7">
              <Clock3 size={22} className="mt-1 shrink-0 text-[#4A8FD9]" />
              <div>
                <h3 className="text-xl font-semibold text-primary">Short oral</h3>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-muted-foreground">
                  The short oral presentation is for <strong className="text-foreground">5 minutes</strong> (strictly 5 minutes), with 1 minute of questions. Please make your slides preferably with Microsoft PowerPoint in 16:9 aspect ratio and upload the presentation using the Dropbox link sent to you by email by <strong className="text-foreground">23rd September</strong>, so we can check if everything works from our end. Please name the presentation using this convention:
                </p>
                <p className="mt-3 break-words font-mono text-xs text-[#0C447C]">SafeSurg_ShortOral_&lt;Submission_number&gt;.ppt</p>
              </div>
            </article>
          </FadeInSection>
        </div>
      </div>
    </section>
  </>
);

export default PresenterGuideSection;
