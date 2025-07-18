import React from 'react'

const Title = ({ title, subTitle, align, font }) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center mt-10 md:mt-0 ${align === "left" ? "md:items-start md:text-left" : ""}`}>
      <h1 className={`text-4xl md:text-[40px] ${font}`}>{title}</h1>
      <p className='text-sm md:text-base text-gray-500/90 mt-5 max-w-174'>{subTitle}</p>
    </div>
  )
}

export default Title
