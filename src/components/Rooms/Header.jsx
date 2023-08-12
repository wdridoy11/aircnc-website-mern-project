import React from 'react'
import Heading from '../Heading/Heading'
const Header = ({singleRoomData}) => {
  const {title, location} = singleRoomData;
  return (
    <>
        <Heading 
            title={title}
            subtitle={location}
            center={false}>
        </Heading> 
    </>
  )
}

export default Header