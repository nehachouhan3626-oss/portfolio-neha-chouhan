import { motion } from "framer-motion";
import { SiGoogle, SiMeta } from "react-icons/si";
import { Cloud } from "lucide-react";

const CERTS = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "Aug 2024",
    icon: Cloud,
    link: "#"
  },
  {
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta",
    date: "Jan 2024",
    icon: SiMeta,
    link: "#"
  },
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    date: "Nov 2023",
    icon: SiGoogle,
    link: "#"
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
          <div className="h-[1px] flex-1 bg-border/60 max-w-[200px]"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {CERTS.map((cert, idx) => (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-xl border border-border bg-secondary/20 hover:bg-secondary/40 transition-colors group"
            >
              <div className="mt-1 p-2 rounded-lg bg-background border border-border group-hover:border-primary/50 transition-colors">
                <cert.icon size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-1 leading-snug group-hover:text-primary transition-colors">{cert.title}</h3>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground/70 mt-2 font-mono">{cert.date}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
