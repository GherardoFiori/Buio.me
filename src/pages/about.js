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

const certificateGroups = [
  {
    id: 'professional-certifications',
    title: 'Professional Certifications',
    certificates: [
      { src: '/toolcertificate/cert5.png', alt: 'Tines Core Certification' },
      { src: '/toolcertificate/cert6.png', alt: 'Tines Advanced Certification' },
      { src: '/certificates/cert7.png', alt: 'arcX Foundation Level Threat Intelligence Analyst Certification' },
      { src: '/toolcertificate/cert7.png', alt: 'EU Cyber Academy Certified SME Cyber Security Officer (CSCSO)' },
      { src: '/toolcertificate/cert8.png', alt: 'EU Cyber Academy Certified Ransomware Protection Officer (CRPO)' },
    ],
  },
  {
    id: 'vendor-technical-training',
    title: 'Vendor Technical Training',
    certificates: [
      { src: '/toolcertificate/cert1.png', alt: 'Sophos Introduction to Sophos and Technical Training (ET01)' },
      { src: '/toolcertificate/cert2.png', alt: 'Sophos Detection and Response Certified Engineer v5.5 (ET12)' },
      { src: '/toolcertificate/cert3.png', alt: 'Sophos Central Endpoint Protection Certified Engineer v5.0 (ET15)' },
      { src: '/toolcertificate/cert4.png', alt: 'Sophos Central Endpoint Protection Certified Technician v5.0 (S15)' },
      { src: '/toolcertificate/cert9.png', alt: 'CrowdStrike Threat Hunter learning plan' },
      { src: '/toolcertificate/cert10.png', alt: 'CrowdStrike Integrator learning plan' },
      { src: '/toolcertificate/cert11.png', alt: 'CrowdStrike Incident Responder learning plan' },
      { src: '/toolcertificate/cert12.png', alt: 'CrowdStrike Identity Specialist learning plan' },
      { src: '/toolcertificate/cert13.png', alt: 'CrowdStrike Falcon Administrator learning plan' },
      { src: '/certificates/cert14.png', alt: 'Microsoft Student SOC Program Foundations training' },
      { src: '/certificates/cert12.png', alt: 'Google Cloud SOAR Analyst course' },
      { src: '/certificates/cert9.png', alt: 'NVIDIA Fundamentals of Deep Learning course' },
    ],
  },
  {
    id: 'courses-and-learning-paths',
    title: 'Courses and Learning Paths',
    certificates: [
      { src: '/certificates/cert1.png', alt: 'TryHackMe Introduction to Cyber Security learning path' },
      { src: '/certificates/cert2.png', alt: 'TryHackMe Pre Security learning path' },
      { src: '/certificates/cert3.png', alt: 'TryHackMe Complete Beginner learning path' },
      { src: '/certificates/cert4.png', alt: 'TryHackMe Cyber Security 101 learning path' },
      { src: '/certificates/cert5.png', alt: 'TryHackMe Web Fundamentals learning path' },
      { src: '/certificates/cert6.png', alt: 'TryHackMe Jr Penetration Tester learning path' },
      { src: '/certificates/cert10.png', alt: 'Top ATT&CK Techniques course' },
      { src: '/certificates/cert11.png', alt: 'Foundations of Operationalizing MITRE ATT&CK v13 course' },
      { src: '/certificates/cert13.png', alt: 'Intro to Splunk eLearning course' },
      { src: '/toolcertificate/cert14.png', alt: 'Intro to DFIR: The Divide and Conquer Process course' },
      { src: '/certificates/cert8.png', alt: 'Udemy Governance, Risk and Compliance (GRC) and Data Privacy course' },
    ],
  },
];

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

const speakerEvents = [
  'Bsides Belfast 2026 - The Silent Risk in Your Browser: Detecting Malicious Extensions',
];

const pastEvents = [
  'Bsides Dublin 2026',
  'Bsides Galway 2026',
  'Dub|Sec Meetups',
  'HackInBo - Bologna 2025',
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
  'RomHack - Rome',
  'Bsides London',
  'Bsides Frankfurt',
  'Cbase - Berlin',
];

const volunteering = [
  'Naughty or Nice CTF - on the day helper',
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
            <p className="events-subheading">Speaker</p>
      <ul className="events-list">
        {speakerEvents.map((e, i) => <li key={i}>{e}</li>)}
      </ul>
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

      {certificateGroups.map((group) => (
        <section key={group.id} className="cert-section" aria-labelledby={group.id}>
          <h2 id={group.id} className="section-heading">{group.title}</h2>
          <div className="cert-grid">
            {group.certificates.map((cert) => (
              <div key={cert.src} className="cert-slot" onClick={() => setSelectedCert(cert)}>
                <img src={cert.src} alt={cert.alt} />
              </div>
            ))}
          </div>
        </section>
      ))}

      {selectedCert && (
        <div className="modal" onClick={() => setSelectedCert(null)}>
          <img src={selectedCert.src} alt={selectedCert.alt} className="modal-img" />
        </div>
      )}
    </div>
  );
};

export default About;
