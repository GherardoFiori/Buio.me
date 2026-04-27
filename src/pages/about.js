import { useState, useEffect } from 'react';
import '../css/aboutme.css';

const TERMINAL_TEXT = 'whoami';

const TerminalHeading = () => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (displayed.length < TERMINAL_TEXT.length) {
      const t = setTimeout(() => setDisplayed(TERMINAL_TEXT.slice(0, displayed.length + 1)), 90);
      return () => clearTimeout(t);
    } else {
      setDone(true);
    }
  }, [displayed]);

  return (
    <h1 className="terminal-heading">
      <span className="terminal-prompt">$ </span>
      {displayed}
      <span className={done ? 'terminal-cursor blink' : 'terminal-cursor'}>▌</span>
    </h1>
  );
};

const certImages = Array.from({ length: 14 }, (_, i) => ({
  src: `/certificates/cert${i + 1}.png`,
  alt: `Certificate ${i + 1}`,
}));

const toolCertImages = Array.from({ length: 14 }, (_, i) => ({
  src: `/toolcertificate/cert${i + 1}.png`,
  alt: `Tool Certificate ${i + 1}`,
}));

const skills = [
  { icon: '/skills logo/python.png', name: 'Python' },
  { icon: '/skills logo/java-script.png', name: 'JavaScript' },
  { icon: '/skills logo/css.png', name: 'CSS' },
  { icon: '/skills logo/html.png', name: 'HTML' },
  { icon: '/skills logo/php.png', name: 'PHP' },
  { icon: '/skills logo/react.png', name: 'React' },
  { icon: '/skills logo/vercel.png', name: 'Vercel' },
  { icon: '/skills logo/linux.png', name: 'Linux' },
  { icon: '/skills logo/github.png', name: 'GitHub' },
  { icon: '/skills logo/vulnerability.png', name: 'Vulnerability Scanning' },
  { icon: '/skills logo/cloud.png', name: 'Cloud' },
  { icon: '/skills logo/hackthebox2.png', name: 'HackTheBox' },
  { icon: '/skills logo/tryhackme.png', name: 'TryHackMe' },
  { icon: '/skills logo/ctf.png', name: 'Capture The Flag' },
  { icon: '/skills logo/virtualbox.png', name: 'Virtual Machines' },
  { icon: '/skills logo/grc.png', name: 'GRC' },
  { icon: '/skills logo/sophos.png', name: 'Sophos' },
  { icon: '/skills logo/tines.png', name: 'Tines' },
  { icon: '/skills logo/crowdstrike.png', name: 'CrowdStrike' },
  { icon: '/skills logo/fortinet.png', name: 'Fortinet' },
  { icon: '/skills logo/n8n.png', name: 'Automation' }
];

const pastEvents = [
  'Bsides Dublin 2026',
  'Bsides Galway 2026',
  'Dub|Sec Meetups',
  'HackInBo — Bologna 2025',
  'Bsides Dublin 2025',
  'ZeroDays 2025 👥 Higher Score on my team',
  'Cyber Security AI & Software Development 2025',
  'Naughty or Nice CTF (ZeroDays) Blanchardstown 2024 🏆 1st Place',
  'ZeroDays 2024 👥 Higher Score on my team',
  'Bsides Dublin 2024',
  'IRISSCERT 2024 and CTF 🥈 2nd Place',
  'Cyber Expo & Conference 2024',
];

const futureEvents = [
  'WHY2026',
  'RomHack — Rome',
  'Bsides London',
  'Bsides Frankfurt',
  'Cbase — Berlin',
];

const volunteering = [
  'Naughty or Nice CTF — on the day helper',
  "Ethical Hacker Society's Event Organizer",
  'CTF on the day helper for Cyber Security students from France',
];

const About = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="page">
      <TerminalHeading />
      <p className="about-bio">
        I'm Gherardo, originally from Italy, currently living in Ireland. Graduated in
        Cyber Security and Digital Forensics. I'm a big fan of CTF competitions and always
        learning new things. Recently addicted to automation and documentation. Researching Malicious Browser Extensions.
      </p>

      <div className="thmprofile-wrapper">
        <img src="/tryhackme profile.png" alt="buio.sante TryHackMe profile" className="thmprofile" />
        <p className="thm-link">
          Add me on TryHackMe — <a href="https://tryhackme.com/p/buio.sante" target="_blank" rel="noopener noreferrer">buio.sante</a>
        </p>
      </div>

      <h2 className="section-heading">Events</h2>
      <p className="about-bio">
        I love attending information security conferences and CTF events. If it's reachable, you'll see me there.
      </p>
      <p className="events-subheading">Past events</p>
      <ul className="events-list">
        {pastEvents.map((e, i) => <li key={i}>{e}</li>)}
      </ul>
      <p className="events-subheading">On the wishlist</p>
      <ul className="events-list">
        {futureEvents.map((e, i) => <li key={i}>{e}</li>)}
      </ul>

      <h2 className="section-heading">Volunteering</h2>
      <ul className="events-list">
        {volunteering.map((v, i) => <li key={i}>{v}</li>)}
      </ul>

      <h2 className="section-heading">Experience</h2>
      <div className="skills-bar">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="skill-icon"
            onMouseEnter={() => setHoveredSkill(i)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <img src={skill.icon} alt={skill.name} className="skill-img" />
            {hoveredSkill === i && <span className="skill-tooltip">{skill.name}</span>}
          </div>
        ))}
      </div>

      <h2 className="section-heading">Certificates</h2>
      <div className="cert-grid">
        {certImages.map((cert, i) => (
          <div key={i} className="cert-slot" onClick={() => setSelectedCert(cert.src)}>
            <img src={cert.src} alt={cert.alt} />
          </div>
        ))}
      </div>

      <h2 className="section-heading">Tool Certificates</h2>
      <div className="cert-grid">
        {toolCertImages.map((cert, i) => (
          <div key={i} className="cert-slot" onClick={() => setSelectedCert(cert.src)}>
            <img src={cert.src} alt={cert.alt} />
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className="modal" onClick={() => setSelectedCert(null)}>
          <img src={selectedCert} alt="Full Certificate" className="modal-img" />
        </div>
      )}
    </div>
  );
};

export default About;
