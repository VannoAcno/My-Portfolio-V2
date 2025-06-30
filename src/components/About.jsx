import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { Terminal } from "lucide-react";
import face from "../assets/Face.webp";

/**
 * ABOUT SECTION COMPONENT
 */
export default function AboutSection() {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const aboutText = `[SYSTEM LOG] Initializing reader profile...

▶ SCENARIO DETECTED: A new participant has entered the story.

You are observing the early chronicle of a junior developer embarking on their journey through the vast realms of web development. Armed with curiosity, and the basics of HTML, CSS, and JavaScript, this individual is learning to navigate the frontlines of both frontend and backend challenges — one bug at a time.

[CONSTELLATION 'Senior Developer' has taken interest in your story]

Through countless trials of production bugs, merge conflicts, and deadline scenarios, they have accumulated extensive experience points across multiple technology domains. Their journey through the digital wasteland continues as they seek new challenges and form alliances with fellow survivors.

[WARNING] High potential detected. Proceed with recruitment scenario?

[SYSTEM] Character analysis complete. Displaying status window...`;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typedText.length < aboutText.length) {
        setTypedText(aboutText.slice(0, typedText.length + 1));
      }
    }, 25);

    return () => clearTimeout(timer);
  }, [typedText, aboutText]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-mono drop-shadow-[0_2px_4px_rgba(0,255,255,0.3)]">
          [CHARACTER PROFILE]
        </h2>
        <Separator className="mx-auto bg-gradient-to-r from-blue-400 to-transparent h-1 w-2/3" />
      </div>

      {/* Image at Top */}
      <div className="flex flex-col items-center mb-10">
        <div className="rounded-md p-1 bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-700 shadow-lg shadow-cyan-500/30 transition-transform hover:scale-105 max-w-[220px]">
          <img
            src={face}
            alt="Profile"
            className="w-full h-auto object-cover rounded-md max-h-[220px] bg-black/50 border-2 border-blue-400 backdrop-blur-md"
          />
        </div>
        <p className="text-center mt-4 text-cyan-400 font-mono text-4xl">
          Stevano Valentino Verant
        </p>
      </div>

      {/* Typing Panel (System Panel) */}
      <div className="w-full">
        <div className="system-panel w-full max-w-6xl mx-auto p-8">
          <div className="flex items-center mb-6">
            <Terminal className="h-6 w-6 text-blue-400 mr-3" />
            <h3 className="text-xl font-mono text-blue-300">
              [SYSTEM LOG] Reader Analysis
            </h3>
          </div>

          <div className="font-mono text-sm leading-relaxed bg-gray-800/50 p-6 rounded-lg border border-blue-400/30">
            <pre className="whitespace-pre-wrap text-blue-100">
              {typedText}
              {showCursor && (
                <span className="animate-pulse text-cyan-400">█</span>
              )}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
