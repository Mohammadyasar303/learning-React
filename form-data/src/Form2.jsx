import { useState } from "react"

function Form2(){

    let [formData, setForData] = useState({
        username:"",
        age:"",
        city:"",
        college:"",
        dob:""
    })

    function handleChange(e){
        let {name,value} = e.target;

        setForData((prev)=>({...prev,[name]:value}));
    }

    let [submitted, setSubmitted] = useState(false);
    let displayData = submitted?<Data value={formData}/>:null;

    function handleSubmit(e){
        e.preventDefault();
        console.log("",formData)
        setSubmitted(true);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Name : </label>
                <input type="text" id="username" name="username" value={formData.username} onChange={handleChange}/><br /><br />

                <label htmlFor="age">Age : </label>
                <input type="text" id="age" name="age" value={formData.age} onChange={handleChange}/><br /><br />

                <label htmlFor="city">City Name : </label>
                <input type="text" id="city" name="city" value={formData.city} onChange={handleChange}/><br /><br />

                <label htmlFor="college">college : </label>
                <input type="text" id="college" name="college" value={formData.college} onChange={handleChange}/><br /><br />

                <label htmlFor="dob">DOB : </label>
                <input type="text" id="dob" name="dob" value={formData.dob} onChange={handleChange}/><br /><br />

                <button type="submit">Submit</button>
            </form>

            <div>
                {displayData}
            </div>

        </>
    )
}
export default Form2;