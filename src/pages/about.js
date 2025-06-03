import { useState } from 'react';

const certImages = Array.from({ length: 13 }, (_, i) => ({
  src: `/certificates/cert${i + 1}.png`,
  alt: `Certificate ${i + 1}`
}));

const About = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="page">
      <h2>About Me</h2>
      <p>
        I'm Buio, originally from Italy, currently living in Ireland. Recently graduated in Cyber Security and Digital Forensics.
        Passionate about ethical hacking, digital investigation, and cyber defence.
      </p>

      <h3>Certificates</h3>
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
