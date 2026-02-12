import { motion } from "framer-motion";
import { Table2, BarChart3, Database, Code2 } from "lucide-react";

interface SkillData {
  name: string;
  icon: React.ElementType;
  color: string;
  glowClass: string;
  subSkills: { label: string; level: number }[];
}

const skills: SkillData[] = [
  {
    name: "Excel",
    icon: Table2,
    color: "hsl(142 71% 45%)",
    glowClass: "neon-border-green",
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
    subSkills: [
      { label: "Query Optimization", level: 85 },
      { label: "JOINS & Subqueries", level: 90 },
      { label: "Stored Procedures", level: 78 },
      { label: "Data Manipulation (CRUD)", level: 88 },
      { label: "Indexing & Performance Tuning", level: 75 },
    ],
  },
  {
    name: "Python",
    icon: Code2,
    color: "hsl(48 96% 53%)",
    glowClass: "neon-border-yellow",
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
        </motion.div>

        {/* All 4 skill detail cards side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`glass-card p-6 border ${skill.glowClass}`}
            >
              {/* Icon + Title */}
              <div className="flex flex-col items-center mb-6">
                <skill.icon className="w-12 h-12 mb-3" style={{ color: skill.color }} />
                <h3 className="text-lg font-bold text-foreground">
                  <span style={{ color: skill.color }}>{skill.name}</span> Skills
                </h3>
              </div>

              {/* Sub-skills with progress bars */}
              <div className="space-y-4">
                {skill.subSkills.map((sub, j) => (
                  <motion.div
                    key={sub.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 + j * 0.08 }}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs" style={{ color: skill.color }}>▸</span>
                      <span className="text-sm text-foreground">{sub.label}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-muted/40 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${sub.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 + j * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                          boxShadow: `0 0 8px ${skill.color}44`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
