import React, {useContext, useEffect, useState}from 'react'
import {ShopContext} from '../Context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../Components/Title';
import ProductItem from '../Components/ProductItem';


      const Collection = () => {

        const {products, search, showSearch} = useContext(ShopContext);
        const [showFilter, setShowFilter] = useState(false);
        const [FilterProducts, setFilterProducts] = useState([]);
        const [category, setCategory] = useState([]);
        const [subCategory, setSubCategory] = useState([]);
        const [sortType, setSortType] = useState('relavent');
        


        
        const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
          setCategory(prev => prev.filter(item => item !== e.target.value));

        } else {
          setCategory(prev => [...prev, e.target.value]);
        }
      }

      const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
          setSubCategory(prev => prev.filter(item => item !== e.target.value));

        } else {
          setSubCategory(prev => [...prev, e.target.value]);
        }
      }

      const applyFilter = () =>{
        let productsCopy = products.slice();

        if(showSearch && search) {
          productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }

        if(category.length > 0) {
          productsCopy = productsCopy.filter(item => category.includes(item.category));
        }

        // If subCategory is empty, we don't filter by subCategory
        if(subCategory.length > 0) {
          productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
        }
        setFilterProducts(productsCopy);
      }

        useEffect(() => {
          applyFilter();

        }, [category, subCategory, search, showSearch]);


          const sortProduct = () => {
          let fpCopy = FilterProducts.slice();

          switch (sortType) {
            case 'low-high':
              setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
              break;
            case 'high-low':
              setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
              break;
            default:
              applyFilter();
              break;
          }
        }; 

        useEffect(() =>{
          sortProduct();
        }, [sortType])

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
              <label className="flex gap-2"><input className="w-3" type="checkbox" value="Men" onChange={toggleCategory} /> Men</label>
              <label className="flex gap-2"><input className="w-3" type="checkbox" value="Women"onChange={toggleCategory}  /> Women</label>
              <label className="flex gap-2"><input className="w-3" type="checkbox" value="Kids" onChange={toggleCategory} /> Kids</label>
              {/* <label className="flex gap-2"><input className="w-3" type="checkbox" value="Shoes" onChange={toggleCategory} /> Shoes</label>
              <label className="flex gap-2"><input className="w-3" type="checkbox" value="Bags" onChange={toggleCategory} /> Bags</label> */}
            </div>
          </div>

          {/* subCategory features */}
          <div className="border border-gray-300  p-4 w-full">
            <p className="mb-3 text-sm font-medium">TYPES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <label className="flex gap-2"><input className="w-3" type="checkbox" value="Topwear" onChange={toggleSubCategory}/> Topwear</label>
              <label className="flex gap-2"><input className="w-3" type="checkbox" value="Bottomwear" onChange={toggleSubCategory} /> Bottomwear</label>
              <label className="flex gap-2"><input className="w-3" type="checkbox" value="Winterwear" onChange={toggleSubCategory} /> Winterwear</label>
            </div>
          </div>

        </div>
      </div>


      {/* right side */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          {/* Sort by dropdown */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
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
