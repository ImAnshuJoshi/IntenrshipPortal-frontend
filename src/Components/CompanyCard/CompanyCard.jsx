import React from "react";
import styles from "./CompanyCard.module.css";
import bookmark from "../../assets/icons/bookmark.png";
import Clogo from "../../assets/icons/companylogo.png";
import timer from "../../assets/icons/timer.png";
import walletmoney from "../../assets/icons/walletmoney.png";
import users from "../../assets/icons/profile2user.png";
import close from "../../assets/icons/clipboardclose.png";

const skills = ["Photoshop", "After effect", "Blender", "Canva", "Illustrator"];

function CompanyCard({company , handleClick}) {
  return (
    <div className={styles.CompanyCardContainer}>
      <div className={`${styles.heading} ${styles.eachContainer}`}>
        <div className={styles.aboutCompany}>
          <div className={styles.position}>{company.position}</div>
          <div className={styles.company}>{company.name}</div>
        </div>
        <div>
          <img src={bookmark} alt="Bookmark" />
        </div>
      </div>
      <div className={styles.eachContainer}>
        <div>
          <img src={company.image} alt="Company logo" className={styles.logo} />
        </div>
        <div className={styles.skills}>
          {company.skills.slice(0, 3).map((skill, index) => (
            <div key={index}>{skill}</div>
          ))}
          {company.skills.length > 3 && (
            <div className={styles.showMore}>+{skills.length - 3}</div>
          )}
        </div>
      </div>
        <div className={`${styles.infoContainer} ${styles.eachContainer}`}>
    <div className={styles.info}>
        <div>
        <img src={timer} alt="Company logo" /><b>{company.duration} Month</b>
        </div>
        <div>
        <img src={users} alt="Company logo" /><b>{company.totalApplicants}&nbsp;</b> Applicants
        </div>
    </div>
    <div className={styles.info}>
        <div>
        <img src={walletmoney} alt="Company logo" /><b>{company.stipend}</b>
        </div>
        <div>
        <img src={close} alt="Company logo" />Ends in <b>&nbsp;{company.endsOn} days</b>
        </div>
    </div>
    </div>
    <button className={styles.applyBtn} onClick={handleClick}>
      Apply Now
    </button>
    </div>
  );
}

export default CompanyCard;
