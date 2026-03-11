import { useState } from "react";
import { ArrowUpRight, Github, Search } from "lucide-react";

const projects = [
  {
    title: "Scholarship Management Platform",
    description:
      "Full-stack scholarship platform enabling students to browse, apply, and track scholarships with advanced search, wishlists, reviews, role-based dashboards, secure authentication, and Stripe payment integration.",
    image: "p1.png",
    tags: ["React",  "NodeJS","Firebase", "Stripe", "MongoDB"],
    category: "Full Stack",
    link: "https://scholarships-store.netlify.app/" ,
    github: "https://github.com/Saiful-104/Assignment-11-client",
  },
  
  {
    title: "Artwork Platform",
    description:
      "Full-stack creative artwork platform enabling users to share, like, and manage artworks with private galleries, search & category filters, dark/light mode, secure authentication, and responsive design.",
    image: "p2.png",
    tags: ["React",  "NodeJS","Firebase", "Tailwind", "MongoDB"],
    category: "Full Stack",
    link: "https://imaginative-gelato-d4c5f1.netlify.app/",
    github: "https://github.com/Saiful-104/Assignment-10-client",
  },
  {
    title: "Skill Exchange Platform",
    description:
      "Frontend interactive platform enabling users to explore, book, and connect for local skill sessions, featuring Firebase authentication, dynamic skill listings, responsive design, and smooth animations.",
    image: "p3.png",
    tags: ["React", "Tailwind", "Firebase"],
    category: "Frontend",
    link: "https://candid-unicorn-a323f3.netlify.app/",
    github: "https://github.com/Saiful-104/mahdi?tab=readme-ov-file",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
    image: "/projects/project2.png",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    category: "E-commerce",
    link: "#",
    github: "#",
  },
   {
    title: "HERO App Store",
    description:
      "Modern web application showcasing a curated collection of productive and trending apps with interactive demonstrations and user reviews.",
    image: "p4.png",
    tags: ["JavaScript", "Tailwind", "Firebase","REST API"],
    category: "Frontend",
    link: "#",
    github: "https://github.com/Saiful-104/Assignment-8",
  },
];

const filters = ["All", "Full Stack", "E-commerce", "Frontend"];

// Inline AnimatedBorderButton replacement
const AnimatedBorderButton = ({ children }) => (
  <button
    className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-secondary-foreground border border-border/50 hover:border-primary/60 hover:text-primary transition-all duration-300 bg-surface/30 hover:bg-surface/60"
  >
    {children}
  </button>
);

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = projects.filter((p) => {
    const matchesFilter = activeFilter === "All" || p.category === activeFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-12">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Explore a selection of projects showcasing scalable architectures,
            clean code practices, and user-centered design solutions.
          </p>
        </div>

        {/* Search + Filter Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 animate-fade-in animation-delay-200">
          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-full bg-surface/40 border border-border/50 text-sm text-secondary-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-surface/60 transition-all duration-300"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="text-muted-foreground text-sm mr-1">Filter:</span>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-surface/30 border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((project, idx) => (
              <div
                key={idx}
                className="group glass rounded-2xl overflow-hidden animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                  {/* Category badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-xs font-medium text-white border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="w-5 h-5 text-muted-foreground group-hover:text-primary
                       group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </div>

                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-1">
                    <a
                      href={project.link}
                       target="_blank"  
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                      View Project
                    </a>
                    <a
                      href={project.github}
                       target="_blank"  
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary bg-surface/30 transition-all duration-300"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground animate-fade-in">
            <Search className="w-10 h-10 mx-auto mb-4 opacity-30" />
            <p className="text-sm">No projects found matching your search.</p>
          </div>
        )}

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
              <a href="https://github.com/Saiful-104?tab=repositories"
               target="_blank"  
              >
                Explore All Projects on GitHub
              </a>
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};