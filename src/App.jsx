import { useState, useEffect } from 'react'

import Educational from './sections/educational/Educational'
import General from './sections/general/General'
import Practical from './sections/practical/Practical'

function App() {
  return (
    <div>
      
      <General />

      <Educational />

      <Practical />

    </div>
  );
}

export default App
