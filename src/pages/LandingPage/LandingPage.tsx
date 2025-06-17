import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Projects,
} from "./components";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-gray-200 bg-gray-950">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      <Experience />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

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
}
