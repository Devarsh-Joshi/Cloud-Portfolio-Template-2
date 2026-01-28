import { motion } from "framer-motion";
import { Database, Server, Globe, Shield, Cpu, Code, Cloud, Terminal } from "lucide-react";

const stack = [
  { icon: Cloud, name: "AWS", category: "Cloud" },
  { icon: Globe, name: "Terraform", category: "IaC" },
  { icon: Server, name: "Kubernetes", category: "Orchestration" },
  { icon: Terminal, name: "Bash/Shell", category: "Scripting" },
  { icon: Database, name: "PostgreSQL", category: "Database" },
  { icon: Shield, name: "IAM Security", category: "Security" },
  { icon: Code, name: "Python", category: "Language" },
  { icon: Cpu, name: "CI/CD", category: "DevOps" },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-20 bg-background/50 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Core Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The arsenal I use to build robust, scalable distributed systems.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass-panel p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-colors cursor-default"
            >
              <div className="p-3 rounded-lg bg-white/5 group-hover:bg-primary/20 transition-colors">
                <tech.icon className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-foreground">{tech.name}</h3>
                <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{tech.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
