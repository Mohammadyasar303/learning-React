import React, { useState, useMemo } from 'react';

function Fibonacci({n}){
    // const [n, setN] = useState(5);

    const fibonacci = (n) => {
      if(n<=1) return n;
      return fibonacci(n-1) + fibonacci(n-2);
    };
  
    const result1 = useMemo(()=> fibonacci(n), [n])
  
    return(
      <div>        
        Calculated fibonacci is {result1}
      </div>
    );
  }

  export default Fibonacci;