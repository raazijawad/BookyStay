import React from 'react';

const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 bg-[url("/assets/heroImage.png")] h-screen bg-cover lg:px-24 text-white bg-no-repeat bg-center'>
      <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-50'>
        The Ultimate Hotel Experience
      </p>
      <h1 className='font-playfair max-w-xl mt-4 text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold'>Discover Your Perfect Gateway Destination</h1>
      <p>Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journy today </p>
    </div>
  );
};

export default Hero;
