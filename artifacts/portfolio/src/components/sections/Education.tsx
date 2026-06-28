import { motion } from "framer-motion";

const EDUCATION = [
  {
    degree: "B.S. Computer Science",
    school: "State University",
    date: "2022 — Present (Exp. 2026)",
    gpa: "3.8/4.0",
    coursework: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Database Systems", "Machine Learning"]
  },
  {
    degree: "High School Diploma",
    school: "Tech Magnet High School",
    date: "2018 — 2022",
    gpa: "4.0/4.0",
    coursework: ["AP Computer Science A", "AP Physics C", "AP Calculus BC"]
  }
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Education</h2>
          <div className="h-[1px] flex-1 bg-border/60 max-w-[200px]"></div>
        </div>

        <div className="space-y-12 border-l border-border/60 ml-3 md:ml-0 md:pl-0 md:border-none">
          {EDUCATION.map((edu, idx) => (
            <motion.div 
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-0 md:grid md:grid-cols-[200px_1fr] md:gap-8 items-start"
            >
              {/* Timeline dot for mobile */}
              <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary md:hidden" />
              
              <div className="mb-2 md:mb-0 text-sm font-mono text-muted-foreground mt-1">
                {edu.date}
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                <div className="text-primary font-medium mb-3">{edu.school}</div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-semibold text-foreground/80">Cumulative GPA:</span> {edu.gpa}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map(course => (
                    <span key={course} className="px-3 py-1 bg-secondary/50 border border-border rounded-full text-xs text-muted-foreground">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
