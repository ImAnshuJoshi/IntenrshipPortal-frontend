import React, { useState } from 'react';
import styles from './RadioComponent.module.css';
import emptybox from '../../assets/icons/emptybox.png';
import ticksquare from '../../assets/icons/ticksquare.png';

function RadioComponent({data}) {
  const [selectedOption, setSelectedOption] = useState(data.list[0]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.RadioComponentContainer}>
      <div className={styles.header}>{data.heading}</div>
      <div>
        <div
          className={`${styles.options} ${
            selectedOption === `${data.list[0]}` ? styles.selected : ''
          }`}
          onClick={() => handleOptionChange(`${data.list[0]}`)}
        >
          <img
            src={selectedOption === `${data.list[0]}` ? ticksquare : emptybox}
            className={styles.radioIcon}
          />
          <div className={selectedOption ===`${data.list[0]}` ? styles.boldText : ''}>
            {data.list[0]}
          </div>
        </div>
        <div
          className={`${styles.options} ${
            selectedOption === `${data.list[1]}` ? styles.selected : ''
          }`}
          onClick={() => handleOptionChange(`${data.list[1]}`)}
        >
          <img
            src={selectedOption === `${data.list[1]}` ? ticksquare : emptybox}
            className={styles.radioIcon}
          />
          <div className={selectedOption === `${data.list[1]}` ? styles.boldText : ''}>
            {data.list[1]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadioComponent;
