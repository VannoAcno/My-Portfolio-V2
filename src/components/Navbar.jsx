import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll } from "motion/react";
import Ss from "../assets/LogoSs.png";

/**
 * NAVIGATION COMPONENT
 * Fixed top navigation bar with system toolbar styling
 */
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    } else {
      console.warn("Section not found:", id);
    }
  };

  const sections = ["home", "about", "gallery", "stats", "contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-blue-400/30">
      {/* Scroll indicator */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 85,
          left: 0,
          right: 0,
          height: 3,
          originX: 0,
          backgroundColor: "#00bfff",
          boxShadow: `0 0 8px #00bfff, 0 0 16px #00bfff, 0 0 24px #00bfff`,
          zIndex: 9999,
        }}
      />
      {/* Scroll indicator */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 85,
          left: 0,
          right: 0,
          height: 3,
          originX: 1,
          backgroundColor: "#00bfff",
          boxShadow: `0 0 8px #00bfff, 0 0 16px #00bfff, 0 0 24px #00bfff`,
          zIndex: 9999,
        }}
      />

      <div className="w-full px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Only */}
          <div className="flex items-center ml-4 sm:ml-12 md:ml-20">
            <img
              src={Ss}
              alt="Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="px-6 py-2 font-mono text-xl text-blue-300 hover:text-blue-400 transition-colors"
              >
                [{section.toUpperCase()}]
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-blue-400 hover:text-blue-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-400/30">
            <div className="flex flex-col space-y-2">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="px-4 py-2 font-mono text-sm text-left text-blue-300 hover:text-blue-400 transition-colors"
                >
                  [{section.toUpperCase()}]
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
