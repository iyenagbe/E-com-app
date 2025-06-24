import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);

  const fetchProductData = async () => {
    const found = products.find(item => item.id === productId); // use Number(productId) if needed
    if (found) {
      setProductData(found);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);
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
