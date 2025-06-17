import { MouseEventHandler, ReactNode, useState } from "react";
import { ExternalLink } from "lucide-react";

interface IProject {
  time: string;
  projectName: string;
  icon: ReactNode;
  description: string;
  jobDescs: string[];
  tags: string[];
  link: string;
}

interface ProjectCardProps {
  project: IProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative group"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Existing gradient background */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-300 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

      {/* Mouse-following popup */}
      {isHovered && project.jobDescs.length > 0 && (
        <div
          className="absolute z-50 pointer-events-none transition-opacity duration-200"
          style={{
            left: `${mousePosition.x + 15}px`,
            top: `${mousePosition.y + 15}px`,
            transform: "translate(0, 0)",
          }}
        >
          <div className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg shadow-2xl backdrop-blur-sm w-sm">
            <div className="flex items-center mb-2">
              <span className="text-sm text-blue-500 tracking-[0.2em]">
                Key Contributions:
              </span>
              <div className="flex-grow h-px ml-4 bg-gray-600"></div>
            </div>
            <ul className="space-y-2">
              {project.jobDescs.map((job, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shrink-0 mt-1.5"></div>
                  <span className="text-sm text-gray-200 font-medium">
                    {job}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Existing card content */}
      <div className="relative p-8 transition-all duration-300 border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-2xl hover:border-blue-500/20">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-sm text-blue-500 tracking-[0.2em] mb-1">
              {project.time}
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-gray-200">
              {project.projectName}
            </h3>
          </div>
          <div className="p-2 bg-gray-800/50 rounded-xl">{project.icon}</div>
        </div>

        <p className="mb-4 text-gray-400 w-3/4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 text-sm text-blue-400 border border-gray-700 rounded-full bg-gray-800/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          className="inline-flex items-center text-blue-400 transition-colors hover:text-blue-300 group"
        >
          View Project
          <ExternalLink
            size={16}
            className="ml-2 transition-transform transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </div>
  );
}
