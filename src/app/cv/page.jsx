"use client"
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const handleDownload = async () => {
  try {
    const response = await fetch(
      "https://files.smallpdf.com/files/6e58219d1a9f717b2b056f1e542fc2b3.pdf?name=CVBASTIEN2023.pdf"
    );
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "cvBastien.pdf";
    link.click();

    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading image:", error);
  }
};

const Cv = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleDownload}>
        DOWNLOAD
      </button>
      <Image
        src="/CVBASTIEN2023.jpg"
        className={styles.img}
        alt="cv bastien"
        height={1600}
        width={1300}
      />
    </div>
  );
};

export default Cv;
