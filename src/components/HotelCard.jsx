import React from 'react'
import { Link } from 'react-router-dom'

const HotelCard = ({room, index}) => {
  return (
    <Link to={'/rooms/' + room._id} onClick={() => scrollTo(0,0)} key={room._id}>
    </Link>
  )
}

export default HotelCard
