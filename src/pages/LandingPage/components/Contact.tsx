import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-12">
          <span className="text-sm text-blue-500 tracking-[0.3em] mr-4">
            04
          </span>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-300">
            Contact
          </h2>
          <div className="flex-grow h-px ml-4 bg-gray-800"></div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-300 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
          <div className="relative flex flex-col items-center py-12 text-center transition-colors duration-300 border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-2xl hover:border-blue-500/20">
            <div className="absolute font-bold -right-4 -top-4 text-9xl text-blue-500/10">
              連絡
            </div>
            <p className="w-1/2 mb-8 text-lg text-gray-300">
              Whether you need a hand with frontend development or want to build
              something from scratch, I'm open to new collaborations.
            </p>
            <a
              href="mailto:rizkymeiputra24@gmail.com"
              className="inline-flex items-center px-8 py-3 text-white transition-all duration-300 transform rounded-lg bg-gradient-to-r from-blue-500 to-emerald-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Mail size={16} className="mr-2" />
              Let's build something awesome
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
