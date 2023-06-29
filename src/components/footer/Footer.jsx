import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

import { BiLogoLinkedin, BiLogoTwitter, BiSolidEnvelope } from "react-icons/bi";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sizes}>

      <Link href="https://twitter.com/Dehcimal" className={styles.links}>
        <span>
          <BiLogoTwitter />
        </span>
      </Link>
      <Link
        href="https://www.linkedin.com/feed/update/urn:li:activity:6855897129152602112/"
        className={styles.links}
        >
        <span>
          <BiLogoLinkedin />
        </span>
      </Link>
      <Link href="mailto:deh2win@gmail.com" className={styles.links}>
        <span>
          <BiSolidEnvelope />
        </span>
      </Link>
        </div>
    </div>
  );
};

export default Footer;
