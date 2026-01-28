import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Cloud Architect",
    company: "Nebula Systems",
    period: "2023 - Present",
    description: "Leading the migration of legacy monoliths to microservices on AWS EKS. Implemented GitOps workflows reducing deployment time by 60%.",
    tags: ["AWS", "Kubernetes", "Golang"]
  },
  {
    role: "DevOps Engineer",
    company: "Quantico Tech",
    period: "2021 - 2023",
    description: "Managed multi-region infrastructure for a high-frequency trading platform. Automated compliance checks using Terraform Sentinel.",
    tags: ["Terraform", "Python", "Azure"]
  },
  {
    role: "Backend Developer",
    company: "StartFlow",
    period: "2019 - 2021",
    description: "Built scalable APIs serving 1M+ daily users. Optimized database queries reducing latency by 40%.",
    tags: ["Node.js", "PostgreSQL", "Redis"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 container mx-auto px-6">
      <h2 className="text-3xl font-display font-bold mb-16 text-center">Engineering Odyssey</h2>
      
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-white/10" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-12"
            >
              {/* Timeline Node */}
              <div className="absolute left-0 top-1.5 w-10 h-10 rounded-full bg-background border-4 border-primary/20 flex items-center justify-center z-10">
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>

              <div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="font-mono text-sm text-primary/80 mt-2 md:mt-0 bg-primary/10 px-3 py-1 rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-2 py-1 rounded border border-white/10 text-muted-foreground">
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
