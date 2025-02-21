import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Terminal,
  Code,
  Layout,
} from "lucide-react";

// Rest of the code remains exactly the same, just removed the Arrow import from lucide-react
const App = () => {
  const projects = [
    {
      title: "プロジェクト 01",
      subtitle: "Project One",
      description: "A web application built with React and TypeScript",
      link: "#",
      tags: ["React", "TypeScript", "Tailwind"],
      icon: <Terminal className="w-6 h-6" />,
    },
    {
      title: "プロジェクト 02",
      subtitle: "Project Two",
      description: "Interactive dashboard with real-time data visualization",
      link: "#",
      tags: ["Next.js", "D3.js", "GraphQL"],
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "プロジェクト 03",
      subtitle: "Project Three",
      description: "Responsive e-commerce platform with modern UI/UX",
      link: "#",
      tags: ["React", "Redux", "Styled"],
      icon: <Layout className="w-6 h-6" />,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-200 bg-gray-950">
      {/* Hero Section */}
      <header className="relative flex items-center justify-center min-h-screen p-8">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute font-bold top-20 left-10 text-8xl text-blue-900/40">
            フロントエンド
          </div>
          <div className="absolute font-bold bottom-20 right-10 text-8xl text-blue-900/40">
            エンジニア
          </div>
        </div>

        <div className="z-10 max-w-4xl mx-auto">
          <div className="relative">
            <div className="text-sm text-blue-500 mb-2 tracking-[0.3em] animate-slide-up">
              フロントエンド エンジニア
            </div>
            <h1 className="py-4 mb-4 font-bold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-300">
              Rizky Nugraha
            </h1>
            <div className="flex items-center mt-8 space-x-4">
              <div className="w-12 h-px bg-blue-500/50"></div>
              <p className="text-xl text-gray-400">Frontend Engineer</p>
            </div>
          </div>

          <div className="flex justify-start mt-12 space-x-6">
            {[Github, Linkedin, Mail].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="p-3 transition-all duration-300 transform border border-gray-800 rounded-full group bg-gray-900/50 hover:border-blue-500/50 hover:-translate-y-1"
              >
                <Icon
                  size={24}
                  className="text-gray-300 transition-colors group-hover:text-blue-500"
                />
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="relative px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <span className="text-sm text-blue-500 tracking-[0.3em] mr-4">
              01
            </span>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-300">
              About Me
            </h2>
            <div className="flex-grow h-px ml-4 bg-gray-800"></div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-300 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative p-8 transition-all duration-300 border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-2xl hover:border-blue-500/20">
              <div className="absolute font-bold -right-4 -top-4 text-9xl text-blue-500/10">
                私
              </div>
              <p className="text-lg leading-relaxed text-gray-300">
                I'm a passionate Frontend Engineer with expertise in building
                modern web applications. I specialize in React, TypeScript, and
                modern CSS frameworks like Tailwind. My focus is on creating
                intuitive, performant, and accessible user interfaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <span className="text-sm text-blue-500 tracking-[0.3em] mr-4">
              02
            </span>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-300">
              Projects
            </h2>
            <div className="flex-grow h-px ml-4 bg-gray-800"></div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-300 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative p-8 transition-all duration-300 border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-2xl hover:border-blue-500/20">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm text-blue-500 tracking-[0.2em] mb-1">
                        {project.title}
                      </div>
                      <h3 className="mb-4 text-2xl font-semibold text-gray-200">
                        {project.subtitle}
                      </h3>
                    </div>
                    <div className="p-2 bg-gray-800/50 rounded-xl">
                      {project.icon}
                    </div>
                  </div>

                  <p className="mb-4 text-gray-400">{project.description}</p>

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
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <span className="text-sm text-blue-500 tracking-[0.3em] mr-4">
              03
            </span>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-300">
              Contact
            </h2>
            <div className="flex-grow h-px ml-4 bg-gray-800"></div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-300 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative flex items-center py-12 text-center transition-colors duration-300 border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-2xl hover:border-blue-500/20">
              <div className="absolute font-bold -right-4 -top-4 text-9xl text-blue-500/10">
                連絡
              </div>
              <p className="w-1/2 mb-8 text-lg text-gray-300">
                I'm always interested in hearing about new projects and
                opportunities.
              </p>
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center w-1/2 px-8 py-3 text-white transition-all duration-300 transform rounded-lg bg-gradient-to-r from-blue-500 to-emerald-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
              >
                Say Hello
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-8 py-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          © {new Date().getFullYear()} Rizky Nugraha. All rights reserved.
        </div>
      </footer>

      {/* Global Styles */}
      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
