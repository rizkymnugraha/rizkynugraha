import { HeartPulse, Palette, MousePointerClick } from "lucide-react";
import ProjectCard from "../../../components/ProjectCard";

const projects = [
  {
    time: "April 2025 - Present",
    projectName: "Vitaport",
    description:
      "A digital platform that leverages AI to enhance employee wellbeing and streamline workplace administration. The goal was to help companies build a more resilient, engaged, and high-performing workforce through seamless tech integration.",
    link: "https://www.vitaport.au/",
    tags: ["ReactJS", "TypeScript", "Tailwind", "Strapi", "Vitest"],
    icon: <HeartPulse className="w-6 h-6" />,
    jobDescs: [
      "Develop a web application for Vitaport, a healthcare platform.",
      "Build and implement the front-end side of the app, manage content of the project, and troubleshoot issues.",
      "Migrate the project from Strapi v4 to v5.",
      "Manage Strapi content types and relations.",
    ],
  },
  {
    time: "2023 - 2025",
    projectName: "Triniti Platform",
    description:
      "A digital workspace that helps users organize their tasks visually through an interactive map. It allows clear tracking of goals and sub-goals, and supports real-time collaboration to enhance team productivity and alignment.",
    link: "https://www.triniti.net/",
    tags: [
      "AdonisJS",
      "ReactJS",
      "TypeScript",
      "Tailwind",
      "Storybook",
      "Konva",
      "ReactFlow",
      "hapi",
      "NodeJS",
    ],
    icon: <MousePointerClick className="w-6 h-6" />,
    jobDescs: [
      "Build the core feature of the app, and troubleshoot issues.",
      "Build an interactive map feature with HTML canvas.",
      "Build collaborative in real time map feature with hapi/nes",
      "Build and implement the front-end side of the app",
      "Implement interactive table and real-time canvas collaboration.",
      "Add unit tests to reach 100% coverage.",
      "Support the improvement of the backend side of the app",
    ],
  },
  {
    time: "2024",
    projectName: "VenusUI",
    description:
      "A powerful and customizable React component library using TypeScript, TailwindCSS, and ShadCN design principles. Venus is designed to accelerate frontend development with clean, reusable, and easy-to-style UI components.",
    link: "https://www.npmjs.com/package/@team-triniti/venus",
    tags: ["React", "Tailwind", "Storybook"],
    icon: <Palette className="w-6 h-6" />,
    jobDescs: [],
  },
];

export default function Projects() {
  return (
    <section className="relative px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-12">
          <span className="text-sm text-blue-500 tracking-[0.3em] mr-4">
            02
          </span>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-300">
            Recent Projects
          </h2>
          <div className="flex-grow h-px ml-4 bg-gray-800"></div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
