import React from 'react'
import { useEffect, useState, useRef } from 'react';
import styles from './Final.module.css'

const Final = () => {
  let edukacia = "Edukácia";
  let praca = "Prax v práci";

  const [meno, setMeno] = useState("");
  const [priezvisko, setPriezvisko] = useState("");
  const [adresa, setAdresa] = useState("");
  const [telcislo, setTelcislo] = useState("");
  const [email, setEmail] = useState("");
  const [popis, setPopis] = useState("");

  const [education_nazov, setEducationNazov] = useState('');
  const [education_skola, setEducationSkola] = useState('');

  useEffect(() => {
    const submit_button = document.getElementById("submit-values");

    submit_button.addEventListener("click", (e) => {
      e.preventDefault();
      setMeno(document.getElementById("meno").value);
      setPriezvisko(document.getElementById("priezvisko").value);
      setAdresa(document.getElementById("adresa").value);
      setTelcislo(document.getElementById("telcislo").value);
      setEmail(document.getElementById("email").value);
      setPopis(document.getElementById("popis").value);
    });

    const submitEducation = (e) => {
      e.preventDefault();
      setEducationNazov(document.getElementById("vyucenie").value);
      setEducationSkola(document.getElementById("skola").value);

      const container = document.getElementById("eduaction_append");
      container.innerHTML += `<ul><li>${
        document.getElementById("vyucenie").value
      }</li><li><small>${document.getElementById("skola").value}</small></li></ul>`;
    };

    const submitEducationButton = document.getElementById("submit-education");
    if (submitEducationButton) {
      submitEducationButton.addEventListener("click", submitEducation);
    }

    return () => {
      // remove the event listener when the component unmounts
      if (submitEducationButton) {
        submitEducationButton.removeEventListener("click", submitEducation);
      }
    };

  }, []);

  

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.header__text}>
            <h1>{meno + " " + priezvisko}</h1>
          </div>
          <div className={styles.body__text}>
            <h3>Všobecné informácie</h3>
            <p>{`Telefónne číslo: ${telcislo}`}</p>
            <p>{`Adresa: ${adresa}`}</p>
            <p>{`Email: ${email}`}</p>
            <div className={styles.body__border__top}>
              <p>{popis}</p>
            </div>
          </div>
          <div className={`${styles.education} ${styles.body__border__top}`}>
            <h4>{edukacia.toUpperCase()}</h4>
            <div
              id="eduaction_append"
              className={`${styles.education__text}`}
            ></div>
          </div>
          <div className={`${styles.work} ${styles.body__border__top}`}>
            <h4>{praca.toUpperCase()}</h4>
            <div className={`${styles.work__text}`}>
              <h3>Software Engineer</h3>
              <p>
                Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad
                incididunt incididunt eiusmod. Officia cupidatat culpa commodo
                nisi nostrud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Final