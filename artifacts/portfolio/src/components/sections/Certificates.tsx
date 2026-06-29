import { motion } from "framer-motion";
import { SiPython, SiGoogle } from "react-icons/si";
import { Brain, Award, Cpu, ExternalLink } from "lucide-react";

type Cert = {
  title: string;
  issuer: string;
  date: string;
  score?: string;
  detail?: string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  iconColor: string;
  accentBg: string;
  accentBorder: string;
  pdfPath?: string;
};

const CERTS: Cert[] = [
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    date: "Jan–Feb 2026",
    score: "70%",
    detail: "4 week course · 22.25/25 assignments · 47.25/75 exam",
    icon: SiPython,
    iconColor: "#3776AB",
    accentBg: "rgba(255,214,207,0.4)",
    accentBorder: "rgba(255,138,122,0.25)",
    pdfPath: "/certificates/nptel-python.pdf",
  },
  {
    title: "Neural Networks for Computer Vision & NLP",
    issuer: "NPTEL",
    date: "Jan–Apr 2026",
    score: "78%",
    detail: "12 week course · 25/25 assignments · 52.5/75 exam",
    icon: Brain,
    iconColor: "#FF8A7A",
    accentBg: "rgba(255,214,207,0.4)",
    accentBorder: "rgba(255,138,122,0.25)",
    pdfPath: "/certificates/nptel-neural.pdf",
  },
  {
    title: "Artificial Intelligence Foundation",
    issuer: "Infosys Springboard",
    date: "January 8, 2026",
    icon: Cpu,
    iconColor: "#7ED7C1",
    accentBg: "rgba(221,247,240,0.5)",
    accentBorder: "rgba(126,215,193,0.3)",
    pdfPath: "/certificates/infosys-ai.pdf",
  },
  {
    title: "Python Foundation Certification",
    issuer: "Infosys Springboard",
    date: "January 8, 2026",
    icon: SiPython,
    iconColor: "#3776AB",
    accentBg: "rgba(221,247,240,0.5)",
    accentBorder: "rgba(126,215,193,0.3)",
    pdfPath: "/certificates/infosys-python.pdf",
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
              <div className="absolute top-4 right-4 flex items-center gap-1.5">
                {cert.pdfPath && (
                  <a
                    href={cert.pdfPath}
                    target="_blank"
                    rel="noreferrer"
                    title="View Certificate"
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
                <Award size={15} style={{ color: "#FFB347" }} />
              </div>

              <h3 className="font-semibold text-foreground text-sm leading-snug mb-1.5 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs font-medium text-muted-foreground">{cert.issuer}</p>

              {cert.detail && (
                <p className="text-[11px] text-muted-foreground/60 mt-1 font-mono leading-snug">{cert.detail}</p>
              )}

              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-muted-foreground/70 font-mono">{cert.date}</span>
                {cert.score ? (
                  <span
                    className="px-2 py-0.5 rounded-full text-xs font-semibold border"
                    style={{ background: "rgba(221,247,240,0.6)", borderColor: "rgba(126,215,193,0.4)", color: "#2D8C78" }}
                  >
                    Score: {cert.score}
                  </span>
                ) : cert.date === "In Progress" ? (
                  <span
                    className="px-2 py-0.5 rounded-full text-xs font-semibold border"
                    style={{ background: "rgba(255,214,207,0.4)", borderColor: "rgba(255,138,122,0.25)", color: "#c0554a" }}
                  >
                    In Progress
                  </span>
                ) : null}
              </div>

              {cert.pdfPath && (
                <a
                  href={cert.pdfPath}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 flex items-center gap-1.5 text-xs font-medium transition-colors"
                  style={{ color: "#FF8A7A" }}
                >
                  <ExternalLink size={12} />
                  View Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
