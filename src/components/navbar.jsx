import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import logo from '../logo3.png'

function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  return (
    <div className='p-10 syne'>
        <div className="bg-white/50 w-full h-[70px] rounded flex shadow">
            <div className="h-full flex px-5 place-items-center w-1/3">
                <Link to={'/'}><img src={logo} alt="" className='h-[40px]' /></Link>
            </div>
            <div className='flex w-full'>
                <div className=' flex justify-around place-items-center w-full'>
                    <button className='bg-gray-400/50 hover:bg-gray-300 duration-200 w-[40px] h-[40px]  rounded-full  place-items-center justify-center hidden md:flex'>
                        <FiMenu className='w-[20px] h-[20px]'/>
                    </button>
                    <ul className='flex space-x-9 text-sm font-bold'>
                        <li className=''><Link to={'/'}>Home</Link></li>
                        <li className=''><Link to={'/Search'}>Search</Link></li>
                        <li className=''><Link to={'/Settings'}>Settings</Link></li>
                    </ul>
                </div>
                <div className='w-1/3 flex justify-around place-items-center'>
                    <button onClick={()=>setDropdownOpen(!isDropdownOpen)} className='bg-gray-400 w-[40px] h-[40px] rounded-full flex place-items-center justify-center '>
                        
                    </button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar