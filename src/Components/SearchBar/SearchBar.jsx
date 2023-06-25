import React from 'react';
import styles from './SearchBar.module.css';
import searchIcon from '../../assets/icons/search.png';
import filterIcon from '../../assets/icons/Filter.png';

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        className={styles.input}
        placeholder="Search..."
      />
      <div>
      <img
        src={searchIcon}
        alt="Search"
        className={styles.searchIcon}
        />
        </div>
      <img
        src={filterIcon}
        alt="Filter"
        className={styles.filterIcon}
      />
    </div>
  );
}

export default SearchBar;
