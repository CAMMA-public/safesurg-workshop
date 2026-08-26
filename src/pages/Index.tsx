import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NewsSidebar from "@/components/NewsSidebar";
import OverviewSection from "@/components/OverviewSection";
import TimelineSection from "@/components/TimelineSection";
import TeamSection from "@/components/TeamSection";
import LogosSection from "@/components/LogosSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main className="relative">
      <HeroSection />
      {/* Two-column layout: sidebar on right (lg+), inline news on smaller screens */}
      <div className="relative">
        {/* Sidebar — desktop only, absolutely positioned right */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-80 xl:w-96 border-l border-border bg-background z-10">
          <div className="sticky top-20 px-6 overflow-y-auto max-h-[calc(100vh-5rem)]">
            <NewsSidebar />
          </div>
        </div>
        {/* Main content */}
        <div className="lg:pr-80 xl:pr-96">
          {/* News shown inline on smaller screens */}
          <div className="lg:hidden px-6 pt-8 pb-2 md:px-8 border-b border-border">
            <NewsSidebar />
          </div>
          <OverviewSection />
          <TimelineSection />
          <TeamSection />
          <LogosSection />
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Index;
