import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import logo from '../logo3.png'

function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
          const screenWidth = window.innerWidth;
          if (screenWidth > 768) { // Change the value (640) according to your 'sm' breakpoint
            setDropdownOpen(true);
          } else {
            setDropdownOpen(false);
          }
        };
        
        handleResize(); // Call the function initially
        
        window.addEventListener('resize', handleResize); // Listen for window resize events
        
        return () => {
          window.removeEventListener('resize', handleResize); // Clean up the event listener on component unmount
        };
      }, []);
  return (
    <div className='md:p-10 syne'>
        <div className="bg-white/50 w-full h-[70px] rounded flex shadow relative">
            <div className="h-full flex px-5 place-items-center w-2/3 md:w-1/3">
                <Link to={'/'}><img src={logo} alt="" className='h-[40px]' /></Link>
            </div>
            <div className='flex w-1/2 md:w-2/3 flex-row-reverse md:flex-row '>
                <div className=' flex justify-around place-items-center w-full'>
                    <ul className={isDropdownOpen == false ?'hidden':'flex' +'hidden md:flex flex-col  absolute md:static md:flex-row space-y-4 md:space-y-0 w-full md:w-2/3 bg-white/50 shadow md:shadow-none md:bg-inherit md:space-x-9 left-0 top-[70px] md:top-auto md:left-auto text-sm font-bold place-content-center p-7'}>
                        <li className='w-full bg-white/20 md:h-full hover:border-gray-800  rounded px-5 p-3 hover:bg-gray-200 md:hover:bg-inherit md:bg-inherit md:w-auto md:p-0 cursor-pointer md:shadow-none  shadow-sm md:hover:shadow-none hover:shadow-lg'><Link to={'/'}>Home</Link></li>
                        <li className='w-full bg-white/20 md:h-full hover:border-gray-800  rounded px-5 p-3 hover:bg-gray-200 md:hover:bg-inherit md:bg-inherit md:w-auto md:p-0 cursor-pointer md:shadow-none  shadow-sm md:hover:shadow-none hover:shadow-lg'><Link to={'/Search'}>Search</Link></li>
                        <li className='w-full bg-white/20 md:h-full hover:border-gray-800  rounded px-5 p-3 hover:bg-gray-200 md:hover:bg-inherit md:bg-inherit md:w-auto md:p-0 cursor-pointer md:shadow-none  shadow-sm md:hover:shadow-none hover:shadow-lg'><Link to={'/Settings'}>Settings</Link></li>
                        <li className='w-full bg-white/20 md:h-full hover:border-gray-800  rounded px-5 p-3 hover:bg-gray-200 md:hover:bg-inherit md:bg-inherit md:w-auto md:p-0 cursor-pointer md:shadow-none  shadow-sm md:hover:shadow-none hover:shadow-lg'><Link to={'/login'} onClick={()=>window.localStorage.removeItem("token")}>logout</Link></li>
                    </ul>
                        <button onClick={()=>setDropdownOpen(!isDropdownOpen)} className=' bg-gray-400/50 hover:bg-gray-300 duration-200 w-[40px] h-[40px]  rounded-full  place-items-center justify-center flex md:hidden'>
                            <FiMenu className='w-[20px] h-[20px]'/>
                        </button>
                </div>
                <div className='w-2/4 flex justify-end place-items-center p-5'>
                    <button  className='bg-red-400 min-w-[40px] min-h-[40px] rounded-full flex place-items-center justify-center '>
                        
                    </button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar