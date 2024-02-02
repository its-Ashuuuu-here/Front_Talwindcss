import { Switch } from "antd";
import React from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const CustomSwitch = styled(Switch)
` 

&&:checked   {
  background-color: [#7557d9];
  color: red;
}
`;

const ProductList = ({ title, price, image, Reference }) => {
  return (
    <div className="relative flex md:w-full items-center  rounded-lg bg-white p-4  md:p-4 sm:p-3  mt-4">
      <div className="md:w-35 justify-start item-align-left ">
        <img
          src={image}
          alt="ProductImage"
          width={"100%"}
          height={"40%"}
          className="md:w-35 md:h-32 sm:w-full rounded-md "
        />

<div className="text-left flex-row flex mt-2 sm:mt-0 mb-2 m-3 absolute right-0 top-0 gap-1">
<CustomSwitch  className="bg-[#7557d9]  " />
          <span className="text-sm text-[#5e5e5e] font-bold">Add to cart</span>
        </div>


      </div>
      <div className="ml-3 text-left">
        <div className="relative   w-full  justify-between ">
          <p className="text-2xl font-semibold text-[#050505]">{title} </p>
        </div>

        <p className="text-sm text-gray-600 mt-2 mb-1 ">Reference:{Reference}</p>

        <div className="flex flex-row gap-4  w-full">
          <div className="flex-1 flex-col">
            <span className="text-md text-[#5e5e5e] font-light">
      
              Priceends
            </span>
            <div className="flex item-center">
              <strong className="text-md font-semibold text-[#050505]">
                20h:46m:36s
              </strong>
            </div>
          </div>

          <div className="flex-1 flex-col  px-3  ">
            <span className="text-md text-[#5e5e5e] font-light">Offer</span>
            <div className="flex w-full ">
              <h1 className="text-md font-semibold text-[#070707]">BanK </h1>
            </div>
          </div>

          <div className="flex-1 flex-col">
            <span className="text-md text-[#5e5e5e] font-light">Prices</span>
            <div className="flex item-center">
              <strong className="text-md font-semibold text-[#070707]">
                {price}
              </strong>
            </div>
          </div>
          <div className="flex-1 flex-col">
            <span className="text-md text-[#5e5e5e] font-light">Rating</span>
            <div className="flex item-center">
              <strong className="text-md font-semibold text-[#070707]">
                <div className="text-left  flex-row flex    mb-2 ">
                  <FaStar className="text-[#ffd55d] text-1xl mt-1  " />
                  3.5
                  <span className="text-gray-800 text-md text-left">(98)</span>
                </div>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
