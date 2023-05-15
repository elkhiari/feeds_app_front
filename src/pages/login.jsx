import { useState } from 'react';
import logo from '../logo2.png';
import axios from 'axios';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    // const history = useHistort();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post('http://localhost:3306/auth/login', {
                email,
                password,
            });
            // localStorage.setItem('token', response.data.token);
           
            // history.push('/dashboard');
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    };
  return (
    <div className="">
      <div className="bg-blue-200  min-h-screen flex place-content-center place-items-center flex-col">
        <img src={logo} className="" alt="logo" />
        
        <form className='w-full  md:w-2/3 xl:w-2/4 2xl:w-1/3 p-5 md:p-0' >
            <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" onChange={((e)=>setEmail(e))}>Email address</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="othmane.elkhiari@company.com" required />
            </div> 
            <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" onChange={((e)=>setPassword(e))}>Password</label>
                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
            </div>
            <div class="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50/60 dark:bg-gray-800 dark:text-yellow-300" role="alert">
                <span class="font-medium">Warning alert!</span> .
            </div>
            <button type="button" onClick={handleSubmit} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
        
      </div>
    </div>
  );
}

export default Login;
