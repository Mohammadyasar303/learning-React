import React, {createContext} from 'react';
import { useState, useContext } from 'react';

const changeLng = createContext();

function Language(){

    const [lang, setLang] = useState('Default');

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