import React, { useEffect } from 'react';
import './ImageModal.css';

const ImageModal = ({ src, alt, caption, onClose }) => {
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);


  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>&times;</button>
        <img src={src} alt={alt} className="modal-image" />
        {caption && <p className="modal-caption">{caption}</p>}
      </div>
    </div>
  );
};

export default ImageModal;