import { json } from "react-router-dom"

// save a user to database
export const saveUser = user=>{
    const currentUser = {
        email:user.email
    }
    // data fatch from database
    fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`,{
        method:"PUT",
        headers:{
            "content-type":"Application/json"
        },
        body:JSON.stringify(currentUser)
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data))
}

// became a host

export const becameHost = email =>{
    const currentUser = {
        role:"host"
    }
    // data fatch from database
   return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`,{
        method:"PUT",
        headers:{
            "content-type":"Application/json"
        },
        body:JSON.stringify(currentUser)
    })
    .then((res)=>res.json())
}