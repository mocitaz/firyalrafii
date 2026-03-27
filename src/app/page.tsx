import { CustomCursor } from "@/components/CustomCursor";
import { OpeningAnimation } from "@/components/OpeningAnimation";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-neon-cyan/30 selection:text-neon-cyan overflow-hidden bg-background">
      {/* Global Components */}
      <CustomCursor />
      <OpeningAnimation />
      <Navbar />

      {/* Pages Layout */}
      <div className="flex flex-col gap-0 md:gap-12">
        <Hero />

        {/* Decorative Divider */}
        <div className="w-full max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />

        {/* Decorative Divider */}
        <div className="w-full max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-border to-transparent mt-12 mb-12" />

        <Contact />
      </div>

      <Footer />
    </main>
  );
}
