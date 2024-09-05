import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-6 lg:mt-20'>
        <div className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide' >
            VirtuaIR build tools <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>for developers</span>
        </div>
        <div>
            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>Empower your creativity and bring ypur VR app ideas to life with our intutive development tools. Get started today and turn your imagination intto immersive reality</p>
            <div className='flex justify-center my-10 '>
                <a className='px-4 py-2 bg-gradient-to-r from-orange-500 to bg-orange-800 rounded-md mx-3 lg:mx-6'>Start for free</a>
                <a className='px-4 py-2 rounded-md border '>Documentation</a>
            </div>
        </div>

        <div className='flex mt-10 justify-center'>
            <video src={video1} autoPlay loop className='rounded-md w-1/3 border-orange-700 shadow-orange-400 mx-4 my-4'></video>
            <video src={video2} autoPlay loop className='rounded-md w-1/3 border-orange-700 shadow-orange-400 mx-4 my-4'></video>
        </div>
        
    </div>
  )
}

export default HeroSection