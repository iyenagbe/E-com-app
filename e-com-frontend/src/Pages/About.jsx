import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox';


const About = () => {
  return (
    <div>
     <div>
       <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-15'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-5 md:w-2/4 text-cgray-500'>
        <p>From Passion to Purpose <br />
          In a quiet bedroom with one shelf, one order, and one big dream, Rayjock Store was born.
          It wasnt built in a boardroom it began with curiosity, creativity, and a desire to
           make everyday things feel special again.

          Our founder, Iyenagbe O. Raymond, started with a handful of handmade items, selling at weekend markets
          and packing each order with a handwritten note. What kept it going wasn't profit it was people. People 
          looking for thoughtful gifts. People tired of choosing between affordability and quality. People who
          believed shopping online could still feel personal.

          That belief became our mission: to bring intention, warmth, and meaning back into e-commerce.</p>

          <b>Our Promise </b>
          <p>We're not chasing volume. We're building trust through honest pricing, fast shipping, 
          and a commitment to customer care that doesn't stop at checkout.

          Because at the end of the day, we don't just want your order we want to earn your return.</p>

        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE UP'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm nt-20'>
        <div className='border-none px-10 md:px-15 py-8 sm:py-20 flex-col flex gap-4'>
          <b>Quality Assurance.</b>
          <p className='text-gray-600'>We meticuloursly select and vet each product to ensure it meet our stringent quality standards.</p>
        </div>

        <div className='border-none px-10 md:px-15 py-8 sm:py-20 flex-col flex gap-4'>
          <b>Convenience.</b>
          <p className='text-gray-600'>With our friendly user-interface and hassle-free ordering process, shipping has never been easier.</p>
        </div>

        <div className='border-none px-10 md:px-15 py-8 sm:py-20 flex-col flex gap-4'>
          <b>Professional Customer Service.</b>
          <p className='text-gray-600'>With our team of professionals, we're always here to assist you ensuring you get the best of your shopping.</p>
        </div>
      </div>

      <NewsLetterBox />
     </div>

    </div>
  )
}

export default About
