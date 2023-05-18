import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { MdClear } from 'react-icons/md'
import { AuthContext } from '../context/authContext'
import { Link } from 'react-router-dom'
import userImg from '../user.png'
function Search() {
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])
    const [error, setError] = useState([false])
    const {user,token,logout,setLoading} = useContext(AuthContext)

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL+'users/all', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setData(response.data);
            console.log(response.data)
        } catch (error) {
            console.error(error);
            setError(true);
        }
        setLoading(false)
    };
    useEffect(() => {
        fetchData();
    }, [token]);

    const filteredData = data.filter((user) => {
        const username = user.username.toLowerCase();
        const fullName = user.fullName.toLowerCase();
        const searchInput = search.toLowerCase();
        return username.includes(searchInput) || fullName.includes(searchInput);
      });

  return (
    <div>
        <div className="flex items-center syne mt-5">   
            <label htmlFor="voice-search" className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-white-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" onChange={(e)=>{setSearch(e.target.value)}} value={search} id="voice-search" className="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for Profile...." required />
                <button type="button" onClick={()=>{setSearch('')}} className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <MdClear />
                </button>
            </div>
        </div>
        <div className='syne'>
        {filteredData.map((user) => (
            <Link to={`/profile/${user.username}`} key={user._id} className="">
          <div key={user._id} className="flex items-center my-4 bg-white hover:scale-105 duration-200 cursor-pointer p-2 rounded">
            
              <img
                src={user?.profile || userImg}
                alt="Profile"
                className="w-12 h-12 rounded-full mr-4"
              />
            <div>
              <p className="font-bold">{user.fullName}</p>
              <p className="text-gray-500">@{user.username}</p>
            </div>
          </div>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Search