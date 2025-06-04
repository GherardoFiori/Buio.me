const projectList = [
  {
    title: "AI Detection of Malicious Browser Extensions",
    description: "A Python-based tool for analysing browser extensions by simply supplying it a Store URL",
    github: "https://github.com/GherardoFiori/AI-detection-of-malicious-browser-extensions",
    image: "./exterminai.png", 
  },
  {
    title: "Portfolio Website",
    description: "This very website, built using React and custom CSS to showcase my work and certifications.",
    github: "https://github.com/GherardoFiori/Buio.me",
    image: "./portafolio.png",
  },
];

const Projects = () => {
  return (
    <div className="page">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            {project.image && (
              <img src={project.image} alt={project.title} className="project-image" />
            )}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
