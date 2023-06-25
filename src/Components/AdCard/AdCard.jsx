import React from 'react'
import styles from './AdCard.module.css'
import ad from '../../assets/ad.png'

function AdCard() {
  return (
    <div className={styles.adCardContainer}>
        <img src={ad} />
    </div>
  )
}

export default AdCard