import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../logo2.png';
import axios from 'axios';



function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    useEffect(()=> {
        if (localStorage.getItem('token')) {
            navigate('/');
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!email || !password) {
            setError('Please fill all the fields');
            setLoading(false);
            return;
        }
        try {
            const response = await axios.post('http://localhost:3306/auth/login', {
                email:email,
                password:password,
            });
            localStorage.setItem('token', response.data.token);
            navigate('/');
        } catch (err) {
            setError(err.response.data.message);
        }
        setLoading(false);
    };
  return (
    <div className="">
      <div className="bg-blue-200  min-h-screen flex place-content-center place-items-center flex-col">
        <img src={logo} className="" alt="logo" />
        
        <form className='w-full  md:w-2/3 xl:w-2/4 2xl:w-1/3 p-5 md:p-0' >
            <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Email address</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="othmane.elkhiari@company.com" onChange={(e)=>{setEmail(e.target.value)}} value={email} required />
            </div> 
            <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Password</label>
                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" onChange={((e)=>setPassword(e.target.value))} required />
            </div>
            {error && <div class="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50/60 dark:bg-gray-800 dark:text-yellow-300" role="alert">
                <span class="font-medium">Warning alert!</span> {error}.
            </div>}
            <button type="button" onClick={handleSubmit} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
        
      </div>
    </div>
  );
}

export default Login;
