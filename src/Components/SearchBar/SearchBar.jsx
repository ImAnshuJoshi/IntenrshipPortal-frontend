import React from 'react';
import styles from './SearchBar.module.css';
import searchIcon from '../../assets/icons/search.png';
import filterIcon from '../../assets/icons/Filter.png';
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from '../../state/filter/filter-slice';

function SearchBar({handleClick , handleInputSearch}) {
  const dispatch = useDispatch();
  const filteredData = useSelector((state) => state);
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        className={styles.input}
        placeholder="Search..."
        onChange={(e)=>{
          dispatch(setSearchValue(e.target.value))
        }}
      />
      <div>
        {
          filteredData.loading ?
          `Loading..`
          :
          <img
          src={searchIcon}
          alt="Search"
          className={styles.searchIcon}
          onClick={handleInputSearch}
          />
        }
        </div>
      <img
        src={filterIcon}
        alt="Filter"
        className={styles.filterIcon}
        onClick={handleClick}
      />
    </div>
  );
}

export default SearchBar;
