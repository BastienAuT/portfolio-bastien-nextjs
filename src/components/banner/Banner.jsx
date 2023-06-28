"use client"
import React from 'react'
import styles from "./banner.module.css"
import TypeIt from "typeit-react"
import Image from 'next/image';

const Banner = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.img}
        src="/bastien1.jpg"
        alt="autreimagedeBastien"
        width={"400"}
        height={"400"}
      ></Image>
      <div className={styles.text}>
        <p> Bienvenue, je suis Bastien Autem, developpeur web front-end</p>
        <TypeIt
          className={styles.typeit}
          options={{
            speed: 75,
            lifeLike: true,
            breakLines: false,
            loop: true,
          }}
          getBeforeInit={(instance) => {
            instance
              .type("JavaScript")
              .pause(800)
              .delete(12)
              .pause(800)
              .type("React")
              .pause(800);
            // Remember to return it!
            return instance;
          }}
        />
      </div>
    </div>
  );
};

export default Banner;
