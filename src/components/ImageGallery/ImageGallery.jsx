import React from 'react';
import ImageCard from "../ImageCard/ImageCard.jsx";
import styles from './ImageGallery.module.css'

const ImageGallery = ({ images, onImageClick }) => {

  return (
    <ul className={styles.gallery}>
      {
        images.map(image => {
          const { urls, alt_description } = image;
          const alt = alt_description || 'Image';
          return (
            <ImageCard
              key={image.id}
              src={urls}
              alt={alt}
              onClick={(srcRegular) => onImageClick && onImageClick(srcRegular, alt)}
            />
          );
        })
      }
    </ul>
  );
};

export default ImageGallery;