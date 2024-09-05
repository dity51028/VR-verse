import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { navItems } from '../constants/navItems'
import { Menu,X} from 'lucide-react'


const Header = () => {

    const [navOpen,setNavOpen] = useState(false);

    const toggleNavBar = () =>{
        setNavOpen(!navOpen)
    }

  return (
    <div className='flex justify-around sticky top-0 z-50 border-b border-gray-500 h-16 items-center backdrop-blur-lg '>
        <div className='flex w-15%'>
            <img src={logo} alt="logo" className='h-12 w-10 flex-shrink-0'/>
            <span className='flex items-center font-extrabold mx-2'>VR-Verse</span>
        </div>
        <div className='hidden lg:flex ml-14 space-x-12'>
            {
                navItems.map((item,index)=>{
                    return <a key={index} href={item.href} className=''>{item.label}</a>
                })
            }
           
        </div>
        <div className='hidden lg:flex justify-center space-x-12 items-center'>
            <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md'>Create an Account</a>   
        </div>
        
        <div className='lg:hidden md:flex flex-col justify-end'>
            <button onClick={toggleNavBar}>
                {navOpen?<X/>:<Menu/>}
            </button>
        </div>
        {navOpen && (
            <div className='fixed right-0 z-20 top-16 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                <ul>
                   
                {
                  
                    navItems.map((item,index)=>{
                        return <li key={index} className='py-2'>
                            
                            <a href={item.href}>{item.label}</a>
                        </li>

                    })
                  
                    
                }
                  </ul>

                  <div className='flex space-x-4'>
                  <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                  <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md'>Create an Account</a>
                  </div>

            </div>

        )}

    </div>
  )
}

export default Header