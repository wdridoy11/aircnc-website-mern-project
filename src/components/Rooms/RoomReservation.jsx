import React from 'react'
import Calender from './Calender'

const RoomReservation = () => {
  return (
    <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden'>
        <div className='flex flex-row items-center gap-1 p-4'>
            <div className='text-2xl font-semibold'>$ 200</div>
            <div className='text-neutral-600 font-light'>night</div>
        </div>
        <hr />
        <div>
            <Calender></Calender>
        </div>
    </div>
  )
}

export default RoomReservation