import React, { useState } from 'react';
import { IoIosAddCircle, IoMdAddCircleOutline } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
const PurchaseItem = () => {
  const initialPageSize = 5;
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [currentPage, setCurrentPage] = useState(1);
  const [openActionRow, setOpenActionRow] = useState(null);
  const items = [
    {
      id: "#SKUN11",
      products: "Oculus",
      image:
      "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
      order:"joan Dayer",
      date: "june 17,2021",
      supplier: "Cloth Supplier",
      total:"$1551",
      paid:"$1500",
      balance:"$51",
      credit:"3 Month",
      status:"items Received",
    },
    {
      id: "#SKUN12",
      products: "Oculus",
      image:
      "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
      order:"joan Dayer",
      date: "june 17,2021",
      supplier: "Cloth Supplier",
      total:"$1551",
      paid:"$1500",
      balance:"$51",
      credit:"3 Month",
      status:"items Received",
    },
    {
      id: "#SKUN13",
      products: "Oculus",
      image:
      "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
      order:"joan Dayer",
      date: "june 17,2021",
      supplier: "Cloth Supplier",
      total:"$1551",
      paid:"$1500",
      balance:"$51",
      credit:"3 Month",
      status:"items Received",
    },
    {
      id: "#SKUN14",
      products: "Oculus",
      image:
      "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
      order:"joan Dayer",
      date: "june 17,2021",
      supplier: "Cloth Supplier",
      total:"$1551",
      paid:"$1500",
      balance:"$51",
      credit:"3 Month",
      status:"items Received",
    },
    {
      id: "#SKUN15",
      products: "Oculus",
      image:
      "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
      order:"joan Dayer",
      date: "june 17,2021",
      supplier: "Cloth Supplier",
      total:"$1551",
      paid:"$1500",
      balance:"$51",
      credit:"3 Month",
      status:"items Received",
    },
  ];
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentinfo = items.slice(startIndex, endIndex);

  const handlePlusClick = (rowId) => {
    setOpenActionRow((prevRowId) => (prevRowId === rowId ? null : rowId));
  };
  return (
    <>
    <div className="flex flex-col bg-[#f9fbfd] p-1 md:p-4 lg:p-8 xl:p-10 border">
      {/* Header with view mode buttons */}
      <div className="flex-1 flex items-center md:flex-row p-2 ">
        <div className="w-full flex md:mr-5 ">
          <h1 className="text-2xl font-semibold text-black md:text-2xl p-3">
            Purchase Items 
          </h1>
        </div>

        <button className="bg-[#7557d9] hover:bg-[#9c81f7] text-white  py-2  w-[25%] rounded-lg">
          <div className="text-left  flex-row flex ">
            <IoMdAddCircleOutline className="ml-2 mr-1 mt-1 text-lg  " /> Add
            Purchase Items 
          </div>
        </button>
      </div>
      <hr className="w-full text-black md:mb-2 sm:mb-1" />
      {/* Table start here  */}
      {/* main section  */}
      <div className="flex flex-col bg-white shadow-sm p-2 w-full overflow-x-auto mt-3">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
            <label className="text-sm">Show</label>
            <select
              className="border border-gray-300 px-4 py-2 rounded"
              onChange={(e) => setPageSize(parseInt(e.target.value))}
            >
              <option>4 </option>
              <option>5 </option>
              <option>8 </option>
              <option>10 </option>
            </select>
            <span className="text-sm">entries</span>
          </div>

          <div className="flex items-center">
            <label className="text-sm mr-2">Search:</label>
            <input
              type="text"
              className="border border-gray-300 px-2 py-1 rounded"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 cursor-pointer justify-center items-center">
            <thead>
              <tr>
                <th className="border-b px-3 py-2 font-bold text-md">ID</th>
                <th className="border-b px-3 py-2">ITEM</th>
                <th className="border-b px-3 py-2">PURCHASE STATUS</th>
                <th className="border-b px-3 py-2">ORDER BY</th>
                <th className="border-b px-2 py-2">DATE</th>
                <th className="border-b px-2 py-2">SUPPLIERS</th>
                <th className="border-b px-3 py-2">TOTAL</th>
                <th className="border-b px-3 py-2">PAID</th>
                <th className="border-b px-2 py-2">BALANCE</th>
                <th className="border-b px-1 py-2">CREDIT</th>
              </tr>
            </thead>
            <tbody>
              {currentinfo.map((info, index) => (
                <>
                  <tr key={index}>
                    <td className="border-b  font-bold">
                      <div
                        className="text-left  flex-row flex "
                        onClick={() => handlePlusClick(info.id)}
                      >
                        {/* <IoIosAddCircle className='text-2xl text-[#7557d9] mr-1  ' onClick={() => handlePlusClick(info.id)} /> */}
                        {openActionRow === info.id ? (
                          <FaCircleMinus className="text-1xl text-[#7557d9] mr-1  " />
                        ) : (
                          <IoIosAddCircle className="text-1xl text-[#7557d9] mr-1" />
                        )}

                        {info.id}
                      </div>
                    </td>
                    <td className="border-b px-3 py-2">{info.products}</td>


                    <td className="border-b px-3 py-2">
                      <div  className='bg-[#19a72c] text-center items-center rounded-lg text-white'>
                        {info.status}
                      </div>
                    
                      
                      </td>
                    <td className="border-b px-3 py-2">
                      <div className="flex items-center">
                        <img
                          src={info.image}
                          alt={info.order}
                          className="w-12 h-12 object-cover mr-1"
                        />
                        <span className="ml-3">{info.order}</span>
                      </div>
                    </td>
                    <td className="border-b px-2 py-2">{info.date}</td>
                    <td className="border-b px-3 py-2">{info.supplier}</td>
                    <td className="border-b px-3 py-2">{info.total}</td>
                    <td className="border-b px-3 py-2">{info.paid}</td>
                    <td className="border-b px-3 py-2">{info.balance}</td>
                    <td className="border-b px-1 py-2">{info.credit}</td>
                  </tr>

                  {/* {openActionRow === info.id && ( */}

                  <tr
                    className={` ${
                      openActionRow === info.id ? "block" : "hidden"
                    }`}
                  >
                    <th className="border-b px-3 py-2">Action </th>
                    <td className="border-b px-3 py-2">
                      <div className="flex ">
                        <div className=" text-2xl  text-[#51bd3b] px-2 ">
                          <FaEdit />
                        </div>
                        <div className="text-2xl text-[#de4e4e] ">
                          <RiDeleteBin5Line />
                        </div>
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between mt-4">
          <div className="text-sm text-gray-600">
            Showing {startIndex + 1} to{" "}
            {Math.min(endIndex, items.length)} of {items.length}
            entries
          </div>
          <div className="flex items-center space-x-2 bg-[#f0f0f0] mr-4 shadow-md">
            <button
              className="bg-[#f0f0f0] text-[#7557d9] px-3 py-1 rounded-lg"
              onClick={() =>
                setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
              }
            >
              Previous
            </button>
            <div className="text-lg text-white bg-[#7557d9] px-3 py-1 ">
              {currentPage}
            </div>
            <button
              className="bg-[#f0f0f0] text-[#7557d9] px-3 py-1 rounded-lg mr-2"
              onClick={() =>
                setCurrentPage((prevPage) =>
                  Math.min(
                    prevPage + 1,
                    Math.ceil(items.length / pageSize)
                  )
                )
              }
            >
              Next
            </button>
          </div>
        </div>
      </div>
      {/* Main div closed  */}
    </div>
  </>
  );
}

export default PurchaseItem;
