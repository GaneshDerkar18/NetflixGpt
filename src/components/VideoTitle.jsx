import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video absolute pt-[20%] px-24 text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black p-4 rounded-lg px-12 text-lg hover:bg-opacity-80'>▸ Play</button>
            <button className='bg-gray-700 text-white p-4 rounded-lg px-12 text-lg bg-opacity-50 mx-2'>ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;