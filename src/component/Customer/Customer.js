import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
const Customer = () => {
    const initialPageSize = 5;
    const [pageSize, setPageSize] = useState(initialPageSize);
    const [currentPage, setCurrentPage] = useState(1);
    const info =[
        {
            id: "CS-000024",
            image:"https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
            Customer:"Joan Dayer",
            registerDate:"23-jan-2023",
            mail:"jhondayer@gmail.com",
            phone:"026-124-1256",
            order: "23",
            country:"england",
           
          }, 
          {
            id: "CS-000024",
            image:"https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
            Customer:"Joan Dayer",
            registerDate:"23-jan-2023",
            mail:"jhondayer@gmail.com",
            phone:"026-124-1256",
            order: "23",
            country:"england",
           
          },
          {
            id: "CS-000024",
            image:"https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
            Customer:"Joan Dayer",
            registerDate:"23-jan-2023",
            mail:"jhondayer@gmail.com",
            phone:"026-124-1256",
            order: "23",
            country:"england",
           
          },
    ];
    const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentorder = info.slice(startIndex, endIndex);
  return (
    <div className="flex flex-col bg-[#f9fbfd] p-1 md:p-4 lg:p-8 xl:p-10 border">
      {/* Header with view mode buttons */}
      <div className="flex-1 flex items-center md:flex-row p-2 ">
        <div className="w-full flex md:mr-5 ">
          <h1 className="text-2xl font-semibold text-black md:text-2xl p-3">
            Customer Information
          </h1>
        </div>
        <button className="bg-[#7557d9] hover:bg-[#9c81f7] text-white  py-2  w-[25%] rounded-lg">
          Add customer
        </button>
      </div>
      <hr className="w-full text-black md:mb-2 sm:mb-1" />
      {/* Table start here  */}
      {/* main section  */}
      <div className="flex flex-col bg-white shadow-sm p-2 w-full overflow-x-auto mt-5">
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
                  <th className="border-b px-2 py-2 font-bold text-md">ID</th>
                  <th className="border-b px-4 py-2">CUSTOMER</th>
                  <th className="border-b px-2 py-2">REGISTER DATE</th>
                  <th className="border-b px-4 py-2">MAIL</th>
                  <th className="border-b px-4 py-2">PHONE</th>
                  <th className="border-b px-4 py-2">COUNTRY</th>
                  <th className="border-b px-4 py-2">ORDER</th>
                  <th className="border-b px-4 py-2">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {currentorder.map((info, index) => (
                  <tr key={index}>
                    <td className="border-b px-2 py-2 font-bold">
                      {info.id}
                    </td>
                    <td className="border-b px-4 py-2">
                      <div className="flex items-center">
                      <img
                          src={info.image}
                          alt={info.Customer}
                          className="w-12 h-12 object-cover mr-1"
                        />
                        <span className="ml-3">{info.Customer}</span>
                      </div>
                    </td>
                    <td className="border-b px-2 py-2">{info.registerDate}</td>
                    <td className="border-b px-4 py-2">{info.mail}</td>
                    <td className="border-b px-1 py-2">{info.phone}</td>
                    <td className="border-b px-4 py-2">{info.country}</td>
                    <td className="border-b px-4 py-2">{info.order}</td>
                    <td className="border-b px-4 py-3 cursor pointer">
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
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between mt-4">
            <div className="text-sm text-gray-600">
              Showing {startIndex + 1} to {Math.min(endIndex, info.length)}{" "}
              of {info.length}
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
                      Math.ceil(info.length / pageSize)
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
  );
};

export default Customer;
