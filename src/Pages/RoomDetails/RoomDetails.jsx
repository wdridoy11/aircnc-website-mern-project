import React from 'react'
import Header from '../../components/Rooms/Header'
import RoomInfo from '../../components/Rooms/RoomInfo'
import Container from '../../components/Shared/Container'
import RoomReservation from '../../components/Rooms/RoomReservation'
const image =`https://a0.muscache.com/im/pictures/miso/Hosting-826732383054098647/original/457337ee-af64-462f-90d0-b9fa1ce98a73.jpeg`

const RoomDetails = () => {
  return (
    <div>
        <Container>
            <div className='max-w-screen-xl mx-auto'>
                <div className='flex flex-col gap-6'>
                    <div>
                        <Header></Header>
                        <div className='w-full md:h-[60vh] overflow-hidden rounded-xl mt-4'>
                            <img className='w-full object-cover' src={image} alt="Header image" />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
                        <RoomInfo></RoomInfo>
                        <div className='mb-10 md:col-span-3 order-first md:order-last'>
                            <RoomReservation></RoomReservation>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default RoomDetails