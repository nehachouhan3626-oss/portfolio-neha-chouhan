import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certificates from "@/components/sections/Certificates";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />
      <div className="mx-auto max-w-5xl px-6 md:px-12 flex flex-col gap-28 pb-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Education />
        <Contact />
      </div>
    </main>
  );
}
