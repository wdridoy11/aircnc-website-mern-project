import React from 'react'
import websiteLogo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom'

// website logo componentes
const Logo = () => {
  return <>
    <Link to={'/'}>
      <img className='hidden md:block' width='100' height="100" src={websiteLogo} alt="Logo" />
    </Link>
  </>
}

export default Logo