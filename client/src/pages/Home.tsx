import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useEffect } from "react";

export default function Home() {
  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden selection:bg-primary/30">
      <Navigation />
      
      <main>
        <Hero />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 CloudArch. Built with React & Three.js.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
