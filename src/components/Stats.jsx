import { Separator } from "@/components/ui/separator"
import { Zap, Star } from "lucide-react"

/**
 * STAR RATING COMPONENT
 * Glowing neon stars for skill display
 */
function StarRating({ count }) {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < count
              ? "text-blue-400 fill-blue-400 drop-shadow-[0_0_4px_rgba(0,191,255,0.8)]"
              : "text-gray-600"
          }`}
        />
      ))}
    </div>
  )
}

/**
 * STATS SECTION COMPONENT
 * Terminal-style character status window
 */
export default function StatsSection() {
  const stats = {
    name: "Stevano Valentino Verant",
    class: "Junior Developer",
    level: 17,
    experience: 49,
    next_level: 51,
    skills: [
      { name: "Html", stars: 5, mastery: "EXPERT" },
      { name: "Css", stars: 4, mastery: "ADVANCED" },
      { name: "JavaScript", stars: 3, mastery: "BEGINNER" },
      { name: "MySQL", stars: 2, mastery: "ROOKIE" },
      { name: "Boostrap", stars: 2, mastery: "ROOKIE" },
      { name: "Tailwind", stars: 2, mastery: "ROOKIE" },
      { name: "React", stars: 2, mastery: "ROOKIE" },
    ],
    tools: [
      { name: "VS Code", status: "ACTIVE" },
      { name: "Vercel", status: "ACTIVE" },
      { name: "Vite", status: "ACTIVE" },
      { name: "Terminal", status: "ACTIVE" },
      { name: "Git", status: "CONFIGURED" },
      { name: "GitHub", status: "CONFIGURED" },
      { name: "Node.js", status: "INSTALLED" },
    ],
  }

  return (
    <section id="stats" className="py-24 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-mono">
          [CHARACTER STATUS]
        </h2>
        <Separator className="bg-gradient-to-r from-blue-400 to-transparent h-1" />
      </div>

      {/* Terminal Panel */}
      <div className="system-panel bg-blue-500/10 border-2 border-blue-400 rounded-xl p-8 backdrop-blur-sm">
        <div className="flex items-center mb-6">
          <Zap className="h-6 w-6 text-blue-400 mr-3" />
          <h3 className="text-xl font-mono text-blue-300">[STATUS WINDOW]</h3>
        </div>

        <div className="bg-black/80 p-8 rounded-lg border border-blue-400/50 font-mono text-sm">
          {/* ASCII Header */}
          <div className="text-cyan-400 mb-6 text-center">
            ╔══════════════════════════════════════╗
            <br />║ CHARACTER STATUS TERMINAL ║
            <br />
            ╚══════════════════════════════════════╝
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Basic Info */}
            <div className="space-y-4">
              <div className="text-yellow-400 border-b border-blue-400/30 pb-2">
                ┌─ BASIC INFORMATION ─────────────────────┐
              </div>
              <div className="pl-4 space-y-2 text-blue-100">
                <div className="flex">
                  <span className="text-blue-300 w-16">│ NAME :</span>
                  <span className="text-white">{stats.name}</span>
                </div>
                <div className="flex">
                  <span className="text-blue-300 w-16">│ CLASS:</span>
                  <span className="text-cyan-400">{stats.class}</span>
                </div>
                <div className="flex">
                  <span className="text-blue-300 w-16">│ LEVEL:</span>
                  <span className="text-yellow-400">{stats.level}</span>
                </div>
                <div className="flex">
                  <span className="text-blue-300 w-16">│ EXP&nbsp;&nbsp;:</span>
                  <span className="text-green-400">
                    {stats.experience}/{stats.next_level}
                  </span>
                </div>
              </div>
              <div className="text-blue-400">└─────────────────────────────────────────┘</div>

              {/* Tools Section */}
              <div className="space-y-4 mt-8">
                <div className="text-yellow-400 border-b border-blue-400/30 pb-2">
                  ┌─ TOOLS INVENTORY ───────────────────────┐
                </div>
                <div className="pl-4 space-y-2 text-blue-100">
                  {stats.tools.map((tool, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-blue-300">│ {tool.name}:</span>
                      <span
                        className={`text-xs ${
                          tool.status === "MASTERED"
                            ? "text-red-400"
                            : tool.status === "ACTIVE"
                              ? "text-green-400"
                              : tool.status === "CONFIGURED" || tool.status === "READY"
                                ? "text-cyan-400"
                                : tool.status === "INSTALLED"
                                  ? "text-blue-400"
                                  : tool.status === "LEARNING"
                                    ? "text-yellow-400"
                                    : "text-gray-400"
                        }`}
                      >
                        {tool.status}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="text-blue-400">└─────────────────────────────────────────┘</div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-4">
              <div className="text-yellow-400 border-b border-blue-400/30 pb-2">
                ┌─ SKILL REGISTRY ────────────────────────┐
              </div>
              <div className="pl-4 space-y-3 text-blue-100">
                {stats.skills.map((skill, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-300">│ {skill.name}:</span>
                      <span
                        className={`text-xs ${
                          skill.mastery === "MYTHICAL" || skill.mastery === "MASTER"
                            ? "text-red-400"
                            : skill.mastery === "LEGENDARY" || skill.mastery === "EXPERT"
                              ? "text-yellow-400"
                              : skill.mastery === "UNIQUE" || skill.mastery === "ADVANCED"
                                ? "text-orange-400"
                                : skill.mastery === "RARE" || skill.mastery === "BEGINNER"
                                  ? "text-blue-400"
                                  : skill.mastery === "UNCOMMON" || skill.mastery === "NEWBIE"
                                    ? "text-green-400"
                                    : "text-gray-400"
                        }`}
                      >
                        {skill.mastery}
                      </span>
                    </div>
                    <div className="flex items-center pl-2">
                      <span className="text-blue-300 mr-2">│</span>
                      <StarRating count={skill.stars} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-blue-400">└──────────────────────────────────────────┘</div>
            </div>
          </div>

          {/* System Messages */}
          <div className="mt-6 space-y-2 text-xs">
            <div className="text-green-400">[SYSTEM] Character analysis complete.</div>
            <div className="text-blue-300">[INFO] All systems operational.</div>
            <div className="text-yellow-400">[ALERT] Ready for new scenarios.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
