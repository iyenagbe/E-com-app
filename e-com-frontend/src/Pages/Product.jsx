import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  
  const fetchProductData = async () => {
    const found = products.find(item => item.id === productId);
    if (found) {
      setProductData(found);    
      setImage(found.images[0]);
      
    }
    
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in-out duration-500 opacity-100'>
      {/* product Data */}
      <div className='flex flex-col sm:flex-row justify-between items-center gap-11 sm:gap-11'>

        {/* product images */}
        <div className='flex flex-col gaap-3 flex-1 sm:flex-row'>
          <div className='flex flex-col over-flow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w[17.7%] w-full'>

            {productData.images.map((img, index) => (
              <img onClick={() => setImage(image)} src={img} key={index} className='w-[23%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
          ))
          }

          </div>

          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt="" />

          </div>
        </div>
        {/* product details*/}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-3'>{productData.name}</h1>
          <div className='flex items-center gap-2 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />

            <p className='pl-2'>(120)</p>
          </div>

          <p className='mt-4 text-3xl font-medium'>{currency} {productData.price}</p>
          <p className='mt-4 text-gray-500 md:w-4/5'>{productData.description}</p>

          <div className='flex flex-col gap-3 my-7'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
            <button
              onClick={() => setSize(item)}
              className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
              key={index}
            >
              {item}
            </button>
          ))}
            </div>
          </div>

          <button className='bg-black text-white px-7 py-3 text-sm active:bg-gray-700'>Add To Cart</button>
              <hr className='mt=8 sm:w-4/5' />
              <div className='gap-1 flex flex-col mt-5 text-gray- 500 text-sm'>
                <p className=''>100% Quality Product</p>
                <p className=''>Cash on delivery is available</p>
                <p className=''>Return or Exchange policy within 5 days</p>

              </div>
        </div>
      </div>
      {/* Description & Review section    */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border py-3 px-5 text-sm'>Description</b>
          <p className='border py-3 px-5 text-sm'>Reviews (120)</p>

        </div>

      </div>
    </div>
  ) : <div className='opacity-0'>

  </div>
}

export default Product;


// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { ShopContext } from '../Context/ShopContext';

// const Product = () => {

//   const {productId} = useParams();
//   const {products} = useContext(ShopContext);
//   const [productData, setProductData] = useState(false);

//   // const fetchproductdata = async () => {

//   //   products.find((item) => {
//   //     if(item.id === productId) {
//   //       setProductData(item)
//   //       console.log(item);
        
//   //       return null;
        
//   //     }
//   //   })

//   // }
//   const fetchProductData = async () => {
//   const found = products.find(item => item.id === productId);
//   if (found) {
//     setProductData(found);
//     console.log(found);
//   }
// };


//   useEffect(() => {
//     fetchProductData();
//   }, [productId])
  

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Product
