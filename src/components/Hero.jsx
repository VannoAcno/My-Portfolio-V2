import { Button } from "@/components/ui/button";
import { ExternalLink, Download } from "lucide-react";

/**
 * HERO SECTION COMPONENT
 * Full-screen landing section with post-apocalyptic theme
 * Features: Animated particles, system notification panel, glitch text effects
 */
export default function HeroSection({ onNavigateToProjects }) {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 via-gray-900 to-black pt-16"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;100&quot; height=&quot;100&quot; viewBox=&quot;0 0 100 100&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;%23003d5c&quot; fillOpacity=&quot;0.1&quot;%3E%3Cpolygon points=&quot;50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40&quot;/%3E%3C/g%3E%3C/svg%3E')] opacity-30 animate-pulse"></div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(30)].map((_, i) => {
          const left = Math.random() * 100;
          const size = Math.random() * 4 + 5;
          const delay = Math.random() * 10;

          return (
            <div
              key={i}
              className="absolute bg-blue-400 rounded-full blur-sm animate-rise"
              style={{
                left: `${left}%`,
                bottom: '-10px',
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      {/* Hero Content */}
      <div className="text-center z-10 px-4 max-w-5xl mx-auto">
        {/* System Notification Panel */}
        <div className="mb-8">
          {/* (Kosong, bisa kamu isi sistem notifikasi nanti) */}
        </div>

        {/* Main Hero Title */}
        <h1 className="sm:text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
          You are now reading
          <br />
          <span className="glitch-text text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            [Stevano Valentino Verant's] Portfolio
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-2xl md:text-3xl mb-10 text-blue-300 font-mono">
          <span className="animate-pulse text-cyan-400">▶</span> A scenario has begun
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            className="system-button bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-mono text-lg px-10 py-4 border-2 border-blue-300 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/50"
            onClick={onNavigateToProjects}
          >
            <ExternalLink className="mr-3 h-6 w-6" />
            View Projects
          </Button>
          <Button
            variant="outline"
            className="system-button border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-gray-900 font-mono text-lg px-10 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50"
          >
            <Download className="mr-3 h-6 w-6" />
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
}
