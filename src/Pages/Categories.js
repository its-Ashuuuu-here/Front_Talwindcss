import React, { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
const Categories = () => {
  const initialPageSize = 5;
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [currentPage, setCurrentPage] = useState(1);

  const Categories = [
    {
      id: "5u44",
      itemName: "Watch",
      Date: "March-12-2020",
      status: "Completed",
    },
    {
      id: "5u44",
      itemName: "Toy",
      Date: "March-12-2020",
      status: "Completed",
    },
    {
      id: "5u44",
      itemName: "Assesories",
      Date: "March-12-2020",
      status: "Completed",
    },
    {
      id: "5u44",
      itemName: "Flowers",
      Date: "March-12-2020",
      status: "Completed",
    },
    {
      id: "5u44",
      itemName: "Clothes",
      Date: "March-12-2020",
      status: "Completed",
    },
  ];
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentCategories = Categories.slice(startIndex, endIndex);
  return (
    <>
      <div className="flex flex-col bg-[#f9fbfd] p-1 md:p-4 lg:p-8 xl:p-10 border">
        {/* Header with view mode buttons */}
        <div className="flex-1 flex items-center md:flex-row p-2 ">
          <div className="w-full flex md:mr-5 ">
            <h1 className="text-2xl font-semibold text-black md:text-2xl p-3">
              Categories List
            </h1>
          </div>
          <button className="bg-[#7557d9] hover:bg-[#9c81f7] text-white  py-2  w-[25%] rounded-lg">
            Add Categories
          </button>
        </div>
        <hr className="w-full text-black md:mb-2 sm:mb-1" />
        <div className="flex flex-col bg-[#f9fbfd] shadow-sm p-4 w-full overflow-x-auto">
          {/* Table  */}
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
            <table className="min-w-full border border-gray-200 cursor-pointer">
              <thead>
                <tr>
                  <th className="border-b px-4 py-2  ">ID</th>
                  <th className="border-b px-4 py-2">CATEGORIES</th>
                  <th className="border-b px-4 py-2">DATE</th>
                  <th className="border-b px-4 py-2">STATUS</th>
                  <th className="border-b px-4 py-2">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {currentCategories.map((Categories, index) => (
                  <tr key={index}>
                    <td className="border-b px-4 py-3 font-semibold">
                      {Categories.id}
                    </td>
                    <td className="border-b px-4 py-3 font-semibold">
                      <div className="flex items-center">
                        <span>{Categories.itemName}</span>
                      </div>
                    </td>
                    <td className="border-b px-2 py-3 font-semibold">
                      {Categories.Date}
                    </td>
                    <td className="border-b px-4 py-3 font-semibold ">
                      {Categories.status}
                    </td>

                    <td className="border-b px-4 py-3 cursor pointer">
                      <div className="flex ">
                        <div className=" text-2xl  text-[#51bd3b] ">
                          <MdOutlineModeEdit />
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
              Showing {startIndex + 1} to{" "}
              {Math.min(endIndex, Categories.length)} of {Categories.length}{" "}
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
                      Math.ceil(Categories.length / pageSize)
                    )
                  )
                }
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* main div closed  */}
      </div>
    </>
  );
};

export default Categories;
