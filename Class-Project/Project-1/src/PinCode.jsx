import React, { useState } from "react";
import './App.css';

function PinCode(){

    const [pincode, setPincode] = useState("");
    const [postOffices, setPostOffices] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const fetchPostOffices = async () => {
        try {
            const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
            const data = await response.json();
            if (data[0].Status === "Success") {
                setPostOffices(data[0].PostOffice);
                setIsSubmitted(true);
            }
        } catch (error) {
            console.error("Not fetching post offices:", error);
        }
    }

    const filteredOffices = postOffices.filter((office) =>
        office.Name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <div>
            {!isSubmitted ? (
                <>
                    <h2>Enter Pincode</h2>
                    <input
                        className="input"
                        type="text"
                        placeholder="Pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                    />
                    <br />
                    <button onClick={fetchPostOffices}>Lookup</button>
                </>
            ) : (
                <>
                    <h2>Post Offices in {pincode}</h2>
                    <p>
                        <span className="message">Message:</span> {filteredOffices.length} Post Office(s) Found
                    </p>

                    <div className="postofiicebox">
                        {filteredOffices.map((office, index) => (
                            <div key={index} className="postoffice">
                                <strong>Name:</strong> {office.Name} <br />
                                <strong>Branch Type:</strong> {office.BranchType} <br />
                                <strong>Delivery Status:</strong> {office.DeliveryStatus} <br />
                                <strong>District:</strong> {office.District} <br />
                                <strong>Division:</strong> {office.Division} <br />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default PinCode;