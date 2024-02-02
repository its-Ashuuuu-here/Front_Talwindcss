import React, { useState } from "react";
const TransactionTable = () => {
  const initialPageSize = 5;
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [currentPage, setCurrentPage] = useState(1);

  const transactions = [
    {
      orderNumber: "5u44",
      itemImage:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      itemName: "Product A",
      username: "John Doe",
      paymentMethod: "Credit Card",
      price: "$50.00",
      status: "Completed",
    },
    {
      orderNumber: "362jd34",
      itemImage:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      itemName: "Product A",
      username: "John Doe",
      paymentMethod: "Credit Card",
      price: "$50.00",
      status: "Completed",
    },
    {
      orderNumber: "ssd1234",
      itemImage:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      itemName: "Product A",
      username: "John Doe",
      paymentMethod: "Credit Card",
      price: "$50.00",
      status: "Completed",
    },
    {
      orderNumber: "12dd34",
      itemImage:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      itemName: "Product A",
      username: "John Doe",
      paymentMethod: "Credit Card",
      price: "$50.00",
      status: "Completed",
    },
    {
      orderNumber: "1234",
      itemImage:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      itemName: "Product A",
      username: "John Doe",
      paymentMethod: "Credit Card",
      price: "$50.00",
      status: "Completed",
    },
    {
      orderNumber: "1234",
      itemImage:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      itemName: "Product A",
      username: "John Doe",
      paymentMethod: "Credit Card",
      price: "$50.00",
      status: "Completed",
    },
    {
      orderNumber: "4",
      itemImage:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      itemName: "Product A",
      username: "John Doe",
      paymentMethod: "Credit Card",
      price: "$50.00",
      status: "Completed",
    },
    {
      orderNumber: "1234",
      itemImage:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      itemName: "Product A",
      username: "John Doe",
      paymentMethod: "Credit Card",
      price: "$50.00",
      status: "Completed",
    },
    {
      orderNumber: "1234",
      itemImage:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      itemName: "Product A",
      username: "John Doe",
      paymentMethod: "Credit Card",
      price: "$50.00",
      status: "Completed",
    },
    {
      orderNumber: "1234",
      itemImage:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      itemName: "Product A",
      username: "John Doe",
      paymentMethod: "Credit Card",
      price: "$50.00",
      status: "Completed",
    },
  ];
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentTransactions = transactions.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col bg-white shadow-sm p-4 w-full overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">Recent Transaction Records</h1>
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
              <th className="border-b px-4 py-2">Order Number</th>
              <th className="border-b px-4 py-2">Item</th>
              <th className="border-b px-4 py-2">Username</th>
              <th className="border-b px-4 py-2">Payment Method</th>
              <th className="border-b px-4 py-2">Price</th>
              <th className="border-b px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((transaction, index) => (
              <tr key={index}>
                <td className="border-b px-4 py-2">
                  {transaction.orderNumber}
                </td>
                <td className="border-b px-4 py-2">
                  <div className="flex items-center">
                    <img
                      src={transaction.itemImage}
                      alt={transaction.itemName}
                      className="w-8 h-8 object-cover rounded-full mr-2"
                    />
                    <span>{transaction.itemName}</span>
                  </div>
                </td>
                <td className="border-b px-4 py-2">{transaction.username}</td>
                <td className="border-b px-4 py-2">
                  {transaction.paymentMethod}
                </td>
                <td className="border-b px-4 py-2">{transaction.price}</td>
                <td className="border-b px-4 py-2">{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mt-4">
        <div className="text-sm text-gray-600">
          Showing {startIndex + 1} to {Math.min(endIndex, transactions.length)}{" "}
          of {transactions.length} entries
        </div>
        <div className="flex items-center space-x-2 bg-[#f0f0f0] mr-4 shadow-md">
          <button
            className= "bg-[#f0f0f0] text-[#7557d9] px-3 py-1 rounded-lg"
            onClick={() =>
              setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
            }
          >
            Previous
          </button>
          <div className="text-lg text-white bg-[#7557d9] px-3 py-1 ">{currentPage}</div>
          <button
            className="bg-[#f0f0f0] text-[#7557d9] px-3 py-1 rounded-lg mr-2"
            onClick={() =>
              setCurrentPage((prevPage) =>
                Math.min(
                  prevPage + 1,
                  Math.ceil(transactions.length / pageSize)
                )
              )
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
