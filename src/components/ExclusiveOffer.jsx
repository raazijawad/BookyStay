import React from 'react'
import Title from 'Title'
import {assets} from '../assets/assets'



const ExclusiveOffer = () => {
  return (
    <div>
      <div>
        <Title align='left' title='Exclusive offers' subTitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.' />
        <button>
          View all offer
          <img src={assets.arrowIcon} 
          className='group-hover:translate-x-1 transition-all' />
        </button>
      </div>
    </div>
  )
}

export default ExclusiveOffer
