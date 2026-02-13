import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "LEGO Set Explorer Dashboard",
    subtitle:
      "Interactive Power BI dashboard enabling users to explore and compare 4,385+ LEGO sets using advanced DAX logic and dynamic filtering.",
    tags: ["Power BI", "Excel"],
    image: "https://i.postimg.cc/59vmvN2q/IMG-20260121-WA0039(5).jpg",
  },
  {
    title: "Tata Data Visualization – Business Insights",
    subtitle:
      "Power BI project focused on cleaning retail data, building KPI dashboards, and delivering strategic sales insights for executive decision-making.",
    tags: ["Power BI", "Excel"],
    image: "https://i.postimg.cc/PJ4p47cr/IMG-20260122-WA0034(2).jpg",
  },
   {
    title: "AdventureWorks Sales Dashboard",
    subtitle:
      "Interactive Power BI dashboard analyzing revenue, profit, orders, and return trends using advanced DAX and KPI tracking to drive data-driven business insights.",
    tags: ["Power BI", "Excel"],
    image: "https://i.postimg.cc/rFmVYBG2/IMG-20260213-WA0003.jpg",
  },
  {
    title: "CSR Impact Analysis (HUL)",
    subtitle:
      "Corporate social responsibility impact measurement and sustainability reporting case study.",
    tags: ["PDF"],
    image: "https://i.postimg.cc/mkR174mw/IMG-20260122-WA0039.jpg",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
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
            Selected business analytics projects showcasing dashboard design, KPI modeling, and data-driven decision-making.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-6 flex flex-col hover:shadow-[0_0_25px_rgba(138,43,226,0.4)] transition-all duration-300"
            >

              {/* Thumbnail */}
              <div className="w-full h-40 rounded-xl mb-5 overflow-hidden border border-border/30">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {project.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {project.subtitle}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-3 py-1 rounded-full border ${
                      tag === "Power BI"
                        ? "border-yellow-400 text-yellow-300 bg-yellow-400/10"
                        : tag === "Excel"
                        ? "border-green-400 text-green-300 bg-green-400/10"
                        : tag === "PDF"
                        ? "border-red-500 text-red-400 bg-red-500/10"
                        : ""
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button */}
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

