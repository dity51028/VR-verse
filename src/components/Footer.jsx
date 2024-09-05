import React from 'react'
import { resourcesLinks,platformLinks,communityLinks } from '../constants'

const Footer = () => {
  return (
    <div className='flex justify-around mt-20 border-t border-neutral-500'>
        <div className='my-10'>
            <h2 className='text-xl sm:text-2xl lg:text-3xl my-5'>Resource</h2>
            <div>
                {
                    resourcesLinks.map((resource,index)=>{
                        return <div key={index} className='my-4 text-neutral-300'>

                            <a href={resource.href}>{resource.text}</a>

                        </div>
                    })
                }
            </div>
        </div>

        <div className='my-10'>
        <h2 className='text-xl sm:text-2xl lg:text-3xl my-5'>Platform</h2>
        <div >
                {
                    platformLinks.map((platform,index)=>{
                        return <div key={index} className='my-4 text-neutral-300'>
                            <a href={platform.href}>{platform.text}</a>

                        </div>
                    })
                }
            </div>

        </div>

        <div className='my-10'>
            <h2 className='text-xl sm:text-2xl lg:text-3xl my-5'>Community</h2>
            <div>
                {
                    communityLinks.map((community,index)=>{
                        return <div key={index} className='my-4 text-neutral-300'>
                            <a href={community.href}>{community.text}</a>

                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Footer