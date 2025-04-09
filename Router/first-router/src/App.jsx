// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Child from './Child'
import Dropdown from './Dropdown'

function App() {

  return (
    <Routes>
      <Route path="/Dropdown" element={<Dropdown/>}/>
      <Route path="/Child" element={<Child/>}/>
    </Routes>
  )
}

export default App
