import React, { useState, useMemo } from 'react';

function Factorial({n}) {
    // const [n, setN] = useState(5);

  const factorial = (n) => {
    if(n==1) return 1;
    return n * factorial(n-1);
  }

  const result=  useMemo(()=> factorial(n), [n])
  
  return(
    <div>
      Calculated factorial is {result}
    </div>
  )
}

export default Factorial;