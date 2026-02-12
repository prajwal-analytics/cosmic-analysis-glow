import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  "Microsoft Power BI Data Analyst",
  "Data Visualization — Tata (Forage)",
  "Operations Job Simulation — Goldman Sachs",
  "Operations Job Simulation (Forage)",
  "Business Analytics with AI",
  "Understanding UK Business Finance",
];

const CertificationsSection = () => {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="neon-text-blue">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-5 flex items-center gap-4 neon-border-purple"
            >
              <Award className="w-6 h-6 text-primary shrink-0" />
              <span className="text-sm font-medium text-foreground">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
