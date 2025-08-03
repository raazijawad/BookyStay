import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIconsAndTexts, roomCommonData, roomsDummyData } from '../assets/assets'
import StarRating from '../components/StarRating'

const RoomDetails = () => {
  const {id} = useParams()
  const [room, setRoom] = useState(null)
  const [mainImage, setMaImage] = useState(null)

  useEffect(()=>{
    const room = roomsDummyData.find (room => room._id === id)
    room && setRoom(room)
    room && setMaImage(room.images[0])  
  },[])

  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      {/* Room Details*/}

      <div className='flex flex-col md:flex-row items-start md:items-start gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name} <span className='font-inter text-sm'>({room.roomType})</span></h1>
        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
      </div>

      {/* Room Rating */}

      <div className='flex items-center gap-1 mt-2'>
        <StarRating />
        <p className='ml-2'>200+ reviews</p>
      </div>

      {/* Room address */}
      <div className='flex items-center gap-1 text-gray-500 mt-2'>
        <img src={assets.locationIcon} alt="" />
        <span>{room.hotel.address}</span>
      </div>

      {/* Room images */}
      <div className='flex flex-col lg:flex-row gap-6 mt-6 '>
        <div className='lg:w-1/2 w-full'>
          <img src={mainImage} alt="" className='w-full rounded-xl shadow-lg object-cover'/>
        </div>

        <div className='grid grid-cols-2 gap-2 w-full lg:w-1/2 '>
          {room?.images.length > 1 && room.images.map((image, index)=>(
            <img onClick={()=> setMaImage(image)} 
            key={index} src={image} alt="" className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-orange-500'} `}/>
          ))}
        </div>
      </div>

      {/* room highlights */}
      <div className='flex flex-col md:flex-row md:justify-between mt-10'>
        <div className='flex flex-col'>
          <h1 className='text-3xl md:text-4xl font-playfair'>Experience Luxury Like Never Before</h1>
          <div className='flex flex-wrap items-center gap-4 mt-3 mb-6'>
            {room.amenities.map((item, index)=>(
              <div key={index} className='flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-100'>
                <img src={facilityIconsAndTexts[item]} alt="" className='w-5 h-5'/>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Room price */}
        <p className=''>${room.pricePerNight}/Night</p>
      </div>

      {/* Checking chekout form */}
      <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white 
      shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>

        <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>
          <div className='flex flex-col'>
            <label htmlFor="checkInDate" className='font-medium mr-1'>Check in</label>
            <input type="date" id='checkInDate' placeholder='Check-in' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="checkOutDate" className='font-medium mr-1'>Check out</label>
            <input type="date" id='checkOutDate' placeholder='Check out' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="checkOutDate" className='font-medium mr-1'>Guest</label>
            <input type="number" id='checkOutDate' min={1} placeholder='Guest' className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
          </div>
        </div>

        <button type='submit' className='bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 md:py-4 py-3 text-base cursor-pointer'>
          Check Availability
        </button>
      </form>

      {/* Common Specification */}
      <div className='mt-25 space-y-4'>
        {roomCommonData.map((spec, index)=>(
          <div key={index} className='flex items-center gap-2'>
            <img src={spec.icon} className="w-6.5" alt="" />
            <div>
              <p className='text-base'>{spec.title}</p>
              <p className='text-gray-500'>{spec.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='max-w-3xl my-15 py-10 border-y border-gray-300 text-gray-500'>
        <p>Guests will be allocated on the ground floor according to availivility. You get a comfortable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The guest will be allocated ground floor according to availibility. You get the comfortable two bedrooms apartment that has a true city feeling.</p>
      </div>


      {/* Hosted by */}
      <div className='flex flex-col items-start gap-4'>
        <div className='flex gap-4'>
          <img src={room?.hotel?.owner?.image} alt="" className='h-14 w-14 md:h-18 md:w-18 rounded-full'/>
          <div>
            <p className='text-lg md:text-xl'>Hosted by {room.hotel.name}</p>
            <div className='flex items-center mt-1'>
              <StarRating />
              <p className='ml-2'>200+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomDetails
