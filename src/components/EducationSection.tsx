import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Jain (Deemed-to-be University)",
    degree: "Bachelor of Commerce (BCom), Accounting & Finance",
    duration: "2023 – 2026",
    details:
      "Relevant Coursework: Financial Accounting, Corporate Accounting, Financial Management, Cost Accounting, Auditing, Direct Tax, International Financial Management, Business Analytics, Artificial Intelligence.",
  },
  {
    institution: "The Institute of Company Secretaries of India (ICSI)",
    degree: "Company Secretary — Executive Level (Pursuing)",
    duration: "Expected 2028",
    details:
      "Core Areas: Corporate Governance, Company Law, Capital Markets, Business Law, Financial Management.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="relative py-24">
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
            <span className="neon-text-purple">Education</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent" />

          <div className="space-y-10">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 top-2 w-5 h-5 rounded-full border-2 border-primary bg-background"
                  style={{ boxShadow: "0 0 12px hsl(271 76% 53% / 0.5)" }}
                />

                <div className="glass-card p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">
                      {edu.institution}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-1">
                    {edu.degree}
                  </p>

                  <p className="text-xs text-primary mb-3">
                    {edu.duration}
                  </p>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

