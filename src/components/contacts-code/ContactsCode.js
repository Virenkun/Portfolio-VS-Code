import React from "react";
import styles from "./ContactsCode.module.css";

const socialsData = [
  {
    social: "personal email",
    link: "virendrasonivs07@gmail.com",
    href: "virendrasonivs07@gmail.com",
  },
  {
    social: "email",
    link: "ch20btech11039@iith.ac.in",
    href: "ch20btech11039@iith.ac.in",
  },
  {
    social: "github",
    link: "virenkun",
    href: "https://github.com/Virenkun",
  },
  {
    social: "linkedin",
    link: "Virendra Soni",
    href: "https://www.linkedin.com/in/virensoni-iith/",
  },
  {
    social: "Leetcode",
    link: "viren soni",
    href: "https://leetcode.com/viren_kun/",
  },
  
];

const ContactsCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {socialsData.map((socialItem, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{socialItem.social} :{" "}
          <a href={socialItem.href} target="_blank" rel="noreferrer">
            {socialItem.link}
          </a>
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactsCode;
