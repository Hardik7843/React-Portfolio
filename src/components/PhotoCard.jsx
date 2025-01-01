import React from 'react'

const PhotoCard = () => {
  return (
    <div className='bg-white w-64 h-96 rounded-lg flex flex-col items-center justify-start p-6'>
        <img src="photo.jpeg" alt="Profile Pic" className='rounded-lg w-44 h-54'/>

        <h1 className='font-bold mt-2 text-lg font-serif'>Hardik Prajapati</h1>

        <p className='px-2'>
            I am Software Developer. I am on mission to learn and grow my knowledge to solve problems.
        </p>
    </div>
  )
}

export default PhotoCard