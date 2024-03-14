import React, { useState } from 'react';
import { FaBookmark } from "react-icons/fa";
import styles from './JobDynamicCard.module.css';

const JobDynamicCard = ({
  itemDate,
  bookmarkLogo,
  companyName,
  position,
  companyLogo,
  workOptions,
  details,
  key,
  color,
}) => {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className={styles.jobCard}>
        <div className={`${styles.cardSection} ${styles[color]}`}>

          <div className={styles.dateSection}>
          <div className={styles.dateBadge}>
            {itemDate}
          </div>
          <div className={styles.bookmarkBadge} onClick={handleClick}>
            <FaBookmark className={`${styles.bookmarkIcon} ${clicked ? styles.textBlack : styles.textWhite}`} />
          </div>
          </div>

          <div className={styles.companyDetails}>
            <div className={styles.companyDetailsName}>
            <p className={styles.companyName}>{companyName}</p>
            <h1 className={styles.companyPosition}>{position}</h1>
            </div>
          <div className={styles.companyLogo}>
            <img src={companyLogo} alt="" />
          </div>
          </div>

          <div className={styles.workOptions}>
            {workOptions.map((option, index) => (
              <button key={index} className={styles.workOption}>{option}</button>
            ))}
          </div>
        </div>
        <div className={styles.detailsSection}>
          <div className={styles.detailsInfo}>
            <h1 className={styles.detailsheading}>{details.salary}</h1>
            <p className={styles.detailspara}>{details.address}</p>
          </div>
          <div className={styles.detailsButton}>
            <h1>{details.details}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDynamicCard;
