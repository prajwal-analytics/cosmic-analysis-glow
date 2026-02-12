import { motion } from "framer-motion";
import { FileText, FolderOpen } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Background Halo Effect */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[450px] h-[450px] md:w-[550px] md:h-[550px] rounded-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(271 76% 53% / 0.35) 0%, hsl(195 100% 50% / 0.15) 40%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase neon-text-blue mb-4">
            Business Analytics Student Portfolio
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            Hi! I'm{" "}
            <span className="neon-text-purple">Prajwal MR</span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground mb-5">
            Final-Year BCom (Accounting & Finance) Student <br className="hidden md:block" />
            <span className="text-primary">Aspiring Business Analyst</span>
          </p>

          <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
            I focus on business analytics and data-driven decision-making,
            building dashboards and analytical reports using Power BI, Excel,
            SQL, and Python to transform data into actionable insights.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("#projects")}
              className="neon-btn flex items-center gap-2"
            >
              <FolderOpen className="w-4 h-4" />
              View Projects
            </button>

            <button className="neon-btn neon-btn-secondary flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Download Resume
            </button>
          </div>
        </motion.div>

        {/* RIGHT PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center"
        >
          <div className="relative flex items-center justify-center">
            
            {/* Outer Glow Ring */}
            <div className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full border border-primary/40 animate-glow-pulse"
              style={{
                boxShadow:
                  "0 0 60px hsl(271 76% 53% / 0.4), 0 0 120px hsl(195 100% 50% / 0.2)",
              }}
            />

            {/* Profile Image Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/50"
              style={{
                boxShadow:
                  "0 0 40px hsl(271 76% 53% / 0.35), inset 0 0 40px hsl(271 76% 53% / 0.15)",
              }}
            >
              <img
                src="https://i.postimg.cc/4dRjv2pk/IMG-20260127-WA0034.jpg"
                alt="Prajwal MR"
                className="w-full h-full object-cover object-center"
              />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;


