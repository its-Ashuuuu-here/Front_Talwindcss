import React from "react";
import OrderBox from "./OrderBox";
import DetailBox from "./DetailBox";

const Order = () => {
  return (
    <>
      <div className="flex flex-col bg-[#f9fbfd] p-1 md:p-4 lg:p-8 xl:p-10">
        {/* Header with view mode buttons */}
        <div className="flex-1 flex items-center md:flex-row p-2 ">
          <div className="w-full flex md:mr-5 ">
            <h1 className="text-2xl font-semibold text-black md:text-2xl p-3">
              Order Details #Order-7148
            </h1>
          </div>
          <select className="border border-gray-300  py-2 rounded">
            <option>Select Order ID </option>
            <option>4566</option>
            <option>4563</option>
            <option>4534 </option>
          </select>
        </div>
        <hr className="w-full text-black md:mb-2 sm:mb-1" />

        <div className="flex flex-col bg-[#f9fbfd]  p-4 w-full ">
          <OrderBox />
          <div className="flex flex-col md:flex-row mt-5 ">
            <DetailBox />
          </div>
          {/* Main section start */}
          <div className="container mx-auto lg:p-2  ">
            <div className="flex flex-col lg:flex-row md:flex-col mt-3 gap-2 ">
              {/* left Side */}
              <div className="lg:w-4/4 lg:mt-0 md:w-full  border shadow-md bg-[#ffffff] rounded-lg">
                <h2 className="text-1xl font-bold m-3 mt-4"> Order Summary</h2>

                <div className=" mx-auto mt-5">
                  <table className="text-left text-sm font-light border-collapse bg-white w-full mr-3 cursor-pointer ">
                    <thead className=" font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="py-2 ">
                          PROUDUCT IMAGE{" "}
                        </th>
                        <th scope="col" className="py-2 ">
                          PRODUCT NAME
                        </th>
                        <th scope="col" className="py-2 ">
                          QUANTITY
                        </th>
                        <th scope="col" className="py-2 ">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 1st row */}
                      <tr>
                        <td className="whitespace-nowrap ">
                          <img
                            href="/"
                            alt="pro"
                            className="mb-1 text-md  text-white text-center py-6  w-[100px] h-[20px] border bg-[#cccccc] border-gray-300  "
                          />
                        </td>
                        <td className="whitespace-nowrap font-normal ">
                          OCULVAC <br />
                          <span className="text-[#9480e3]">Rc-1243</span>
                        </td>
                        <td className="whitespace-nowrap font-normal ">1</td>
                        <td className="whitespace-nowrap font-normal ">
                          $345:00
                        </td>
                      </tr>
                      {/* 2nd  row */}
                      <tr>
                        <td className="whitespace-nowrap ">
                          <img
                            href="/"
                            alt="pro"
                            className="mb-1 text-md  text-white text-center py-6  w-[100px] h-[20px] border bg-[#cccccc] border-gray-300  "
                          />
                        </td>
                        <td className="whitespace-nowrap font-normal ">
                          OCULVAC <br />
                          <span className="text-[#9480e3]">Rc-1243</span>
                        </td>
                        <td className="whitespace-nowrap font-normal ">1</td>
                        <td className="whitespace-nowrap font-normal ">
                          $345:00
                        </td>
                      </tr>
                      {/* 3rd */}
                      <tr>
                        <td className="whitespace-nowrap ">
                          <img
                            href="/"
                            alt="pro"
                            className="mb-1 text-md  text-white text-center py-6  w-[100px] h-[20px] border bg-[#cccccc] border-gray-300  "
                          />
                        </td>
                        <td className="whitespace-nowrap font-normal ">
                          OCULVAC <br />
                          <span className="text-[#9480e3]">Rc-1243</span>
                        </td>
                        <td className="whitespace-nowrap font-normal ">1</td>
                        <td className="whitespace-nowrap font-normal ">
                          $345:00
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex flex-col lg:flex-row md:flex-col  ml-48 justify-items-end text-right mb-2 w-[50%] border mt-3  ">
                  <table className="text-right w-full ">
                    <tr>
                      <td>Subtotal Price:</td>
                      <td>$1096.00</td>
                    </tr>
                    <tr>
                      <td>Shiping Cost(+):</td>
                      <td>$12</td>
                    </tr>
                    <tr>
                      <td>Discount(-):</td>
                      <td>$10.00</td>
                    </tr>
                    <tr>
                      <td>Tax(18%)</td>
                      <td>$198.00</td>
                    </tr>
                    <tr>
                      <td className="text-1xl font-semibold">TOTAL PAYABLE:</td>
                      <td className="text-1xl font-normal">$1296.00</td>
                    </tr>

                  </table>
                  <hr className="text-black bg-[#1f1f1f] font-semibold h-[40%]" />
                </div>

                {/* Closed left div */}
              </div>
              {/* right  side */}
              <div className="lg:w-2/4 lg:mt-0 md:w-full    ">
                <div className="  border bg-white m-1  mb-2 rounded-lg shadow-md">
                  <h2 className="text-1xl font-bold m-3 mt-4"> Status Order</h2>
                  <form action="#" className="flex flex-col  ">
                    <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-2 ">
                      <div className="mb-2 text-sm  w-full ">
                        <label className="block m-2 text-md font-semibold text-[#232324]  ">
                          Order Id{" "}
                        </label>
                        <input
                          type="text"
                          id="orderId"
                          name="orderid"
                          placeholder="23452"
                          className="rounded-md border mr-1 w-full "
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-2 ">
                      <div className="mb-2 text-sm  w-full ">
                        <label className="block m-2 text-md font-semibold text-[#232324]  ">
                          Order Status{" "}
                        </label>
                        <select className="rounded-md border mr-1 w-full ">
                          <option>Pending</option>
                          <option>Completed </option>
                        </select>
                      </div>
                    </div>
                    {/* Quantity  */}
                    <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-2 ">
                      <div className="mb-2 text-sm  w-full ">
                        <label className="block m-2 text-md font-semibold text-[#232324]  ">
                          Quantity
                        </label>
                        <input
                          type="text"
                          id="orderId"
                          name="orderid"
                          placeholder="1"
                          className="rounded-md border mr-1 w-full "
                        />
                      </div>
                    </div>
                    {/* Order Transection */}
                    <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-2 ">
                      <div className="mb-2 text-sm  w-full ">
                        <label className="block m-2 text-md font-semibold text-[#232324]  ">
                          Transection
                        </label>
                        <select className="rounded-md border mr-1 w-full ">
                          <option>Completed </option>
                          <option>Pending</option>
                        </select>
                      </div>
                    </div>
                    {/* Comments  */}

                    <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-2 ">
                      <div className="mb-2 text-sm  w-full ">
                        <label className="block m-2 text-md font-semibold text-[#232324]  ">
                          Comments{" "}
                        </label>
                        <textarea
                          id="message"
                          rows="4"
                          className="rounded-md border mr-1 w-full"
                          placeholder="Write your thoughts here..."
                        ></textarea>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-2 w-full mb-4 mt-3">
                      <button className="bg-[#7557d9] hover:bg-[#9c81f7] text-white  py-2 px-3 rounded-lg">
                        Submit
                      </button>
                    </div>

                    {/* Form end  */}
                  </form>
                </div>
              </div>

              {/* left and right main */}
            </div>
          </div>

          {/* Main div closed */}
        </div>
      </div>
    </>
  );
};

export default Order;
