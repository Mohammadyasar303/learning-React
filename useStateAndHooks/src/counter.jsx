import { useState } from "react";

function Counter(){

const [counter, increase] = useState(0);

    function increasecounter(){
        increase(counter+1);
    }

    return(
        <>
            <button type="button"onClick={increasecounter}>Counter is : {counter}</button>
        </>
        
    )
}
export default Counter;