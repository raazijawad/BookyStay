import React, { useState } from 'react'
import { roomsDummyData } from '../../assets/assets'
import Title from '../../components/Title'

const ListRoom = () => {


  const [rooms, setRooms] = useState(roomsDummyData)

  return (
    <div>
      <Title align="left" font="outfit" title="Room Listing" subTitle="View, Edit, or manage all listed rooms. Keep the infomation up-to-date to provide the experience for users."/>

      <p className='mt-8 text-gray-500'>All Rooms</p>
    </div>
  )
}

export default ListRoom
