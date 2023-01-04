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

  const [pracap, setPraca] = useState('');
  const [popis__prace, setPopis__prace] = useState('');

  useEffect(() => {
    ////////////////////////////////////
    
    const submitReset = (e) => {
      e.preventDefault();
      setMeno("");
      setPriezvisko("");
      setAdresa("");
      setTelcislo("");
      setPopis("");
      setEmail("");

      setEducationNazov("");
      setEducationSkola("");

      setPraca("");
      setPopis__prace("");

      const container = document.getElementById("eduaction_append");
      container.innerHTML = '';

      const containerr = document.getElementById("practical__append");
      containerr.innerHTML = '';
    };

    const submitResetButton =
      document.getElementById("reset");
    if (submitResetButton) {
      submitResetButton.addEventListener("click", submitReset);
    }

    /////////////////////////////////////

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

        const submitPractical = (e) => {
          e.preventDefault();
          setPraca(document.getElementById("praca").value);
          setPopis__prace(document.getElementById("popis__prace").value);

          const container = document.getElementById("practical__append");
          console.log(container);
          container.innerHTML += `<ul><li><strong>${
            document.getElementById("praca").value
          }</strong></li><li><small>${
            document.getElementById("popis__prace").value
          }</small></li></ul>`;
        };

        const submitPracticalButton =
          document.getElementById("submit-practical");
        if (submitPracticalButton) {
          submitPracticalButton.addEventListener("click", submitPractical);
        }
      return () => {
        // remove the event listener when the component unmounts
        if (submitEducationButton) {
          submitEducationButton.removeEventListener("click", submitEducation);
        }
        // remove the event listener when the component unmounts
        if (submitPracticalButton) {
          submitPracticalButton.removeEventListener("click", submitPractical);
        }
        if (submitResetButton) {
          submitResetButton.removeEventListener("click", submitReset);
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
            <div id="practical__append"className={`${styles.work__text}`}>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Final