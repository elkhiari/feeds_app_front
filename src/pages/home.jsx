import React, { useContext, useEffect, useState } from 'react'

import { AuthContext } from '../context/authContext';
import Post from '../components/Post';
import axios from 'axios';

function Home() {
  const {token , user ,logout} = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3306/posts/post', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        setPosts(response.data);
        // console.log(response.data);
      } catch (error) {
        logout();
        // console.error(error);
      }
    };
    
    fetchData();
  }, [token]);
  return (
    <div className='mt-[20px] w-full'>
        <Post posts={posts}/>
    </div>
  )
}

export default Home