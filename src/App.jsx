import { useState, useEffect } from 'react'

import styles from './App.module.css'

import Educational from './sections/educational/Educational'
import General from './sections/general/General'
import Practical from './sections/practical/Practical'
import Final from './sections/final/Final'

function App() {
  return (
    <div>
      <General />

      <Educational />

      <Practical />
      <div className={styles.buttonreset}>
        <button id='reset' className={styles.buttonreset}>RESET</button>
      </div>

      <Final />
    </div>
  );
}

export default App
