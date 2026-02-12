import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Languages } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-4xl mx-auto px-6">
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-10"
        >
          <p className="text-muted-foreground leading-relaxed mb-6">
            I'm Prajwal MR, an aspiring Business Analyst based in <strong className="text-foreground">Bangalore, India</strong>. 
            Currently pursuing my <strong className="text-foreground">BCom in Accounting & Finance</strong> from Jain University, 
            I'm passionate about leveraging data analytics to drive business decisions and operational improvements.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I'm also pursuing my <strong className="text-foreground">CS (Company Secretary)</strong> qualification from ICSI, 
            combining financial expertise with analytical skills. I believe in the power of data storytelling 
            and creating impactful visualizations that enable stakeholders to make informed decisions.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: MapPin, label: "Bangalore, India" },
              { icon: GraduationCap, label: "BCom (A&F)" },
              { icon: User, label: "Business Analyst" },
              { icon: Languages, label: "EN, KN, DE" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm text-muted-foreground">
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
