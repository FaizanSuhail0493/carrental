import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { RiSteering2Line } from "react-icons/ri";

const CarRentalPage: React.FC = () => {
  return (
    <div className='w-full flex sm:flex-col md:flex-row sm:justify-center md:justify-evenly'>
         {/* Cars List */}
         <div className='md:w-[1312px] md:h-[100p0x] flex sm:flex-col sm:justify-center md:justify-evenly items-center'>
      <div className="sm:w-full w-[1312px] h-[44px] border-gray-700 pt-4 flex justify-between gap-4">
        <h2 className="pl-9 text-gray-500">Recommendation Car</h2>
      </div>
      <br />
      <div className="md:w-[1312px] md:h-[388px] flex sm:flex-col md:flex-row sm:justify-center md:justify-evenly gap-9">
        <div className="bg-white h-[388px] w-[304px] rounded-md">
          <div className="flex justify-between pr-7 pt-5">
            <p className="ml-3 text-2xl font-bold">All New Rush</p>
            <IoIosHeartEmpty size={24} />
            </div>
            <p className="ml-3">SUV</p>
            <Image
            src="/car (4).png"
            alt="Description of the image"
            width={244}
            height={100} className='pt-8 mt-7 ml-4'
            />
            <div className="flex mt-8 ml-4 gap-2 text-gray-400" >
            <BsFuelPumpDiesel size={24}/>
            <p>70L</p>

            <RiSteering2Line size={24}/>
            <p>Manual</p>

            <IoPeople size={24} />
            <p>6 People</p>
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
            <p className="ml-3 text-2xl font-bold">Car - V</p>
            <FaHeart size={24} className='fill-red-500'/>
            </div>
            <p className="ml-3">SUV</p>
            <Image
            src="/car (5).png"
            alt="Luxury Car"
            width={248}
            height={100} className='pt-8 mt-9 ml-4'
            />
            <div className="flex mt-8 ml-4 gap-2 text-gray-400" >
            <BsFuelPumpDiesel size={24}/>
            <p>70L</p>

            <RiSteering2Line size={24}/>
            <p>Manual</p>

            <IoPeople size={24} />
            <p>6 People</p>
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
            <p className="ml-3 text-2xl font-bold">All New Terois</p>
            <IoIosHeartEmpty size={24} />
            </div>
            <p className="ml-3">SUV</p>
            <Image
            src="/car (6).png"
            alt="Luxury Car"
            width={224}
            height={100} className='pt-8 mt-9 ml-8'
            />
            <div className="flex mt-9 ml-4 gap-2 text-gray-400" >
            <BsFuelPumpDiesel size={24}/>
            <p>70L</p>

            <RiSteering2Line size={24}/>
            <p>Manual</p>

            <IoPeople size={24} />
            <p>6 People</p>
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
            <p className="ml-3 text-2xl font-bold">Car - V</p>
            <FaHeart size={24} className='fill-red-500'/>
            </div>
            <p className="ml-3">Sport</p>
            <Image
            src="/car (7).png"
            alt="Luxury Car"
            width={248}
            height={100} className='pt-9 mt-9 ml-4'
            />
            <div className="flex mt-8 ml-4 gap-2 text-gray-400" >
            <BsFuelPumpDiesel size={24}/>
            <p>70L</p>

            <RiSteering2Line size={24}/>
            <p>Manual</p>

            <IoPeople size={24} />
            <p>6 People</p>
            </div>
            <div className="p-4 flex justify-between">
            <h1 className="font-bold text-blue-500 text-2xl pt-1">$79.99/day</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">
              Rent Now
            </button>
            </div>
            </div>
            </div>


            <div className="md:w-[1312px] md:h-[388px] flex sm:flex-col md:flex-row sm:justify-center md:justify-evenly gap-9 sm:mt-8">
        <div className="bg-white h-[388px] w-[304px] rounded-md">
          <div className="flex justify-between pr-7 pt-5">
            <p className="ml-3 text-2xl font-bold">MG ZX Exclusice</p>
            <IoIosHeartEmpty size={24} />
            </div>
            <p className="ml-3">Hatchback</p>
            <Image
            src="/car (8).png"
            alt="Luxury Car"
            width={264}
            height={108} className='pt-9 mt-9 ml-4'
            />
            <div className="flex mt-8 ml-4 gap-2 text-gray-400" >
            <BsFuelPumpDiesel size={24}/>
            <p>70L</p>

            <RiSteering2Line size={24}/>
            <p>Manual</p>

            <IoPeople size={24} />
            <p>6 People</p>
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
            <p className="ml-3 text-2xl font-bold">New MG ZS</p>
            <IoIosHeartEmpty size={24} />
            </div>
            <p className="ml-3">SUV</p>
            <Image
            src="/car (9).png"
            alt="Luxury Car"
            width={264}
            height={108} className='pt-10 mt-9 ml-4'
            />
            <div className="flex mt-8 ml-4 gap-2 text-gray-400" >
            <BsFuelPumpDiesel size={24}/>
            <p>70L</p>

            <RiSteering2Line size={24}/>
            <p>Manual</p>

            <IoPeople size={24} />
            <p>6 People</p>
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
            <p className="ml-3 text-2xl font-bold">MG ZX Exclusice</p>
            <IoIosHeartEmpty size={24} />
            </div>
            <p className="ml-3">Hatchback</p>
            <Image
            src="/car (8).png"
            alt="Luxury Car"
            width={264}
            height={108} className='pt-9 mt-9 ml-4'
            />
            <div className="flex mt-8 ml-4 gap-2 text-gray-400" >
            <BsFuelPumpDiesel size={24}/>
            <p>70L</p>

            <RiSteering2Line size={24}/>
            <p>Manual</p>

            <IoPeople size={24} />
            <p>6 People</p>
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
            <p className="ml-3 text-2xl font-bold">New MG ZS</p>
            <IoIosHeartEmpty size={24} />
            </div>
            <p className="ml-3">SUV</p>
            <Image
            src="/car (9).png"
            alt="Luxury Car"
            width={264}
            height={108} className='pt-10 mt-9 ml-4'
            />
            <div className="flex mt-8 ml-4 gap-2 text-gray-400" >
            <BsFuelPumpDiesel size={24}/>
            <p>70L</p>

            <RiSteering2Line size={24}/>
            <p>Manual</p>

            <IoPeople size={24} />
            <p>6 People</p>
            </div>
            <div className="p-4 flex justify-between">
            <h1 className="font-bold text-blue-500 text-2xl pt-1">$79.99/day</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">
              Rent Now
            </button>
            </div>
            </div>
            </div>
            <div className="flex justify-center items-center">
            <Link href={"/categories"} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4 sm:mb-8">
              Show More Cars
            </Link>
            </div>
           
            </div>
    </div>
  );
};

export default CarRentalPage;