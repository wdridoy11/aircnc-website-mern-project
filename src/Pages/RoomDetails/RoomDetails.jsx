import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Header from '../../components/Rooms/Header'
import RoomInfo from '../../components/Rooms/RoomInfo'
import Container from '../../components/Shared/Container'
import RoomReservation from '../../components/Rooms/RoomReservation'

const RoomDetails = () => {
    const singleRoomData = useLoaderData();
    const {image} = singleRoomData;
  return (
    <div>
        <Container>
            <div className='max-w-screen-xl mx-auto'>
                <div className='flex flex-col gap-6'>
                    <div>
                        <Header singleRoomData={singleRoomData}></Header>
                        <div className='w-full md:h-[60vh] overflow-hidden rounded-xl mt-4'>
                            <img className='w-full object-cover' src={image} alt="Header image" />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
                        <RoomInfo singleRoomData={singleRoomData}></RoomInfo>
                        <div className='mb-10 md:col-span-3 order-first md:order-last'>
                            <RoomReservation  singleRoomData={singleRoomData}></RoomReservation>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default RoomDetails