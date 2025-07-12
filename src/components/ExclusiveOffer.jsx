import React from 'react'
import {assets, exclusiveOffers} from '../assets/assets'
import Title from './Title'



const ExclusiveOffer = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>
      <div className='flex flex-col md:flex-row items-center justify-between w-full'>
        <Title align='left' title='Exclusive offers' subTitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.' />
        <button className='group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12'>
          View all offer
          <img src={assets.arrowIcon} 
          className='group-hover:translate-x-1 transition-all' />
        </button>
      </div>

      <div>
        {exclusiveOffers.map((item)=>(
          <div key={item._id} className='group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center' style={{backgroundImage: `url(${item.image})`}}>
            <p className='px-3 py-1 absolute top-4 left-4 font-medium text-xs bg-white text-gray-800 rounded-full'>{item.priceOff}% OFF</p>
            <div>
              <p className=''>{item.title}</p>
              <p className=''>{item.description}</p>
              <p className=''>Expires{item.expiryDate}</p>
            </div>
            <button className='flex items-center gap-2 font-medium cursor-pointer mt-4 mb-4'>
              View Offers
              <img className='invert group-hover:translate-x-1 transition-all' src={assets.arrowIcon} alt="" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExclusiveOffer


