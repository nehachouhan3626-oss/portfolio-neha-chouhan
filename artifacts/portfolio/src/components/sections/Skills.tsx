import { motion } from "framer-motion";
import { 
  SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, 
  SiPostgresql, SiPython, SiGo, SiDocker
} from "react-icons/si";
import { Cloud } from "lucide-react";

const SKILLS = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Go", icon: SiGo, color: "#00ADD8" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: Cloud, color: "#FF9900" },
];

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="skills" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Technical Arsenal</h2>
          <div className="h-[1px] flex-1 bg-border/60 max-w-[200px]"></div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="flex flex-col items-center justify-center p-6 bg-secondary/30 border border-border/50 rounded-xl hover:bg-secondary/80 hover:border-primary/50 transition-colors group cursor-default"
            >
              <skill.icon 
                size={36} 
                className="mb-4 text-muted-foreground group-hover:text-[var(--hover-color)] transition-colors"
                style={{ "--hover-color": skill.color } as React.CSSProperties}
              />
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
