import { InputNumber, Progress, Rate } from "antd";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import CustomerView from "./CustomerView";

const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState("Reviews");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex flex-col bg-[#f9fbfd] p-1 md:p-4 lg:p-8 xl:p-10 ">
      {/* Header with view mode buttons */}
      <div className="flex-1 flex items-center md:flex-row p-2 ">
        <div className="w-full flex md:mr-5">
          <h1 className="text-3xl font-bold text-black md:text-4xl p-3">
            Products Details
          </h1>
        </div>
      </div>
      <hr className="w-full text-black md:mb-2 sm:mb-1" />
      {/* main section  */}
      <div className="container mx-auto lg:p-2  ">
        <div className="flex flex-col lg:flex-row md:flex-col mt-0  rounded-lg shadow-md border bg-white ">
          {/* Left side */}
          <div className="lg:mt-0 md:w-full  bg-white  gap-3 w-2/4 rounded-lg  ">
            <div className="flex flex-row md:flex-col  sm:flex-col mt-4 w-[100%] ">
              {/* Left side small image  */}
              <div className="flex md:flex-col flex-col lg:flex-col w-full ml-2  ">
                <div className="mb-1 text-md  text-white text-center py-12  w-[160px] h-[130px] border bg-[#cccccc] border-gray-300  ">
                  168 * 168
                </div>

                <div className="mb-1 text-md  text-white text-center py-12  w-[160px] h-[130px] border bg-[#cccccc] border-gray-300  ">
                  168 * 168
                </div>
                <div className="mb-1 text-md  text-white text-center py-12  w-[160px] h-[130px] border bg-[#cccccc] border-gray-300  ">
                  168 * 168
                </div>
                <div className="mb-1 text-md  text-white text-center py-12  w-[160px] h-[130px] border bg-[#cccccc] border-gray-300  ">
                  168 * 168
                </div>
                <div className="mb-1 text-md  text-white text-center py-12  w-[160px] h-[130px] border bg-[#cccccc] border-gray-300  ">
                  168 * 168
                </div>
              </div>

              {/* Right side Image Box */}

              <div className="flex md:flex-col flex-col lg:flex-col w-full ml-3 mr-2">
                <div
                  className="mb-1 text-md mt-20 text-3xl md:text-4xl mt-34
   text-white text-center py-19 md:py-19 w-full md:w-[420px] lg:w-[420px] h-[420px] md:h-[430px] 
   lg:h-[430px] border bg-[#cccccc] border-gray-300 rounded-lg"
                >
                  440 * 430
                </div>
              </div>
            </div>

            {/* Left Side end  */}
          </div>
          {/* Right  */}
          <div className="lg:w-full lg:mt-0 md:w-full bg-white ml-2 rounded-lg  ">
            <h1 className="text-3xl font-semibold mt-3 ">Oculus VR</h1>
            <div className="text-left  flex-row flex  gap-1 mb-2 ">
              <Rate allowHalf defaultValue={5} />
              <span className="text-sm text-gray-400">
                (449 Customer Reviews)
              </span>
            </div>
            <h1 className="text-2xl font-semibold mt-3 ">
              Select Your Oculus VR
            </h1>

            <div className="flex flex-row gap-2 mt-3">
              <div className="mb-1 text-md  text-white text-center py-6  w-[120px] h-[120px] border bg-[#cccccc] border-gray-300 rounded-lg  ">
                120 *120
              </div>
              <div className="mb-1 text-md  text-white text-center py-6  w-[120px] h-[120px] border bg-[#cccccc] border-gray-300 rounded-lg  ">
                120 *120
              </div>
              <div className="mb-1 text-md  text-white text-center py-6  w-[120px] h-[120px] border bg-[#cccccc] border-gray-300 rounded-lg  ">
                120 *120
              </div>
            </div>
            <div className="flex flex-row gap-9">
              <h2 className=" text-md  text-center  ml-2  ">Oculus Go</h2>
              <h2 className="mb-1 text-md  ">Oculus Quest</h2>
              <h2 className="mb-1 text-md  text-center  ">Oculus RiftS</h2>
            </div>
            {/* Select color  */}
            <div className="flex flex-col md:flex-col  ">
              <h1 className="text-2xl font-bold mt-3 ">Select color</h1>

              <div class="flex flex-wrap mt-3">
                <div class="flex items-center me-2 ">
                  <input
                    id="red-radio"
                    type="radio"
                    value=""
                    name="colored-radio"
                    class="w-5 h-5 bg-[red] focus:bg[red] focus:ring-[red] dark:focus:ring-[purple]-600 hover:bg-[red] "
                  />
                </div>
                <div class="flex items-center me-2">
                  <input
                    id="green-radio"
                    type="radio"
                    value=""
                    name="colored-radio"
                    class="w-5 h-5 bg-[purple] focus:bg-[purple] focus:ring-[purple] dark:focus:ring-[purple]-600 hover:bg-[purple]"
                  />
                </div>
                <div class="flex items-center me-2">
                  <input
                    id="purple-radio"
                    type="radio"
                    value=""
                    name="colored-radio"
                    class="w-5 h-5 bg-[green] focus:bg-[green] focus:ring-[green] dark:focus:ring-[green]-600 hover:bg-[green] "
                  />
                </div>
                <div class="flex items-center me-2">
                  <input
                    id="blue-radio"
                    type="radio"
                    value=""
                    name="colored-radio"
                    class="w-5 h-5 bg-[blue] focus:bg-[blue] focus:ring-[blue] dark:focus:ring-[blue]-600 hover:bg-[blue] "
                  />
                </div>
              </div>
            </div>
            {/* Prices  */}
            <div className="flex flex-col md:flex-col mb-3  ">
              <h1 className="text-2xl font-bold mt-3 ">Prices </h1>
              <div className="flex flex-row gap-9 mt-2">
                <h1 className="ml-2 text-2xl font-bold ">$ 149 USD</h1>
                <h1 className="line-through ml-2 text-2xl text-[red] text-bold  font-bold">
                  $ 149 USD
                </h1>
              </div>
              <p className="text-md text-[black] mr-1">
                If you're developing an application, you'll want to make sure
                you're testing it under conditions that closely simulate a
                production environment. These tests are known as end-to-end
                tests.
              </p>
              {/* Button */}
              <div className="flex flex-row gap-2 mt-4">
                {/* <input type ="number "className=" text-md  text-center  ml-2  " /> */}

                <InputNumber
                  min={1}
                  max={10}
                  defaultValue={1}
                  className="w-[20%] border-[black] p-1 "
                />

                <button
                  type="text"
                  className="mb-1 rounded-lg px-4 text-white  text-md bg-[#7258db] "
                >
                  Wish List
                </button>
                <button className="mb-1 text-md  rounded-lg px-4 text-white text-center bg-[#7258db] ">
                  Add to Cart
                </button>
              </div>
            </div>
            {/* Right side End */}
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-col gap-9  bg-white mt-3">
        <div className="flex flex-row gap-9 ">
          <div className="flex items-center rounded-md mt-2 md:mt-0 md:ml-2 border-[2px] border-[#7557d9] cursor-pointer mb-3">
            <div
              className={`tab  bg-[#7557d9]  p-2 text-white m-0 ${
                activeTab === "Reviews" && "active-tab"
              }`}
              onClick={() => handleTabClick("Reviews")}
            >
              Reviews
            </div>
            <div
              className={`tab p-2 m-0 hover:bg-[#7557d9] hover:text-white ${
                activeTab === "Description" && "active-tab"
              }`}
              onClick={() => handleTabClick("Description")}
            >
              Description
            </div>
            <div
              className={`tab  p-2  hover:bg-[#7557d9] hover:text-white m-0 ${
                activeTab === "About" && "active-tab"
              }`}
              onClick={() => handleTabClick("About")}
            >
              About
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row md:flex-col mt-0   mb-5 ">
        {/* Left side */}
        <div className="lg:mt-0   bg-white  gap-3 w-[45%]  border ">
          <div className="flex flex-col m-3  ">
            <h1 className="text-5xl font-bold mt-3 ml-4 p-2 ">4.5</h1>
            <p className="text-sm  ml-3 mt-2 text-[#858383] ">
              Base on 10,345 Rating{" "}
            </p>
            <Rate allowHalf defaultValue={4.5} className="ml-4 mt-2 mb-3 " />
            {/* Progree Bar */}
            <div class="flex justify-between ml-3">
              <div className="text-left  flex-row flex text-md ">
                <FaStar className="text-[#ffd55d] text-1xl mt-2 mr-2 " />5
              </div>
              <span class="text-sm font-medium text-gary-700 text-[#858383]">
                665
              </span>
            </div>
            <Progress
              percent={88}
              showInfo={false}
              strokeWidth={14}
              strokeColor={"#a0d9b4"}
            />
            {/* 2nd Progree */}
            {/* Progree Bar */}
            <div class="flex justify-between ml-3">
              <div className="text-left  flex-row flex text-md  ">
                <FaStar className="text-[#ffd55d] text-md mt-2 mr-2 " />4
              </div>
              <span class="text-sm font-medium text-gary-700 text-[#858383]">
                237
              </span>
            </div>
            <Progress
              percent={76}
              showInfo={false}
              strokeWidth={14}
              strokeColor={"#9ae8fe"}
            />
            {/* Progree Bar */}
            <div class="flex justify-between ml-3">
              <div className="text-left  flex-row flex text-md ">
                <FaStar className="text-[#ffd55d] text-md mt-2 mr-2 " />3
              </div>
              <span class="text-sm font-medium text-gary-700 text-[#858383]">
                76
              </span>
            </div>
            <Progress
              percent={54}
              showInfo={false}
              strokeWidth={14}
              strokeColor={"#ffe28c"}
            />
            {/* Progree Bar */}
            <div class="flex justify-between ml-3">
              <div className="text-left  flex-row flex text-md ">
                <FaStar className="text-[#ffd55d] text-md mt-2 mr-2 " />2
              </div>
              <span class="text-sm font-medium text-gary-700 text-[#858383]">
                36
              </span>
            </div>
            <Progress
              percent={33}
              showInfo={false}
              strokeWidth={14}
              strokeColor={"#f1c8db"}
            />
            {/* Progree Bar */}
            <div class="flex justify-between ml-3">
              <div className="text-left  flex-row flex text-md  ">
                <FaStar className="text-[#ffd55d] text-md mt-2 mr-2 " />1
              </div>
              <span class="text-sm font-medium text-gary-700 text-[#858383]">
                16
              </span>
            </div>
            <Progress
              percent={20}
              showInfo={false}
              strokeWidth={14}
              strokeColor={"#cf9eac"}
            />
          </div>

          {/* Other list  */}
          <div className="flex flex-col m-3 ">
            <h1 className="text-xl font-bold mb-2 mt-2">What Customers Like</h1>
            <table className="border-collapse w-full">
              <tbody>
                <tr>
                  <td className="border p-2 text-[#a0d9b4] text-md text-bold text-center">
                    1
                  </td>
                  <td className=" p-2 ">Fun Factor</td>
                  <td className=" p-2">72 Votes</td>
                </tr>
                <tr>
                  <td className="border p-2 text-[#a0d9b4] text-md text-bold text-center">
                    2
                  </td>
                  <td className=" p-2">Great Value</td>
                  <td className=" p-2">35 votes</td>
                </tr>
                <tr>
                  <td className="border p-2 text-[#a0d9b4] text-md text-bold text-center">
                    3
                  </td>
                  <td className=" p-2">e Bazar</td>
                  <td className=" p-2">52 votes</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Other list  */}

          <div className="flex flex-col m-3 ">
            <h1 className="text-xl font-bold mb-2 mt-2">
              What Need Improvment{" "}
            </h1>
            <table className="border-collapse w-full">
              <tbody>
                <tr>
                  <td className="border p-2 text-[#ff4c4c] text-md text-bold text-center">
                    1
                  </td>
                  <td className=" p-2 ">Value for Money </td>
                  <td className=" p-2">72 Votes</td>
                </tr>
                <tr>
                  <td className="border p-2 text-[#ff4c4c] text-md text-bold text-center">
                    2
                  </td>
                  <td className=" p-2">Customer Services</td>
                  <td className=" p-2">35 votes</td>
                </tr>
                <tr>
                  <td className="border p-2 text-[#ff4c4c] first-line:text-md text-bold text-center">
                    3
                  </td>
                  <td className=" p-2">Product Item </td>
                  <td className=" p-2">52 votes</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* End of left side  */}
        </div>

        {/* Right Side */}
        <div className="lg:w-full lg:mt-0 md:w-full bg-white ml-2   w-2/4 ">
          <CustomerView />
        </div>
      </div>

      {/* Right Side End  */}
      <div className="flex justify-between mr-4 mb-4">
        <div className="text-sm text-white">j</div>
        <div className="flex items-end justify-center text-right space-x-2 bg-[#f0f0f0] mr-4 shadow-md">
          <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-base h-10">
              <li>
                <a
                  href="/"
                  className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-[#7557d9] border border-gray-300 hover:[#7557d9] hover:text-gray-700 dark:bg-[#7557d9] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-[#7557d9] dark:hover:text-white"
                >
                  {" "}
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="3"
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main div closed */}
    </div>
  );
};

export default ProductDetail;
