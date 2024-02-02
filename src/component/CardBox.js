import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaCartShopping, FaUsers } from "react-icons/fa6";
import { SiSalesforce } from "react-icons/si";
import { FaCalculator } from "react-icons/fa";
import { ImCalculator } from "react-icons/im";
import { IoBagRemoveSharp } from "react-icons/io5";
import { AiOutlineContainer } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";

const CardBox = () => {
  return ( 
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:flex-row md:gap-3 md:ml-2 md:mr-4 cursor-pointer w-full'>
      {/* 1st */}
      <div className='bg-white shadow-sm pl-5 border-gray-200 border-[2px] flex flex-col md:flex-row items-center 
      justify-between h-[110px] p-4 md:p-18  hover:transform hover:scale-105 transition-all'>
        <div className='flex-grow'>
          <span className='text-md text-gray-600 font-normal'>Customer</span>
          <div className='flex item-center'>
            <strong className='text-md font-semibold'>14,128</strong>
          </div> 
        </div>
        <div className='rounded-md h-30 w-15 md:ml-3 flex items-center justify-center'>
          <FaUser className='text-2xl text-[#ffaa8a]' />
        </div>
      </div>

      {/* 2nd */}
      <div className='bg-white shadow-sm pl-5 border-gray-200 border-[2px] flex flex-col md:flex-row items-center 
      justify-between h-[110px] p-4 md:p-18 hover:transform hover:scale-105 transition-all'>
        <div className='flex-grow'>
          <span className='text-md text-gray-600 font-normal'>Order</span>
          <div className='flex item-center'>
            <strong className='text-md font-semibold'>23,128</strong>
          </div>
        </div>
        <div className='rounded-md h-30 w-15 md:ml-3 flex items-center justify-center'>
          <FaCartShopping className='text-2xl text-[#b081b8]' />
        </div>
      </div>

      {/* 3rd */}
      <div className='bg-white shadow-sm pl-5 border-gray-200 border-[2px] flex flex-col md:flex-row 
      items-center justify-between h-[110px] p-4 md:p-18 hover:transform hover:scale-105 transition-all'>
        <div className='flex-grow'>
          <span className='text-md text-gray-600 font-normal'>Avg Sale</span>
          <div className='flex item-center'>
            <strong className='text-md font-semibold'>15,208</strong>
          </div>
        </div>
        <div className='rounded-md h-30 w-15 md:ml-3 flex items-center justify-center'>
          <SiSalesforce className='text-2xl text-[#b87c4c]' />
        </div>
      </div>

      {/* Next row start  */}
      {/* 4th */}
      <div className='bg-white shadow-sm pl-5 border-gray-200 border-[2px] flex flex-col md:flex-row 
      items-center justify-between h-[110px] p-4 md:p-18 hover:transform hover:scale-105 transition-all'>
        <div className='flex-grow'>
          <span className='text-md text-gray-600 font-normal'>Avg Sale </span>
          <div className='flex item-center'>
            <strong className='text-md font-semibold'>14,128</strong>
          </div>
        </div>
        <div className='rounded-md h-30 w-15 md:ml-3 flex items-center justify-center'>
          <FaCalculator className='text-2xl text-[#fac6d9]' />
        </div>
      </div>

      {/* 5th */}
      <div className='bg-white shadow-sm pl-5 border-gray-200 border-[2px] flex flex-col md:flex-row 
      items-center justify-between h-[110px] p-4 md:p-18 hover:transform hover:scale-105 transition-all'>
        <div className='flex-grow'>
          <span className='text-md text-gray-600 font-normal'>Total Sale</span>
          <div className='flex item-center'>
            <strong className='text-md font-semibold'>14,128</strong>
          </div>
        </div>
        <div className='rounded-md h-30 w-15 md:ml-3 flex items-center justify-center'>
          <ImCalculator className='text-2xl text-[#a1e1ff]' />
        </div>
      </div>

      {/* 6th */}
      <div className='bg-white shadow-sm pl-5 border-gray-200 border-[2px] flex flex-col md:flex-row 
      items-center justify-between h-[110px] p-4 md:p-18 hover:transform hover:scale-105 transition-all'>
        <div className='flex-grow'>
          <span className='text-md text-gray-600 font-normal'>Customer</span>
          <div className='flex item-center'>
            <strong className='text-md font-semibold'>14,128</strong>
          </div>
        </div>
        <div className='rounded-md h-30 w-15 md:ml-3 flex items-center justify-center'>
          <FaUsers className='text-2xl text-[#a9e4c9]' />
        </div>
      </div>

      {/* 3rd row  */}
      {/* 7th */}
      <div className='bg-white shadow-sm pl-5 border-gray-200 border-[2px] flex flex-col md:flex-row 
      items-center justify-between h-[110px] p-4 md:p-18 hover:transform hover:scale-105 transition-all'>
        <div className='flex-grow'>
          <span className='text-md text-gray-600 font-normal'>Total Products</span>
          <div className='flex item-center'>
            <strong className='text-md font-semibold'>14,128</strong>
          </div>
        </div>
        <div className='rounded-md h-30 w-15 md:ml-3 flex items-center justify-center'>
          <IoBagRemoveSharp className='text-2xl text-[#ffaa8a]' />
        </div>
      </div>

      {/* 8th */}
      <div className='bg-white shadow-sm pl-5 border-gray-200 border-[2px] flex flex-col md:flex-row items-center
       justify-between h-[110px] p-4 md:p-18 hover:transform hover:scale-105 transition-all'>
        <div className='flex-grow'>
          <span className='text-md text-gray-600 font-normal'>Top Selling Item </span>
          <div className='flex item-center'>
            <strong className='text-md font-semibold'>14,128</strong>
          </div>
        </div>
        <div className='rounded-md h-30 w-15 md:ml-3 flex items-center justify-center'>
          <FaStar className='text-2xl text-[#ffe18c]' />
        </div>
      </div>

      {/* 9th */}
      <div className='bg-white shadow-sm pl-5 border-gray-200 border-[2px] flex flex-col md:flex-row items-center 
      justify-between h-[110px] p-4 md:p-18 hover:transform hover:scale-105 transition-all'>
        <div className='flex-grow'>
          <span className='text-md text-gray-600 font-normal'>DealerShip</span>
          <div className='flex item-center'>
            <strong className='text-md font-semibold'>14,128</strong>
          </div>
        </div>
        <div className='rounded-md h-30 w-15 md:ml-3 flex items-center justify-center'>
          <AiOutlineContainer className='text-2xl text-[#ad8bbf]' />
        </div>
      </div>
    </div>
  );
}

export default CardBox;
