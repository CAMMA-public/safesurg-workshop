import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import OverviewSection from "@/components/OverviewSection";
import TimelineSection from "@/components/TimelineSection";
import ProgramSection from "@/components/ProgramSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <NewsSection />
      <OverviewSection />
      <TimelineSection />
      <ProgramSection />
      <TeamSection />
    </main>
    <Footer />
  </>
);

export default Index;
