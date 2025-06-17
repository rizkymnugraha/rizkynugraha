import { Github, Linkedin, Mail } from "lucide-react";

const items = [
  {
    key: "github",
    name: "Github",
    link: "https://github.com/rizkymnugraha",
    icon: Github,
  },
  {
    key: "linkedin",
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rizky-m-nugraha/",
    icon: Linkedin,
  },
  {
    key: "mail",
    name: "Mail",
    link: "mailto:rizkymeiputra24@gmail.com",
    icon: Mail,
  },
];

export default function Hero() {
  return (
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
            Rizky M. Nugraha
          </h1>
          <div className="flex items-center mt-8 space-x-4">
            <div className="w-12 h-px bg-blue-500/50"></div>
            <p className="text-xl text-gray-400">Frontend Engineer</p>
            <div className="w-6 q h-px bg-gray-300/50"></div>
            <p className="text-xl text-gray-300">
              Worked with global clients 🌍 — 🇦🇺 🇹🇭 🇲🇾 🇩🇪 🇺🇸 🇳🇿
            </p>
          </div>
        </div>

        <div className="flex justify-start mt-12 space-x-6">
          {items.map((item) => (
            <a
              key={item.key}
              href={item.link}
              target="_blank"
              className="p-3 transition-all duration-300 transform border border-gray-800 rounded-full group bg-gray-900/50 hover:border-blue-500/50 hover:-translate-y-1"
            >
              <item.icon
                size={24}
                className="text-gray-300 transition-colors group-hover:text-blue-500"
              />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
