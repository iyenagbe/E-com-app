import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './Pages/add'
import List from './Pages/List'
import Orders from './Pages/Orders'
import Login from './Components/Login'


 export const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';


// Main App component

const App = () => {
  const [token, setToken] = useState('');

  return (
    <div className='bg-gray-50 min-h-screen'>

      {token === "" ? <Login /> :

        <>
          <Navbar />
          <hr />

          <div className='flex w-full'>
            <Sidebar />
          </div>

          <div className='w-[65%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-500 text-base'>
            <Routes>
              <Route path="/add" element={<Add />} />
              <Route path="/list" element={<List />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>

          </div>
        </>

      }

    </div>
  )
}

export default App
