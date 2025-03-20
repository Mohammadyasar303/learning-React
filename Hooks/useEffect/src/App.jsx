import { useState, useEffect } from 'react'

function App() {

  let [name,SetName]=useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((res) => {
      const names = res.map((user) => ({
        name: user.name,
        id: user.id,
        email: user.email,
        userName: user.username
      })); 
      SetName(names);
      console.log(names)
    });
  
    },[  ])
  
  return (
    <>
      <ul>
      
      {
      name.map((user)=>(
        <li key={user.id}>
          {user.name}, {user.id}, {user.email}, {user.userName}
        </li>
      ))
      }
      </ul>
    </>
  )
}

export default App