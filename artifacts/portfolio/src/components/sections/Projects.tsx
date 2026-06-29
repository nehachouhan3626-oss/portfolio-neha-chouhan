import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";

const PROJECTS = [
  {
    title: "CivicFlow",
    description:
      "A civic engagement platform that connects citizens with local government services, enabling seamless complaint submission, status tracking, and community issue resolution. Built to bridge the gap between residents and civic authorities.",
    tech: ["Python", "React", "Node.js", "MySQL", "REST API"],
    github: "https://github.com/nehachouhan3626-oss/CivicFlow",
    live: "",
    featured: true,
    tag: "Open Source",
  },
  {
    title: "AI-Powered Sentiment Analyzer",
    description:
      "A natural language processing tool that classifies text sentiment using machine learning models. Built with Python, scikit-learn, and trained on large-scale review datasets. Includes a clean web interface for real-time analysis.",
    tech: ["Python", "Scikit-learn", "NLP", "Pandas", "Flask"],
    github: "https://github.com/nehachouhan3626-oss",
    live: "",
    featured: false,
    tag: "AI & ML",
  },
  {
    title: "Computer Vision Classifier",
    description:
      "An image classification system leveraging neural networks (CNN) to detect and categorize objects in real time. Inspired by coursework in Neural Networks for Computer Vision, demonstrating end-to-end deep learning pipeline implementation.",
    tech: ["Python", "NumPy", "Neural Networks", "CNN", "Jupyter"],
    github: "https://github.com/nehachouhan3626-oss",
    live: "",
    featured: false,
    tag: "Deep Learning",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase">
            Projects
          </span>
          <div className="h-px flex-1 bg-border max-w-[120px]" />
        </div>

        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Featured Projects
          </h2>
          <a
            href="https://github.com/nehachouhan3626-oss"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={16} />
            View all on GitHub
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`card-hover group relative flex flex-col bg-white rounded-2xl border shadow-sm overflow-hidden ${
                project.featured
                  ? "border-primary/30 md:col-span-2 md:grid md:grid-cols-2 md:gap-0"
                  : "border-border"
              }`}
            >
              {/* Color accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r from-primary via-violet-500 to-cyan-500 ${project.featured ? "md:h-full md:w-1 md:min-h-0" : ""}`} />

              <div className="p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                      {project.tag}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-600 border border-amber-200">
                        <Star size={10} fill="currentColor" />
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-primary transition-colors p-1 rounded-lg hover:bg-primary/8"
                        data-testid={`link-github-${idx}`}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-primary transition-colors p-1 rounded-lg hover:bg-primary/8"
                        data-testid={`link-live-${idx}`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-secondary text-foreground/70 border border-border/60"
                    >
                      {t}
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
