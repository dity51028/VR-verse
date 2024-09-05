import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import code from '../assets/code.jpg'
import { checklistItems } from '../constants'


const Workflow = () => {
  return (
    <div className='mt-20'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center'>Accelerate your <span className='bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text'>coding Workflow</span></h2>

        <div className='flex flex-wrap justify-center'>
        <div className='p-2 w-full lg:w-1/2'>
          <img src={code} alt="code img"  />
        </div>
        <div className='pt-20 w-full lg:w-1/2 '>
            {
                checklistItems.map((items,index)=>{
                    return <div key={index} className='flex mt-20'>
                        <CheckCircle2 className='text-green-400 mx-6'/>
                        <div>
                        <h1 className='font-bold text-md lg:text-l mb-6 tracking-wider'>{items.title}</h1>
                        <p className='text-neutral-400'>{items.description}</p>
                        </div>
                       
                    </div>

                })
            }

        </div>
            
        </div>
    
    
    
    </div>
  )
}

export default Workflow