import { motion } from "framer-motion";
import {
  SiPython, SiNumpy, SiPandas, SiGit,
} from "react-icons/si";
import { BarChart2, Code2, Layers, Github, Database, Brain, BookOpen } from "lucide-react";

type Skill = {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  color: string;
};

type SkillCategory = {
  title: string;
  emoji: string;
  accent: string;
  skills: Skill[];
};

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    emoji: "💻",
    accent: "#FF8A7A",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C++", icon: Code2, color: "#00599C" },
    ],
  },
  {
    title: "Data Science & AI",
    emoji: "📊",
    accent: "#7ED7C1",
    skills: [
      { name: "NumPy", icon: SiNumpy, color: "#4BA3C7" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "Matplotlib", icon: BarChart2, color: "#11557C" },
    ],
  },
  {
    title: "CS Fundamentals",
    emoji: "🧠",
    accent: "#FF8A7A",
    skills: [
      { name: "Object-Oriented Programming", icon: Layers, color: "#FF8A7A" },
      { name: "Basic Data Structures", icon: Database, color: "#7ED7C1" },
      { name: "Problem Solving", icon: Brain, color: "#FFB4A2" },
      { name: "Basic Programming Concepts", icon: BookOpen, color: "#718096" },
    ],
  },
  {
    title: "Tools & Version Control",
    emoji: "🛠️",
    accent: "#7ED7C1",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: Github, color: "#333333" },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 280, damping: 22 } },
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-10">
          <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase" style={{ background: "rgba(255,214,207,0.5)", color: "#c0554a" }}>
            Skills
          </span>
          <div className="h-px flex-1 bg-border max-w-[120px]" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-10">
          Technical Skills
        </h2>

        <div className="space-y-10">
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ background: cat.accent }} />
                {cat.emoji} {cat.title}
              </h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    className="flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-xl border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group cursor-default"
                    style={{ borderColor: "rgba(255,138,122,0.15)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = cat.accent + "55";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,138,122,0.15)";
                    }}
                  >
                    <skill.icon size={20} style={{ color: skill.color }} />
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
