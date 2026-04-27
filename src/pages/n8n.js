import React, { useState } from 'react';
import ImageModal from '../components/ImageModal';
import '../css/homelab.css';

const N8n = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src, alt, caption) => setModalImage({ src, alt, caption });
  const closeModal = () => setModalImage(null);

  return (
    <div className="homelab-page-container">
      <h1 className="homelab-main-title">n8n Automation — Malicious Browser Extensions Database</h1>

      <section className="homelab-section">
        <p className="homelab-description">
          This project is a workflow built with n8n to automate the process of adding new entries
          to the Malicious Browser Extension Database. It handles fetching metadata and CRX files
          directly from the Chrome Web Store, reducing manual effort and keeping the database
          up to date.
        </p>
      </section>

              <div className="homelab-stacked-images">
          <div className="homelab-image-wrapper">
            <img
              src="/n8n/n8n.png"
              alt="n8n workflow"
              className="homelab-image-spec"
              onClick={() => openModal('/n8n/n8n.png', 'n8n workflow', 'Screenshot of n8n workflow')}
              style={{ cursor: 'pointer' }}
            />
            <p className="homelab-image-caption">The whole automation</p>
          </div>
        </div>

            <section className="homelab-section">
        <p>
          The first step is to pull articles from known cyber news sources suing RSS feeds and filter out any that are not realted to Malicious Browser Extensions.
        </p>
      </section>
                    <div className="homelab-stacked-images">
          <div className="homelab-image-wrapper">
            <img
              src="/n8n/step1.png"
              alt="First step of the workflow"
              className="homelab-image-spec"
              onClick={() => openModal('/n8n/step1.png', 'First step of the workflow', 'Screenshot of the first step of the workflow')}
              style={{ cursor: 'pointer' }}
            />
            <p className="homelab-image-caption">Collecting Articles from RSS Feeds</p>
          </div>
        </div>

        <section className="homelab-section">
        <p>
          The Second step triggers a custom javaScript function that extracts any Browser Extensions IDs from the articles that realate and de duplicates them, as many times multiple articles will talk about the same extensions.
          At the same time of this happening two HTTP requests are pulling the list of extensions already in the database to compare them with the extracted IDs and make sure we are not adding any duplicates to the database.
        </p>
      </section>

       <div className="homelab-stacked-images">
          <div className="homelab-image-wrapper">
            <img
              src="/n8n/step2.png"
              alt="Second step of the workflow"
              className="homelab-image-spec"
              onClick={() => openModal('/n8n/step2.png', 'Second step of the workflow', 'Screenshot of the second step of the workflow')}
              style={{ cursor: 'pointer' }}
            />
            <p className="homelab-image-caption">Extracting Browser Extension IDs</p>
          </div>
        </div>

        <section className="homelab-section">
        <p>
          The Third step triggers a custom javaScript function collects only the new Extension IDs and for each of them makes a request to the Chrome Web Store to pull the metadata and the CRX file, which are then added to the database. if successfull, as some times the extension has been removed or it is over 100MB and GitHub won't accept it, An IF statement is added to make sure only exisiting and fitting extensions are added.
        </p>
      </section>

       <div className="homelab-stacked-images">
          <div className="homelab-image-wrapper">
            <img
              src="/n8n/step3.png"
              alt="Third step of the workflow"
              className="homelab-image-spec"
              onClick={() => openModal('/n8n/step3.png', 'Third step of the workflow', 'Screenshot of the third step of the workflow')}
              style={{ cursor: 'pointer' }}
            />
            <p className="homelab-image-caption">Fetching Extension Metadata</p>
          </div>
        </div>

        <section className="homelab-section">
        <p>
          The Final step prepares all the data necessary such as Sha256 of the CRX file, date of upload and so on. And uploads them to the github, automating the process of expanding the database.
        </p>
      </section>

       <div className="homelab-stacked-images">
          <div className="homelab-image-wrapper">
            <img
              src="/n8n/step4.png"
              alt="Final step of the workflow"
              className="homelab-image-spec"
              onClick={() => openModal('/n8n/step4.png', 'Final step of the workflow', 'Screenshot of the final step of the workflow')}
              style={{ cursor: 'pointer' }}
            />
            <p className="homelab-image-caption">Uploading Extension Data</p>
          </div>
        </div>

               <div className="homelab-stacked-images">
          <div className="homelab-image-wrapper">
            <img
              src="/n8n/result.png"
              alt="Final step of the workflow"
              className="homelab-image-spec"
              onClick={() => openModal('/n8n/result.png', 'Final result of the workflow', 'Screenshot of the final step of the workflow')}
              style={{ cursor: 'pointer' }}
            />
            <p className="homelab-image-caption">Result on Github</p>
          </div>
        </div>

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

export default N8n;
