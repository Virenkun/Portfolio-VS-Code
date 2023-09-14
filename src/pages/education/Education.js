import React from "react";
import styles from "./Education.module.css";
import EducationCode from "../../components/education-code/EducationCode";

const graduationData = {
  college: "IIT Hyderabad",
  degree: "Bachelor of Technology",
  major: "Chemical Engineering",
  gpa: "7.8/10",
  start: "Aug 2020",
  end: "May 2024",
};



const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <h3>Graduation</h3>
        <EducationCode jsonData={graduationData} />
      </div>
      
    </div>
  );
};

export default Education;
