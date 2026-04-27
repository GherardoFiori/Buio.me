import React, { useState } from 'react';
import ImageModal from '../components/ImageModal';
import '../css/homelab.css';

const Homelab = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src, alt, caption) => setModalImage({ src, alt, caption });
  const closeModal = () => setModalImage(null);

  return (
    <div className="homelab-page-container">
      <h1 className="homelab-main-title">Homelab — CyberLab</h1>

      <section className="homelab-section">
        <p className="homelab-description">
          This project was a long time dream of mine. I always wanted to have my own home server
          where I could do whatever I wanted with little to no cost, instead of paying for cloud
          services. Giving myself room to explore and make mistakes without worrying about the cost.
          This project has dramatically increased my knowledge of cloud services, virtual machines,
          and security. I have set up a home lab with multiple virtual machines running different
          operating systems and services.
        </p>
        <div className="homelab-image-wrapper">
          <img src="/homelab/homelab.png" alt="Homelab Overview" className="homelab-image" />
          <p className="homelab-image-caption">Conceptual overview of the Homelab setup.</p>
        </div>
      </section>

      <section className="homelab-section">
        <h2 className="homelab-section-title">1. Initial Build Decisions</h2>
        <p className="homelab-description">
          The initial plan was to purchase old computers and set them up as servers, but I noticed
          I had multiple spare computing parts from other projects and old builds. So I decided to
          purchase a few remaining parts and build it myself — especially since I enjoy building
          computers.
        </p>
        <p className="homelab-description">
          After researching what parts I needed I ended up with:
        </p>
        <ul className="homelab-list">
          <li>AMD Ryzen 7 5800x</li>
          <li>GTX 1660 Ti</li>
          <li>32 GB RAM</li>
        </ul>
        <p className="homelab-description">
          I also currently have 2 × 6TB hard drives — one as the main storage and one as a backup
          in case the first were to fail.
        </p>

        <div className="homelab-stacked-images">
          <div className="homelab-image-wrapper">
            <img
              src="/homelab/homelab_parts.png"
              alt="Server parts"
              className="homelab-image-spec"
              onClick={() => openModal('/homelab/homelab_parts.png', 'Server parts', 'Screenshot of server parts')}
              style={{ cursor: 'pointer' }}
            />
            <p className="homelab-image-caption">Screenshot — Server Parts</p>
          </div>
        </div>

        <p className="homelab-description">
          It was my first time building in such a small case, which was not fun at all I must admit,
          but there is nothing more rewarding than booting it up and seeing it appear on screen
          (after a few attempts).
        </p>
        <p className="homelab-description">
          Weeks earlier I had spent time planning what software I would use and the kind of
          configuration I was looking for. I decided to run some basic tools for the household —
          such as streaming and security tools like PiHole. These were fun to set up and rewarding
          to show my family.
        </p>
      </section>

      <section className="homelab-section">
        <h2 className="homelab-section-title">2. The Cyber Lab</h2>
        <p className="homelab-description">Why did I build a cyber lab?</p>
        <ul className="homelab-list">
          <li>I wanted a secure networking environment for experimentation and learning. This increased my networking knowledge dramatically as I learned to configure firewalls and DHCP servers properly.</li>
          <li>VLANs were created to subdivide the network for better security and management.</li>
          <li>Ensuring firewall rules applied correctly and that inbound and outbound traffic was allowed as intended.</li>
          <li>I work in a SOC environment so I was less worried about generating rules — I was more interested in the networking side, making sure devices could only be reached inside the network protected by the pfSense firewall.</li>
        </ul>
        <p className="homelab-description">
          This also allowed me to further develop my skills in network administration and security
          management. But mainly it was used to create a realistic environment for testing and
          learning. I decided to use Proxmox as my virtualisation platform — I found it simple to
          understand and straightforward to use.
        </p>

        <div className="homelab-stacked-images">
          <div className="homelab-image-wrapper">
            <img
              src="/homelab/proxmox.png"
              alt="Proxmox setup"
              className="homelab-image-spec"
              onClick={() => openModal('/homelab/proxmox.png', 'Proxmox setup', 'Screenshot of Proxmox setup')}
              style={{ cursor: 'pointer' }}
            />
            <p className="homelab-image-caption">Screenshot — Proxmox Setup</p>
          </div>
        </div>
      </section>

      <section className="homelab-section">
        <h2 className="homelab-section-title">3. Challenges & Learnings</h2>
        <ul className="homelab-list">
          <li>The initial setup of the virtualised environment and ensuring all components were properly configured.</li>
          <li>During firewall rule configuration I locked myself out of the system a good few times (anti-lockout rules are there for a reason) and had to reset the firewall to regain access.</li>
          <li>Making sure security measures were in place to protect the virtualised environment, given the server sits on my home network.</li>
          <li>The importance of documentation — sometimes days passed between sessions and I would forget where I was or what I was doing.</li>
        </ul>
        <p className="homelab-description">
          This project significantly enhanced my understanding of networking, virtualisation, and
          security management. It provided a practical environment for applying theoretical
          knowledge in a real-world context.
        </p>
      </section>

      <section className="homelab-section">
        <h2 className="homelab-section-title">Conclusion</h2>
        <p className="homelab-description">
          I highly recommend everyone to set up a home lab if they have the means — it is a great
          way to learn and experiment with different technologies and configurations in a safe
          environment without the risk of affecting your main network or devices.
        </p>
        <p className="homelab-description">
          It gives a level of freedom you cannot get with cloud services: do whatever you want
          without worrying about costs or limitations. Most importantly, mistakes are allowed and
          encouraged — they are the best way to learn. I am looking forward to further developing
          this lab and exploring new technologies in the future.
        </p>
      </section>

      {modalImage && (
        <ImageModal
          src={modalImage.src}
          alt={modalImage.alt}
          caption={modalImage.caption}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Homelab;
