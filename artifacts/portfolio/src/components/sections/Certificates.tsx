import { motion } from "framer-motion";
import { SiPython, SiGoogle } from "react-icons/si";
import { Brain, Award, Cpu } from "lucide-react";

type Cert = {
  title: string;
  issuer: string;
  date: string;
  score?: string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  iconColor: string;
  accentBg: string;
  accentBorder: string;
};

const CERTS: Cert[] = [
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    date: "2024",
    score: "70%",
    icon: SiPython,
    iconColor: "#3776AB",
    accentBg: "rgba(255,214,207,0.4)",
    accentBorder: "rgba(255,138,122,0.25)",
  },
  {
    title: "Neural Networks for Computer Vision & NLP",
    issuer: "NPTEL",
    date: "2024",
    score: "78%",
    icon: Brain,
    iconColor: "#FF8A7A",
    accentBg: "rgba(255,214,207,0.4)",
    accentBorder: "rgba(255,138,122,0.25)",
  },
  {
    title: "Artificial Intelligence Foundation",
    issuer: "Infosys Springboard",
    date: "2024",
    icon: Cpu,
    iconColor: "#7ED7C1",
    accentBg: "rgba(221,247,240,0.5)",
    accentBorder: "rgba(126,215,193,0.3)",
  },
  {
    title: "Python Foundation Certification",
    issuer: "Infosys Springboard",
    date: "2024",
    icon: SiPython,
    iconColor: "#3776AB",
    accentBg: "rgba(221,247,240,0.5)",
    accentBorder: "rgba(126,215,193,0.3)",
  },
  {
    title: "Google Data Analytics",
    issuer: "Google / Coursera",
    date: "In Progress",
    icon: SiGoogle,
    iconColor: "#4285F4",
    accentBg: "rgba(255,214,207,0.3)",
    accentBorder: "rgba(255,138,122,0.2)",
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
        <div className="flex items-center gap-3 mb-10">
          <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase" style={{ background: "rgba(255,214,207,0.5)", color: "#c0554a" }}>
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
              className="card-hover relative p-5 rounded-2xl border bg-white shadow-sm group"
              style={{ borderColor: cert.accentBorder }}
              data-testid={`card-cert-${idx}`}
            >
              {/* Icon */}
              <div
                className="inline-flex p-2.5 rounded-xl border mb-4"
                style={{ background: cert.accentBg, borderColor: cert.accentBorder }}
              >
                <cert.icon size={22} style={{ color: cert.iconColor }} />
              </div>

              {/* Award badge */}
              <div className="absolute top-4 right-4">
                <Award size={15} style={{ color: "#FFB347" }} />
              </div>

              <h3 className="font-semibold text-foreground text-sm leading-snug mb-1.5 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs font-medium text-muted-foreground">{cert.issuer}</p>

              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-muted-foreground/70 font-mono">{cert.date}</span>
                {cert.score && (
                  <span
                    className="px-2 py-0.5 rounded-full text-xs font-semibold border"
                    style={{ background: "rgba(221,247,240,0.6)", borderColor: "rgba(126,215,193,0.4)", color: "#2D8C78" }}
                  >
                    Score: {cert.score}
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
