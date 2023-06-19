import React, { useContext } from 'react'
import placeholder from '../../../assets/images/placeholder.jpg'
import { AuthContext } from '../../../providers/AuthProvider'

const Avatar = () => {
  const {user} = useContext(AuthContext);
  return <>
    <img 
        width='30' 
        height='30' 
        alt="Avatar" 
        className='rounded-full' 
        src={user && user.photoURL ? user.photoURL : placeholder} 
    />
  </>
}

export default Avatar