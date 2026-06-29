import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";

const PROJECTS = [
  {
    title: "CivicFlow",
    description:
      "A civic engagement platform that connects citizens with local government services, enabling seamless complaint submission, real-time status tracking, and community-driven issue resolution. Bridges the gap between residents and civic authorities for transparent governance.",
    tech: ["Python", "React", "Node.js", "MySQL", "REST API"],
    github: "https://github.com/nehachouhan3626-oss/CivicFlow",
    live: "",
    featured: true,
    tag: "Open Source",
    gradient: "from-[#FF8A7A] via-[#FFB4A2] to-[#7ED7C1]",
  },
  {
    title: "AI Sentiment Analyzer",
    description:
      "A natural language processing tool that classifies text sentiment using machine learning models trained on large-scale review datasets. Includes a clean web interface for real-time sentiment analysis with confidence scores.",
    tech: ["Python", "Scikit-learn", "NLP", "Pandas", "Flask"],
    github: "https://github.com/nehachouhan3626-oss",
    live: "",
    featured: false,
    tag: "AI & ML",
    gradient: "from-[#7ED7C1] to-[#DDF7F0]",
  },
  {
    title: "Computer Vision Classifier",
    description:
      "An image classification system leveraging convolutional neural networks (CNN) to detect and categorize objects in real time. Demonstrates an end-to-end deep learning pipeline from data preprocessing to model inference.",
    tech: ["Python", "NumPy", "CNN", "Neural Networks", "Jupyter"],
    github: "https://github.com/nehachouhan3626-oss",
    live: "",
    featured: false,
    tag: "Deep Learning",
    gradient: "from-[#FFD6CF] to-[#FF8A7A]",
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
        <div className="flex items-center gap-3 mb-10">
          <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase" style={{ background: "rgba(255,214,207,0.5)", color: "#c0554a" }}>
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
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
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
                project.featured ? "md:col-span-2" : ""
              }`}
              style={{ borderColor: "rgba(255,138,122,0.2)" }}
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

              <div className={`p-6 flex flex-col flex-1 ${project.featured ? "md:grid md:grid-cols-[1fr_auto] md:gap-8" : ""}`}>
                <div className="flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span
                        className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                        style={{ background: "rgba(255,214,207,0.5)", color: "#c0554a" }}
                      >
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
                          className="hover:text-foreground transition-colors p-1 rounded-lg"
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
                          className="transition-colors p-1 rounded-lg"
                          data-testid={`link-live-${idx}`}
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3
                    className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors"
                    style={{ color: undefined }}
                  >
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
                        className="px-2.5 py-1 text-xs font-medium rounded-lg border"
                        style={{ background: "rgba(221,247,240,0.5)", borderColor: "rgba(126,215,193,0.35)", color: "#2D8C78" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CivicFlow: placeholder visual for featured card */}
                {project.featured && (
                  <div className="hidden md:flex items-center justify-center mt-6 md:mt-0">
                    <div
                      className="w-36 h-36 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ background: "linear-gradient(135deg, #FF8A7A22, #7ED7C133)" }}
                    >
                      <div className="text-center">
                        <span className="text-4xl block mb-1">🏛️</span>
                        <span className="text-xs font-bold text-foreground/60">CivicFlow</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
