

# Prajwal MR — Business Analytics Portfolio Website

## Overview
A premium, futuristic single-page portfolio website with a dark cosmic galaxy theme, glassmorphism cards, neon glow effects, and smooth animations — closely replicating the reference designs provided.

---

## Sections & Features

### 1. Navigation Bar
- Fixed transparent navbar with backdrop blur
- Logo "Prajwal MR" on the left
- Links: Home, About, Projects, Skills, Contact with hover glow underline
- "Get In Touch" neon-bordered button on the right
- Smooth scroll to each section

### 2. Hero Section
- **Left side:** "Business Analytics Portfolio" label, large heading "Hi! I'm Prajwal MR", subtitle "Aspiring Business Analyst", description paragraph, two neon buttons (View Projects, Download Resume)
- **Right side:** 3D avatar placeholder illustration with circular neon glowing ring and purple-blue radial halo effect
- Fade-in entrance animations

### 3. Notable Projects Section
- Three glassmorphism project cards side-by-side:
  - **AdventureWorks Sales Analysis** (Power BI, SQL, Excel)
  - **Retail Sales Dashboard** (Power BI, Excel)
  - **CSR Impact Analysis (HUL)** (Excel, PowerPoint)
- Each card: title, subtitle, tech tags, dashboard preview placeholder, "View Project" neon button
- Hover: card lifts with intensified glow

### 4. Featured Skills Section
- Four skill cards: Excel (green), Power BI (orange), SQL (blue), Python (yellow)
- Each with icon, label, unique neon border color, hover zoom + glow effect
- **Clicking a skill** expands/navigates to a detailed skill breakdown panel

### 5. Skill Detail Panels
- Four expandable/modal panels showing sub-skills with animated progress bars:
  - **Excel:** Data Cleaning, Pivot Tables, VLOOKUP & HLOOKUP, Data Visualization, Advanced Formulas (green glow)
  - **Power BI:** Dashboard Design, DAX Calculations, Data Modeling, Power Query & ETL, KPIs and Metrics (orange glow)
  - **SQL:** Query Optimization, JOINS & Subqueries, Stored Procedures, Data Manipulation, Indexing & Performance Tuning (blue glow)
  - **Python:** Data Analysis (Pandas), Data Visualization (Matplotlib), Machine Learning Intro, Automation Scripting, API Integration (yellow glow)
- Progress bars animate on view with neon colored fills

### 6. About Me Section
- Glassmorphism panel with bio text about Prajwal MR from Bangalore, BCom in Accounting & Finance, pursuing CS qualification, fluent in English, Kannada, basic German

### 7. Certifications Section
- 2×3 grid of glowing mini-cards:
  - Microsoft Power BI Data Analyst
  - Data Visualization — Tata (Forage)
  - Operations Job Simulation — Goldman Sachs
  - Operations Job Simulation (Forage)
  - Business Analytics with AI
  - Understanding UK Business Finance

### 8. Education Section
- Timeline-style layout with glowing separators:
  - Jain University — BCom (Accounting & Finance) — Graduation 2026
  - ICSI — Executive Level — Expected 2028

### 9. Contact / Get in Touch Section
- Three contact items with neon icon glow on hover:
  - Email: csprajwalmr@gmail.com
  - LinkedIn: linkedin.com/in/prajwal-mr-845571297
  - GitHub: github.com/prajwal-analytics

---

## Design & Styling
- **Background:** Deep space dark navy with CSS gradient overlays (purple-blue), subtle star particles via CSS
- **Color palette:** Neon purple (#8A2BE2), electric blue (#00BFFF), cyan accents, dark navy base
- **Cards:** Glassmorphism (backdrop-blur, semi-transparent backgrounds, neon glow borders)
- **Border radius:** 16–20px throughout
- **Animations:** Fade-in on scroll (Intersection Observer), floating effects, hover scale/glow, animated progress bars, smooth scrolling
- **Fully responsive** for desktop and mobile

## Technical Approach
- Single-page React app with section-based smooth scrolling
- All styling via Tailwind CSS with custom CSS for glow/glassmorphism effects
- No backend needed — purely static portfolio
- Framer Motion for scroll and hover animations

