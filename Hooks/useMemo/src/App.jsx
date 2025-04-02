import React, { useState } from 'react'
import Fibonacci from './Fibonaci'

function App() {
  const [n, setN] = useState(5);

  return (
    <>
      <div>
        <div>
          <button onClick={() => setN(n+1)}>count is</button>
          <input type="number" value={n} onChange={(e) => setN(+e.target.value)}/>
        </div>
        {/* <Factorial n={n}/> */}
        <Fibonacci n={n}/>
      </div>
    </>
  )
}

export default App
