import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox';


const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 boder-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-9 mb-28'>
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />

        <div className='flex flex-col justify-center items-start gap-5'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>KM 257 Lekki-Epe Express Way <br /> Queens Drive Lekki Lagos Nigeris </p>
          <p className='text-gray-500'>Tel: (+234) 8121-246-733 <br/> Email: info@rayjockstore.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Rayjock Store</p>
          <p className='text-gray-500'> More about out teams & jobs openings. </p>

         <button className='boder rounded boder-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default Contact
