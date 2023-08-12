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