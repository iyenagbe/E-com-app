import React, {useState }from 'react'
import axios from 'axios';
import { backendUrl } from '../App';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Placeholder for login functionality
    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl+ '/api/user/admin', {email, password});
            console.log(response);
            
            
            
        }catch (error) {

        }

    }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 w-full'>
      <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
        <h1 className='text-3xl font-bold text-center mt-3 mb-10 text-gray-700'>Admin Login</h1>

        <form onSubmit={onSubmitHandler} className='flex flex-col gap-4'>
            <div className='mb-4 min-w-70'>
                <p className='text-sm font-medium text-gray-600 mb-2'>Email Address</p>
                <input onChange={(e) => setEmail (e.target.value)} value={email} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="email" placeholder='your@email.com' required/>
            </div>

            <div className='mb-4 min-w-70'>
                <p className='text-sm font-medium text-gray-600 mb-2'>Password</p>
                <input onChange={(e) => setPassword (e.target.value)} value={password} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="Password" placeholder='Enter Password' required/>
            </div>
            <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-gray-700' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
