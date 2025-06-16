import React, {useContext, useEffect, useState}from 'react'
import {ShopContext} from '../Context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../Components/Title';
import ProductItem from '../Components/ProductItem';

const Collection = () => {

  const {products} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [FilterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    setFilterProducts(products);

  }, []);

  return (
   <div className='flex flex-col lg:flex-row gap-10 pt-10 border-t'>

      
     
          {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            alt=""
          />
        </p>

        {/* CATEGORIES and TYPES stacked vertically */}
        <div className={`${showFilter ? 'block' : 'hidden'} w-31 lg:block space-y-5`}>

          {/* CATEGORIES */}
          <div className="border border-gray-300 w-31 p-4 w-full">
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-600">
              <label className="flex gap-2"><input className="w-3" type="checkbox" value="Men" /> Men</label>
              <label className="flex gap-2"><input className="w-3" type="checkbox" value="Ladies" /> Ladies</label>
              <label className="flex gap-2"><input className="w-3" type="checkbox" value="Kids" /> Kids</label>
              <label className="flex gap-2"><input className="w-3" type="checkbox" value="Shoes" /> Shoes</label>
              <label className="flex gap-2"><input className="w-3" type="checkbox" value="Bags" /> Bags</label>
            </div>
          </div>

          {/* TYPES */}
          <div className="border border-gray-300  p-4 w-full">
            <p className="mb-3 text-sm font-medium">TYPES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <label className="flex gap-2"><input className="w-3" type="checkbox" value="Topwears" /> Topwears</label>
              <label className="flex gap-2"><input className="w-3" type="checkbox" value="Shotwears" /> Shotwears</label>
              <label className="flex gap-2"><input className="w-3" type="checkbox" value="Winterwears" /> Winterwears</label>
            </div>
          </div>

        </div>
      </div>


      {/* right side */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          {/* Sort by dropdown */}
          <select className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort: Relavent</option>
            <option value="high-low">Sort: High to Low</option>
            <option value="low-high">Sort: Low to High</option>
          </select>
        </div>

        {/* Products List */}
        <div className='grid grid-cols-2 md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>

          {
            FilterProducts.map((item, index) => (
              <ProductItem  key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
            ))
          }


        </div>
      </div>

    </div>
  )
}

export default Collection
