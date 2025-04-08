import React, { useState } from 'react'
import Fibonacci from './Fibonaci'
import Factorial from './Factorial'

function App() {
  const [n, setN] = useState(1);

  return (
    <>
        <div>
          <button onClick={() => setN(n+1)}>Increase Value</button>
          {/* <button onClick={() => setN(n-1)}>Decrease Value</button><br /> */}
          <input type="number" value={n} onChange={(e) => setN(+e.target.value)}/>
        </div><hr />
        <Factorial n={n}/><hr/>
        <Fibonacci n={n}/>
    </>
  )
} 

export default App
