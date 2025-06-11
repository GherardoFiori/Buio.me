import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://github.com/GherardoFiori"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gherardo-buio-fiori/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://discord.com/users/thebuio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400"
          >
            <FaDiscord />
          </a>
          <a
            href="mailto:gherardofiori@gmail.com"
            className="hover:text-red-400"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Buio — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


