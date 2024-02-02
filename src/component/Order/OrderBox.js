import React from 'react';
import { MdShoppingCart,MdOutlineEmail } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const OrderBox = () => {
  return (
    <>
    
    <div className='flex flex-col md:flex-row gap-3 mt-2 md:ml-2 md:mr-4 cursor-pointer w-full '>
      {/* 1st */}
      <div className='bg-[#cbe8de] rounded-lg shadow-md p-3 flex-1 border-gray-200 flex items-center md:w-1/4 hover:transform hover:scale-95 transition-all'>
        <div className='rounded-md h-12 w-12 flex items-center justify-center bg-[#008959]'>
          <MdShoppingCart  className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-[#008959] font-normal'>Order Created at </span>
          <div className='flex item-center'>
            <strong className='text-sm font-semibold text-[#008959]'>16-03-2024 at 4:45PM</strong>
          </div>
        </div> 
      </div>

      {/* 2nd */}
      <div className='bg-[#ffd6d9] rounded-lg shadow-md p-3 flex-1 border-gray-200 flex items-center md:w-1/4 hover:transform hover:scale-105 transition-all'>
        <div className='rounded-md h-12 w-12 flex items-center justify-center bg-[#f41b35]'>
          <FaUserLarge className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-[#055160] font-normal'>Name</span>
          <div className='flex item-center'>
            <strong className='text-sm font-semibold text-[#055160]'>Gabrielle</strong>
          </div>
        </div>
      </div>

      {/* 3rd */}
      <div className="bg-[#fff2cd] rounded-lg shadow-md p-3 flex-1 border-gray-200 flex items-center md:w-1/4 hover:transform hover:scale-105 transition-all">
        <div className='rounded-md h-12 w-12 flex items-center justify-center bg-[#ffbe00]'>
          <MdOutlineEmail className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-[#055160] font-normal'>Email</span>
          <div className='flex item-center'>
            <strong className='text-sm font-semibold text-[#055160]'>Gabrielle@gmail.com</strong>
          </div>
        </div>
      </div>

      {/* 4th */}
      <div className='bg-[#c3f5fd] rounded-lg shadow-md p-3 flex-1 border-gray-200 flex items-center md:w-1/4 hover:transform hover:scale-105 transition-all'>
        <div className='rounded-md h-12 w-12 flex items-center justify-center bg-[#00cdf2]'>
          <FaPhoneAlt className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-[#055160] font-light'>Contact No</span>
          <div className='flex item-center'>
            <strong className='text-sm font-semibold text-[#055160]'>202-906-12354</strong>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default OrderBox;
