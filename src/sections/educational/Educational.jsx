import React from 'react'
import styles from './Educational.module.css'

const Educational = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>Edukácia</h2>
        <form className={styles.form}>
          <h3>Vyučenie</h3>
          <input id="vyucenie" type="text" placeholder="CS50: Introdokcia to softwérového inžinierstva" />
          <h3>Škola</h3>
          <input id="skola" type="text" placeholder="Harvard" />
          <button id="submit-education" className={styles.submit}>
            Pridať do zoznamu
          </button>
        </form>
      </div>
    </div>
  );
}

export default Educational