import React from 'react'
import Title from 'Title'
import {assets} from '..assets/assets'

const ExclusiveOffer = () => {
  return (
    <div>
      <div>
        <Title />
        <button>
          View all offer
          <img src={assets} alt="" />
        </button>
      </div>
    </div>
  )
}

export default ExclusiveOffer
