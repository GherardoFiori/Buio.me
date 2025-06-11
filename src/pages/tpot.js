import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';
import '../css/tpot.css';


const Tpot = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src, alt, caption) => {
    setModalImage({ src, alt, caption });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="tpot-page-container">
      <h1 className="tpot-main-title">TPOT Honeypots: A Cloud-Based Threat Intelligence System</h1>

      <section className="tpot-section tpot-introduction">
        <p className="tpot-description">
          This project involved setting up and managing a TPOT (The Ultimate Honeypot) system on a cloud platform to capture, analyze, and visualize millions of cyberattack attempts. I decided to set up multiples sensors which collect the attacks and feed them back to the hive, see the hive as the center of the project, where all the attack data ends up in. Three sensors were deployed all in differnet countries with different honeypots on them to try and collect a variaty of attacks.
        <br></br>
        <Link to="https://github.com/telekom-security/tpotce" > TPOT Honeypot Github </Link> 
        </p>
        <div className="tpot-image-wrapper">
          <img src="/Tpot/TPOT Diagram.png" alt="TPOT Honeypot System Overview" className="tpot-image large-image" />
          <p className="image-caption">Conceptual overview of the TPOT Honeypot architecture in the cloud.</p>
        </div>
      </section>

      <section className="tpot-section tpot-setup">
        <h2 className="tpot-section-title">1. Cloud Infrastructure & Setup</h2>
        <p className="tpot-description">
          I set up the TPOT accross two cloud platforms, Azure and Digital Ocean. The decision to split it was simply the fact that I was using free credits: Both azure and Digial Ocean provide free credits for students and new users, thsi allowed me to run the VMs free of cost for multiple weeks at the time. All four Virtual Machines(VM) ran with around 8gb of ram and a basic CPU set up.
          <br></br>
          The set up was simple, the HIVE which was the heart of the project was set up in Amsteram close to me, this Virtual Machine(VM) had no running honeypots in it, this is done to make sure no risk is given to the HIVE and there is no chance of it getting put down and losing millions of data as the HIVE going down it would mean that all data during it's down time would be lost. The other three sensors were set up in Canada, India and Australia.
        </p>

        {}
        <div className="tpot-stacked-images">
          <div className="tpot-image-wrapper">
            {}
            <img
              src="/Tpot/VM1.png"
              alt="Cloud VM Setup for TPOT"
              className="tpot-image-spec" 
            />
            <p className="image-caption">Screenshot of cloud VM instance.</p>
          </div>

          <div className="tpot-image-wrapper">
            {}
            <img
              src="/Tpot/VM2.png"
              alt="TPOT Network Configuration"
              className="tpot-image-spec" 
            />
            <p className="image-caption">Screenshot of cloud VM instance.</p>
          </div>
        </div>

        <p className="tpot-description">
          The Sensor in Canada I set up to reacreate a Medical device, the honeypots on running on it would all be "Medical" devices related in an attempt to reacreate a medical device. Running the following honeypots on them. Dicompt, Ipphoney, Medpot and Fatt
          <br></br>
          The Sensor in India was placed on purpose in the most populated country in the world, which I assumed would generate the most attacks. This focused on malware collection. Running the following honeypots: Honeytrap and Mailoney.
          <br></br>
          The Sensor in Australia was to test the kind of attacks that happened in a different continent from Asia and North America. The following honeypots ran on it: Adbhoney, Ciscosa, Cowrie and ddospot.
        </p>
        <img src="/Tpot/attackmap.png" alt="TPOT Attack Map" className="tpot-image large-image" />
      </section>

      {}
      <section className="tpot-section tpot-findings">
        <h2 className="tpot-section-title">3. Key Findings & Threat Intelligence</h2>
        <p className="tpot-description">
          The continuous monitoring provided invaluable insights. I observed:
          <ul className="tpot-list">
            <li>A significant volume of SSH and RDP brute-force attempts targeting common usernames and passwords, some can be seen to be specific to Honeypots.</li>
            <li>Injection of Backdoors was really cool to see, attempts to leave backdoors on the devices and what kinds and methods were used by the threat actors. </li>
            <li>An Interesting finding of Nintendo as an operating system used for attacks.. more then likely a custom firmware but interesting to see a possible malware on modded console possibility </li>
            <li>An Interesting of activity coming from Seychelles which is a small island near africa with on estimated population of 100,000 people!</li>
          </ul>
          <p>Click on the images to see it whole!</p>
        </p>
        {}
        <div className="tpot-image-grid clickable-grid"> {}

          <div className="tpot-image-wrapper">
            <img
              src="/Tpot/Login credentials.png"
              alt="Login Credentials"
              className="tpot-image clickable-image-in-grid" 
              onClick={() => openModal("/Tpot/Login credentials.png", "Login Credentials", "Collection of login credentials attempted.")}
            />
            <p className="image-caption">Collection of login credentials attemopted.</p>
          </div>

          <div className="tpot-image-wrapper">
            <img
              src="/Tpot/Most attacked honey.png"
              alt="Most Attacked Honeypots"
              className="tpot-image clickable-image-in-grid"
              onClick={() => openModal("/Tpot/Most attacked honey.png", "Most Attacked Honeypots", "Chart illustrating the Most Attacked Honeypots.")}
            />
            <p className="image-caption">Chart illustrating the Most Attacked Honeypots.</p>
          </div>

          <div className="tpot-image-wrapper">
            <img
              src="/Tpot/Port.png"
              alt="Most Attacked Ports"
              className="tpot-image clickable-image-in-grid"
              onClick={() => openModal("/Tpot/Port.png", "Most Attacked Ports", "Chart illustrating the top Most Attacked Ports.")}
            />
            <p className="image-caption">Chart illustrating the top Most Attacked Ports.</p>
          </div>

          <div className="tpot-image-wrapper">
            <img
              src="/Tpot/Backdoor.png"
              alt="Backdoors"
              className="tpot-image clickable-image-in-grid"
              onClick={() => openModal("/Tpot/Backdoor.png", "Backdoors", "Backdoors left by threat actors.")}
            />
            <p className="image-caption">Backdoors left by threat actors.</p>
          </div>

          <div className="tpot-image-wrapper">
            <img
              src="/Tpot/TPOT Country.png"
              alt="Chart of Country origin of Attack"
              className="tpot-image clickable-image-in-grid"
              onClick={() => openModal("/Tpot/TPOT Country.png", "Chart of Country origin of Attack", "Chart of Country origin of Attack.")}
            />
            <p className="image-caption">Chart of Country origin of Attack.</p>
          </div>

          <div className="tpot-image-wrapper">
            <img
              src="/Tpot/TPOT Malware table.png"
              alt="Top Attacking Malware Chart"
              className="tpot-image clickable-image-in-grid"
              onClick={() => openModal("/Tpot/TPOT Malware table.png", "Top Attacking Malware Chart", "List of Malware hashes used.")}
            />
            <p className="image-caption">List of Malware hashes used.</p>
          </div>

          <div className="tpot-image-wrapper">
            <img
              src="/Tpot/TPOT Nintendo.png"
              alt="Chart of Operating Systems used"
              className="tpot-image clickable-image-in-grid"
              onClick={() => openModal("/Tpot/TPOT Nintendo.png", "Chart of Operating Systems used", "Chart of operating systems used.. Nintendo?")}
            />
            <p className="image-caption">Chart of operating systems used.. Nintendo?</p>
          </div>

          <div className="tpot-image-wrapper">
            <img
              src="/Tpot/CVE.png"
              alt="Top CVE Used"
              className="tpot-image clickable-image-in-grid"
              onClick={() => openModal("/Tpot/CVE.png", "Top CVE Used", "List of the top CVEs used.")}
            />
            <p className="image-caption">List of the top CVEs used.</p>
          </div>

          <div className="tpot-image-wrapper">
            <img
              src="/Tpot/TPOT Seychelles.png"
              alt="Activity from Seychelles"
              className="tpot-image clickable-image-in-grid"
              onClick={() => openModal("/Tpot/TPOT Seychelles.png", "Activity from Seychelles", "Activity from Seychelles.")}
            />
            <p className="image-caption">Activity from Seychelles.</p>
          </div>

        </div>
      </section>

      <section className="tpot-section tpot-challenges">
        <h2 className="tpot-section-title">4. Challenges & Learnings</h2>
        <p className="tpot-description">
          Setting up and maintaining the honeypot system presented several challenges, including:
          <ul className="tpot-list">
            <li>Making the VMs from different Cloud services communicate with each other, this involved quite a bit of firewall ruling and configuration.</li>
            <li>Differentiating between legitimate scans and malicious activity. A lot of legitimate scans happen everyday all over the world.</li>
            <li>Ensuring the honeypot itself couldn't be used as a pivot point for attacks. They were never fully comprimised and lost.</li>
            <li>At one point I lost all of the data, I didn't know but the HIVE has a setting that wipes data after 30 days to free up space, I found out about it the hard way..</li>
          </ul>
          This project significantly enhanced my understanding of real-world cyber threats, cloud security, and big data analysis for security intelligence.
        </p>
      </section>

      <section className="tpot-section tpot-conclusion">
        <h2 className="tpot-section-title">Conclusion</h2>
        <p className="tpot-description">
         In conclusion this assignment was successful, as the hive and sensors were successfully deployed and protected during the whole period they were up. Not once did any of them go down or were compromised. The data collected was as expected just over 1.5 million attacks from threat actors, the data analyzed resulted in a handful of interesting facts.
This assignment helped me learn more about Honeypots in general and helped me improve my data analysis skills. It also tested my capabilities at making machines communicate with each other involving large sets of data which I struggle with at the start. 
Upon analyzing all the data collected, the attack patters including both old and new vulnerabilities and methods that are not patched, we can learn how attackers mainly rely on lack of updates or maintenance on their victims software and hardware.
        </p>
      </section>

      {}
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

export default Tpot;