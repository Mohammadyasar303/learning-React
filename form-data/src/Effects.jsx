import { useState, useEffect } from "react";
import React from "react";

function Effects(){
    let [count, setCount] = useState(0);

    useEffect(()=>{
       
        const intervalId = setInterval(()=>{
            setCount(prev=>prev+1)
        },1000)

        return ()=>{
            clearInterval(intervalId);
        }
    },[count])

    return(
        <>
        Count is : {count}
        </>
    )
}
export default Effects;