import React, {createContext} from 'react';
import { useState, useContext } from 'react';

const le = createContext();

function Age(){

    const [age, setAge] = useState(100);

    return(
        <>
            <le.Provider value={age}>
                <Parent/>
            </le.Provider>
        </>
    )
}

function Parent(){
    return(
        <>
            <Child/>
        </>
    )
}

function Child(){
    return(
        <>
            <GrandChild/>
        </>
    )
}

function GrandChild(){
    const age = useContext(le);
    return(
        <>
            <h1>My Grandfather's Age: {age}</h1>
        </>
    )
}

export default Age;