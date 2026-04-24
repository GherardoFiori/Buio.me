import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa';
import '../css/footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-links">
        <a href="https://github.com/GherardoFiori" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/gherardo-buio-fiori/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://discord.com/users/thebuio" target="_blank" rel="noopener noreferrer" aria-label="Discord">
          <FaDiscord />
        </a>
        <a href="mailto:gherardofiori@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Buio — All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
