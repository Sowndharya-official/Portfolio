import "./Projects.css";

const projects = [
  {
    title: "Project One",
    description: "Short description of what this project does and the problem it solves.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Project Two",
    description: "Short description of what this project does and the problem it solves.",
    tech: ["React", "Express", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Project Three",
    description: "Short description of what this project does and the problem it solves.",
    tech: ["JavaScript", "CSS", "API"],
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;