import React from 'react';
import { useState, useEffect } from 'react';
import "./App.css"

function Api(){
    const [users,setUsers]=useState([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((json)=> setUsers(json))
    },[]);
        
    return(
        <>
            <h1>Users</h1>
            <table className='table'>
                <thead className='thead'>
                    <tr className='tr'>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>E-mail</th>
                        <th>Address
                            <tr>
                                <th>Street</th>
                                <th>Suite</th>
                                <th>City</th>
                                <th>Zipcode</th>
                                <th>Lat</th>
                                <th>Lng</th>
                            </tr>
                        </th>
                    </tr>
                </thead>

                <tbody className='tbody'>
                    {users.map((chikno)=>(
                        <tr key={chikno.namwkjsancan}>
                            <td>{chikno.id}</td>
                            <td>{chikno.name}</td>
                            <td>{chikno.username}</td>
                            <td>{chikno.email}</td>
                            {/* <td>{chikno.address.street}...{chikno.address.suite}...{chikno.address.city}...{chikno.address.zipcode}...{chikno.address.geo.lat}...{chikno.address.geo.lng}</td> */}
                            <td>
                            <table className="nested-table">
                    <tbody>
                        <tr>
                            <td>Street: {chikno.address.street}</td>
                        </tr>
                        <tr>
                            <td>Suite: {chikno.address.suite}</td>
                        </tr>
                        <tr>
                            <td>City: {chikno.address.city}</td>
                        </tr>
                        <tr>
                            <td>Zipcode: {chikno.address.zipcode}</td>
                        </tr>
                        <tr>
                            <td>Lat: {chikno.address.geo.lat}</td>
                        </tr>
                        <tr>
                            <td>Lng: {chikno.address.geo.lng}</td>
                        </tr>
                    </tbody>
                </table>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Api;