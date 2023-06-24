import React, {useEffect, useState } from 'react'
import Card from './Card';
import Container from '../Shared/Container';
import Loader from '../Shared/Loader/Loader';

const Rooms = () => {
    const [rooms,setRooms]= useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        fetch(`rooms.json`)
        .then((res)=>res.json())
        .then((data)=>{
            setRooms(data)
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[])

  return (
    <div>
        <Container>
            {loading && <Loader></Loader>}
            <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                {rooms.map((room)=><Card room={room}></Card>)}
            </div>
        </Container>
    </div>
  )
}

export default Rooms