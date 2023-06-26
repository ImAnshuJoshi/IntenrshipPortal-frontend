import React, { useState } from "react";
import styles from "./CompanyDetails.module.css";
import companyLogo from "../../assets/icons/companylogo.png";
import timer from "../../assets/icons/timer.png";
import ranking from "../../assets/icons/ranking.png";
import location from "../../assets/icons/location.png";
import calender from "../../assets/icons/calendar.png";
import clipboardclose from "../../assets/icons/clipboardclose.png";
import usertick from "../../assets/icons/usertick.png";
import users from "../../assets/icons/profile2user.png";
import wallet from "../../assets/icons/walletmoney.png";

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
const responsibilities = [
  "Write clean, manageable code and follow standard coding practices",
  "Write quality code with a clean UI/UX view",
  "Work with the tech & non-tech teams to create a meaningful product for users",
  "Work on the frontend of the web application",
];
const aboutCompany = `We are a mobile and web development company. We're a professional,
          individualistic one-stop shop providing strategic brand consulting,
          experience and customer journey design, mobile app design and
          development, website and software development, and just about
          everything else which has to do anything with digital technology.`;

function CompanyDetails({ company }) {
  const [daysPassed , setDaysPassed] = useState(0);
  function calculateDaysPassed(dateString) {
    const currentDate = new Date();
    const pastDate = new Date(dateString);
    const timeDiff = currentDate.getTime() - pastDate.getTime();
    const daysPassedAns = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return daysPassedAns
  }
  if (!company) {
    return `Companies Details will be shown here...`;
  } else {
    return (
      <div className={styles.CompanyDetailsContainer}>
        <div className={styles.CompanyDetails}>
          <div>
            <img src={company.image} className={styles.companyImage} />
          </div>
          <div className={styles.positionDetails}>
            <div className={styles.PositionName}>{company.position}</div>
            <div className={styles.CompanyName}>{company.name}</div>
          </div>
        </div>
        <div className={styles.internDetails}>
          <div>
            <div className={`${styles.eachDetail} ${styles.firstCol}`}>
              <img src={timer} />
              <div className={styles.Values}>
                <div className={styles.labelValue}>
                  {company.duration} months
                </div>
                <div className={styles.detailLabel}>Duration</div>
              </div>
            </div>
            <div className={styles.eachDetail}>
              <div className={styles.verticalLine}></div>
              <img src={ranking} />
              <div className={styles.Values}>
                <div className={styles.labelValue}>{company.experience}</div>
                <div className={styles.detailLabel}>Experience</div>
              </div>
            </div>
            <div className={styles.eachDetail}>
              <div className={styles.verticalLine}></div>
              <img src={wallet} />
              <div className={styles.Values}>
                <div className={styles.labelValue}>{company.stipend}</div>
                <div className={styles.detailLabel}>Stipend</div>
              </div>
            </div>
            <div className={styles.eachDetail}>
              <div className={styles.verticalLine}></div>
              <img src={location} />
              <div className={styles.Values}>
                <div className={styles.labelValue}>{company.location}</div>
                <div className={styles.detailLabel}>location</div>
              </div>
            </div>
          </div>
          <div className={styles.horizontalLine}></div>
          <div>
            <div className={styles.eachDetail}>
              <img src={calender} />
              <div className={styles.Values}>
                <div className={styles.labelValue}>{calculateDaysPassed(company.createdAt)} days ago</div>
                <div className={styles.detailLabel}>Posted</div>
              </div>
            </div>
            <div className={styles.eachDetail}>
              <div className={styles.verticalLine}></div>
              <img src={clipboardclose} />
              <div className={styles.Values}>
                <div className={styles.labelValue}>{company.endsOn - calculateDaysPassed(company.createdAt)} Days</div>
                <div className={styles.detailLabel}>Ends in</div>
              </div>
            </div>
            <div className={styles.eachDetail}>
              <div className={styles.verticalLine}></div>
              <img src={usertick} />
              <div className={styles.Values}>
                <div className={styles.labelValue}>{company.openPositions}</div>
                <div className={styles.detailLabel}>Open Positions</div>
              </div>
            </div>
            <div className={styles.eachDetail}>
              <div className={styles.verticalLine}></div>
              <img src={users} />
              <div className={styles.Values}>
                <div className={styles.labelValue}>
                  {company.totalApplicants}
                </div>
                <div className={styles.detailLabel}>Total Applicants</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.skills}>
          {company && company.skills && company.skills.length > 0 ? (
            company.skills.map((skill, index) => (
              <div className={styles.EachSkill} key={index}>
                {skill}
              </div>
            ))
          ) : (
            <p>No skills available.</p>
          )}
        </div>
        <div className={styles.moreDetails}>
          <div className={styles.aboutUs}>About Us</div>
          <div className={styles.aboutCompany}>{company.aboutUs}</div>
        </div>
        <div className={styles.moreDetails}>
          <div className={styles.requirements}>Requirements</div>
          {company &&
          company.requirements &&
          company.requirements.length > 0 ? (
            <div className={styles.list}>
              <ul>
                {company.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No requirements available.</p>
          )}
        </div>
        <div className={styles.moreDetails}>
          <div className={styles.requirements}>Responsibilities</div>
          {company &&
          company.responsibilities &&
          company.responsibilities.length > 0 ? (
            <div className={styles.list}>
              <ul>
                {company.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No responsibilities available.</p>
          )}
        </div>
        <div className={styles.visitWebsite}>Visit website</div>
        <button className={styles.applyBtn}>Apply Now</button>
      </div>
    );
  }
}

export default CompanyDetails;
