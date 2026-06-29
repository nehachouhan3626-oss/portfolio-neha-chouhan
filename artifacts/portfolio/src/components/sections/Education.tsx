import { motion } from "framer-motion";
import { GraduationCap, Calendar, Star } from "lucide-react";

const EDUCATION = [
  {
    degree: "B.Tech — Computer Science & Engineering (AI & ML)",
    school: "Acropolis Institute of Technology and Research (AITR)",
    location: "Indore, Madhya Pradesh",
    date: "2024 — 2028 (Expected)",
    gpa: "7.4 CGPA",
    highlights: [
      "Specialization in Artificial Intelligence & Machine Learning",
      "Core coursework: Data Structures, Algorithms, DBMS, Computer Networks",
      "Active open-source contributor — CivicFlow and other community projects",
      "Completed multiple industry certifications alongside academics (NPTEL, Infosys)",
    ],
    current: true,
  },
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-10">
          <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase" style={{ background: "rgba(255,214,207,0.5)", color: "#c0554a" }}>
            Education
          </span>
          <div className="h-px flex-1 bg-border max-w-[120px]" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-10">
          Academic Background
        </h2>

        <div className="relative pl-8 md:pl-12">
          {/* Timeline line — coral to mint */}
          <div
            className="absolute left-3 md:left-5 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, #FF8A7A, #7ED7C1, transparent)" }}
          />

          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative mb-10 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-8 md:-left-12 top-5 flex items-center justify-center">
                <div
                  className="w-4 h-4 rounded-full border-4 border-background shadow-md"
                  style={{ background: "#FF8A7A" }}
                />
              </div>

              <div
                className="bg-white rounded-2xl border shadow-sm p-6 md:p-8 hover:shadow-md transition-all"
                style={{ borderColor: "rgba(255,138,122,0.2)" }}
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap size={20} style={{ color: "#FF8A7A" }} />
                      <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                    </div>
                    <p className="font-semibold" style={{ color: "#FF8A7A" }}>{edu.school}</p>
                    <p className="text-muted-foreground text-sm mt-0.5">{edu.location}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1.5 text-muted-foreground text-sm bg-secondary px-3 py-1.5 rounded-lg">
                      <Calendar size={14} />
                      <span>{edu.date}</span>
                    </div>
                    {edu.current && (
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold border"
                        style={{ background: "rgba(221,247,240,0.6)", borderColor: "rgba(126,215,193,0.4)", color: "#2D8C78" }}
                      >
                        Currently Enrolled
                      </span>
                    )}
                  </div>
                </div>

                {/* GPA */}
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border mb-5"
                  style={{ background: "rgba(255,214,207,0.3)", borderColor: "rgba(255,138,122,0.25)" }}
                >
                  <Star size={14} style={{ color: "#FF8A7A" }} fill="#FF8A7A" />
                  <span className="text-sm font-semibold" style={{ color: "#c0554a" }}>CGPA: {edu.gpa}</span>
                </div>

                {/* Highlights */}
                <ul className="space-y-2.5">
                  {edu.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#7ED7C1" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
