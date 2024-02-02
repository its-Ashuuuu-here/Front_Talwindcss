import { Rate } from 'antd';
import React from 'react';

const CustomerView = () => {
  return (
    <>
   
    <div className='flex flex-col justify-center  border m-2 w-[95%] rounded-lg ml-3 mb-3'>
      <div className="flex items-center  ml-3 mr-3 mt-3">
        <div className='flex items-center justify-center space-x-4'>
          {/* User Image in Circle */}
          <div className="rounded-full overflow-hidden w-14 h-14 ml-3 mt-3 bg-gray-300">
            {/* Replace the image source with the actual image URL */}
            <img
              src="https://placekitten.com/200/200" 
              alt="User"
              className="object-cover w-full h-full"
            />
          </div>

          {/* User Information */}
          <div className="flex flex-col mt-3">
            {/* User Name */}
            <h3 className="text-lg font-semibold">John Doe</h3>
            <h3 className="text-md font-semibold text-gray-500">3 hours</h3>
          </div>

         
        </div>
         {/* Rating */}
         <div className="flex items-end justify-end space-x-10 ml-auto mr-4">
            <Rate defaultValue={5} className='text-right'  />
          </div>
      </div>


      <hr className='mt-2'/>
    <h1 className="text-lg font-semibold ml-3 mt-3 ">Top-Oculuve R</h1>
        <p className="mt-2 m-3 text-md leading-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
         dummy text ever since the 1500.
        </p>
   
    </div>
  
    
{/* Other msg  */}
<div className='flex flex-col justify-center  border m-2 w-[95%] rounded-lg ml-3 mb-3'>
      <div className="flex items-center  ml-3 mr-3 mt-3">
        <div className='flex items-center justify-center space-x-4'>
          {/* User Image in Circle */}
          <div className="rounded-full overflow-hidden w-14 h-14 ml-3 mt-3 bg-gray-300">
            {/* Replace the image source with the actual image URL */}
            <img
              src="https://placekitten.com/200/200" 
              alt="User"
              className="object-cover w-full h-full"
            />
          </div>

          {/* User Information */}
          <div className="flex flex-col mt-3">
            {/* User Name */}
            <h3 className="text-lg font-semibold">John Doe</h3>
            <h3 className="text-md font-semibold text-gray-500">3 hours</h3>
          </div>

         
        </div>
         {/* Rating */}
         <div className="flex items-end justify-end space-x-10 ml-auto mr-4">
            <Rate defaultValue={5} className='text-right'  />
          </div>
      </div>


      <hr className='mt-2'/>
    <h1 className="text-lg font-semibold ml-3 mt-3 ">Top-Oculuve R</h1>
        <p className="mt-2 m-3 text-md leading-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
         dummy text ever since the 1500.
        </p>
   
    </div>
    {/* // Reply comments  */}
    <div className='flex flex-col justify-center  border m-2 w-[95%] rounded-lg ml-3'>
      <div className="flex items-center  ml-3 mr-3 mt-3">
        <div className='flex items-center justify-center space-x-4'>
          {/* User Image in Circle */}
          <div className="rounded-full overflow-hidden w-14 h-14 ml-3 mt-3 bg-gray-300">
            {/* Replace the image source with the actual image URL */}
            <img
              src="https://placekitten.com/200/200" 
              alt="User"
              className="object-cover w-full h-full"
            />
          </div>

          {/* User Information */}
          <div className="flex flex-col mt-3">
            {/* User Name */}
            <h3 className="text-lg font-semibold">John Doe</h3>
            <h3 className="text-md font-semibold text-gray-500">3 hours</h3>
          </div>

         
        </div>
         {/* Rating */}
         <div className="flex items-end justify-end space-x-10 ml-auto mr-4">
            <Rate defaultValue={5} className='text-right'  />
          </div>
      </div>
      <hr className='mt-2'/>

    <h1 className="text-lg font-semibold ml-3 mt-3 ">Top-Oculuve R</h1>
        <p className="mt-2 m-3 text-md leading-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
         dummy text ever since the 1500.
        </p>
        <hr className='mt-1 mb-1'/>

        {/* Comment Section */}
        <div className="flex items-center  ml-3 mr-3 mt-1">
        <div className='flex items-center justify-center space-x-4'>
          {/* User Image in Circle */}
          <div className="rounded-full overflow-hidden w-14 h-14 ml-3 mt-3 bg-gray-300">
            {/* Replace the image source with the actual image URL */}
            <img
              src="https://placekitten.com/200/200" 
              alt="User"
              className="object-cover w-full h-full"
            />
          </div>

          {/* User Information */}
          <div className="flex flex-col mt-3">
            {/* User Name */}
            <h3 className="text-lg font-semibold">Victor </h3>
            <h3 className="text-md font-semibold text-gray-500">5 days </h3>
          </div>
        </div>
       
      </div>
      <input type='text' className='w-[90%] ml-10 mt-3 rounded-lg border mb-3' placeholder='Reply'/>

   
    </div>
    
    </>
  );
};

export default CustomerView;
