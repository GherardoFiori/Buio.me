import { useState } from 'react';

const certImages = Array.from({ length: 13 }, (_, i) => ({
  src: `/certificates/cert${i + 1}.png`,
  alt: `Certificate ${i + 1}`
}));

const skills = [
  { icon: '/python.png', name: 'Python' },
  { icon: '/java-script.png', name: 'JavaScript' },
  { icon: '/css.png', name: 'CSS' },
  { icon: '/html.png', name: 'HTML' },
  { icon: '/react.png', name: 'React' },
  { icon: '/vercel.png', name: 'Vercel' },
  { icon: '/linux.png', name: 'Linux' },
  { icon: '/github.png', name: 'Github' },
  { icon: '/hacker.png', name: 'Ethical Hacking' },
  { icon: '/vulnerability.png', name: 'Vulnerability Scanning' },
  { icon: '/nmap.png', name: 'Nmap' },
  { icon: '/wireshark.png', name: 'Wireshark' },
  { icon: '/cloud.png', name: 'Cloud' },
  { icon: '/php.png', name: 'PHP' },
  { icon: '/hackthebox2.png', name: 'HackTheBox' },
  { icon: '/tryhackme.png', name: 'TryHackMe' },
  { icon: '/ctf.png', name: 'Capture The Flag' },
  { icon: '/blueteam.png', name: 'Blue Team Enthusiast' },
  
];

const About = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="page">
      <h1>whoami</h1>
      <h4>
        I'm Buio, originally from Italy, currently living in Ireland. Recently graduated in Cyber Security and Digital Forensics.
        I am a big fan of participating in Capture The Flag (CTF) competitions and learning new stuff as you can notice by my many
        certificates.
        <br />
        Also working towards Networking+ and SAL1 Certificate.
      </h4>

       <img src="/tryhackme profile.png" alt="buio.sante Profile" className="thmprofile" />

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

      {selectedCert && (
        <div className="modal" onClick={() => setSelectedCert(null)}>
          <img src={selectedCert} alt="Full Certificate" className="modal-img" />
        </div>
      )}
    </div>
  );
};

export default About;
