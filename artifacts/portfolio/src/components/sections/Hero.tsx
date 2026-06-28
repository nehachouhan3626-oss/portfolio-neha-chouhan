import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
          <Terminal size={14} />
          <span>Available for Fall 2025 Internships</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground leading-[1.1]">
          Building digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">
            experiences
          </span> that scale.
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
          I'm a Computer Science student and full-stack developer obsessed with performance, architecture, and beautiful interfaces. Turning complex problems into elegant code.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: "smooth" })}
            className="group px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md flex items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,180,216,0.3)] hover:shadow-[0_0_30px_rgba(0,180,216,0.5)]"
            data-testid="button-view-projects"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            className="px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-md border border-border flex items-center gap-2 hover:bg-secondary/80 transition-colors"
            data-testid="button-download-resume"
          >
            <Download size={18} />
            Resume
          </button>
        </div>
      </motion.div>
    </section>
  );
}
