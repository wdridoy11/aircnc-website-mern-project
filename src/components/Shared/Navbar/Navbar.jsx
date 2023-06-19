import React from 'react'
import Logo from './Logo'
import Container from '../Container'
import Search from '../Search/Search'
import MenuDropdown from './MenuDropdown'

const Navbar = () => {
  return (
    <div>
        <div className='fixed w-full bg-white z-10 shadow-sm'>
            <div className='py-4 border-b-[1px]'>
                <Container>
                    <div className='flex items-center flex-row justify-between gap-3 md:gap-0'>
                        <Logo></Logo>
                        <Search></Search>
                        <MenuDropdown></MenuDropdown>
                    </div>
                </Container>
            </div>
        </div>
    </div>
  )
}

export default Navbar