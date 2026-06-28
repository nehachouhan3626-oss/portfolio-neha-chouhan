import { motion } from "framer-motion";
import { Code2, FolderGit2, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <div className="h-[1px] flex-1 bg-border/60 max-w-[200px]"></div>
        </div>

        <div className="grid md:grid-cols-[1fr_300px] gap-12 items-start">
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Hi, I'm Jonathan. I'm currently pursuing a B.S. in Computer Science at State University. My journey into software engineering started with building custom game servers in high school, and has since evolved into a passion for architecting robust, scalable web applications.
            </p>
            <p>
              I specialize in the TypeScript ecosystem—React, Next.js, and Node.js—but I'm language-agnostic at heart. When I'm not studying or building side projects, I'm usually contributing to open source, writing technical articles, or optimizing my Neovim configuration.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="p-4 rounded-lg bg-secondary/50 border border-border/50 flex flex-col gap-2">
                <Code2 className="text-primary" size={24} />
                <span className="text-2xl font-bold text-foreground">3+</span>
                <span className="text-sm font-medium">Years Coding</span>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50 border border-border/50 flex flex-col gap-2">
                <FolderGit2 className="text-primary" size={24} />
                <span className="text-2xl font-bold text-foreground">15+</span>
                <span className="text-sm font-medium">Projects Built</span>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50 border border-border/50 flex flex-col gap-2">
                <GraduationCap className="text-primary" size={24} />
                <span className="text-2xl font-bold text-foreground">3.9</span>
                <span className="text-sm font-medium">Major GPA</span>
              </div>
            </div>
          </div>

          <div className="relative group mx-auto md:mx-0 w-64 h-64 md:w-full md:h-auto md:aspect-square">
            <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4 rounded-lg transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="relative h-full w-full bg-secondary overflow-hidden rounded-lg border border-border filter grayscale group-hover:grayscale-0 transition-all duration-500">
              {/* Fallback avatar if no image */}
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                <span className="text-6xl font-bold text-zinc-700">JL</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
