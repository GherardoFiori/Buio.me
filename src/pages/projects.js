import { Link } from 'react-router-dom';
import '../css/projects.css';

const projects = [
  {
    title: 'AI Detection of Malicious Browser Extensions',
    badge: { label: 'Maintenance', cls: 'badge-maintenance' },
    description: 'A Python-based tool for analysing browser extensions by simply supplying a Store URL.',
    link: 'https://exterminai.com',
    linkLabel: 'Visit website',
    external: true,
    image: './exterminai.png',
  },
  {
    title: 'Portfolio Website',
    description: 'This very website, built with React and custom CSS to showcase my work and certifications.',
    link: 'https://github.com/GherardoFiori/Buio.me',
    linkLabel: 'View on GitHub',
    external: true,
    image: './portafolio.png',
  },
  {
    title: 'TPOT Honeypots',
    description: 'Set up a honeypot system to analyse millions of real-world attacks.',
    link: '/tpot',
    linkLabel: 'Read more',
    external: false,
    image: './tpot.png',
  },
  {
    title: 'Home Lab',
    badge: { label: 'Coming soon', cls: 'badge-soon' },
    description: 'Setting up a home lab to run virtual machines, cloud storage, and vulnerable machines for penetration testing.',
    link: '/homelab',
    linkLabel: 'Read more',
    external: false,
    disabled: true,
    image: './homelab.png',
  },
  {
    title: 'Malicious Browser Extension Database',
    description: 'Set up a database to store and share information about malicious browser extensions, including crx files for further research and analysis.',
    link: 'https://github.com/GherardoFiori/MaliciousBrowserExtensions',
    linkLabel: 'View on GitHub',
    external: true,
    image: './database.png',
  },
  {
    title: 'n8n automation for Malicious Browser Extensions Database',
    description: 'Created a workflow using n8n to automate the process of adding new entries to the Malicious Browser Extension Database, including fetching metadata and crx files from the Chrome Web Store.',
    link: '/n8n_workflow_database',
    linkLabel: 'Read More',
    external: true,
    disabled: true,
    image: './n8n.png',
  },
];

const Projects = () => (
  <div className="page">
    <h1 className="projects-title">Projects</h1>
    <div className="projects-grid">
      {projects.map((project, i) => (
        <div className="project-card" key={i}>
          {project.image && (
            <img src={project.image} alt={project.title} className="project-image" />
          )}
          <div className="project-body">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              {project.badge && (
                <span className={`project-badge ${project.badge.cls}`}>{project.badge.label}</span>
              )}
            </div>
            <p className="project-desc">{project.description}</p>
            {project.disabled ? (
              <span className="project-link project-link-disabled">{project.linkLabel}</span>
            ) : project.external ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                {project.linkLabel} →
              </a>
            ) : (
              <Link to={project.link} className="project-link">
                {project.linkLabel} →
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
