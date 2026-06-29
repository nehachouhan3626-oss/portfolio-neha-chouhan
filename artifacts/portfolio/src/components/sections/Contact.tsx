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
    color: "text-primary",
    bg: "bg-primary/8",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9893909127",
    href: "tel:+919893909127",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Indore, India",
    href: null,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

const SOCIALS = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/nehachouhan3626-oss",
    color: "hover:text-foreground hover:bg-foreground/8",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/neha-chouhan-889215360/",
    color: "hover:text-[#0A66C2] hover:bg-[#0A66C2]/8",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:nehachouhan3626@gmail.com",
    color: "hover:text-primary hover:bg-primary/8",
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
      description: "Thanks for reaching out, Neha will get back to you soon.",
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
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase">
            Contact
          </span>
          <div className="h-px flex-1 bg-border max-w-[120px]" />
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            I'm actively seeking internship opportunities and collaboration on exciting AI/ML projects. Feel free to reach out — I'd love to connect!
          </p>
        </div>

        <div className="grid md:grid-cols-[320px_1fr] gap-8">
          {/* Info side */}
          <div className="space-y-6">
            {/* Contact cards */}
            <div className="space-y-3">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href, color, bg }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
                >
                  <div className={`p-2.5 rounded-xl ${bg}`}>
                    <Icon size={18} className={color} />
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
            </div>

            {/* Social links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Connect on Socials</h3>
              <div className="flex gap-3">
                {SOCIALS.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className={`w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground border border-border transition-all ${color}`}
                    data-testid={`link-social-${label.toLowerCase()}`}
                  >
                    <Icon size={19} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability note */}
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-semibold text-emerald-700">Available for Opportunities</span>
              </div>
              <p className="text-xs text-emerald-600">Open to internships, research collaborations, and project partnerships.</p>
            </div>
          </div>

          {/* Form side */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-border shadow-sm">
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
                          <Input
                            placeholder="Recruiter / Collaborator"
                            className="bg-secondary/50 border-border focus:border-primary/50 rounded-xl"
                            {...field}
                          />
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
                          <Input
                            placeholder="you@company.com"
                            type="email"
                            className="bg-secondary/50 border-border focus:border-primary/50 rounded-xl"
                            {...field}
                          />
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
                          className="min-h-[140px] bg-secondary/50 border-border focus:border-primary/50 resize-none rounded-xl"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
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
      <footer className="mt-24 pb-8 border-t border-border pt-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            <p>Designed & Built by <span className="font-semibold text-foreground">Neha Chouhan</span></p>
            <p className="mt-0.5 opacity-60">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
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
