import { useState } from "react";

const GITHUB = "https://github.com/tirthxoxo";

const projects = [
  {
    number: "01",
    name: "CareerIQ",
    category: "MACHINE LEARNING",
    filter: "AI / ML",
    description:
      "An AI-based college placement prediction and career analytics system built to turn student data into useful insights.",
    technologies: ["Python", "Scikit-learn", "React"],
    accent: "gold",
    status: "FEATURED MISSION",
    repo: GITHUB,
  },
  {
    number: "02",
    name: "Hospital Management",
    category: "APPLICATION DEVELOPMENT",
    filter: "WEB",
    description:
      "A hospital management project focused on organizing workflows and simplifying everyday application tasks.",
    technologies: ["Python", "Odoo", "XML"],
    accent: "blue",
    status: "DEVELOPMENT FILE",
    repo: GITHUB,
  },
  {
    number: "03",
    name: "Batcave Portfolio",
    category: "FRONTEND ENGINEERING",
    filter: "WEB",
    description:
      "A cinematic developer portfolio combining a Gotham-inspired visual identity with an interactive command terminal.",
    technologies: ["React", "CSS", "JavaScript"],
    accent: "purple",
    status: "CURRENT MISSION",
    repo: GITHUB,
  },
];

const filters = ["ALL MISSIONS", "AI / ML", "WEB"];

function ProjectArtwork({ project }) {
  return (
    <div className={`mission-art mission-art-${project.accent}`}>
      <div className="mission-art-grid" />
      <div className="mission-art-orbit orbit-one" />
      <div className="mission-art-orbit orbit-two" />

      <span className="mission-art-index">{project.number}</span>

      <div className="mission-art-symbol">
        {project.accent === "gold" && "AI"}
        {project.accent === "blue" && "SYS"}
        {project.accent === "purple" && "DEV"}
      </div>

      <span className="mission-art-coordinate">GOTHAM // CLASSIFIED</span>
      <span className="mission-art-cross">+</span>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL MISSIONS");

  const filteredProjects =
    activeFilter === "ALL MISSIONS"
      ? projects
      : projects.filter((project) => project.filter === activeFilter);

  return (
    <section className="section projects-section premium-projects" id="projects">
      <div className="premium-projects-heading">
        <div className="section-heading">
          <span className="section-kicker">
            03 / WAYNE ENTERPRISES DATABASE
          </span>

          <h2>
            SELECTED
            <br />
            <span className="muted">MISSIONS.</span>
          </h2>
        </div>

        <div className="mission-database-status">
          <span className="status-dot" />
          DATABASE CONNECTED
          <span className="database-count">
            {String(projects.length).padStart(2, "0")} FILES
          </span>
        </div>
      </div>

      <div className="mission-toolbar">
        <p>PROJECT ARCHIVE / SELECT A FILE TO INVESTIGATE</p>

        <div className="mission-filters" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={activeFilter === filter ? "active" : ""}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="premium-project-grid">
        {filteredProjects.map((project) => (
          <article className="premium-project-card" key={project.number}>
            <div className="premium-project-topline">
              <span>FILE_{project.number}</span>
              <span className="mission-status">
                <span className="status-dot" />
                {project.status}
              </span>
            </div>

            <ProjectArtwork project={project} />

            <div className="premium-project-content">
              <span className="premium-project-category">
                {project.category}
              </span>

              <h3>{project.name}</h3>

              <p className="premium-project-description">
                {project.description}
              </p>

              <div className="premium-tech-tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <a
                className="mission-open-link"
                href={project.repo}
                target="_blank"
                rel="noreferrer"
              >
                <span>ACCESS PROJECT FILE</span>
                <span className="mission-link-arrow">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mission-footer">
        <span>END OF CURRENT ARCHIVE</span>
        <span>MORE MISSIONS IN DEVELOPMENT ///</span>
      </div>
    </section>
  );
}