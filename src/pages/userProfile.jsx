import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/authContext'
import userImg from '../user.png'
import { MdAlternateEmail } from 'react-icons/md'
import {MdOutlineMail} from 'react-icons/md'
import {BiUser} from 'react-icons/bi'
import Post from '../components/Post'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Error from './Error'

function ProfileMe() {
    const {user,token,logout,setLoading} = useContext(AuthContext)
    const [data, setData] = useState([])
    const [error, setError] = useState([false])
    const {id} = useParams()
    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3306/'+id, {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            });
            
            setData(response.data.user);
          } catch (error) {
            console.error(error);
            setError(true);
          }
        };
        fetchData();
        setLoading(false)
      }, [token]);
  return (
    <>
        {
        error == true ? <Error /> :
        <>
        {data &&
        <div className='min-h-full  w-full mt-5 syne  space-y-3'>
            <div className='w-full  flex flex-col xl:flex-row text-center xl:text-left place-content-center place-items-center p-5 space-y-5 xl:space-x-5 bg-white/50 backdrop-blur-md rounded shadow'>
                <div>
                    <img src={data.user?.profile || userImg} className='w-[200px] rounded-full border-4 border-white shadow-lg'/>
                </div>
                <div>
                    <div className='flex text-md xl:text-xl place-items-center space-x-2 place-content-center xl:place-content-start'><MdAlternateEmail /><h1 className=' font-bold'>{data.user?.username.toLowerCase().charAt(0).toUpperCase() + data.user?.username.slice(1).toLowerCase()}</h1></div>
                    <div className='flex text-md xl:text-xl place-items-center space-x-2 place-content-center xl:place-content-start'><BiUser /><h1 className=' font-semibold'>{data.user?.fullName.toLowerCase().charAt(0).toUpperCase() + data.user?.fullName.slice(1).toLowerCase()}</h1></div>
                    <div className='flex text-md xl:text-xl place-items-center space-x-2 place-content-center xl:place-content-start'><MdOutlineMail /><h1 className=''>{data.user?.email.toLowerCase().charAt(0).toUpperCase() + data.user?.email.slice(1).toLowerCase()}</h1></div>
                </div>
            </div>
            <div className='w-full  bg-white/50 backdrop-blur-md rounded shadow xl:p-2'>
                <Post posts={data.posts} />
            </div>
        </div>
        }
    </>
    }
    </>
  )
}

export default ProfileMe