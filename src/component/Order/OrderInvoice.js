import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiPrinterFill, RiDownload2Fill } from "react-icons/ri";
const OrderInvoice = () => {
  const initialPageSize = 5;
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [currentPage, setCurrentPage] = useState(1);

  const orderlist = [
    {
      orderNumber: "Order#51144",
      itemImage:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      itemName: "Product A",
      bilingdate: "24-jan-2023",
      total: "$330",
      username: "Jhon",
    },
    {
      orderNumber: "Order#51144",
      itemImage:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      itemName: "Product A",
      bilingdate: "24-jan-2023",
      total: "$330",
      username: "Jhon",
    },
    {
      orderNumber: "Order#51144",
      itemImage:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      itemName: "Product A",
      bilingdate: "24-jan-2023",
      total: "$330",
      username: "Jhon",
    },
    {
      orderNumber: "Order#51144",
      itemImage:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      itemName: "Product A",
      bilingdate: "24-jan-2023",
      total: "$330",
      username: "Jhon",
    },
    {
      orderNumber: "Order#51144",
      itemImage:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      itemName: "Product A",
      bilingdate: "24-jan-2023",
      total: "$330",
      username: "Jhon",
    },
  ];
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentorder = orderlist.slice(startIndex, endIndex);
  return (
    <>
      <div className="flex flex-col bg-white p-1 md:p-4 lg:p-8 xl:p-10 border">
        {/* Header with view mode buttons */}
        <div className="flex-1 flex items-center md:flex-row p-2 ">
          <div className="w-full flex md:mr-5">
            <h1 className="text-2xl font-bold text-black md:text-2xl p-3">
              Invoices Details
            </h1>
          </div>
        </div>
        <hr className="w-full text-black md:mb-2 sm:mb-1" />
        {/* main section  */}
        <div className="flex flex-col bg-white shadow-sm p-4 w-full overflow-x-auto mt-5">
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
                  <th className="border-b px-4 py-2">ITEM</th>
                  <th className="border-b px-4 py-2">BILLING DATE</th>
                  <th className="border-b px-4 py-2">TOTAL AMOUNT</th>
                  <th className="border-b px-4 py-2">USER NAME</th>
                  <th className="border-b px-4 py-2">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {currentorder.map((order, index) => (
                  <tr key={index}>
                    <td className="border-b px-4 py-2 font-bold">
                      {order.orderNumber}
                    </td>
                    <td className="border-b px-4 py-2">
                      <div className="flex items-center">
                        <img
                          href="/"
                          alt="pro"
                          className="mb-1 text-md  text-white text-center py-6  w-[70px] h-[20px] border bg-[#cccccc] border-gray-300  "
                        />
                        <span className="ml-3">{order.itemName}</span>
                      </div>
                    </td>
                    <td className="border-b px-4 py-2">{order.bilingdate}</td>
                    <td className="border-b px-4 py-2">{order.total}</td>
                    <td className="border-b px-4 py-2">{order.username}</td>
                    <td className="border-b py-3 cursor pointer">
                      <div className="flex gap-3">
                        <div className=" text-2xl ">
                          <RiPrinterFill />
                        </div>
                        <div className="text-2xl  ">
                          <RiDownload2Fill />
                        </div>
                        <div className="text-2xl">
                          <MdOutlineMailOutline />
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
              Showing {startIndex + 1} to {Math.min(endIndex, orderlist.length)}{" "}
              of {orderlist.length}
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
                      Math.ceil(orderlist.length / pageSize)
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

export default OrderInvoice;
