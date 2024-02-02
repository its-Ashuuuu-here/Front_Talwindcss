import React from "react";

const ActiveUser = () => {
  const activeUserData = [
    { id: 1, page: "/dist/product.html", users: 245 },
    { id: 2, page: "/dist/products-cart.html", users: 455 },
    { id: 3, page: "/dist/admin-profile.html", users: 45 },
    { id: 4, page: "/dist/order-history.html", users: 45 },
    { id: 5, page: "/dist/products-history.html", users: 545 },
  ];

  return (
    <div className="flex flex-col bg-white p-4 rounded-md shadow-md ">
      <h2 className="text-2xl font-bold mb-5">Active Users</h2>

      <div className="mb-4 bg-[#a7daff] rounded-lg w-[94%] p-4 justify-center item-align-center ml-1 shadow-md ">
        <span className="ml-20 font-bold text-2xl text-center ">
          {activeUserData.reduce((total, data) => total + data.users, 0)}
        </span>
      </div>

      <div className="overflow-x-auto cursor-pointer ">
        <table className="w-full mb-4 ">
          <thead>
            <tr>
              <th className="p-3 ">Active Page</th>
              <th className=" p-3">Users</th>
            </tr>
          </thead>
          <tbody>
            {activeUserData.map((data) => (
              <tr key={data.id}>
                <td className="border-y-1 border-gray-500 pb-2 ">
                  {data.page}
                </td>
                <td className="border-y-1 border-gray-500 pb-2">
                  {data.users}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveUser;
