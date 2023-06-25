import React from "react";
import styles from "./CompanyCard.module.css";
import bookmark from "../../assets/icons/bookmark.png";
import Clogo from "../../assets/icons/companylogo.png";
import timer from "../../assets/icons/timer.png";
import walletmoney from "../../assets/icons/walletmoney.png";
import users from "../../assets/icons/profile2user.png";
import close from "../../assets/icons/clipboardclose.png";

const skills = ["Photoshop", "After effect", "Blender", "Canva", "Illustrator"];

function CompanyCard() {
  return (
    <div className={styles.CompanyCardContainer}>
      <div className={`${styles.heading} ${styles.eachContainer}`}>
        <div className={styles.aboutCompany}>
          <div className={styles.position}>Motion Graphics Designer</div>
          <div className={styles.company}>Xapo Visuals</div>
        </div>
        <div>
          <img src={bookmark} alt="Bookmark" />
        </div>
      </div>
      <div className={styles.eachContainer}>
        <div>
          <img src={Clogo} alt="Company logo" className={styles.logo} />
        </div>
        <div className={styles.skills}>
          {skills.slice(0, 3).map((skill, index) => (
            <div key={index}>{skill}</div>
          ))}
          {skills.length > 3 && (
            <div className={styles.showMore}>+{skills.length - 3}</div>
          )}
        </div>
      </div>
        <div className={`${styles.infoContainer} ${styles.eachContainer}`}>
    <div className={styles.info}>
        <div>
        <img src={timer} alt="Company logo" /><b>1 Month</b>
        </div>
        <div>
        <img src={users} alt="Company logo" /><b>200</b> Applicants
        </div>
    </div>
    <div className={styles.info}>
        <div>
        <img src={walletmoney} alt="Company logo" /><b>$400-$500</b>
        </div>
        <div>
        <img src={close} alt="Company logo" />Ends in <b>&nbsp;3 days</b>
        </div>
    </div>
    </div>
    </div>
  );
}

export default CompanyCard;
