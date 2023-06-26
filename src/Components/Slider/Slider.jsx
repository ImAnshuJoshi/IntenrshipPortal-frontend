import React, { useState } from "react";
import styles from "./Slider.module.css";
import { useDispatch } from 'react-redux';
import {setMinDuration , setMaxDuration} from '../../state/filter/filter-slice'

function Slider() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const dispatch = useDispatch();

  
const handleSliderClick = (value) => {
  if(end==0){
    setEnd(value);
    dispatch(setMaxDuration(value));
  }
  else if(end!=0 && value>end){
    setEnd(value);
    dispatch(setMaxDuration(value));
  }
  else if(end!=0 && value<=end){
    setStart(value);
    dispatch(setMinDuration(value));
  }

};
const isRangeSelected = (value) => {
    if(value >= start && value<=end)
    return true;
    else
      return false
};
const isLineToBeSelected = (value) => {
  if(value >= start && value<end)
  return true;
  else
  return false
}

  return (
    <div className={styles.sliderParentContainer}>
      <div className={styles.heading}>Duration (Months)</div>
      <div className={styles.sliderContainer}>
        {[1, 2, 3, 4, 5, 6].map((value, index, array) => (
          <div
            key={value}
            className={`${styles.sliderCircle} ${
              isRangeSelected(value) ? styles.selectedRange : ""
            }`}
            onClick={() => handleSliderClick(value)}
          >
            <div className={styles.sliderText}>{value}</div>
            {index < array.length - 1 && (
              <div className={`${styles.sliderLine} ${
                isLineToBeSelected(index+1) ? styles.selectedRange : ""
              }`}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;

