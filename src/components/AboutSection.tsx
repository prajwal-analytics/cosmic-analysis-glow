import { motion } from "framer-motion";
import { MapPin, GraduationCap, BookOpen, Languages } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="neon-text-purple">Me</span>
          </h2>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-10"
        >
          <p className="text-muted-foreground leading-relaxed mb-6">
            I'm Prajwal MR, a final-year{" "}
            <strong className="text-foreground">
              BCom (Accounting & Finance)
            </strong>{" "}
            student based in{" "}
            <strong className="text-foreground">
              Bangalore, India
            </strong>. 
            My focus lies in business analytics, financial analysis, and data-driven 
            decision-making using tools such as Power BI, Excel, SQL, and Python.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-8">
            Alongside my degree, I am pursuing the{" "}
            <strong className="text-foreground">
              CS (Company Secretary) – Executive Level
            </strong>{" "}
            from ICSI. This strengthens my expertise in corporate governance, 
            regulatory compliance, and financial management. 
            I aim to combine analytical thinking with strategic business insight 
            to deliver impactful and actionable solutions.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
            {[
              { icon: MapPin, label: "Bangalore, India" },
              { icon: GraduationCap, label: "BCom (A&F) – 2023–2026" },
              { icon: BookOpen, label: "CS Executive (Pursuing)" },
              { icon: Languages, label: "English | Kannada | German (Basic)" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <item.icon className="w-4 h-4 text-primary" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;


