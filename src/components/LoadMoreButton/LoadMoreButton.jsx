import React from 'react';
import styles from './LoadMoreButton.module.css'


const LoadMoreButton = ({page, setPage}) => {

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <button
        onClick={()=> setPage(page + 1)}
        className={styles.button}>Load More</button>
    </div>
  );
};

export default LoadMoreButton;