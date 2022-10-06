import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Users=()=>{
    const [list,setList]=useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')  
        .then((response)=>{
            const result=response.data
            console.log(result)
            setList(result)
        })
        .catch((err)=>{
            const result= err.message
            console.log(result)
        })
    },[])
    return (<div>
        <h1>this is user component</h1>
        {list.length ===0 ?<div>list is empty</div>:<div>
            <h2>this users are-{list.length}</h2><ol>{list.map((ele,i)=>{
            return <li key={ele.id}><Link to={`/users/${ele.id}`}>{ele.username}</Link></li>
        })}</ol></div>}
    </div>)
}
export default Users