import { useState, useEffect } from 'react'

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

      <Final />

    </div>
  );
}

export default App
