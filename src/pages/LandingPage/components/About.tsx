import { CatIcon } from "lucide-react";

export default function About() {
  return (
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

        <div className="relative group/container">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-300 rounded-2xl blur opacity-0 group-hover/container:opacity-20 transition duration-500"></div>
          <div className="relative p-8 transition-all duration-300 border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-2xl hover:border-blue-500/20">
            <div className="absolute font-bold -right-4 -top-4 text-9xl text-blue-500/10">
              私
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:mr-12 mb-12 md:mb-0 group/icon text-center">
                <CatIcon
                  className="w-48 h-48"
                  strokeWidth={0.4}
                  color="#AEAEAE"
                />
                <span className="md:opacity-0 group-hover/icon:opacity-100 transition duration-200 text-xs text-gray-300">
                  I'm a cat person!
                </span>
              </div>
              <div className="space-y-4">
                <p className="leading-relaxed text-gray-300">
                  I'm a front-end web developer from Bandung, Indonesia, with a
                  strong focus on building fast, accessible, and visually
                  polished web experiences using ReactJS. I care deeply about
                  clean code, smooth user interactions, and making the web a
                  place where everyone can engage comfortably. My passion lies
                  in crafting intuitive user interfaces that don't just work—but
                  feel great to use.
                </p>
                <p className="leading-relaxed text-gray-300">
                  I started my career working with international clients, mostly
                  through written communication. Later, I took a more active
                  role—joining daily standups, planning sessions, and
                  retrospectives—collaborating directly with global teams in
                  real time.
                </p>
                <p className="leading-relaxed text-gray-300">
                  Now, with this foundation, I'm aiming higher: to be part of a
                  global team where I can contribute more directly, communicate
                  more openly, and grow alongside world-class developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
