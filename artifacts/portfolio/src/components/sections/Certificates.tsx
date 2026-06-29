import { motion } from "framer-motion";
import { SiPython, SiGoogle } from "react-icons/si";
import { Brain, Award, Cpu } from "lucide-react";

type Cert = {
  title: string;
  issuer: string;
  date: string;
  score?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  iconColor: string;
  bg: string;
};

const CERTS: Cert[] = [
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    date: "2024",
    score: "Score: 70%",
    icon: SiPython,
    iconColor: "#3776AB",
    bg: "bg-blue-50 border-blue-100",
  },
  {
    title: "Neural Networks for Computer Vision & NLP",
    issuer: "NPTEL",
    date: "2024",
    score: "Score: 78%",
    icon: Brain,
    iconColor: "#8B5CF6",
    bg: "bg-violet-50 border-violet-100",
  },
  {
    title: "Artificial Intelligence Foundation",
    issuer: "Infosys Springboard",
    date: "2024",
    icon: Cpu,
    iconColor: "#4F46E5",
    bg: "bg-indigo-50 border-indigo-100",
  },
  {
    title: "Python Foundation Certification",
    issuer: "Infosys Springboard",
    date: "2024",
    icon: SiPython,
    iconColor: "#3776AB",
    bg: "bg-blue-50 border-blue-100",
  },
  {
    title: "Google Data Analytics (In Progress)",
    issuer: "Google / Coursera",
    date: "2025",
    icon: SiGoogle,
    iconColor: "#4285F4",
    bg: "bg-sky-50 border-sky-100",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase">
            Certifications
          </span>
          <div className="h-px flex-1 bg-border max-w-[120px]" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8">
          Certifications & Achievements
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTS.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`card-hover relative p-5 rounded-2xl border bg-white shadow-sm group`}
              data-testid={`card-cert-${idx}`}
            >
              {/* Icon */}
              <div className={`inline-flex p-2.5 rounded-xl ${cert.bg} border mb-4`}>
                <cert.icon size={22} style={{ color: cert.iconColor }} />
              </div>

              {/* Badge */}
              <div className="absolute top-4 right-4">
                <Award size={16} className="text-amber-400" />
              </div>

              <h3 className="font-semibold text-foreground text-sm leading-snug mb-1.5 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs font-medium text-muted-foreground">{cert.issuer}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-muted-foreground/70 font-mono">{cert.date}</span>
                {cert.score && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {cert.score}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
