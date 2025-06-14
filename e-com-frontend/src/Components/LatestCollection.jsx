import { useContext, useEffect, useState} from 'react'
import { ShopContext, } from '../Context/ShopContext';
import Title from './Title';


const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [latestproducts,setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));

    }, [])
    

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        💥 Big Style, Bigger Savings! 💸
Step into the season with fresh looks and unbeatable prices.

            🛍️ Up to 50% OFF on our latest collection!
            🎁 Free shipping on orders over ₦500,000 within Lagos Nigeria
            🔥 Limited stock. Unlimited style.

            Shop now. Love forever.
            👉 Explore Collection
        </p>
      </div>

    </div>
  )
}

export default LatestCollection
