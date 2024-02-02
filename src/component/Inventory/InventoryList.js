import React, { useState } from "react";

const InventoryList = () => {
  const initialPageSize = 5;
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [currentPage, setCurrentPage] = useState(1);
  const inventoryList = [
    {
      id: "#SKUN111",
      products: "Oculus",
      category: "Travelling Bag",
      date: "june 17,2021",
      stock: "2581",
      insrock: "2468",
      price: "Sliver",
      action: "Sell",
    },
    {
      id: "#SKUN111",
      products: "Oculus",
      category: "Travelling Bag",
      date: "june 17,2021",
      stock: "2581",
      insrock: "2468",
      price: "Sliver",
      action: "Offer Process",
    },
    {
      id: "#SKUN111",
      products: "Oculus",
      category: "Travelling Bag",
      date: "june 17,2021",
      stock: "2581",
      insrock: "2468",
      price: "Sliver",
      action: "Out of stock",
    },
    {
      id: "#SKUN111",
      products: "Oculus",
      category: "Travelling Bag",
      date: "june 17,2021",
      stock: "2581",
      insrock: "2468",
      price: "Sliver",
      action: "Sell",
    },
    {
      id: "#SKUN111",
      products: "Oculus",
      category: "Travelling Bag",
      date: "june 17,2021",
      stock: "2581",
      insrock: "2468",
      price: "Sliver",
      action: "Out of stock",
    },
  ];
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentInventory = inventoryList.slice(startIndex, endIndex);
  return (
    <>
      <div className="flex flex-col bg-white p-1 md:p-4 lg:p-8 xl:p-10 border">
        {/* Header with view mode buttons */}
        <div className="flex-1 flex items-center md:flex-row p-2 ">
          <div className="w-full flex md:mr-5">
            <h1 className="text-2xl font-bold text-black md:text-2xl p-3">
              Inventory List
            </h1>
          </div>
        </div>
        <hr className="w-full text-black md:mb-2 sm:mb-1" />
        {/* main section  */}
        <div className="flex flex-col bg-white shadow-sm p-4 w-full overflow-x-auto mt-3">
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
                  <th className="border-b px-4 py-2 font-bold text-md">ID</th>
                  <th className="border-b px-4 py-2">PRODUCTS</th>
                  <th className="border-b px-4 py-2">CATEGORY</th>
                  <th className="border-b px-4 py-2">DATE</th>
                  <th className="border-b px-4 py-2">STOCK</th>
                  <th className="border-b px-4 py-2">IN STOCK</th>
                  <th className="border-b px-4 py-2">PRICE</th>
                  <th className="border-b px-4 py-2">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {currentInventory.map((inventory, index) => (
                  <tr key={index}>
                    <td className="border-b px-4 py-2 font-bold">
                      {inventory.id}
                    </td>
                    <td className="border-b px-4 py-2">
                      <div className="flex items-center">
                        <img
                          href="/"
                          alt="pro"
                          className="mb-1 text-md  text-white text-center py-6  w-[70px] h-[20px] border bg-[#cccccc] border-gray-300  "
                        />
                        <span className="ml-3">{inventory.products}</span>
                      </div>
                    </td>
                    <td className="border-b px-4 py-2">{inventory.category}</td>
                    <td className="border-b px-4 py-2">{inventory.date}</td>
                    <td className="border-b px-4 py-2">{inventory.stock}</td>
                    <td className="border-b px-4 py-2">{inventory.insrock}</td>
                    <td className="border-b px-4 py-2">{inventory.price}</td>
                    <td className="border-b px-4 py-2 ">
                      <div
                        className={`text-center border text-white rounded-lg ${
                          inventory.action === "Out of stock"
                            ? "bg-red-500"
                            : inventory.action === "Sell"
                            ? "bg-green-500"
                            : "bg-[#fec007]"
                        }`}
                      >
                         {inventory.action}
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
              {Math.min(endIndex, inventoryList.length)} of{" "}
              {inventoryList.length}
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
                      Math.ceil(inventoryList.length / pageSize)
                    )
                  )
                }
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryList;
