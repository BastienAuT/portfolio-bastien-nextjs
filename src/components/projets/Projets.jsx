"use client";
import React from "react";
import Image from "next/image";
import styles from "./projets.module.css";

const Projets = () => {
  const [projects, setProjects] = React.useState([]);


  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/projets");
        const data = await response.json();
        setProjects(data.projets);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      <h1 className={styles.projects}>Projets Personnels</h1>
    <div className={styles.container}>
        
      {projects.map((project) => (
        <div key={project._id} className={styles.card}>
          <Image
            className={styles.image}
            src={project.image}
            height={150}
            width={275}
            alt={"card des différents projets"}
            />
          <span className={styles.title}>{project.title}</span>
          <p className={styles.desc}>{project.desc}</p>
          <a className={styles.button} href={project.url}>
            Visiter
          </a>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Projets;
