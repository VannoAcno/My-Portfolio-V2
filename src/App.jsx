import { useState } from "react";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import ProjectsSection from "./components/Project";
import StatsSection from "./components/Stats";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/Load";

function App() {
  const projectRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigateToProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div>
        {!isLoading && <LoadingScreen onFinish={() => setIsLoading(true)} />}

        {isLoading && (
          <>
            <Navbar />
            <HeroSection onNavigateToProjects={handleNavigateToProjects} />
            <AboutSection />
            <div ref={projectRef}>
              <ProjectsSection />
            </div>
            <StatsSection />
            <ContactSection />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
