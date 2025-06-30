import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Github, ExternalLink } from "lucide-react";

/**
 * PROJECT CARD COMPONENT
 */
function ProjectCard({ project, glowPulse, onClick }) {
  return (
    <div
      className={`system-panel bg-blue-500/10 border-2 border-blue-400 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:bg-blue-500/20 hover:border-cyan-400 hover:shadow-lg hover:shadow-blue-400/30 cursor-pointer ${
        glowPulse ? "shadow-lg shadow-blue-400/20" : ""
      }`}
      onClick={() => onClick(project)}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="text-blue-300 text-sm font-mono">[{project.id}]</div>
        <div className="flex items-center space-x-2">
          <Badge
            variant="outline"
            className={`border font-mono text-xs ${
              project.status === "COMPLETED"
                ? "border-green-400 text-green-400"
                : project.status === "IN_PROGRESS"
                ? "border-yellow-400 text-yellow-400"
                : "border-blue-400 text-blue-400"
            }`}
          >
            {project.status}
          </Badge>
          <Badge
            variant="outline"
            className={`border font-mono text-xs ${
              project.threat_level === "EXTREME"
                ? "border-red-400 text-red-400"
                : project.threat_level === "HIGH"
                ? "border-orange-400 text-orange-400"
                : project.threat_level === "MEDIUM"
                ? "border-yellow-400 text-yellow-400"
                : "border-blue-400 text-blue-400"
            }`}
          >
            {project.threat_level}
          </Badge>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-blue-100 mb-4 text-sm leading-relaxed">{project.shortDescription}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, i) => (
          <Badge
            key={i}
            variant="secondary"
            className="bg-blue-400/20 text-blue-300 border border-blue-400/50 text-xs font-mono"
          >
            {tech}
          </Badge>
        ))}
      </div>

      <div className="text-blue-300 text-sm font-mono hover:text-cyan-400 transition-colors">
        Click to view details →
      </div>
    </div>
  );
}

/**
 * PROJECT MODAL COMPONENT
 */
function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-gray-900 border-2 border-blue-400 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-mono text-blue-400">
            [{project.id}] {project.title}
          </DialogTitle>
          <DialogDescription className="text-blue-300 font-mono">
            Status: {project.status} | Threat Level: {project.threat_level}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="bg-gray-800/50 p-4 rounded-lg border border-blue-400/30">
            <h4 className="text-lg font-mono text-cyan-400 mb-2">[DESCRIPTION]</h4>
            <p className="text-blue-100 leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Only TECH_STACK column now */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div className="bg-gray-800/50 p-4 rounded-lg border border-blue-400/30">
              <h4 className="text-lg font-mono text-cyan-400 mb-3">[TECH STACK]</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-blue-400/20 text-blue-300 border border-blue-400/50 font-mono"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-gray-900 font-mono"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Button>
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white font-mono">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/**
 * PROJECTS SECTION COMPONENT
 */
export default function ProjectsSection() {
  const [glowPulse, setGlowPulse] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "PROJ_001",
      title: "My Portfolio Website V1",
      shortDescription: "Website Portfolio saya yang pertama dibuat dengan full native.",
      fullDescription:
        "Website Portfolio saya yang pertama kali dibuat dengan full native.",
      tech: ["Html", "Css", "JavaScript"],
      status: "COMPLETED",
      threat_level: "LOW",
      completion: 100,
      github: "https://github.com/VannoAcno/My-Portofolio",
      demo: "https://vannoacno.github.io/My-Portofolio/",
    },
    {
      id: "PROJ_002",
      title: "My Portfolio Website V2",
      shortDescription: "Website Portfolio Junior Developer dengan Tema System seperti manhwa Omniscient Reader Viewpoint.",
      fullDescription:
        "Website Portfolio Junior Developer dengan Tema System seperti manhwa Omniscient Reader Viewpoint.",
      tech: ["React", "Tailwind", "Shadcn", "Vite"],
      status: "COMPLETED",
      threat_level: "LOW",
      completion: 100,
      github: "https://github.com/VannoAcno/My-Portfolio-V2",
      demo: "https://ecommerce-demo.com",
    },
    {
      id: "PROJ_003",
      title: "Tang Zu Ice Shop",
      shortDescription: "Collaborate, track, and manage with ease.",
      fullDescription:
        "A sophisticated team productivity platform that enables real-time collaboration...",
      tech: ["Html", "Css", "Javascript"],
      status: "IN_PROGRESS",
      threat_level: "EXTREME",
      completion: 75,
      github: "https://github.com/example/taskmanager",
      demo: "https://taskmanager-demo.com",
    },
    {
      id: "PROJ_004",
      title: "AI Content Generator",
      shortDescription: "AI-powered content generation tool.",
      fullDescription:
        "An innovative AI-powered content generation tool that leverages machine learning...",
      tech: ["Python", "TensorFlow", "FastAPI", "React", "OpenAI"],
      status: "PLANNING",
      threat_level: "UNKNOWN",
      completion: 25,
      github: "https://github.com/example/ai-content",
      demo: null,
    },
  ];

  useEffect(() => {
    const glowTimer = setInterval(() => {
      setGlowPulse((prev) => !prev);
    }, 2000);
    return () => clearInterval(glowTimer);
  }, []);

  return (
    <section id="gallery" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-mono">
          [AVAILABLE SCENARIOS]
        </h2>
        <Separator className="bg-gradient-to-r from-blue-400 to-transparent h-1" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} glowPulse={glowPulse} onClick={setSelectedProject} />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
