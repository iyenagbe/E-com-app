import React, {useContext, useState}from 'react'
import {ShopContext} from '../Context/ShopContext'
import { assets } from '../assets/assets';

const Collection = () => {

  const {products} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row gap-1 lg:block sm:gap-10 pt-10 border-t'>
      
      {/* Filter  */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2 '>FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden &{showFilter ? 'rotate-90' : ''}`} alt="" />
        </p>

        {/* Category Filters */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 w-31 ${showFilter ? 'block' : 'hidden'} lg:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-600'>
            <p className='flex gap-2'>
            <input className='w-3 ' type="checkbox" value={'Men'}/> Men
            </p>
            <p className='flex gap-2'>
            <input className='w-3 ' type="checkbox" value={'Ladies'}/> Ladies
            </p>
            <p className='flex gap-2'>
            <input className='w-3 ' type="checkbox" value={'Kids'}/> Kids
            </p>
            <p className='flex gap-2'>
            <input className='w-3 ' type="checkbox" value={'Shoes'}/> Shoes
            </p>
            <p className='flex gap-2'>
            <input className='w-3 ' type="checkbox" value={'Bags'}/> Bags
            </p>
          </div>
        </div>
      </div>

        {/* subcategories filters */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 w-31 ${showFilter ? 'block' : 'hidden'} lg:block`}>
          <p className='mb-3 text-sm font-medium'>TYPES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
            <input className='w-3 ' type="checkbox" value={'Topwears'}/> Topwears
            </p>
            <p className='flex gap-2'>
            <input className='w-3 ' type="checkbox" value={'Shotwears'}/> Shotwears
            </p>
            <p className='flex gap-2'>
            <input className='w-3 ' type="checkbox" value={'Winterwears'}/> Winterwears 
            </p>
            {/* <p className='flex gap-2'>
            <input className='w-3 ' type="checkbox" value={''}/> 
            </p>
            <p className='flex gap-2'>
            <input className='w-3 ' type="checkbox" value={''}/> 
            </p> */}
        </div>
      </div>

    </div>
  )
}

export default Collection
