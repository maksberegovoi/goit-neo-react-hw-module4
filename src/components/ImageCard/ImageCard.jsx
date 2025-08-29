import React, {useRef} from 'react';
import styles from './ImageCard.module.css'


const ImageCard = ({ src, alt, onClick }) => {

  const handleClick = () => {
    if (onClick) {
      onClick(src?.regular || src?.small, alt)
    }
  }

  return (
    <li>
      <div>
        <img
          className={styles.img}
          src={src.small}
          alt={alt}
          onClick={handleClick}
        />
      </div>
    </li>
  );
};

export default ImageCard;