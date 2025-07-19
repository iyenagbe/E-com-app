import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from "../Context/ShopContext";
import Title from '../Components/Title';
import { assets } from '../assets/assets';

const Cart = () => {
  const { products, currency, cartItems } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const productId in cartItems) {
      const sizes = cartItems[productId];
      for (const size in sizes) {
        if (sizes[size] > 0) {
          tempData.push({
            _id: productId,
            size: size,
            quantity: sizes[size]
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-15'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id); // ✅ FIXED HERE

            if (!productData) return null; // ✅ prevent crash if product not found

            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-2'>
                  <img className='w-15 sm:w-20 object-cover' src={productData.image?.[0]} alt={productData.name} />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>

                    <div className='flex items-center mt-2 gap-4'>
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                    </div>
                  </div>
                </div>

                <input
                  className='border max-w-10 sm:w-20 px-1 sm:px-2 py-1'
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />
                <img className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="Remove" />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cart;
