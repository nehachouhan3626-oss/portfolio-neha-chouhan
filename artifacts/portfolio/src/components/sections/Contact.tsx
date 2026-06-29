import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Github, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "nehachouhan3626@gmail.com",
    href: "mailto:nehachouhan3626@gmail.com",
    color: "#FF8A7A",
    bg: "rgba(255,214,207,0.45)",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9893909127",
    href: "tel:+919893909127",
    color: "#7ED7C1",
    bg: "rgba(221,247,240,0.5)",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Indore, India",
    href: null,
    color: "#FFB4A2",
    bg: "rgba(255,214,207,0.35)",
  },
];

const SOCIALS = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/nehachouhan3626-oss",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/neha-chouhan-889215360/",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:nehachouhan3626@gmail.com",
  },
];

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. Neha will get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-10">
          <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase" style={{ background: "rgba(255,214,207,0.5)", color: "#c0554a" }}>
            Contact
          </span>
          <div className="h-px flex-1 bg-border max-w-[120px]" />
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            I'm actively seeking internship opportunities and open to collaborating on exciting AI/ML projects. Feel free to reach out — I'd love to connect!
          </p>
        </div>

        <div className="grid md:grid-cols-[320px_1fr] gap-8">
          {/* Info side */}
          <div className="space-y-5">
            {CONTACT_INFO.map(({ icon: Icon, label, value, href, color, bg }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all"
                style={{ borderColor: "rgba(255,138,122,0.2)" }}
              >
                <div className="p-2.5 rounded-xl" style={{ background: bg }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-foreground">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Connect on Socials</h3>
              <div className="flex gap-3">
                {SOCIALS.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-muted-foreground border transition-all hover:-translate-y-0.5 hover:shadow-md"
                    style={{ borderColor: "rgba(255,138,122,0.2)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#FF8A7A55"; (e.currentTarget as HTMLAnchorElement).style.color = "#FF8A7A"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,138,122,0.2)"; (e.currentTarget as HTMLAnchorElement).style.color = ""; }}
                    data-testid={`link-social-${label.toLowerCase()}`}
                  >
                    <Icon size={19} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div
              className="p-4 rounded-2xl border"
              style={{ background: "rgba(221,247,240,0.5)", borderColor: "rgba(126,215,193,0.35)" }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold" style={{ color: "#2D8C78" }}>Available for Opportunities</span>
              </div>
              <p className="text-xs" style={{ color: "#3aab8f" }}>Open to internships, research collaborations, and project partnerships.</p>
            </div>
          </div>

          {/* Form side */}
          <div
            className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm"
            style={{ borderColor: "rgba(255,138,122,0.2)" }}
          >
            <h3 className="text-lg font-bold text-foreground mb-6">Send a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-foreground">Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Recruiter / Collaborator" className="bg-secondary/50 rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-foreground">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="you@company.com" type="email" className="bg-secondary/50 rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about the opportunity or project you have in mind..."
                          className="min-h-[140px] bg-secondary/50 resize-none rounded-xl"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button
                  type="submit"
                  className="w-full py-3 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all hover:opacity-90 hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #FF8A7A, #7ED7C1)", boxShadow: "0 6px 20px rgba(255,138,122,0.3)" }}
                  data-testid="button-submit-contact"
                >
                  <Send size={17} />
                  Send Message
                </button>
              </form>
            </Form>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="mt-24 pb-8 border-t pt-8" style={{ borderColor: "rgba(255,138,122,0.15)" }}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            <p>Designed & Built with <span style={{ color: "#FF8A7A" }}>♥</span> by <span className="font-semibold text-foreground">Neha Chouhan</span></p>
            <p className="mt-0.5 opacity-60">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border text-sm font-medium text-muted-foreground hover:text-foreground hover:shadow-sm transition-all"
            style={{ borderColor: "rgba(255,138,122,0.2)" }}
            data-testid="button-back-to-top"
          >
            <ArrowUp size={15} />
            Back to top
          </button>
        </div>
      </footer>
    </section>
  );
}
