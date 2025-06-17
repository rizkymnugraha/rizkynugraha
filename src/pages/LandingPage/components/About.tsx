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
  );
}
