"Use Clint"
import Image from 'next/image';
import React from 'react'
import { BsFuelPumpDiesel } from "react-icons/bs";
import { FaHeart } from 'react-icons/fa';
import { IoIosHeartEmpty } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { RiSteering2Line } from "react-icons/ri";

const Popular = () => {
  return (
    <div className='w-full flex sm:flex-col md:flex-row sm:justify-center md:justify-evenly'>
         {/* Cars List */}
      <div className='md:w-[1312px] md:h-[452px] flex sm:flex-col sm:justify-center md:justify-evenly items-center'>
      <div className="sm:w-full w-[1312px] h-[44px] border-gray-700 pt-4 flex justify-between gap-4">
        <h2 className="pl-9 text-gray-500">Populor Cars</h2>
        <p className="text-blue-700 pr-10">View All</p>
      </div>
      <br />
      <div className="md:w-[1312px] md:h-[388px] flex sm:flex-col md:flex-row sm:justify-center md:justify-evenly gap-9">
        <div className="bg-white h-[388px] w-[304px] rounded-md">
          <div className="flex justify-between pr-7 pt-5">
            <p className="ml-3 text-2xl font-bold">Koenigsegg</p>
            <FaHeart size={24} className='fill-red-500'/>
            </div>
            <p className="ml-3">Sport</p>
             <Image
                src="/image 7.png"
                alt="Description of the image"
                width={232}
                height={72} className='pt-12 mt-8 ml-4'
                />
            <div className="flex mt-14 ml-4 gap-2 text-gray-400" >
            <BsFuelPumpDiesel size={24}/>
            <p>90L</p>

            <RiSteering2Line size={24}/>
            <p>Manual</p>

            <IoPeople size={24} />
            <p>2 People</p>
            </div>
            <div className="pl-4 pr-4 flex justify-between">
            <h1 className="font-bold text-blue-500 text-2xl pt-5">$79.99/day</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4">
              Rent Now
            </button>
            </div>
            </div>




            <div className="bg-white h-[388px] w-[304px] rounded-md">
            <div className="flex justify-between pr-7 pt-5">
            <p className="ml-3 text-2xl font-bold">Nisan - GTR</p>
            <IoIosHeartEmpty size={24} />
            </div>
            <p className="ml-3">Sport</p>
            <Image
                src="/car (1).png"
                alt="Description of the image"
                width={204}
                height={64} className='pt-14 mt-7 ml-8'
                />
            <div className="flex mt-14 ml-4 gap-2 text-gray-400" >
            <BsFuelPumpDiesel size={24}/>
            <p>90L</p>

            <RiSteering2Line size={24}/>
            <p>Manual</p>

            <IoPeople size={24} />
            <p>2 People</p>
            </div>
            <div className="p-4 flex justify-between">
            <h1 className="font-bold text-blue-500 text-2xl pt-1">$79.99/day</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">
              Rent Now
            </button>
            </div>
            </div>

            <div className="bg-white h-[388px] w-[304px] rounded-md">
            <div className="flex justify-between pr-7 pt-5">
            <p className="ml-3 text-2xl font-bold">Rolls - Royce</p>
            <FaHeart size={24} className='fill-red-500'/>
            </div>
            <p className="ml-3">Sedan</p>
            <Image
                src="/car (2).png"
                alt="Description of the image"
                width={220}
                height={68} className='pt-14 mt-7 ml-8'
                />
            <div className="flex mt-14 ml-4 gap-2 text-gray-400" >
            <BsFuelPumpDiesel size={24}/>
            <p>90L</p>

            <RiSteering2Line size={24}/>
            <p>Manual</p>

            <IoPeople size={24} />
            <p>2 People</p>
            </div>
            <div className="p-4 flex justify-between">
            <h1 className="font-bold text-blue-500 text-2xl pt-1">$79.99/day</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">
              Rent Now
            </button>
            </div>
            </div>

            <div className="bg-white h-[388px] w-[304px] rounded-md">
            <div className="flex justify-between pr-7 pt-5">
            <p className="ml-3 text-2xl font-bold">Nisan - GTR</p>
            <IoIosHeartEmpty size={24} />
            </div>
            <p className="ml-3">Sport</p>
            <Image
                src="/car (1).png"
                alt="Description of the image"
                width={204}
                height={64} className='pt-14 mt-7 ml-8'
                />
            <div className="flex mt-14 ml-4 gap-2 text-gray-400" >
            <BsFuelPumpDiesel size={24}/>
            <p>90L</p>

            <RiSteering2Line size={24}/>
            <p>Manual</p>

            <IoPeople size={24} />
            <p>2 People</p>
            </div>
            <div className="p-4 flex justify-between">
            <h1 className="font-bold text-blue-500 text-2xl pt-1">$79.99/day</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">
              Rent Now
            </button>
            </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Popular