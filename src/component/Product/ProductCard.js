import React, { useState } from "react";

import { FaHeart, FaStar,FaRegHeart } from "react-icons/fa";
const ProductCard = ({ title, description, price, image, Reference }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };
  return (
    <div className="bg-white  p-2 w-[350px] border  flex flex-col justify-between rounded-me shadow-sm  text-center mb-3">
      <div className="relative   w-full  justify-between ">
        <img
          src={image}
          alt="ProductImage"
          width={"100%"}
          height={"40%"}
          className="w-full h-30 mb-1 rounded-md realtive overflow-hidden  shadow-md  "
        />

        {/* <FaHeart className="text-red-500 text-2xl cursor-pointer absolute   right-0  top-0 " /> */}
        {isFavorite ? (
          <FaHeart
            className="text-red-500 text-2xl cursor-pointer absolute right-0 top-0 mr-2 mt-1"
            onClick={toggleFavorite}
          />
        ) : (
          <FaRegHeart
            className="text-red-500 text-2xl cursor-pointer absolute right-0 top-0 mr-2 mt-1"
            onClick={toggleFavorite}
          />
        )}
      </div>

      <div className="flex flex-col  ml-3">
        <div className="text-left  flex-row flex mt-2  gap-1 mb-2 ">
          <FaStar className="text-[#ffd55d] text-1xl mt-2  " />
          3.5(98)
        </div>
        <h3 className="text-lg font-semibold mb-2 text-left">{title}</h3>
        <p className="text-gray-700 text-md text-left mb-1 ">
          Reference:{Reference}
        </p>

        <p className="text-xl font-bold text-[#ffd55d] mb-2 text-left">
          ${price.toFixed(2)}
        </p>
        <button className="bg-[#7258db] text-white py-2 px-2 rounded-md hover:bg-opacity-80 w-[40%] justify-start mb-3">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
