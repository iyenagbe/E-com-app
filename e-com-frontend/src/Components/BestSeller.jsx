import React, { useEffect } from 'react'
import { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';


const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);


    useEffect(() => {
        const bestProducts = products.filter((item) => item.bestSeller);
        setBestSeller(bestProducts.slice(0, 10));
    }, [])


  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Inventore maiores laborum dolores dolor ratione! Beatae assumenda aliquam tempora,
            maxime hic unde omnis rem eius placeat. Possimus,
            </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6'>
           {
            bestSeller.map((item,index) => (
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
            ))
           }
        </div>
      
    </div>
  )
}

export default BestSeller
