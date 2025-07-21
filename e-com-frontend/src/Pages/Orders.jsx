import React from 'react'
import { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import Title from '../Components/Title'

const Orders = () => {

  const {products, currency} = useContext(ShopContext);



  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title  text1={'MY'} text2={'ORDER'}/>
      </div>

      <div >

      </div>
      
    </div>
  )
}

export default Orders
