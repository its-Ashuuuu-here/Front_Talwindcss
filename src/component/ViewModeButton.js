import React from "react";
import { RiGridFill } from "react-icons/ri";
import { FaList } from "react-icons/fa6";

const ViewModeButton = ({ viewMode, onClickGrid, onClickList }) => {
  return (
    <div className="w-full text-right flex flex-row md:p-1 justify-end">
      <div className=" w-[35vh] flex flex-1  text-right justify-end ">
      <button
        onClick={onClickGrid}
        className={`bg-[#7258db] p-2 md:p-1 text-1xl md:text-1xl sm:text-1xl  border-black border-[1px]  text-white px-2 md:px-1 py-2 ${
          viewMode === "grid" ? "bg-opacity-80" : ""
        }`}
      >
        <div className="rounded-md h-30 w-15 md:ml-3 flex items-center justify-center">
          <RiGridFill className="md:text-xl  sm:text-lg mr-2" /> Grid View
        </div>
      </button>

      <button
        onClick={onClickList}
        className={`p-2 md:p-4 text-lg md:text-1xl sm:text-1xl text-right  border-black border-[1px]  text-black py-2 ${
          viewMode === "list" ? "text-[#7258db]" : ""
        }`}
      >
        <div className="rounded-md h-30 w-15 md:ml-3 flex items-center justify-center">
          <FaList className="md:text-xl sm:text-lg mr-2" /> List View
        </div>
      </button>
    </div>
    </div>
  );
};

export default ViewModeButton;
