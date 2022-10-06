import React from "react";
import {Link, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
const UserShow=(props)=>{
    const {id}=useParams();
    const [val,setVal]=useState([])
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>{
            const result=res.data
            setVal(result)
            console.log(result)
        })
        .catch((err)=>{
            const result=err.message
            console.log(result)
        })
    },[])
    return(<div>
        <h1>Show-{id}</h1>
        <p> {val.name} -{val.username}</p>
        <Link to='/users'>Back</Link>
    </div>)
}
export default UserShow