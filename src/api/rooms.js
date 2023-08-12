export const addRoom = async roomData =>{
    const respons = await fetch(`${import.meta.env.VITE_API_URL}/rooms`,{
        method:"POST",
        headers:{
            'content-type':"application/json"
        },
        body: JSON.stringify(roomData)
    })
    const data = await respons.json();
    return data;
}

// get all rooms
export const getAllRooms = async ()=>{
    const respons = await fetch(`${import.meta.env.VITE_API_URL}/rooms`)
    const data = await respons.json();
    return data
}

// get a single room data
export const getRoom = async(id)=>{
    const respons = await fetch(`${import.meta.env.VITE_API_URL}/room/${id}`)
    const data = await respons.json();
    return data
}