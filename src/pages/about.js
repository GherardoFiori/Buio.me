import { useState } from 'react';

const certImages = Array.from({ length: 14 }, (_, i) => ({
  src: `/certificates/cert${i + 1}.png`,
  alt: `Certificate ${i + 1}`
}));

const toolCertImages = Array.from({ length: 4 }, (_, i) => ({
  src: `/toolcertificate/cert${i + 1}.png`,
  alt: `Certificate ${i + 1}`
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
  { icon: '/skills logo/github.png', name: 'Github' },
  { icon: '/skills logo/hacker.png', name: 'Ethical Hacking' },
  { icon: '/skills logo/vulnerability.png', name: 'Vulnerability Scanning' },
  { icon: '/skills logo/nmap.png', name: 'Nmap' },
  { icon: '/skills logo/wireshark.png', name: 'Wireshark' },
  { icon: '/skills logo/cloud.png', name: 'Cloud' },
  { icon: '/skills logo/hackthebox2.png', name: 'HackTheBox' },
  { icon: '/skills logo/tryhackme.png', name: 'TryHackMe' },
  { icon: '/skills logo/ctf.png', name: 'Capture The Flag' },
  { icon: '/skills logo/blueteam.png', name: 'Blue Team Enthusiast' },
  { icon: '/skills logo/virtualbox.png', name: 'Virtual Machines' },
  { icon: '/skills logo/grc.png', name: 'Governance, Risk, and Compliance' },
  { icon: '/skills logo/appsecurity.png', name: 'Application Security' },
  { icon: '/skills logo/sophos.png', name: 'Sophos' },
  { icon: '/skills logo/tines.png', name: 'Tines' },
  
];

const About = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="page">
      <h1>whoami</h1>
      <h4>
        I'm Gherardo, originally from Italy, currently living in Ireland. Recently graduated in Cyber Security and Digital Forensics.
        I am a big fan of participating in Capture The Flag (CTF) competitions and learning new stuff as you can notice by my many
        certificates.
      </h4>
      <h4>Working towards Network+ and SAL1 Certificate.</h4>
        <div className="thmprofile-wrapper">
       <img src="/tryhackme profile.png" alt="buio.sante Profile" className="thmprofile" />
       </div>

      <h1>Events</h1>
      <h4>I truly enjoy going to events, information security conferences or CTF events. If it's available and I can reach it, you will see me there. Here are recent ones.</h4>
      <ul className="Events-list">
            <li>Dub|Sec Meetups</li>
            <li>HackInBo. Bologna 2025</li>
            <li>Bsides Dublin 2025</li>
            <li>ZeroDays 2025 👥 Higher Score on my team</li>
            <li>Cyber Security AI & Software Devlopment 2025</li>
            <li>Naughty or Nice CTF (ZeroDays) Blancherstown 2024 🏆 1st Place Winner</li>
            <li>ZeroDays 2024 👥 Higher Score on my team</li>
            <li>Bsides Dublin 2024</li>
            <li>IRISSCERT 2024 and CTF 🥈 2nd Place Winner</li>
            <li>Cyber Expo & Conference 2024</li>
       </ul>
      <h4>The ones I would like to go in the future.</h4>
      <ul className="Events-list">
            <li>WHY2025</li>
            <li>RomHack Rome</li>
            <li>Bsides London</li>
            <li>Bsides Frankfurt</li>
            <li>Cbase Berlin</li>
       </ul>

       <h1>Volunteering</h1>
       <h4>The Volunteering I did over the past two years.</h4>
      <ul className="Events-list">
            <li>Naughty or Nice CTF on the day helper</li>
            <li>Ethical Hacker Society's Event Organizer</li>
            <li>CTF on the day helper for Cyber Security students from france</li>
       </ul>

      <h1>Experience</h1>
      <div className="skills-bar">
        {skills.map((skill, index) => (
               <div
                key={index}
                className={`skill-icon ${hoveredSkill === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
                >
                <img src={skill.icon} alt={skill.name} className="skill-img" />
                {hoveredSkill === index && (
                    <span className="skill-tooltip">{skill.name}</span>
                )}
                </div>

                    ))}
                </div>

      <h1>Certificates</h1>
      <div className="cert-grid">
        {certImages.map((cert, index) => (
          <div key={index} className="cert-slot" onClick={() => setSelectedCert(cert.src)}>
            <img src={cert.src} alt={cert.alt} />
          </div>
        ))}
      </div>

            <h1>Tool Certificates</h1>
      <div className="cert-grid">
        {toolCertImages.map((cert, index) => (
          <div key={index} className="cert-slot" onClick={() => setSelectedCert(cert.src)}>
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
