import { motion } from "framer-motion";
import { ExternalLink, BarChart3, PieChart, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "AdventureWorks Sales Analysis",
    subtitle: "Comprehensive sales performance dashboard with KPI tracking",
    tags: ["Power BI", "SQL", "Excel"],
    icon: BarChart3,
  },
  {
    title: "Retail Sales Dashboard",
    subtitle: "Interactive retail analytics with trend analysis and forecasting",
    tags: ["Power BI", "Excel"],
    icon: PieChart,
  },
  {
    title: "CSR Impact Analysis (HUL)",
    subtitle: "Corporate social responsibility impact measurement and reporting",
    tags: ["Excel", "PowerPoint"],
    icon: TrendingUp,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Notable <span className="neon-text-purple">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world analytics projects demonstrating expertise in data visualization, 
            business intelligence, and actionable insight generation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-6 flex flex-col"
            >
              {/* Dashboard preview placeholder */}
              <div className="w-full h-40 rounded-xl bg-muted/30 mb-5 flex items-center justify-center border border-border/30 overflow-hidden">
                <project.icon className="w-16 h-16 text-primary/40" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{project.subtitle}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-primary/30 text-primary bg-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="neon-btn text-sm py-2 flex items-center justify-center gap-2 w-full">
                <ExternalLink className="w-3.5 h-3.5" />
                View Project
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
