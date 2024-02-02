import React, { useState } from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { BsCake2Fill } from "react-icons/bs";
import { FaAddressBook } from "react-icons/fa";
import { Progress } from "antd";
const CustomerDetails = () => {
  const conicColors = { "0%": "#d24e76", "50%": "#ac56ac", "100%": "#684fc3" };
  const initialPageSize = 5;
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [currentPage, setCurrentPage] = useState(1);

  const orderlist = [
    {
      orderNumber: "Order#51144",
      itemImage:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      itemName: "Product A",
      Orderdate: "24-jan-2023",
      paymentInfo: "Bank IME",
      total: "$330",
    },
    {
      orderNumber: "Order#51144",
      itemImage:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      itemName: "Product A",
      Orderdate: "24-jan-2023",
      paymentInfo: "Bank IME",
      total: "$330",
    },
    {
      orderNumber: "Order#51144",
      itemImage:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      itemName: "Product A",
      Orderdate: "24-jan-2023",
      paymentInfo: "Bank IME",
      total: "$330",
    },
    {
      orderNumber: "Order#51144",
      itemImage:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      itemName: "Product A",
      Orderdate: "24-jan-2023",
      paymentInfo: "Bank IME",
      total: "$330",
    },
    {
      orderNumber: "Order#51144",
      itemImage:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      itemName: "Product A",
      Orderdate: "24-jan-2023",
      paymentInfo: "Bank IME",
      total: "$330",
    },
    {
      orderNumber: "Order#51144",
      itemImage:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      itemName: "Product A",
      Orderdate: "24-jan-2023",
      paymentInfo: "Bank IME",
      total: "$330",
    },
    {
      orderNumber: "Order#51144",
      itemImage:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      itemName: "Product A",
      Orderdate: "24-jan-2023",
      paymentInfo: "Bank IME",
      total: "$330",
    },
  ];
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentorder = orderlist.slice(startIndex, endIndex);
  return (
    <>
      <div className="flex flex-col bg-[#f9fbfd] p-1 md:p-4 lg:p-8 xl:p-10 ">
        {/* Header with view mode buttons */}
        <div className="flex-1 flex items-center md:flex-row p-2 ">
          <div className="w-full flex md:mr-5">
            <h1 className="text-1xl font-bold text-black md:text-4xl p-3">
              Customer Detail
            </h1>
          </div>
        </div>
        <hr className="w-full text-black  md:mb-2 sm:mb-1" />
        {/* Main section start */}
        <div className="container mx-auto lg:p-2   ">
          <div className="flex flex-col lg:flex-row md:flex-col mt-0 gap-2  ">
            {/* Left side */}
            <div className="lg:w-2/4 lg:mt-0 md:w-full  bg-[#f9fbfd]  ">
              {/* Profile Box */}
              <div className="lg:w-full  border  bg-[#ffffff] mb-3  rounded-lg ">
                <h1 className="text-1xl font-semibold mt-1 ml-1 m-3 ">
                  Profile{" "}
                </h1>
                <div className="flex  justify-center items-center w-full">
                  <img
                    src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png "
                    alt="profile"
                    className=" border-[2px] w-16  object-cover "
                  />
                </div>
                <div className=" m-3 flex flex-col ml-5 ">
                  <h2 className="text-sm text-gray-500 text-center">
                    ID # CS 2001
                  </h2>
                  <h1 className="text-md font-semibold mt-1  text-center">
                    Jhon Dayer
                  </h1>
                  <h1 className="text-sm text-gray-500 text-center">
                    24 year california
                  </h1>
                  <p className="text-sm text-black   m-1">
                    The capstone project is the endgame of your full stack
                    development course. This is a medium for you to apply and
                    exhibit what you have learnt in this course.{" "}
                  </p>
                </div>
                <div className=" flex mb-1 ml-5">
                  <IoIosPhonePortrait className="text-lg" />
                  <span className="text-sm ml-2">030-456-2345</span>
                </div>
                <div className=" flex mb-1  ml-5">
                  <MdOutlineMail className="text-lg" />
                  <span className="text-sm ml-2">jhon.dayer@gmail.com</span>
                </div>
                <div className=" flex mb-1  ml-5">
                  <BsCake2Fill className="text-lg" />
                  <span className="text-sm ld ml-2">23-march-2023</span>
                </div>
                <div className=" flex mb-5 ml-5">
                  <FaAddressBook className="text-lg" />
                  <span className="text-sm  ml-2">
                    2734 west Fork Street,EASTON 02334
                  </span>
                </div>
              </div>
              {/* Expense Count */}
              <div className="lg:w-full  border  bg-[#ffffff] mb-3 shadow-sm rounded-lg ">
                <h1 className="text-1xl font-semibold m-3 ">Expense Count </h1>

                <div className="flex  flex-row ml-5 gap-12 justify-center items-center  px-4 py-2 ">
                  <div className="flex flex-col">
                    <h1 className="text-sm text-black font-semibold text-right">
                      $1790
                    </h1>
                    <h1 className="text-sm text-gray-400 text-right">Total </h1>
                  </div>
                  <div className="flex flex-col items-end justify-end text-right">
                    <h1 className="text-sm text-black font-semibold text-right">
                      $1790
                    </h1>
                    <h1 className="text-sm text-gray-400 text-right">
                      Avg month
                    </h1>
                  </div>
                </div>

                {/* pogress status  format={() => ' Exp Spend'}  */}
                <div className="flex  flex-row justify-center items-center  px-4 py-4  w-full ">
                  <Progress
                    type="dashboard"
                    percent={95}
                    strokeWidth={10}
                    strokeColor={conicColors}
                    size={150}
                  />
                </div>
                {/* Status expen */}
                <div className="flex  flex-row    w-full ml-1 gap-2 mb-3">
                  <div className="flex flex-col  w-[30%] m-1">
                    <h1 className="text-sm text-black  text-center">Food</h1>
                    <Progress
                      percent={70}
                      showInfo={false}
                      strokeColor={"#ffd55d"}
                    />
                    <h1 className="text-sm  text-[#ffd55d] ml-1">$597 spend</h1>
                  </div>
                  <div className="flex flex-col w-[30%] ">
                    <h1 className="text-sm text-black  text-center">Cloth</h1>
                    <Progress
                      percent={70}
                      showInfo={false}
                      strokeColor={"#7258db"}
                    />
                    <h1 className="text-sm  text-[#7258db] ml-1">$847 spend</h1>
                  </div>
                  <div className="flex flex-col w-[30%] ">
                    <h1 className="text-sm text-black  text-center">Other</h1>
                    <Progress
                      percent={70}
                      showInfo={false}
                      strokeColor={"#a883ba"}
                    />
                    <h1 className="text-sm  text-[#a883ba] ml-1">$347 spend</h1>
                  </div>
                </div>
              </div>
              {/* Status Report */}
              <div className="lg:w-full  border  bg-[#ffffff] mb-3 shadow-sm rounded-lg ">
                <h1 className="text-1xl font-semibold m-3 ">Status Report </h1>

                <div className="flex  flex-col w-full p-2 ">
                  {/* Progree Bar */}
                  <div class="flex justify-between ml-3">
                    <div className="text-left  flex-row flex text-sm ">54</div>
                    <span class="text-sm font-medium text-gary-700 text-[#858383]">
                      Product Visit
                    </span>
                  </div>
                  <Progress
                    percent={78}
                    showInfo={false}
                    strokeWidth={8}
                    strokeColor={"#198754"}
                    className="mb-3"
                  />
                  {/* Second Progress 2 */}

                  <div class="flex justify-between ml-3">
                    <div className="text-left  flex-row flex text-sm ">27</div>
                    <span class="text-sm font-medium text-gary-700 text-[#858383]">
                      Product Buy
                    </span>
                  </div>
                  <Progress
                    percent={50}
                    showInfo={false}
                    strokeWidth={8}
                    strokeColor={"#0dcaf0"}
                    className="mb-3"
                  />
                  {/* Progress bar 3 */}
                  <div class="flex justify-between ml-3">
                    <div className="text-left  flex-row flex text-sm ">102</div>
                    <span class="text-sm font-medium text-gary-700 text-[#858383]">
                      Comment on Product
                    </span>
                  </div>
                  <Progress
                    percent={90}
                    showInfo={false}
                    strokeWidth={8}
                    strokeColor={"#7258db"}
                    className="mb-3"
                  />
                  {/* progree bar 4 */}
                  <div class="flex justify-between ml-3">
                    <div className="text-left  flex-row flex text-sm ">140</div>
                    <span class="text-sm font-medium text-gary-700 text-[#858383]">
                      Total Spend Time
                    </span>
                  </div>
                  <Progress
                    percent={90}
                    showInfo={false}
                    strokeWidth={8}
                    strokeColor={"#ed5782"}
                    className="mb-3"
                  />
                </div>
              </div>

              {/* Left side closed */}
            </div>

            {/* Right side */}
            <div className="lg:w-3/3 lg:mt-0 md:w-full  bg-[#f9fbfd] w-full">
              <div className=" bg-white m-1  mb-2">
                <div
                  className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:flex-row md:gap-3 
    md:ml-2 md:mr-1 cursor-pointer w-full"
                >
                  {/* 1st */}
                  <div className="bg-white shadow-sm  border-gray-200 border-[1px] flex flex-col md:flex-col pb-3 rounded-lg py-3">
                    <div className=" border-gray-200 bg-white flex   m-2 ">
                      <div className=" flex flex-col w-[80%]  ">
                        <h2 className="text-md md:text-sm font-bold text-black  ">
                          Delivery Address
                        </h2>
                      </div>
                      <div className="md:w-full text-right ">
                        <h2 className="text-sm md:text-md font-normal text-black  ">
                          Edit
                        </h2>
                      </div>
                    </div>

                    <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-5  ">
                      {/* Left Text */}
                      <div className=" text-sm text-[#232324]  w-[50%] p-2 ">
                        Block Number
                      </div>

                      {/* RIght text*/}
                      <div className=" text-sm text-[#232324] font-bold   w-[50%] p-2 ">
                        A-510
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-5  ">
                      {/* Left Text */}
                      <div className=" text-sm text-[#232324]  w-[50%] p-2 ">
                        Addreess
                      </div>

                      {/* RIght text*/}
                      <div className=" text-sm text-[#232324] font-bold  w-[50%] p-2 ">
                        81 fulton London
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-5  ">
                      {/* Left Text */}
                      <div className=" text-sm text-[#232324]  w-[50%] p-2 ">
                        Pincode
                      </div>

                      {/* RIght text*/}
                      <div className=" text-sm text-[#232324] font-bold  w-[50%] p-2 ">
                        5145265
                      </div>
                    </div>

                    <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-5  ">
                      {/* Left Text */}
                      <div className=" text-sm text-[#232324]  w-[50%] p-2 ">
                        Phone
                      </div>

                      {/* RIght text*/}
                      <div className=" text-sm text-[#232324] font-bold  w-[50%] p-2 ">
                        202-458-45857
                      </div>
                    </div>
                  </div>
                  {/* 2nd */}
                  <div className="bg-white shadow-sm  border-gray-200 border-[1px] flex flex-col md:flex-col pb-3 rounded-lg py-3 ">
                    <div className=" border-gray-200 bg-white flex   m-2 ">
                      <div className=" flex flex-col w-[80%]  ">
                        <h2 className="text-md md:text-sm font-bold text-black  ">
                          Billing Address
                        </h2>
                      </div>
                      <div className="md:w-full text-right ">
                        <h2 className="text-sm md:text-md font-normal text-black  ">
                          Edit
                        </h2>
                      </div>
                    </div>

                    <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-5  ">
                      {/* Left Text */}
                      <div className=" text-sm text-[#232324]  w-[50%] p-2 ">
                        Block Number
                      </div>

                      {/* RIght text*/}
                      <div className=" text-sm text-[#232324] font-bold   w-[50%] p-2 ">
                        A-510
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-5  ">
                      {/* Left Text */}
                      <div className=" text-sm text-[#232324]  w-[50%] p-2 ">
                        Addreess
                      </div>

                      {/* RIght text*/}
                      <div className=" text-sm text-[#232324] font-bold  w-[50%] p-2 ">
                        81 fulton London
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-5  ">
                      {/* Left Text */}
                      <div className=" text-sm text-[#232324]  w-[50%] p-2 ">
                        Pincode
                      </div>

                      {/* RIght text*/}
                      <div className=" text-sm text-[#232324] font-bold  w-[50%] p-2 ">
                        5145265
                      </div>
                    </div>

                    <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-5  ">
                      {/* Left Text */}
                      <div className=" text-sm text-[#232324]  w-[50%] p-2 ">
                        Phone
                      </div>

                      {/* RIght text*/}
                      <div className=" text-sm text-[#232324] font-bold  w-[50%] p-2 ">
                        202-458-45857
                      </div>
                    </div>
                  </div>

                  {/* grid main div closed */}
                </div>
              </div>

              {/* Table Order Summary  */}

              <div className="flex flex-col bg-white  w-full overflow-x-auto mt-5 rounded-lg border shadow-md ">
                <h1 className="text-2xl font-semibold text-black md:text-2xl p-3">
                  Order Summary
                </h1>

                {/* Above flter here */}

                <div className="flex flex-col md:flex-row justify-between items-center mb-4 p-3">
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
                {/* Table start  */}
                <table className="w-full  border-gray-200 cursor-pointer">
                  <thead>
                    <tr>
                      <th className="border-b px-4 py-2">ID</th>
                      <th className="border-b px-4 py-2">Item</th>
                      <th className="border-b px-2 py-2">PAYMENT INFO</th>
                      <th className="border-b px-2 py-2">ORDER DATE</th>
                      <th className="border-b px-4 py-2">Price</th>
                    </tr>
                  </thead>

                  <tbody>
                    {currentorder.map((order, index) => (
                      <tr key={index}>
                        <td className="border-b px-4 py-2 font-bold">
                          {order.orderNumber}
                        </td>
                        <td className="border-b px-3 py-2">
                          <div className="flex items-center">
                            <img
                              href="/"
                              alt="pro"
                              className="mb-1 text-md  text-white text-center py-6  w-[70px] h-[20px] border bg-[#cccccc] border-gray-300  "
                            />
                            <span className="ml-2">{order.itemName}</span>
                          </div>
                        </td>
                        <td className="border-b px-4 py-2">
                          {order.paymentInfo}
                        </td>
                        <td className="border-b px-4 py-2">
                          {order.Orderdate}
                        </td>
                        <td className="border-b px-4 py-2">{order.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-between mt-4 p-4">
                  <div className="text-sm text-gray-600">
                    Showing {startIndex + 1} to{" "}
                    {Math.min(endIndex, orderlist.length)} of {orderlist.length}
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

              {/* Right side closed */}
            </div>

            {/* Main section closed */}
          </div>
        </div>
        {/*Main Div  */}
      </div>
    </>
  );
};

export default CustomerDetails;
