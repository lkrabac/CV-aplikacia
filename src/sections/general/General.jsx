import React from 'react'
import styles from "./General.module.css";

const General = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>Všeobecné informácie</h2>
        <form action="" className={styles.form}>
          <h3>Meno</h3>
          <input id='meno' type="text"  placeholder='Matej'/>
          <h3>Priezvisko</h3>
          <input id='priezvisko' type="text"  placeholder='Smatanik'/>
          <h3>Adresa</h3>
          <input id='adresa' type="text"  placeholder='Bratislava 197'/>
          <h3>Telefónne číslo</h3>
          <input id='telcislo' type="tel"   placeholder='0907123456'/>
          <h3>Emailová adresa</h3>
          <input id='email' type="email"  placeholder='priklad@gmail.com'/>
          <h3>Popis</h3>
          <textarea id='popis' type="text" className={styles.popis} placeholder='...'/>
          <button id='submit-values' className={styles.submit}>Pridať</button>
        </form>
      </div>
    </div>
  );
}

export default General
