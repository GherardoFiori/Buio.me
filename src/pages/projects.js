import Tpot from '../pages/tpot.js';

const projectList = [
  {
    title: "AI Detection of Malicious Browser Extensions",
    description: "A Python-based tool for analysing browser extensions by simply supplying it a Store URL",
    github: "https://exterminai.com",
    image: "./exterminai.png", 
  },
  {
    title: "Portfolio Website",
    description: "This very website, built using React and custom CSS to showcase my work and certifications.",
    github: "https://github.com/GherardoFiori/Buio.me",
    image: "./portafolio.png",
  },
  {
    title: "TPOT Honeypots",
    description: "Setup honeypots system to analyse millions of attacks",
    github: "/Tpot",
    image: "./tpot.png",
  },
  {
    title: "DeepPhish AI",
    description: "CLI tool to detect phishing emails with AI. COMING SOON",
    image: "./DeepPhishArt.png",
  },
  {
    title: "Home Lab",
    description: "Setting up a home lab to run Virtual Machines, Cloud Storage and Vulnerable Machines for Pen testing and much more. COMING SOON",
    image: "./Coming Soon.png",
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
            {project.website && ( 
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link" 
              >
                Visit website →
              </a>
            )}

            
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              Check it out here →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
