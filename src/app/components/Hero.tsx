"Use Client"
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
<div className='w-full flex sm:flex-col sm: gap-y-4 md:flex-row md:justify-center items-center mt-4 gap-8 sm:p-2 2 2 2'>
    {/* Right Section */}
    <div className='sm:w-[327px] h-[232px] md:w-[640px] md:h-[360px] bg-[#54A6FF] rounded-[10px]'>
      {/* Text */}
      <div className='pl-4 mt-9'>
      <span className='sm:text-[18px] md:text-[34px] text-white'>Easy way to rent a <br /> car at a low price</span>
      <h2 className='text-white sm:text-[8px] md:text-[20px]'>Providing cheap car rental services <br /> and safe and comfortable facilities.</h2>
      {/* Button */}
      <button className='sm:px-2 py-1 px-4 md:py-2 mt-4 bg-blue-500 text-white font-semibold rounded-lg border-2 border-blue-500 hover:bg-blue-600 hover:border-blue-700 transition duration-300'>
  Rental Car
</button>

      </div>
      <div className='ml-20 pl-20'>
         {/* Image */}
    <Image
    src="/image 7.png"
    alt="Description of the image"
    width={406}
    height={116}
    />
    </div>
    </div>

    {/* Left Section */}

    <div className='sm:w-[327px] sm:h-[232px] md:w-[640px] md:h-[360px] bg-[#3563E9] rounded-[10px]'>
      {/* Text */}
      <div className='pl-4 mt-9'>
      <span className='sm:text-[18px] md:text-[34px] text-white'>Easy way to rent a <br /> car at a low price</span>
      <h2 className='text-white sm:text-[8px] md:text-[20px]'>Providing cheap car rental services <br /> and safe and comfortable facilities.</h2>
      {/* Button */}
      <button className='sm:px-2 py-1 px-4 md:py-2 mt-4 bg-blue-500 text-white font-semibold rounded-lg border-2 border-blue-500 hover:bg-blue-600 hover:border-blue-700 transition duration-300'>
  Rental Car
</button>

      </div>
      <div className='ml-20 pl-20'>
         {/* Image */}
    <Image
    src="/image 8.png"
    alt="Description of the image"
    width={340}
    height={108}
    />
    </div>
    </div>
   

    </div>
  )
}

export default Hero