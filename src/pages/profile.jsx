import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import userImg from '../user.png'
import { MdAlternateEmail } from 'react-icons/md'
import {MdOutlineMail} from 'react-icons/md'
import {BiUser} from 'react-icons/bi'
import Post from '../components/Post'
import { useParams } from 'react-router-dom'

function UserProfile() {
    const {user} = useContext(AuthContext)
    console.log(user.posts);
  return (
    <>
        {user &&
        <div className='min-h-full  w-full mt-5 syne  space-y-3'>
            <div className='w-full  flex flex-col xl:flex-row text-center xl:text-left place-content-center place-items-center p-5 space-y-5 xl:space-x-5 bg-white/50 backdrop-blur-md rounded shadow'>
                <div>
                    <img src={user?.profile || userImg} className='w-[200px] rounded-full border-4 border-white shadow-lg'/>
                </div>
                <div>
                    <div className='flex text-md xl:text-xl place-items-center space-x-2 place-content-center xl:place-content-start'><MdAlternateEmail /><h1 className=' font-bold'>{user.username.toLowerCase().charAt(0).toUpperCase() + user.username.slice(1).toLowerCase()}</h1></div>
                    <div className='flex text-md xl:text-xl place-items-center space-x-2 place-content-center xl:place-content-start'><BiUser /><h1 className=' font-semibold'>{user.fullName.toLowerCase().charAt(0).toUpperCase() + user.fullName.slice(1).toLowerCase()}</h1></div>
                    <div className='flex text-md xl:text-xl place-items-center space-x-2 place-content-center xl:place-content-start'><MdOutlineMail /><h1 className=''>{user.email.toLowerCase().charAt(0).toUpperCase() + user.email.slice(1).toLowerCase()}</h1></div>
                </div>
            </div>
            <div className='w-full  bg-white/50 backdrop-blur-md rounded shadow xl:p-2'>
                <Post posts={user.posts} />
            </div>
        </div>
        }
    </>
  )
}

export default UserProfile