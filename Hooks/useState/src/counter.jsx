import { useState } from "react";

function Counter(){

const [counter, increase] = useState({name:"yasar", age:21, city:"vadodara"});

    function increasecounter(){
        counter.name="Mahaan";
        counter.city="Surat"

        console.log(counter);
        increase((prev)=>({...prev}))
    }

    return(
        <>
            <p></p>
            <button onClick={increasecounter}>Counter :{counter.name} {counter.age} {counter.city}</button>
        </>
        
    )
}
export default Counter;