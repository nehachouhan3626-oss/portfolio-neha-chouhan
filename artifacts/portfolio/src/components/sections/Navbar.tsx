import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      let current = "";
      for (const s of sections) {
        if (s) {
          const r = s.getBoundingClientRect();
          if (r.top <= 120 && r.bottom >= 120) current = s.id;
        }
      }
      if (current !== activeSection) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav border-b shadow-sm" : "bg-transparent"
      }`}
      style={{ borderColor: isScrolled ? "rgba(255,138,122,0.2)" : "transparent" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between" style={{ height: "72px" }}>
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 group"
          data-testid="link-home"
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md"
            style={{ background: "linear-gradient(135deg, #FF8A7A, #7ED7C1)" }}
          >
            <span className="text-white text-sm font-bold leading-none">NC</span>
          </div>
          <span className="text-base font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
            Neha<span style={{ color: "#FF8A7A" }}>.</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative px-3 py-2 text-sm font-medium rounded-lg transition-all"
              style={{
                color: activeSection === item.id ? "#FF8A7A" : undefined,
                background: activeSection === item.id ? "rgba(255,214,207,0.45)" : undefined,
              }}
              data-testid={`nav-${item.id}`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                  style={{ background: "#FF8A7A" }}
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="ml-3 px-5 py-2 text-sm font-semibold text-white rounded-xl hover:opacity-90 transition-all hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #FF8A7A, #FFB4A2)", boxShadow: "0 4px 14px rgba(255,138,122,0.35)" }}
            data-testid="nav-cta"
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-b overflow-hidden"
            style={{ borderColor: "rgba(255,138,122,0.2)" }}
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left px-4 py-3 rounded-xl text-base font-medium transition-colors"
                  style={{
                    color: activeSection === item.id ? "#FF8A7A" : undefined,
                    background: activeSection === item.id ? "rgba(255,214,207,0.45)" : undefined,
                  }}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="mt-3 px-4 py-3 text-center font-semibold text-white rounded-xl"
                style={{ background: "linear-gradient(135deg, #FF8A7A, #FFB4A2)" }}
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}