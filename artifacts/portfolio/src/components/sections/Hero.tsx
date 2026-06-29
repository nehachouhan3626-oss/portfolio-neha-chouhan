import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden">
      {/* Background blobs — coral + mint */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[100px]" style={{ background: "rgba(255,138,122,0.12)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[90px]" style={{ background: "rgba(126,215,193,0.15)" }} />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full blur-[80px]" style={{ background: "rgba(255,180,162,0.10)" }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF8A7A0a_1px,transparent_1px),linear-gradient(to_bottom,#7ED7C10a_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
        {/* Text */}
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium mb-6"
            style={{ background: "rgba(255,214,207,0.5)", borderColor: "rgba(255,138,122,0.3)", color: "#c0554a" }}
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
            <span className="text-foreground/40">·</span>{" "}
            Aspiring AI Engineer & Tech Entrepreneur
          </p>

          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Passionate about building intelligent systems and elegant software. I turn data into insights, ideas into products, and complex problems into clean code.
          </p>

          <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-8">
            <MapPin size={15} style={{ color: "#FF8A7A" }} />
            <span>Indore, India</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #FF8A7A, #FFB4A2)", boxShadow: "0 8px 24px rgba(255,138,122,0.35)" }}
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
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl transition-all shadow-md hover:-translate-y-0.5"
              style={{ background: "#0A66C2" }}
              data-testid="link-linkedin"
            >
              <Linkedin size={17} />
              LinkedIn
            </a>

            <a
              href="/neha-resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-foreground font-semibold rounded-xl border transition-all shadow-sm hover:-translate-y-0.5"
              style={{ borderColor: "rgba(255,138,122,0.35)" }}
              data-testid="button-download-resume"
            >
              <Download size={17} style={{ color: "#FF8A7A" }} />
              Resume
            </a>
          </div>
        </motion.div>

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="hidden md:flex flex-col items-center"
        >
          <div className="relative group">
            {/* Coral-mint ring */}
            <div
              className="absolute -inset-1 rounded-full opacity-70 group-hover:opacity-100 transition-opacity blur-sm"
              style={{ background: "linear-gradient(135deg, #FF8A7A, #7ED7C1)" }}
            />
            <div className="relative w-52 h-52 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/neha-profile.jpeg"
                alt="Neha Chouhan"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-3 -right-3 bg-white rounded-2xl px-3 py-2 shadow-lg border border-border flex items-center gap-2">
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/40"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-muted-foreground/30 to-transparent" />
      </motion.div>
    </section>
  );
}
