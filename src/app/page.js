import React from "react";
import styles from "./page.module.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Banner from "../components/banner/Banner";
import Projets from "../components/projets/Projets";
config.autoAddCss = false;

export default function Home() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <main className={styles.main}>
        <div className={styles.description}>
          <Banner />
          <Projets />
        </div>
      </main>
    </>
  );
}
