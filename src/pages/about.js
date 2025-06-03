const About = () => {
  return (
    <div className="page">
      <h2>About Me</h2>
      <p>
        I'm Buio, originally from Italy, currently living in Ireland. Recently graduated in Cyber Security and Digital Forensics.
        Passionate about ethical hacking, digital investigation, and cyber defence.
      </p>
      <h3>Certificates</h3>
      <div className="cert-grid">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="cert-slot">
            <img src={`path/to/cert${i + 1}.png`} alt={`Certificate ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
