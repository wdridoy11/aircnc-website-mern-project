import React from 'react'
import Container from '../../components/Shared/Container'
import Header from '../../components/Rooms/Header'
const image =`https://a0.muscache.com/im/pictures/miso/Hosting-826732383054098647/original/457337ee-af64-462f-90d0-b9fa1ce98a73.jpeg`
const RoomDetails = () => {
  return (
    <div>
        <Container>
            <div className='max-w-screen-xl mx-auto'>
                <div className='flex flex-col gap-6'>
                    <div>
                        <Header></Header>
                        <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
                            <img className='w-full object-cover' src={image} alt="Header image" />
                        </div>
                    </div>
                    <div className=''>
                        <div>
                            Room info
                        </div>
                        <div>
                            calander
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default RoomDetails