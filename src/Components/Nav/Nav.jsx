import React from 'react';
import clipBoardText from '../../assets/icons/clipboardtext.png';
import bell from '../../assets/icons/bell.png';
import edit from '../../assets/icons/edit.png';
import image from '../../assets/icons/image.png';
import tasksquare from '../../assets/icons/tasksquare.png';
import messagequestion from '../../assets/icons/messagequestion.png';
import styles from './Nav.module.css';

function Nav() {
  return (
    <div className={styles.container}>
      <div className={styles.brand}>InternBrand</div>
      <div className={styles.menu}>
        <div className={`${styles.menuItem} ${styles.browse}`}>
          <img src={clipBoardText} alt="profile" />
          <div>Browse Listings</div>
        </div>
        <div className={styles.menuItem}>
          <img src={tasksquare} alt="profile" />
          <div>Application History</div>
        </div>
        <div className={styles.menuItem}>
          <img src={edit} alt="profile" />
          <div>Blog</div>
        </div>
        <div className={styles.menuItem}>
          <img src={messagequestion} alt="profile" />
          <div>Contact Us</div>
        </div>
      </div>
      <div className={styles.icons}>
        <img src={bell} alt="profile" className={styles.bellIcon}/>
        <img src={image} alt="profile" className={styles.NavImg}/>
      </div>
    </div>
  );
}

export default Nav;
