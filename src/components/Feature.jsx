import React from 'react'
import { features } from '../constants/feature'

const Feature = () => {
  return (
    <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>
        <div className='text-center'>
            <span className='text-orange-600 rounded-full h-6 font-semibold tracking-wider'>FEATURE</span>
            <h2 className='text-3xl lg:text-6xl sm:text-5xl tracking-wide mt-10 lg:mt-20'>Easily build <span className='bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text'>your code</span> </h2>
        </div>

        <div className='flex flex-wrap mt-10 lg:mt-20'>
        {
                features.map((feature,index)=>{
                    return <div key={index} className='w-1/2 lg:w-1/3 py-3 text-center px-4'>
                        
                        <h2 className='font-bold tracking-wide text-xl my-5 text-neutral-200'>{feature.text}</h2>
                        <p className='text-neutral-400'>{feature.description}</p>
                    </div>
                })
            }
            
        </div>
    </div>
  )
}

export default Feature