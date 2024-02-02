import React from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
const CartDetail = () => {
  return (
    <>
      <div className="flex flex-col bg-white p-1 md:p-4 lg:p-8 xl:p-10 ">
        {/* Header with view mode buttons */}
        <div className="flex-1 flex items-center md:flex-row p-2 ">
          <div className="w-full flex md:mr-5">
            <h1 className="text-3xl font-bold text-black md:text-4xl p-3">
              Cart Details
            </h1>
          </div>
        </div>
        <hr className="w-full text-black  md:mb-2 sm:mb-1" />
        {/* main section  */}
        <div className="container mx-auto lg:p-2  ">
          <div className="border md:w-full flex md:flex-col w-1/4  bg-white  rounded-lg shadow-sm mb-5 ">
            <h1 className="text-2xl text-bold m-3"> Order Summary</h1>
            <div className=" border w-[95%] ml-3  mx-auto">
              <table className="text-left text-sm font-light border-collapse bg-white w-full cursor-pointer ">
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
                    <th scope="col" className="py-2 ">
                      ACTION
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
                    <td className="whitespace-nowrap font-normal ">
                      <input
                        type="Number"
                        className="rounded-lg border w-full lg:w-32"
                        placeholder="Price"
                      />
                    </td>
                    <td className="whitespace-nowrap font-normal ">$345:00</td>
                    <td className="whitespace-nowrap cursor pointer">
                      <div className="flex items-center justify-center ">
                        <div className=" text-2xl ">
                          <MdOutlineModeEdit />
                        </div>
                        <div className="text-2xl text-[#de4e4e] ">
                          <RiDeleteBin5Line />
                        </div>
                      </div>
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
                    <td className="whitespace-nowrap font-normal ">
                      <input
                        type="Number"
                        className="rounded-lg border w-full lg:w-32"
                        placeholder="Price"
                      />
                    </td>
                    <td className="whitespace-nowrap font-normal ">$345:00</td>
                    <td className="whitespace-nowrap cursor pointer">
                      <div className="flex items-center justify-center ">
                        <div className=" text-2xl ">
                          <MdOutlineModeEdit />
                        </div>
                        <div className="text-2xl text-[#de4e4e] ">
                          <RiDeleteBin5Line />
                        </div>
                      </div>
                    </td>
                  </tr>
                  {/* 3rd row */}
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
                    <td className="whitespace-nowrap font-normal ">
                      <input
                        type="Number"
                        className="rounded-lg border w-full lg:w-32"
                        placeholder="Price"
                      />
                    </td>
                    
                    <td className="whitespace-nowrap font-normal ">$345:00</td>
                    <td className="whitespace-nowrap cursor pointer">
                      <div className="flex items-center justify-center ">
                        <div className=" text-2xl ">
                          <MdOutlineModeEdit />
                        </div>
                        <div className="text-2xl text-[#de4e4e] ">
                          <RiDeleteBin5Line />
                        </div>
                      </div>
                    </td>

                  </tr>
                </tbody>
              </table>
            </div>
            {/* Table End  */}

            <div className="flex flex-col lg:flex-row md:flex-col mt-0 w-4/4  ml-7 mr-7 mb-2  gap-40 ">
              {/* Left side */}
              <div className="lg:mt-0   bg-white  gap-3 w-full  ml-3 ">
                <h1 className="text-lg font-normal mt-3 ">
                  Apply coupon for discount !
                </h1>
                <input
                  type="text"
                  placeholder="Code"
                  className=" w-[60%] rounded-sm mt-2 mb-2 "
                />
                <button
                  type="submit"
                  className="rounded-sm bg-[#7557d9] px-3 py-2 text-white"
                >
                  Apply
                </button>
              </div>
              {/* Right Side  */}
              <div className="lg:w-full lg:mt-0 md:w-full bg-white ml-2       ">
                <div className="content-right item-right text-right  m-2  w-[80%]">
                  <table className="text-right w-full item-end   ">
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
              </div>
            </div>

            {/* Button */}
            <div className="flex flex-col lg:flex-row md:flex-col mt-0 w-4/4  ml-7 mr-7 mb-5  gap-40  ">
              {/* Left */}
              <div className="lg:mt-0   bg-white  gap-3 w-full item-left  ml-3 ">
                <button className="px-4 py-2 bg-[#6c757d] text-white rounded-md">
                  Continue Shopping
                </button>
              </div>

              {/* Right */}
              <div className="lg:w-full lg:mt-0 md:w-full bg-white ml-2     ">
                <button className="px-4 py-2 bg-[#7557d9] text-white rounded-md ml-10">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* End of Main Div */}
      </div>
    </>
  );
};

export default CartDetail;
