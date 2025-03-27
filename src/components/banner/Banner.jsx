"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./banner.module.css";
import Image from "next/image";

const Banner = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.img}
        src="/bastien1.jpg"
        alt="autreimagedeBastien"
        width={400}
        height={400}
      />
      <div className={styles.text}>
        <p>Bienvenue, je suis Bastien Autem, developpeur web front-end</p>
        <TypeAnimation
          className={styles.typeit}
          sequence={[
            "JavaScript", // Types first
            800,          // Waits 800ms
            "",           // Deletes 'JavaScript'
            800,          // Waits 800ms
            "React",      // Types 'React'
            800,          // Waits 800ms
            "NextJs",      // Types 'NextJs'
            800,          // Waits 800ms
          ]}
          wrapper="span"
          speed={75}
          repeat={Infinity}
          cursor={true}
          style={{ display: 'inline-block' }}
        />
      </div>
    </div>
  );
};

export default Banner;