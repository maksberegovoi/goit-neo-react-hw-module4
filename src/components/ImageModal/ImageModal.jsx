import React, { useEffect } from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

if (typeof document !== 'undefined') {
  Modal.setAppElement('#root');
}

const ImageModal = ({ isOpen, onRequestClose, imgSrc, alt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      overlayClassName={styles.overlay}
      className={styles.modal}
      contentLabel={alt || 'Image preview'}
    >
      <button className={styles.closeBtn} onClick={onRequestClose} aria-label="Close image modal">×</button>
      {imgSrc && (
        <img className={styles.image} src={imgSrc} alt={alt || 'Image'} />
      )}
    </Modal>
  );
};

export default ImageModal;