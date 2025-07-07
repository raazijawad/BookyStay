import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'

const FeaturedDestination = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>

        <Title title="Featured Destination" subTitle="Discover our handpicked selection of exeptional propoties around the world, offering unparalleled luxury and forgettable experience"/>

        <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
            {roomsDummyData.slice(0.4).map((room, index)=>(
                <HotelCard key={room._id} room={room} index={index} />
            ))}
        </div>

        <button className='my-16 px-2 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>
            View All Destinations
        </button>
    </div>
  )
}

export default FeaturedDestination
