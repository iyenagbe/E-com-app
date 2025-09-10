import React, { useContext } from 'react'
import {Link, NavLink } from 'react-router-dom'
import {assets} from '../assets/assets'
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = React.useState(false);

    const {setShowSearch, getCartCount} = useContext(ShopContext);


  return (

    <div className='flex justify-between items-center py-5 font-medium'>

        <Link to='/'><img src="public/images/store_img.jpeg" className='w-36 cursor-pointer' alt="" /> </Link> 

        <ul className='hidden md:flex gap-5 text-sm text-gray-700'>

            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>

            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>

            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>

            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
        </ul>


        <div className='flex items-center gap-5'>
            <img onClick={() => setShowSearch(true)} src={assets.search_icon}  className='w-5 cursor-pointer'  alt="" /> 

            <div className='group relative'>
                <Link to={'/login'}><img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" /> </Link>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-block'>My Profile</p>
                        <p className='cursor-pointer hover:text-block'>Oders</p>
                        <p className='cursor-pointer hover:text-block'>Logout</p>
                    </div>
                </div>
            </div>

            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-5 min-w-5' alt=""/>
                <p className='absolute right-[-6px] bottom-[-6px] min-w-[16px] h-[16px] px-[4px] 
                bg-black text-white rounded-full text-[10px] flex items-center justify-center leading-none'>
                {getCartCount()}
                </p>
                </Link>

            <img onClick={() =>setVisible(true)} src={assets.menu_icon} className='w-4 cursor-pointer sm:hidden' alt="" />
        </div>

        {/* sidebar menu for smaller screen  */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
        
        <div onClick={() => setVisible(false)} className='flex item-center gap-4 p-3 cursor-pointer'>
            <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
            <p>back</p>

        </div>
        <NavLink onClick={() =>setVisible(false)} className='py-2 pl-4 border-none' to='/'>HOME</NavLink>
        <NavLink onClick={() =>setVisible(false)} className='py-2 pl-4 border-none' to='/collection'>COLLECTION</NavLink>  
        <NavLink onClick={() =>setVisible(false)} className='py-2 pl-4 border-none' to='/about'>ABOUT</NavLink>
        <NavLink onClick={() =>setVisible(false)} className='py-2 pl-4 border-none' to='/contact'>CONTACT</NavLink>
        
    </div>
    </div>
    </div>
  )
}

export default Navbar
