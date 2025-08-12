import React from 'react';
import styles from './LoadMoreButton.module.css'


const LoadMoreButton = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <button className={styles.button}>Load More</button>
    </div>
  );
};

export default LoadMoreButton;