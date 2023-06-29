import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <DarkModeToggle />

      <Link href="/">
        <span className={styles.links}>ACCUEIL</span>
      </Link>

      <Link href="/cv">
        <span className={styles.links}>CV</span>
      </Link>

      <Link href="https://github.com/BastienAuT">
        <span className={styles.links}>GITHUB</span>
      </Link>
    </div>
  );
};

export default Navbar;
