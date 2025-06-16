import React from 'react'

const NewsLetterBox = () => {
    // e.preventDefault();


  return (
    <div className='text-center '>
      <p className='text-2xl font-medium text-gray-800'>Register now and get 20% off your first shopping</p>
      <p className='text-gray-400 mt-3'>
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. */}
      </p>

        <form  className='w-full sm:w-1/2 display:block items-center gap-3 mx-auto my-6 border pl-3 pb-2 mt-3 bg-gray-400'>

            <input className='w-full sm:flex-1 outline-none' type="Full Name" placeholder='Full Name' required maxLength={40} />
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter email' required maxLength={30} />
            <input className='w-full sm:flex-1 outline-none' type="phone" placeholder='Phone Number' required maxLength={20} />
            <button type='submit' className='bg-gray-700 hover:bg-gray-500 active:bg-gray-900 rounded text-white text-xs px-10 py-4'>Register</button>
        </form>

    </div>
  )
}

export default NewsLetterBox
