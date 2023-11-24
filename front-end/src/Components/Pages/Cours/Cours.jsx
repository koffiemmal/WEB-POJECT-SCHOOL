import React, { useState } from "react";
import styles from "./Cours.module.css";

const Cours = () => {
  let [cours, setCours] = useState(true);

  let handleClick = () => {
    setCours(!cours);
  };

  return (
    <div className={styles.container}>
      <h1>MATIERE</h1>
      <div>
        <div className={styles.changement}>
        {cours ? (
          <section className={styles.cours}>
            <p>
              Matiere:AZERT | Durée:24h |Description: Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Quam, perspiciatis.{" "}
              <button onClick={handleClick}>En savoir plus</button>{" "}
            </p>
            
          </section>
        ) : (
          <section className={styles.ensavoirplus}>
            <h2>Matiere:AZERT</h2>
            <h3>Duree:24h</h3>
            <p>
              Description: <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              explicabo excepturi enim fugiat obcaecati, est ratione pariatur,
              nostrum cumque fuga dicta expedita, aut nam. Voluptates at sit
              magnam laborum architecto voluptatem repellendus odit praesentium
              nesciunt minus, autem laboriosam sunt repellat aut cumque quisquam
              labore. Ea!
            </p>
            <button onClick={handleClick}>Reduire</button>
          </section>
        )}
        </div>
        <br />
      </div>
      <br />
    </div>
  );
};

export default Cours;
