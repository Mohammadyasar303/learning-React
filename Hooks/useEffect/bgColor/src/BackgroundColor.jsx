import React, { useState, useEffect } from 'react';
import "./App.css"

function BackgroundColor() {
  const [color, setbgColor] = useState('bg-white');

  useEffect(() => {
    document.body.classList.add(color);
  }, [color]);

  // const buttonStyle = {className:"", padding: '10px 20px', margin: '10px', border: 'none', borderRadius: '15px'};

  return (
    <div className='buttons'>

      <button className='red' onClick={()=>{
        setbgColor("bg-red");
        }}>Red</button>

      <button className='green' onClick={()=>{
        setbgColor("bg-green");
        }}>Green</button>

      <button className='blue' onClick={()=>{
        setbgColor("bg-blue");
        }}>Blue</button>
      {/* <button 
        style={{...buttonStyle, color: '#ff0000'}}
        onClick={() => setbgColor('red')}
      >
        Red
      </button>
      
      <button 
        style={{...buttonStyle, color: '#00ff00'}}
        onClick={() => setbgColor('green')}
      >
        Green
      </button>
      
      <button 
        style={{...buttonStyle, color: '#800080'}}
        onClick={() => setbgColor('purple')}
      >
        Purple
      </button> */}
    </div>
  );
}

export default BackgroundColor;
