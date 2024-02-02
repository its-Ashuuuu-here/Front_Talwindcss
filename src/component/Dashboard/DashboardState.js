import React from 'react';
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const DashboardState = () => {
  return (
    <div className='flex flex-col md:flex-row gap-3 mt-2 md:ml-2 md:mr-4 cursor-pointer w-full '>
      {/* 1st */}
      <div className='bg-[#cbe8de] rounded-2xl shadow-md p-4 flex-1 border-gray-200 flex items-center md:w-1/4 hover:transform hover:scale-95 transition-all'>
        <div className='rounded-md h-12 w-12 flex items-center justify-center bg-[#008959]'>
          <MdOutlineAttachMoney className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-md text-[#008959] font-normal'>Total Revenue</span>
          <div className='flex item-center'>
            <strong className='text-2xl font-semibold text-[#008959]'>$34,000</strong>
          </div>
        </div> 
      </div>

      {/* 2nd */}
      <div className='bg-[#ffd6d9] rounded-2xl shadow-md p-4 flex-1 border-gray-200 flex items-center md:w-1/4 hover:transform hover:scale-105 transition-all'>
        <div className='rounded-md h-12 w-12 flex items-center justify-center bg-[#f41b35]'>
          <FaMoneyCheck className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-md text-[#055160] font-normal'>Expense</span>
          <div className='flex item-center'>
            <strong className='text-2xl font-semibold text-[#055160]'>$11,024</strong>
          </div>
        </div>
      </div>

      {/* 3rd */}
      <div className="bg-[#fff2cd] rounded-lg shadow-md p-4 flex-1 border-gray-200 flex items-center md:w-1/4 hover:transform hover:scale-105 transition-all">
        <div className='rounded-md h-12 w-12 flex items-center justify-center bg-[#ffbe00]'>
          <FaRegSmile className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-md text-[#055160] font-normal'>Happy Customer</span>
          <div className='flex item-center'>
            <strong className='text-2xl font-semibold text-[#055160]'>9.295</strong>
          </div>
        </div>
      </div>

      {/* 4th */}
      <div className='bg-[#c3f5fd] rounded-lg shadow-md p-4 flex-1 border-gray-200 flex items-center md:w-1/4 hover:transform hover:scale-105 transition-all'>
        <div className='rounded-md h-12 w-12 flex items-center justify-center bg-[#00cdf2]'>
          <FaBagShopping className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-[#055160] font-light'>New Store Open</span>
          <div className='flex item-center'>
            <strong className='text-2xl font-semibold text-[#055160]'>8.2502</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardState;
