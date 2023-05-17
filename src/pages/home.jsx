import React, { useContext, useEffect } from 'react'
import Navbar from '../components/navbar'

import { AuthContext } from '../context/authContext';

function Home() {
  const {token , user} = useContext(AuthContext);

  return (
    <div className=''>
        
    </div>
  )
}

export default Home