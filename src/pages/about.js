import { useState } from 'react';

const certImages = Array.from({ length: 13 }, (_, i) => ({
  src: `/certificates/cert${i + 1}.png`,
  alt: `Certificate ${i + 1}`
}));

const About = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="page">
      <h1>whoami</h1>
      <h4>
        I'm Buio, originally from Italy, currently living in Ireland. Recently graduated in Cyber Security and Digital Forensics.
        I am a big fan of partecipating in Capture The Flag (CTF) competitions and learning new stuff as you can notice by my many
        certificates. 
        <br>
        </br>
        Also working towards Networking+ and SAL1 Certificate.
      </h4>

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
