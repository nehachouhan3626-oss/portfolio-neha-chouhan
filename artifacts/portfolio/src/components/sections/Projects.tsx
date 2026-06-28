import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    title: "Nexus Analytics",
    description: "A real-time data visualization dashboard for e-commerce platforms. Processes millions of events daily and serves them via websockets to a React frontend.",
    tech: ["Next.js", "TypeScript", "Go", "PostgreSQL", "Redis"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Aura Syntax Theme",
    description: "A meticulously crafted dark theme for VS Code and Neovim. Currently used by over 10,000 developers worldwide. Focuses on legibility and reducing eye strain.",
    tech: ["JSON", "TypeScript", "Lua"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Quantum DB",
    description: "An experimental, lightweight key-value store written entirely in Go from scratch. Implements an append-only log and a custom B-Tree index.",
    tech: ["Go", "TCP", "Networking", "Distributed Systems"],
    github: "https://github.com",
    live: ""
  },
  {
    title: "Thread AI",
    description: "An AI-powered email client that automatically categorizes, prioritizes, and drafts responses to your inbox. Features an offline-first architecture.",
    tech: ["React Native", "SQLite", "OpenAI API", "Node.js"],
    github: "https://github.com",
    live: "https://example.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <div className="h-[1px] flex-1 bg-border/60 max-w-[200px]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between p-6 bg-secondary/30 rounded-xl border border-border/50 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(0,180,216,0.3)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <FolderIcon />
                  <div className="flex items-center gap-3 text-muted-foreground">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              
              <ul className="flex flex-wrap items-center gap-3 mt-auto">
                {project.tech.map(tech => (
                  <li key={tech} className="text-xs font-mono text-primary/80">
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function FolderIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary/50 group-hover:text-primary transition-colors">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
    </svg>
  )
}
