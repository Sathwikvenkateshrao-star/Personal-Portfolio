import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { WhyWorkWithMe } from "./components/WhyWorkWithMe";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { ParticleBackground } from "./components/ParticleBackground";
import { CustomCursor } from "./components/CustomCursor";
import { LoadingScreen } from "./components/LoadingScreen";
import { PageTransition } from "./components/PageTransition";
import { ScrollProgress } from "./components/ScrollProgress";
import { ScrollToTop } from "./components/ScrollToTop";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { SectionTransition } from "./components/SectionTransition";
import { useEffect, useState } from "react";

export default function App() {
  useSmoothScroll();
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 relative cursor-none">
      {showLoading && <LoadingScreen />}
      <ScrollProgress />
      <ScrollToTop />
      <CustomCursor />
      <ParticleBackground />
      <PageTransition>
        <div className="relative z-10">
          <Navigation />
          <SectionTransition>
            <Hero />
          </SectionTransition>
          <SectionTransition>
            <About />
          </SectionTransition>
          <SectionTransition>
            <Services />
          </SectionTransition>
          <SectionTransition>
            <Portfolio />
          </SectionTransition>
          <SectionTransition>
            <WhyWorkWithMe/>
          </SectionTransition>
          <SectionTransition>
            <Contact />
          </SectionTransition>
        </div>
      </PageTransition>
    </div>
  );
}