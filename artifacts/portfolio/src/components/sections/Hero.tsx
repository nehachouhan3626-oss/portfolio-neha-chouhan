import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-400/10 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-cyan-400/8 rounded-full blur-[80px]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f108_1px,transparent_1px),linear-gradient(to_bottom,#6366f108_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <Sparkles size={13} />
            <span>Open to Internship & Collaboration Opportunities</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-foreground leading-[1.08]">
            Hi, I'm{" "}
            <span className="gradient-text">Neha Chouhan</span>
          </h1>

          <p className="text-xl md:text-2xl font-semibold text-muted-foreground mb-5">
            B.Tech CSE (AI & ML) Student{" "}
            <span className="text-foreground/60">·</span>{" "}
            Aspiring AI Engineer & Tech Entrepreneur
          </p>

          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Passionate about building intelligent systems and elegant software. I turn data into insights, ideas into products, and complex problems into clean code.
          </p>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-8">
            <MapPin size={15} className="text-primary" />
            <span>Indore, India</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              data-testid="button-view-projects"
            >
              View Projects
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://github.com/nehachouhan3626-oss"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-semibold rounded-xl hover:bg-foreground/90 transition-all shadow-md hover:-translate-y-0.5"
              data-testid="link-github"
            >
              <Github size={17} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/neha-chouhan-889215360/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white font-semibold rounded-xl hover:bg-[#0A66C2]/90 transition-all shadow-md hover:-translate-y-0.5"
              data-testid="link-linkedin"
            >
              <Linkedin size={17} />
              LinkedIn
            </a>

            <button
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-foreground font-semibold rounded-xl border border-border hover:border-primary/40 hover:bg-secondary transition-all shadow-sm hover:-translate-y-0.5"
              data-testid="button-download-resume"
            >
              <Download size={17} className="text-primary" />
              Resume
            </button>
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="hidden md:flex flex-col items-center"
        >
          <div className="relative">
            <div className="w-52 h-52 rounded-3xl bg-gradient-to-br from-primary/20 via-violet-400/20 to-cyan-400/20 border-2 border-primary/20 flex items-center justify-center shadow-2xl shadow-primary/15 overflow-hidden">
              <span className="text-6xl font-extrabold gradient-text select-none">NC</span>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-3 py-2 shadow-lg border border-border flex items-center gap-2">
              <span className="text-lg">🤖</span>
              <span className="text-xs font-semibold text-foreground">AI & ML</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-muted-foreground/40 to-transparent" />
      </motion.div>
    </section>
  );
}
