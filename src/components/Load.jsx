import { useState, useEffect } from "react";

// TYPING ANIMATION SUBCOMPONENT
function TypingAnimation({ text, speed = 100, className = "" }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
  }, [text]);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-pulse text-cyan-400">|</span>
      )}
    </span>
  );
}

// MAIN LOADING SCREEN
export default function LoadingScreen({ onFinish = () => {} }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 3 + 1;
      });
    }, 120);

    const dismissTimer = setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, 7300);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(dismissTimer);
    };
  }, [onFinish]);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 4,
    size: Math.random() * 3 + 1,
  }));

  if (!isVisible) return null;

  return (
    <>
      {/* Global CSS for animations */}
      <style>{`
        @keyframes glitch {
          0%, 100% { transform: translate(0); filter: hue-rotate(0deg); }
          10%, 50%, 90% { transform: translate(-2px, 2px); filter: hue-rotate(90deg); }
          20%, 60%, 80% { transform: translate(-2px, -2px); filter: hue-rotate(180deg); }
          30%, 70% { transform: translate(2px, 2px); filter: hue-rotate(270deg); }
          40% { transform: translate(2px, -2px); filter: hue-rotate(360deg); }
        }

        @keyframes scan {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          25% { transform: translate(10px, -15px) scale(1.2); opacity: 1; }
          50% { transform: translate(-5px, -25px) scale(0.8); opacity: 0.4; }
          75% { transform: translate(-15px, -10px) scale(1.1); opacity: 0.8; }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff;
          }
          50% {
            box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
          }
        }

        .glitch-text {
          animation: glitch 0.3s infinite;
          text-shadow: 2px 0 #ff0040, -2px 0 #00ff80, 0 0 10px #00ffff;
        }

        .scanning-line {
          animation: scan 2s linear infinite;
        }

        .floating-particle {
          animation: float infinite ease-in-out;
        }

        .progress-glow {
          animation: pulse-glow 1.5s infinite;
        }
      `}</style>

      <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center font-mono overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Scanning Line */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="scanning-line absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((p) => (
            <div
              key={p.id}
              className="floating-particle absolute bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center">
          <div className="mb-8 text-cyan-300 text-sm tracking-wider opacity-80">
            [ DOKKAEBI SYSTEM INTERFACE ]
          </div>

          <h1 className="glitch-text text-4xl md:text-6xl font-bold text-cyan-400 mb-12 tracking-wider">
            INITIALIZING SCENARIO...
          </h1>

          {/* Progress Bar */}
          <div className="w-80 md:w-96 mx-auto">
            <div className="relative mb-4">
              <div className="w-full h-3 bg-gray-900 border border-cyan-500/30 rounded-sm overflow-hidden">
                <div
                  className="progress-glow h-full bg-gradient-to-r from-cyan-500 to-cyan-300 transition-all duration-200 ease-out"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <div className="absolute -top-8 right-0 text-cyan-300 text-lg font-mono">
                {Math.floor(Math.min(progress, 100))}%
              </div>
            </div>

            {/* System Status */}
            <div className="text-cyan-300/70 text-sm font-mono tracking-wide">
              {progress < 30 && "Loading scenario parameters..."}
              {progress >= 30 && progress < 60 && "Initializing constellation data..."}
              {progress >= 60 && progress < 90 && "Establishing narrative connection..."}
              {progress >= 90 && (
                <TypingAnimation
                  text="Scenario ready. Standby..."
                  speed={80}
                  className="text-cyan-300/70 text-sm font-mono tracking-wide"
                />
              )}
            </div>
          </div>

          <div className="mt-12 text-cyan-300/50 text-xs tracking-wider">
            [ PROBABILITY OF SURVIVAL: CALCULATING... ]
          </div>
        </div>

        {/* Corner Borders */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50" />
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-400/50" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400/50" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400/50" />
      </div>
    </>
  );
}
