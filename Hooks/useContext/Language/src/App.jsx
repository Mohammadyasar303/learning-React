import { Children, useState } from 'react'
import Language from './Language'
// import './App.css'

function App() {
  

  return (
    <>
      {/* <Language /> */}
      <Factorial value={n}/>
    </>
  )
}

function Factorial(){
  const factorial = (n) => {
    if(n==1) return 1;
    return n * factorial(n-1);
  }

  useMemo(()=>{
    factorial(n);
  },[n])
  
  return(
    <div>
      Calculated factorial is {factorial}
    </div>
  )
}



export default App

