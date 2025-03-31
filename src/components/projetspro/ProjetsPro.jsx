"use client";
import React from "react";
import Image from "next/image";
import styles from "./projetspro.module.css";

const ProjetsPro = () => {
  const [projectsPro, setProjectsPro] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/projetspro");
        const data = await response.json();
        setProjectsPro(data.projetspro);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className={styles.projects}>Projets Professionnels</h1>
      <div className={styles.container}>
        {projectsPro.map((projectpro) => (
          <div key={projectpro._id} className={styles.card}>
            <Image
              className={styles.image}
              src={projectpro.image}
              height={150}
              width={275}
              alt={`Card de ${projectpro.title}`}
            />
            <span className={styles.title}>{projectpro.title}</span>
            <p className={styles.desc}>{projectpro.desc}</p>
            <a className={styles.button} href={projectpro.url}>
              Visiter
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjetsPro;
