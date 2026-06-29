import { motion } from "framer-motion";
import { Code2, FolderGit2, Award, Brain } from "lucide-react";

const STATS = [
  { icon: Brain, value: "AI & ML", label: "Specialization", color: "#FF8A7A", bg: "rgba(255,214,207,0.5)" },
  { icon: FolderGit2, value: "5+", label: "Projects Built", color: "#7ED7C1", bg: "rgba(221,247,240,0.6)" },
  { icon: Award, value: "4+", label: "Certifications", color: "#FFB4A2", bg: "rgba(255,214,207,0.4)" },
  { icon: Code2, value: "7.4", label: "CGPA", color: "#7ED7C1", bg: "rgba(221,247,240,0.6)" },
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
        <div className="flex items-center gap-3 mb-10">
          <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase" style={{ background: "rgba(255,214,207,0.5)", color: "#c0554a" }}>
            About
          </span>
          <div className="h-px flex-1 bg-border max-w-[120px]" />
        </div>

        <div className="grid md:grid-cols-[1fr_260px] gap-12 items-start">
          {/* Text */}
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Building the future with{" "}
              <span className="gradient-text">Artificial Intelligence</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                I'm <span className="font-semibold text-foreground">Neha Chouhan</span>, a B.Tech CSE (AI & ML) student at Acropolis Institute of Technology and Research, Indore. I'm driven by a deep curiosity for how machines can be taught to think, learn, and solve real-world problems.
              </p>
              <p>
                My focus areas include machine learning, neural networks, and software development. I'm passionate about open-source contribution and building products that make a meaningful difference. I aspire to become an AI engineer and future tech entrepreneur.
              </p>
              <p>
                When I'm not studying or coding, I'm exploring new research papers, contributing to community projects like CivicFlow, and sharpening my problem-solving skills.
              </p>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {STATS.map(({ icon: Icon, value, label, color, bg }) => (
                <div
                  key={label}
                  className="p-4 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md transition-all group"
                  style={{ "--hover-border": color } as React.CSSProperties}
                >
                  <div className="p-1.5 rounded-lg w-fit mb-2" style={{ background: bg }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div className="text-xl font-bold text-foreground">{value}</div>
                  <div className="text-xs font-medium text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group mx-auto md:mx-0"
          >
            {/* Offset border */}
            <div
              className="absolute inset-0 rounded-3xl translate-x-3 translate-y-3 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform"
              style={{ background: "linear-gradient(135deg, rgba(255,138,122,0.3), rgba(126,215,193,0.3))" }}
            />
            <div className="relative w-64 h-72 md:w-full md:h-80 rounded-3xl overflow-hidden border-2 border-white shadow-xl">
              <img
                src="/neha-profile.jpeg"
                alt="Neha Chouhan"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay tag */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-md">
                <span className="text-xs font-semibold text-foreground">Neha Chouhan</span>
                <p className="text-[10px] text-muted-foreground">AITR · AI & ML</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
