import React from "react";
import styles from "./CompanyDetails.module.css";
import companyLogo from '../../assets/icons/companylogo.png'
import timer from '../../assets/icons/timer.png'
import ranking from '../../assets/icons/ranking.png'
import location from '../../assets/icons/location.png'
import calender from '../../assets/icons/calendar.png'
import clipboardclose from '../../assets/icons/clipboardclose.png'
import usertick from '../../assets/icons/usertick.png'
import users from '../../assets/icons/profile2user.png'
import wallet from '../../assets/icons/walletmoney.png'

const skills = [
  "Javascript",
  "ReactJS",
  "ExpressJS",
  "MongoDB",
  "Clean Architecture",
];

const requirements = [
  "Someone who can work in a fast-paced startup environment",
  "Good understanding of ReactJs, HTML, SCSS (styling is important), Javascript",
  "Good communication is a must-have for this role",
  "Hardworking & Curious to learn/implement new things is what I prefer personally",
];
const responsibilites = [
  "Write clean, manageable code and follow standard coding practices",
  "Write quality code with a clean UI/UX view",
  "Work with the tech & non-tech teams to create a meaningful product for users",
  "Work on the frontend of the web application",
];
const aboutCompany = 
    `We are a mobile and web development company. We're a professional,
          individualistic one-stop shop providing strategic brand consulting,
          experience and customer journey design, mobile app design and
          development, website and software development, and just about
          everything else which has to do anything with digital technology.`

function CompanyDetails() {
  return (
    <div className={styles.CompanyDetailsContainer}>
      <div className={styles.CompanyDetails}>
        <div>
                <img src={companyLogo} />
        </div>
        <div className={styles.positionDetails}>
            <div className={styles.PositionName}>Position name</div>
            <div className={styles.CompanyName}>Company name</div>
        </div>
      </div>
      <div className={styles.internDetails}>
            <div>
                <div className={styles.eachDetail}>
                <img src={timer}/>
                <div className={styles.Values}>
                    <div className={styles.labelValue}>3 months</div>
                    <div className={styles.detailLabel}>Duration</div>
                </div>
                </div>
                <div className={styles.eachDetail}>
                <div className={styles.verticalLine}></div>
                <img src={ranking}/>
                <div className={styles.Values}>
                    <div className={styles.labelValue}>Intermediate</div>
                    <div className={styles.detailLabel}>Experience</div>
                </div>
                </div>
                <div className={styles.eachDetail}>
                <div className={styles.verticalLine}></div>
                <img src={wallet}/>
                <div className={styles.Values}>
                    <div className={styles.labelValue}>20,000-30,000</div>
                    <div className={styles.detailLabel}>Duration</div>
                </div>
                </div>
                <div className={styles.eachDetail}>
                <div className={styles.verticalLine}></div>
                <img src={location}/>
                <div className={styles.Values}>
                    <div className={styles.labelValue}>3 months</div>
                    <div className={styles.detailLabel}>Duration</div>
                </div>
                </div>
            </div>
            <div className={styles.horizontalLine}></div>
            <div>
                <div className={styles.eachDetail}>
                <img src={calender}/>
                <div className={styles.Values}>
                    <div className={styles.labelValue}>3 months</div>
                    <div className={styles.detailLabel}>Duration</div>
                </div>
                </div>
                <div className={styles.eachDetail}>
                <div className={styles.verticalLine}></div>
                <img src={clipboardclose}/>
                <div className={styles.Values}>
                    <div className={styles.labelValue}>3 months</div>
                    <div className={styles.detailLabel}>Duration</div>
                </div>
                </div>
                <div className={styles.eachDetail}>
                <div className={styles.verticalLine}></div>
                <img src={usertick}/>
                <div className={styles.Values}>
                    <div className={styles.labelValue}>3 months</div>
                    <div className={styles.detailLabel}>Duration</div>
                </div>
                </div>
                <div className={styles.eachDetail}>
                <div className={styles.verticalLine}></div>
                <img src={users}/>
                <div className={styles.Values}>
                    <div className={styles.labelValue}>3 months</div>
                    <div className={styles.detailLabel}>Duration</div>
                </div>
                </div>
            </div>
      </div>
      <div className={styles.skills}>
        {skills.map((skill, index) => {
          return <div className={styles.EachSkill}>{skill}</div>;
        })}
      </div>
      <div className={styles.moreDetails}>
        <div className={styles.aboutUs}>About Us</div>
        <div className={styles.aboutCompany}>
          {aboutCompany}
        </div>
      </div>
      <div className={styles.moreDetails}>
        <div className={styles.requirements}>Requirements</div>
        <div className={styles.list}>
          {requirements.map((requirement, index) => {
            return <li>{requirement}</li>;
          })}
        </div>
      </div>
      <div className={styles.moreDetails}>
        <div className={styles.requirements}>Responsibilities</div>
        <div className={styles.list}>
          {responsibilites.map((responsibility, index) => {
            return <li>{responsibility}</li>;
          })}
        </div>
      </div>
      <div className={styles.visitWebsite}>
        Visit website
      </div>
      <button className={styles.applyBtn}>
        Apply Now
      </button>
    </div>
  );
}

export default CompanyDetails;
