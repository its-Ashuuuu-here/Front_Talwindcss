import React, { useState } from 'react';
import { FaEnvelope, FaSearch } from 'react-icons/fa';
import { TbBellRingingFilled } from 'react-icons/tb';
import { IoSettingsSharp } from 'react-icons/io5';
import avtar from '../../images/avtar.png';
const SecondHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='flex flex-col md:flex-row items-center justify-between h-auto md:h-[50px] px-[15px] mt-1 mr-2 '>
      <div className='flex items-center relative'>
        <input
          type='text'
          className='bg-[#F8F9FC] h-[30px] md:w-[200px] w-full outline-none pl-[13px] rounded-[3px] border-[#c0bfbf]
          placeholder:text-[14px] leading-[20px] font-normal shadow-sm'
          placeholder='Search...........'
        />
        <div className='bg-[#eeeeee] h-[30px] md:flex-row md:p-3 flex items-center justify-center rounded-br-[3px] 
        rounded-tr-[3px] cursor-pointer shadow-sm rounded-[3px]'>
          <FaSearch />
        </div>
      </div>
      <div className='flex items-center gap-[15px] relative'>
        <TbBellRingingFilled />
        <div
          className={`flex items-center gap-[25px] border-r-[1px] pr-[px] md:pr-[25px] cursor-pointer ${
            isDropdownOpen ? 'text-blue-500' : ''
          }`}
          onClick={toggleDropdown}
        >
          <FaEnvelope />
        </div>
        {isDropdownOpen && (
          <div className='absolute z-10 right-15 top-10 bg-white border rounded-md  p-2'>
   
            <p>Message is here </p>
            <hr />
            <p>Message is here </p>
          </div>
        )}
        <div className='flex md:hidden items-center gap-[15px] relative'>
       
          <p className='text-[14px] md:text-base'>
            Douglas <br />
            <span>Admin</span>
          </p>
          <div className='h-[30px] w-[30px] md:w-[50px] md:h-[50px] flex items-center justify-center rounded-full cursor-pointer relative bg-[#f0f0f1]'>
            <img
              src={avtar}
              alt='user'
              className='w-[30px] h-[30px] md:w-full md:h-full object-cover rounded-full'
            />
          </div>
          <IoSettingsSharp />
        </div>
        <div className='hidden md:flex items-center gap-[15px] relative'>
    
          <p className='text-[14px] md:text-base'>
            Douglas <br />
            <span>Admin</span>
          </p>
          <div className='h-[50px] w-[50px] md:w-[50px] md:h-[50px] flex items-center justify-center rounded-full cursor-pointer relative bg-[#f0f0f1]'>
            <img
              src={avtar}
              alt='user'
              className='w-[50px] h-[50px] md:w-full md:h-full object-cover rounded-full'
            />
          </div>
          <IoSettingsSharp />
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;
