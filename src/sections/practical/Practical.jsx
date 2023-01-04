import React from 'react'
import styles from "./Practical.module.css";


const Practical = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>PRAX V PRÁCI</h2>
        <form className={styles.form}>
          <h3>Práca</h3>
          <input
            id="praca"
            type="text"
            placeholder="Softwarový inžinier"
          />
          <h3>Krátky popis práce</h3>
          <textarea id="popis__prace" type="text" placeholder="..." />
          <button id="submit-practical" className={styles.submit}>
            Pridať do zoznamu
          </button>
        </form>
      </div>
    </div>
  );
}

export default Practical
