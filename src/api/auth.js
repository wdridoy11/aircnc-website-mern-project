import { json } from "react-router-dom"

// save a user to database
export const saveUser = user=>{
    const currentUser = {
        email:user.email
    }
    // data fatch from database
    fetch(`http://localhost:5000/users/${user?.email}`,{
        method:"PUT",
        headers:{
            "content-type":"Application/json"
        },
        body:JSON.stringify(currentUser)
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data))
}