import { motion } from "framer-motion";
import {
  SiPython, SiJavascript, SiHtml5, SiCss,
  SiReact, SiTailwindcss, SiNodedotjs, SiGit,
  SiMysql, SiScikitlearn, SiNumpy, SiPandas, SiJupyter,
} from "react-icons/si";
import { Cloud, Brain, Code2, Github } from "lucide-react";

type Skill = {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  color: string;
};

type SkillCategory = {
  title: string;
  emoji: string;
  skills: Skill[];
};

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    emoji: "💻",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C++", icon: Code2, color: "#00599C" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
    ],
  },
  {
    title: "Web Development",
    emoji: "🌐",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    ],
  },
  {
    title: "AI & ML",
    emoji: "🤖",
    skills: [
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
      { name: "Neural Nets", icon: Brain, color: "#8B5CF6" },
    ],
  },
  {
    title: "Tools & Platforms",
    emoji: "🛠️",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: Github, color: "#181717" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Cloud (AWS)", icon: Cloud, color: "#FF9900" },
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
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase">
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
                <span>{cat.emoji}</span>
                {cat.title}
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
                    className="flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-xl border border-border shadow-sm hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5 transition-all group cursor-default"
                  >
                    <skill.icon
                      size={20}
                      className="transition-colors"
                      style={{ color: skill.color }}
                    />
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
