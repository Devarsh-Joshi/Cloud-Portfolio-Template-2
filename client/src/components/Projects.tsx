import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import project1 from "../assets/project-1.png";
import heroCloud from "../assets/hero-cloud.png";

const projects = [
  {
    title: "Serverless Data Lake",
    description: "Automated data ingestion pipeline using AWS Lambda, S3, and Glue. Processes 5TB+ data daily with real-time analytics dashboard.",
    image: project1,
    tags: ["AWS Lambda", "Python", "React", "Glue"],
    link: "#",
    github: "#"
  },
  {
    title: "K8s Auto-Scaler",
    description: "Custom Kubernetes operator built with Go to predictively scale pods based on custom business metrics rather than just CPU/RAM.",
    image: heroCloud, 
    tags: ["Golang", "Kubernetes", "Prometheus"],
    link: "#",
    github: "#"
  },
  {
    title: "Global CDN Edge",
    description: "Distributed edge computing network simulation deployed across 4 regions to test latency reduction strategies.",
    image: heroCloud, 
    tags: ["Rust", "WASM", "Terraform"],
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-display font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">Architectural highlights and open source contributions.</p>
          </div>
          <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 group mt-4 md:mt-0">
            View All GitHub <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl overflow-hidden bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold font-display group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="flex gap-2">
                    <a href={project.github} className="text-muted-foreground hover:text-white transition-colors">
                      <Github size={18} />
                    </a>
                    <a href={project.link} className="text-muted-foreground hover:text-white transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/5 text-primary/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
