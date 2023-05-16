import React, { useEffect } from 'react'
import Navbar from '../components/navbar'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    useEffect(() =>{
        if(!window.localStorage.getItem("token")){
            navigate('/login');
        }
    },[])
  return (
    <div className='bg-blue-200  min-h-screen'>
        <Navbar />
    </div>
  )
}

export default Home