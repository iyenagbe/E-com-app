import React from 'react'
import { NavLink } from 'react-router-dom'
import {assets} from '../assets/assets'


const Sidebar = () => {
  return (
    <div className='min-h-screen w-[16%] border-r-1'>
      <div className='flex flex-col gap-3 pt-5 pl-[20%] test-[15px]'>

        <NavLink to="/add" className='flex items-center gap-3 border border-gray-200 p-3 border-r-0 py-2 px-3 rounded-lg'>
        <img className='w-5 h-5' src={assets.add_icon} alt="" />
        <p className='hidden md:block'>Add Items</p>
        </NavLink>

        <NavLink to="/list" className='flex items-center gap-3 border border-gray-200 p-3 border-r-0 py-2 px-3 rounded-lg'>
        <img className='w-5 h-5' src={assets.order_icon} alt="" />
        <p className='hidden md:block'>List Items</p>
        </NavLink>

        <NavLink to="/orders" className='flex items-center gap-3 border border-gray-200 p-3 border-r-0 py-2 px-3 rounded-lg'>
        <img className='w-5 h-5' src={assets.order_icon} alt="" />
        <p className='hidden md:block'>Orders Items</p>
        </NavLink>

      </div>
    </div>
  )
}

export default Sidebar
