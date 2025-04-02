import React, {createContext} from 'react';
import { useState, useContext } from 'react';

const changeLng = createContext();

function Language(){

    const [n, setN] = useState(5);

    return(
        <>
            {/* <changeLng.Provider value={lang, setLang}>
                <DropDown/>
                <Message/>
            </changeLng.Provider>  */}
        </> 
    )
}

function English(){
    return(
        <>
            
        </>
    )
}

export default Language;