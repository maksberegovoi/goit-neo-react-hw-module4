import React from 'react';
import ImageCard from "../ImageCard/ImageCard.jsx";
import styles from './ImageGallery.module.css'

const ImageGallery = ({ images }) => {

  return (
    <ul className={styles.gallery}>
      {
        images.map(image => {
          let {urls} = image;
          return <ImageCard
            key={image.id}
            src={urls.small}
            alt={'alt'}
          />
        })
      }
    </ul>
  );
};

export default ImageGallery;