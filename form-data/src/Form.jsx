import { useState } from "react";

function Form(){

    const [formData, setdataOutput] = useState ({
        Name : "",
        Age : "",
        College : "",
        City : "",
        State : ""
    })

    function InputValue(e){
        const {Name, value} = e.target;
        setdataOutput((prev)=>({
            ...prev,
            [Name]:value
        }))
    }

    function FinalValue(){
        console.log(formData);
    }

    return(
        <>
            <form>
                <label>Name : </label>
                <input onChange={InputValue} name="name" value={formData.Name} type="text" placeholder="Enter Name"/><br /><br />

                <label>Age : </label>
                <input onChange={InputValue} name="age" value={formData.Age} type="number" placeholder="Enter Age"/><br /><br />

                <label>College Name : </label>
                <input onChange={InputValue} name="college" value={formData.College} type="text" placeholder="Enter College Name"/><br /><br />

                <label>City : </label>
                <input onChange={InputValue} name="city" value={formData.City} type="text" placeholder="Enter City Name"/><br /><br />

                <label>State : </label>
                <input onChange={InputValue} name="state" value={formData.State} type="text" placeholder="Enter State Name"/><br /><br />

            </form>
            
            <input onClick={FinalValue} type="button" value={"Submit"}/>

            <div>
                <p>Name : {formData.Name}</p>
                <p>Age : {formData.Age}</p>
                <p>College : {formData.College}</p>
                <p>City : {formData.City}</p>
                <p>State : {formData.State}</p>
            </div>
            
        </>
    )
}

export default Form;