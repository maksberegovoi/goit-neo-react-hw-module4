import React, { useState} from 'react';
import styles from './SearchBar.module.css'


const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(search)
  }

  return (
    <header className={styles.searchHeader}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">Search</button>
      </form>
    </header>

  );
};

export default SearchBar;