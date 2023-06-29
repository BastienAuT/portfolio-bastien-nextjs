"use client"
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const handleDownload = async () => {
  try {
    const url = "/CVBASTIEN2023.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.download = "cvBastien.pdf";
    link.click();
  } catch (error) {
    console.error("Error downloading PDF:", error);
  }
};

const Cv = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleDownload}>
        DOWNLOAD
      </button>
      <Image
        src="/CVBASTIEN2023.png"
        className={styles.img}
        alt="cv bastien"
        height={1600}
        width={1300}
        
      />
    </div>
  );
};

export default Cv;
