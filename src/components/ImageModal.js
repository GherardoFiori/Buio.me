import React, { useEffect } from 'react';
import './ImageModal.css';

const ImageModal = ({ src, alt, caption, onClose }) => {
  // REMOVE: if (!src) return null;
  // This check is now handled by the parent component (tpot.js)
  // which only renders ImageModal when 'modalImage' is not null.

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

  // When this component is rendered, it's guaranteed that 'src' is available
  // because the parent component (tpot.js) handles the conditional rendering.
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