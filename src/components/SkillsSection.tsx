import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Table2, BarChart3, Database, Code2 } from "lucide-react";

interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
  glowClass: string;
  borderClass: string;
  textClass: string;
  bgClass: string;
  subSkills: { label: string; level: number }[];
}

const skills: Skill[] = [
  {
    name: "Excel",
    icon: Table2,
    color: "hsl(142 71% 45%)",
    glowClass: "neon-border-green",
    borderClass: "border-neon-green",
    textClass: "neon-text-green",
    bgClass: "bg-neon-green/10",
    subSkills: [
      { label: "Data Cleaning", level: 90 },
      { label: "Pivot Tables", level: 88 },
      { label: "VLOOKUP & HLOOKUP", level: 85 },
      { label: "Data Visualization", level: 82 },
      { label: "Advanced Formulas", level: 80 },
    ],
  },
  {
    name: "Power BI",
    icon: BarChart3,
    color: "hsl(25 95% 53%)",
    glowClass: "neon-border-orange",
    borderClass: "border-neon-orange",
    textClass: "neon-text-orange",
    bgClass: "bg-neon-orange/10",
    subSkills: [
      { label: "Dashboard Design", level: 88 },
      { label: "DAX Calculations", level: 82 },
      { label: "Data Modeling", level: 85 },
      { label: "Power Query & ETL", level: 80 },
      { label: "KPIs and Metrics", level: 86 },
    ],
  },
  {
    name: "SQL",
    icon: Database,
    color: "hsl(195 100% 50%)",
    glowClass: "neon-border-blue",
    borderClass: "border-neon-blue",
    textClass: "neon-text-blue",
    bgClass: "bg-neon-blue/10",
    subSkills: [
      { label: "Query Optimization", level: 85 },
      { label: "JOINS & Subqueries", level: 90 },
      { label: "Stored Procedures", level: 78 },
      { label: "Data Manipulation", level: 88 },
      { label: "Indexing & Performance Tuning", level: 75 },
    ],
  },
  {
    name: "Python",
    icon: Code2,
    color: "hsl(48 96% 53%)",
    glowClass: "neon-border-yellow",
    borderClass: "border-neon-yellow",
    textClass: "neon-text-yellow",
    bgClass: "bg-neon-yellow/10",
    subSkills: [
      { label: "Data Analysis (Pandas)", level: 82 },
      { label: "Data Visualization (Matplotlib)", level: 78 },
      { label: "Machine Learning Intro", level: 65 },
      { label: "Automation Scripting", level: 75 },
      { label: "API Integration", level: 70 },
    ],
  },
];

const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  return (
    <section id="skills" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="neon-text-blue">Skills</span>
          </h2>
          <p className="text-muted-foreground">Click a skill to explore detailed proficiency breakdown</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {skills.map((skill, i) => (
            <motion.button
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              onClick={() => setActiveSkill(activeSkill?.name === skill.name ? null : skill)}
              className={`glass-card p-6 flex flex-col items-center gap-4 cursor-pointer border ${skill.glowClass} transition-all hover:scale-105`}
            >
              <skill.icon className="w-12 h-12" style={{ color: skill.color }} />
              <span className="font-semibold text-foreground">{skill.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Skill Detail Panel */}
        <AnimatePresence>
          {activeSkill && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className={`glass-card p-8 border ${activeSkill.glowClass}`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <activeSkill.icon className="w-8 h-8" style={{ color: activeSkill.color }} />
                    <h3 className="text-2xl font-bold" style={{ color: activeSkill.color }}>
                      {activeSkill.name} Skills
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveSkill(null)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-5">
                  {activeSkill.subSkills.map((sub, i) => (
                    <motion.div
                      key={sub.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-foreground font-medium">{sub.label}</span>
                        <span className="text-sm text-muted-foreground">{sub.level}%</span>
                      </div>
                      <div className="w-full h-3 rounded-full bg-muted/40 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${sub.level}%` }}
                          transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${activeSkill.color}, ${activeSkill.color}aa)`,
                            boxShadow: `0 0 12px ${activeSkill.color}66`,
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;
