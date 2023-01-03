import { useState, useEffect } from 'react'

import styles from './App.module.css'
import { Educational, General, Practical } from './sections/index'

function App() {
  return (
    <div className={styles.app}>
      <General />
      
      <Educational />

      <Practical />
    </div>
  );
}

export default App
