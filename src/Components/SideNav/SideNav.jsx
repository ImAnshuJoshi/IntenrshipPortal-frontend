import React, { useState } from 'react';
import styles from './Sidenav.module.css';

function SideNav() {
  const [activeTab, setActiveTab] = useState('popular');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className={styles.sideNavContainer}>
      <div
        className={`${styles.tab} ${activeTab === 'popular' ? styles.activeTab : ''}`}
        onClick={() => handleTabClick('popular')}
      >
        Popular
      </div>
      <div
        className={`${styles.tab} ${activeTab === 'newest' ? styles.activeTab : ''}`}
        onClick={() => handleTabClick('newest')}
      >
        Newest
      </div>
      <div
        className={`${styles.tab} ${activeTab === 'bookmarks' ? styles.activeTab : ''}`}
        onClick={() => handleTabClick('bookmarks')}
      >
        Bookmarks
      </div>
    </div>
  );
}

export default SideNav;
