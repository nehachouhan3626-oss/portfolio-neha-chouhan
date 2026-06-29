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
      "Active contributor to open-source projects on GitHub",
      "Completed multiple industry certifications alongside academics",
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
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase">
            Education
          </span>
          <div className="h-px flex-1 bg-border max-w-[120px]" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-10">
          Academic Background
        </h2>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12">
          {/* Vertical line */}
          <div className="absolute left-3 md:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent" />

          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative mb-10 last:mb-0"
            >
              {/* Dot */}
              <div className="absolute -left-8 md:-left-12 top-5 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md" />
              </div>

              <div className="bg-white rounded-2xl border border-border shadow-sm p-6 md:p-8 hover:shadow-md hover:border-primary/25 transition-all">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap size={20} className="text-primary" />
                      <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                    </div>
                    <p className="text-primary font-semibold">{edu.school}</p>
                    <p className="text-muted-foreground text-sm mt-0.5">{edu.location}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1.5 text-muted-foreground text-sm bg-secondary px-3 py-1.5 rounded-lg">
                      <Calendar size={14} />
                      <span>{edu.date}</span>
                    </div>
                    {edu.current && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Currently Enrolled
                      </span>
                    )}
                  </div>
                </div>

                {/* GPA */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/8 border border-primary/15 mb-5">
                  <Star size={14} className="text-primary fill-primary" />
                  <span className="text-sm font-semibold text-primary">CGPA: {edu.gpa}</span>
                </div>

                {/* Highlights */}
                <ul className="space-y-2.5">
                  {edu.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
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
