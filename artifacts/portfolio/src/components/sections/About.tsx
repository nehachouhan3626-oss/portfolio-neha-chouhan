import { motion } from "framer-motion";
import { Code2, FolderGit2, Award, Brain } from "lucide-react";

const STATS = [
  { icon: Brain, value: "AI & ML", label: "Specialization", color: "text-primary" },
  { icon: FolderGit2, value: "5+", label: "Projects Built", color: "text-violet-600" },
  { icon: Award, value: "4+", label: "Certifications", color: "text-cyan-600" },
  { icon: Code2, value: "7.4", label: "CGPA", color: "text-emerald-600" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase">
            About
          </span>
          <div className="h-px flex-1 bg-border max-w-[120px]" />
        </div>

        <div className="grid md:grid-cols-[1fr_280px] gap-12 items-start">
          {/* Text */}
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Building the future with{" "}
              <span className="gradient-text">Artificial Intelligence</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                I'm <span className="font-semibold text-foreground">Neha Chouhan</span>, a first-year B.Tech CSE (AI & ML) student at Acropolis Institute of Technology and Research, Indore. I'm driven by a deep curiosity for how machines can be taught to think, learn, and solve real-world problems.
              </p>
              <p>
                My focus areas include machine learning, neural networks, and software development. I'm passionate about open-source contribution and building products that make a meaningful difference. I aspire to become an AI engineer and future tech entrepreneur.
              </p>
              <p>
                When I'm not studying or coding, I'm exploring new research papers, contributing to community projects, and sharpening my problem-solving skills through competitive programming.
              </p>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {STATS.map(({ icon: Icon, value, label, color }) => (
                <div
                  key={label}
                  className="p-4 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all group"
                >
                  <Icon className={`${color} mb-2 group-hover:scale-110 transition-transform`} size={22} />
                  <div className="text-xl font-bold text-foreground">{value}</div>
                  <div className="text-xs font-medium text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group mx-auto md:mx-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-violet-400/20 rounded-3xl translate-x-3 translate-y-3 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform" />
            <div className="relative w-64 h-64 md:w-full md:aspect-square bg-gradient-to-br from-primary/10 via-violet-100 to-cyan-100 rounded-3xl border border-border flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <span className="text-7xl font-extrabold gradient-text select-none block">NC</span>
                <span className="text-xs font-medium text-muted-foreground mt-2 block">Neha Chouhan</span>
              </div>
              <div className="absolute top-4 right-4 bg-white rounded-xl px-2 py-1 shadow-sm border border-border">
                <span className="text-xs font-semibold text-primary">AI & ML</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
