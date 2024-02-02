import React, { useState } from 'react';
import { Radio } from 'antd';
import { Input, Tag} from 'antd';
import ProductEditor from './ProductEditor';
import {  } from 'antd'; 
import ImageUploder from './ImageUploder';
import TableImage from './TableImage';
import ColorPicker from '../ColorPicker';
import TransferList from './TransferList';
import ReactCropper from './ReactCropper';
const categories = [
  'Bag',
  'Game Assessories',
  'Flower Pots',
  'Watch',
  'Accessories',
  'Category 6',

];
// const mockData = [ 
//   {key: "0", title: "Title 0", description: "Sample Description 0"},  
//   {key: "1", title: "Title 1", description: "Sample Description 1"}, 
//   {key: "2", title: "Title 2", description: "Sample Description 2"}, 
//   {key: "3", title: "Title 3", description: "Sample Description 3"}, 
//   {key: "4", title: "Title 4", description: "Sample Description 4"}, 
//   {key: "5", title: "Title 5", description: "Sample Description 5"}, 
// ]; 
const ProductAdd = () => {
 
  const [inputValue, setInputValue] =useState('');
  const [tags, setTags] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && !tags.includes(inputValue)) {
      setTags([...tags, inputValue]);
      setInputValue('');
    }
  };

  const handleTagClose = (removedTag) => {
    const updatedTags = tags.filter((tag) => tag !== removedTag);
    setTags(updatedTags);
  };

  return (
    <div className="flex flex-col bg-[#f9fbfd] p-1 md:p-4 lg:p-8 xl:p-10 ">
      {/* Header with view mode buttons */}
      <div className="flex-1 flex items-center md:flex-row p-2 ">
        <div className="w-full flex md:mr-5 ">
          <h1 className="text-3xl font-bold text-black md:text-4xl p-3">
            Products Add
          </h1>
        </div>
        <button className="bg-[#7557d9] hover:bg-[#9c81f7] text-white font-bold py-2 px-5 rounded-lg">
          Save
        </button>
      </div>
      <hr className="w-full text-black md:mb-2 sm:mb-1" />
{/* Main section start */}
<div className="container mx-auto lg:p-2  ">
        <div className="flex flex-col lg:flex-row md:flex-col mt-0 gap-2 ">
          {/* Left side */}
          <div className="lg:w-3/4 lg:mt-0 md:w-full  ">
            {/* Filter Section */}
            <div className="lg:w-full  border  bg-white rounded-xl ">
            <div className="lg:w-full m-3 ">
                    <h1 className='text-1xl font-semibold mt-1 ml-1 '>Pricing Info </h1>
              </div>
                <div className="lg:w-full   bg-white px-2">
              <label className='text-lg font-normal m-2'>Product Price Old </label>
              <input type="text" className='w-full p-2 border rounded-lg' />
              </div>
              <div className="lg:w-full   bg-white px-2">
              <label className='text-lg font-normal m-2'>Product Price New </label>
              <input type="text" className='w-full p-2 border rounded-lg' />
              </div>
              <div className="lg:w-full   bg-white px-2 mb-3">
              <label className='text-lg font-normal m-2'>Product Coupon </label>
              <input type="text" className='w-full p-2 border rounded-lg' />
              </div>
            </div>
           
{/* Visibility status */}
<div className="lg:w-full  border bg-white mt-3 flex flex-col md:flex-col rounded-xl">
            <div className="lg:w-full m-3 ">
                    <h1 className='text-1xl font-semibold mt-1 m-1  '>Visibility Status </h1>
              </div>
                <div className=" flex flex-col md:flex-col mb-2  ml-4 ">
                          <Radio style={{  height: '30px', lineHeight: '30px', fontSize: '16px' }} value={1}>Published</Radio>
                          <Radio style={{  height: '30px', lineHeight: '30px', fontSize: '16px'  }}  value={2}>Scheduled</Radio>
                          <Radio style={{  height: '30px', lineHeight: '30px', fontSize: '16px'  }} value={3}>Hidden</Radio>  
              </div>
         </div>     

{/* Size */}
<div className="lg:w-full  border bg-white mt-3 flex flex-col md:flex-col rounded-xl">
            <div className="lg:w-full m-3 ">
                    <h1 className='text-1xl font-semibold mt-1 m-1  '>Size </h1>
              </div>
                <div className=" flex flex-col md:flex-col mb-2  ml-4 ">
                          <Radio style={{  height: '30px', lineHeight: '30px', fontSize: '16px' }} value={1}>XS</Radio>
                          <Radio style={{  height: '30px', lineHeight: '30px', fontSize: '16px'  }}  value={2}>S</Radio>
                          <Radio style={{  height: '30px', lineHeight: '30px', fontSize: '16px'  }} value={3}>M</Radio> 
                          <Radio style={{  height: '30px', lineHeight: '30px', fontSize: '16px'  }} value={3}>L</Radio>  
                          <Radio style={{  height: '30px', lineHeight: '30px', fontSize: '16px'  }} value={3}>LM</Radio>   
              </div>
         </div>   

{/* Published Date and Time  */}
<div className="lg:w-full  border  bg-white rounded-xl mt-3 ">
            <div className="lg:w-full m-3 ">
                    <h1 className='text-1xl font-semibold mt-1 ml-1 '>Published Date </h1>
              </div>
                <div className="lg:w-full   bg-white px-2">
              <label className='text-lg font-normal m-2'>Publish Date </label>
              <input type="date" className='w-full p-2 border rounded-lg' placeholder='mm/dd/yyyy'/>
              </div>
              <div className="lg:w-full   bg-white px-2 mb-3">
              <label className='text-lg font-normal m-2'>Publish Time </label>
              <input type="time" className='w-full p-2 border rounded-lg  '  placeholder='--:----' />
              </div>
            
            </div>
{/* Tags */}

<div className="lg:w-full  border  bg-white rounded-xl mt-3 ">
            <div className="lg:w-full m-3 ">
                    <h1 className='text-1xl font-semibold mt-1 ml-1 '>Tags </h1>
              </div>
                <div className="lg:w-full   bg-white px-2">
              <div className="flex items-center">
                      <Input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onPressEnter={handleInputConfirm}
                        className="mr-2 w-full border rounded-lg mb-"
                      />
              </div>
      <div className="mt-2 mb-3">
                  {tags.map((tag, index) => (
                    <Tag
                      key={index}
                      closable
                      onClose={() => handleTagClose(tag)}
                      className="m-1"
                    >
                      {tag}
                    </Tag>
                  ))}
      </div>
              </div>
            </div>
{/* Categroy Select  */}
<div className="lg:w-full  border  bg-white rounded-xl mt-3 ">
            <div className="lg:w-full m-3 ">
                    <h1 className='text-1xl font-semibold mt-1 ml-1 '>Categories</h1>
                    <h1 className='text-md font-normal mt-2 ml-1 '>Categories Select</h1>
              </div>
           <div className="lg:w-full bg-white px-2 mb-2">
             
                            <div className="max-h-36 overflow-y-auto border m-3 rounded-lg "  >
                              {categories.map((category, index) => (
                                <div key={index} value={category} className='ml-3 text-sm leading-7'>
                                  {category}
                                </div>
                              ))}
                            </div>
                      </div>
  </div>
  {/* Inventory Input Field  */}
  <div className="lg:w-full  border  bg-white rounded-xl mt-3 ">
                 <div className="lg:w-full m-3 ">
                    <h1 className='text-1xl font-semibold mt-1 ml-1 '>Inventory Info </h1>
              </div>
                <div className="lg:w-full   bg-white px-2">
              <label className='text-lg font-normal m-2'>SKU </label>
              <input type="text" className='w-full p-2 border rounded-lg' />
              </div>
              <div className="lg:w-full   bg-white px-2 mb-3">
              <label className='text-lg font-normal m-2'>Total Stock Quantity </label>
              <input type="text" className='w-full p-2 border rounded-lg' />
              </div>     
            </div>

{/* End left side */}
      </div>
{/* Right  */}
<div className="lg:w-2/3 lg:mt-0 md:w-full  ">
           
      
                  <div className="  border bg-white m-1 rounded-lg mb-2">
                              <div className="lg:w-full m-3 ">
                                      <h1 className='text-1xl font-semibold mt-1 ml-1 '>Basic Information  </h1>
                                </div>
                        <form action="#" className="flex flex-col  ">
                                <div className="flex md:flex-col flex-col lg:flex-row   gap-3 ml-3 mr-2 ">
                                  {/* First Name Input */}
                                  <div className="mb-2 text-md text-[#232324] " >
                                    <label className="block m-2">Name </label>
                                    <input
                                      type="text"
                                      id="Name"
                                      name="Name"
                                      className="rounded-md border mr-1 w-[50vh]"
                                    />
                                  </div>

                                  {/* Page Input */}
                                  <div className="mb-2 text-md text-[#232324]">
                                  <label className="block m-2">Page title </label>
                                    <input
                                      type="text"
                                      id="pgName"
                                      name="pgName"
                                      className="rounded-md border mr-1 w-[50vh]"
                                    />
                                  </div>
                                </div>

                     <div className='lg:w-full bg-white px-2 mb-3  '>
                          <label className='text-lg font-normal m-2'>Product Identifier URL</label>
                          <Input addonBefore="https://eBazar.com/" type='text'   className='w-full p-2   rounded-lg' />
                          </div>

                          <div className='lg:w-full bg-white px-2 mb-10  '>
                          <label className='text-lg font-normal m-2 ml-1'>Product Description</label>
                             <ProductEditor/>
                          </div>
                      </form>
                  </div>

{/* Country Select */}
            <div className="  border bg-white m-1 rounded-lg mb-2">
                                <div className="lg:w-full m-3 ">
                                        <h1 className='text-1xl font-semibold mt-1 ml-1 '>Shipping Country  </h1>
                                 </div>
                             <div className=' mr-2  bg-white  mb-3  '>
                          
                                
                                            <TransferList/> 
                                        
                                     
                                  </div>
 </div>
{/* Image Crop Section */}
<div className="  border bg-white m-1 rounded-lg mb-2">
              <div className="lg:w-full m-3 ">
                <h1 className="text-2xl font-semibold mt-1 ml-1 ">Images </h1>
                <h1 className="text-md mt-1 ml-1">Product Image Upload</h1>
                <h2 className="text-gray-500 text-sm">
                  Only portrait or square images, 2M max and 2000px max-height
                </h2>
              </div>
              
              <div className="ml-2 mr-2  bg-white   mb-2 ">
                <ImageUploder />
              </div>
              <div className="lg:w-full  ml-5 ">
                <h1 className="text-1xl font-semibold  ml-1  mb-3">Select Product Color</h1>
                <ColorPicker defaultColor="gray" />
              </div>


              <div className="m-3 bg-slate-500 border ">
                <TableImage />
              </div>
            </div>


{/* Crop Image Box section */}
<div className="  border bg-white m-1 rounded-lg mb-2 mt-2">
              <div className="lg:w-full m-3 ">
                <h1 className="text-2xl font-semibold mt-1 ml-1 ">Cropped Images </h1>
                <h1 className="text-sm mt-1 ml-1 text-gray-500">If you Crropped Images Please Upload and cropped easily.</h1>
            
              </div>
              
              <div className="ml-2 mr-2  bg-white   mb-2 ">
            <ReactCropper/>


              </div>
     

              <div className="m-3 ">
              <input type='text' placeholder='get data here to set this issue ' className='rounded-lg border w-3/4'/>
              </div>
            </div>















  {/* Right Side End  */}
  </div>

 </div>



{/* Main Section ENd  */}
</div>
      
    </div>
  );
}

export default ProductAdd;
