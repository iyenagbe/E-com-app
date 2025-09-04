import React from 'react'
// import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src="images/store_img.jpeg" className='mb-5 w-32' alt="" />
            <p className='text-gray-500 w-full sm:w-3/4 '>
                Rayjock Store is your one-stop shop for the latest fashion trends and accessories. 
                We offer a wide range of products to suit every style and budget, with a focus on 
                quality and customer satisfaction.
            </p>
        </div>

            <div>
                <p className='text-xl font-medium mb-5 '>COMPANY</p>
                <ul className='flex flex-col gap-3 text-gray-500'>
                   <li>Home</li>
                   <li>About</li>
                   <li>Delivery</li>
                   <li>Privacy policy</li>

                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-3 text-gray-500'>
                    <li>+234 821264733</li>
                    <li>info@rayjockstore.com</li>

                </ul>
            </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ rayjockstore.com - All Right Reserved. </p>

      </div>
    </div>
  )
}

export default Footer
