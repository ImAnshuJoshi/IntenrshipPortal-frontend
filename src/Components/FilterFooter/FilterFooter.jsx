import React from 'react'
import styles from './FilterFooter.module.css'
import { useSelector } from 'react-redux'
import { clearState } from '../../state/filter/filter-slice';
import { useDispatch } from 'react-redux';

function FilterFooter({handleFilterBtn , handleClick}) {
  const filter = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className={styles.footerContainer}>
        <div onClick={()=>{
          console.log('hi')
          handleClick();
          dispatch(clearState());
        }}>
            Clear All
        </div>
        <div className={styles.applyBtn} onClick={handleFilterBtn}>
           {
            filter.loading ?
            `Loading....`:
            `Apply Now`
           }
        </div>
    </div>
  )
}

export default FilterFooter