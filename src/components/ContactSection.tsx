import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "csprajwalmr@gmail.com",
    href: "mailto:csprajwalmr@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/prajwal-mr-845571297",
    href: "https://linkedin.com/in/prajwal-mr-845571297",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/prajwal-analytics",
    href: "https://github.com/prajwal-analytics",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In <span className="neon-text-blue">Touch</span>
          </h2>
          <p className="text-muted-foreground">
            Feel free to reach out for collaborations or opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {contacts.map((contact, i) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-6 flex flex-col items-center gap-3 text-center group"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary/10 border border-primary/30 group-hover:border-primary/60 transition-all"
                style={{ transition: "box-shadow 0.3s" }}
              >
                <contact.icon className="w-6 h-6 text-primary group-hover:drop-shadow-[0_0_8px_hsl(271,76%,53%,0.6)] transition-all" />
              </div>
              <h3 className="font-semibold text-foreground">{contact.label}</h3>
              <p className="text-xs text-muted-foreground break-all">{contact.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center text-sm text-muted-foreground border-t border-border/30 pt-8">
          © 2026 Prajwal MR. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
