import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffer from '../components/ExclusiveOffer'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <>
        <Hero />
        <FeaturedDestination/>
        <ExclusiveOffer/>
        <Testimonials/>
    </>
  )
}

export default Home