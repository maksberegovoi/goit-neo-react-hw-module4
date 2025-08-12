import React from 'react';
import styles from './ImageCard.module.css'


const ImageCard = ({ src, alt }) => {
  return (
    <li>
      <div>
        <img className={styles.img} src={src} alt={alt} />
      </div>
    </li>
  );
};

export default ImageCard;