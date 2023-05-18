import React, { useContext } from 'react'
import userPNG from '../user.png'
import { FcLike } from 'react-icons/fc'
import ImageError from '../errorImage.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/authContext'
function Post({posts}) {
    const {user,token} = useContext(AuthContext)
    const like = (id) => {
        try {
            const response = axios.post('http://localhost:3306/posts/like', {
                headers: {

                }
            })
        } catch (error) {
            console.error(error);
        }
    }
    const unlike = (id) => {
        try {
            const response = axios.post('http://localhost:3306/posts/unlike', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        } catch (error) {
            console.error(error);
        }
    }

    const dateago = (date) => {
        const time = new Date(date)
        const now = new Date()
        const diff = Math.abs(now - time)
        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor(diff / (1000 * 60 * 60))
        const minutes = Math.floor(diff / (1000 * 60))
        const seconds = Math.floor(diff / (1000))
        if (days > 0) {
            return `${days} days ago`
        } else if (hours > 0) {
            return `${hours} hours ago`
        } else if (minutes > 0) {
            return `${minutes} minutes ago`
        } else if (seconds > 0) {
            return `${seconds} seconds ago`
        }
    }
    
  return (
    <div className='w-full md:w-1/2 xl:w-1/3 2xl:w-1/4   syne'>
        {
            posts && posts.map(post => (
            <div className='w-full  bg-white flex shadow-md place-items-center p-5 flex-col mt-3 rounded'>
                <Link to={`/profile/${post.user.username}`} className='w-full'>
                <div className='w-full flex place-items-center'>
                        <img src={post.user?.profile || userPNG} alt="" className='w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/docs/images/people/profile-picture-5.jpg' />
                        <div className='ml-3'>
                            <h1 className='text-sm font-bold'>{post.user?.username.toLowerCase().charAt(0).toUpperCase() + post.user?.username.slice(1).toLowerCase()}</h1>
                        </div>
                </div>
                </Link>
                <div className='mt-3 w-full text-justify'>
                        {post.content}
                </div>
                {
                    post.picture && 
                    <div className='mt-3 w-full max-h-[800px] place-content-center place-items-center flex'>
                        <img src={post.picture} className='rounded object-cover h-[100%]' onError={(e) => {e.target.src = ImageError}} />
                    </div>
                }
                <div className='mt-5 w-full flex justify-between'>
                    <div>
                        <span className=''> {dateago(post.dateCreated)}</span>
                    </div>
                    <div className='flex place-items-center'>
                        <div class="flex -space-x-2 place-items-center">
                            <img class="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
                            <img class="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="" />
                            <img class="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="" />
                            <a class="flex items-center justify-center w-7 h-7 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="">+99</a>
                        </div>
                        <button className=' duration-200 flex place-items-center justify-center'>
                            <FcLike className='w-6 h-6 ml-1 hover:text-white text-green-400'/>
                        </button>
                    </div>
                </div>
            </div>
            ))
        }
    </div>
  )
}

export default Post