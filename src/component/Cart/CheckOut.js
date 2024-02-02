import { Radio } from "antd";
import React from "react";
import { FaCcMastercard } from "react-icons/fa";
const CheckOut = () => {
  return (
    <>
      <div className="flex flex-col p-1 md:p-4 lg:p-8 xl:p-10  bg-[#f9fbfd]">
        {/* Header with view mode buttons */}
        <div className="flex-1 flex items-center md:flex-row p-2 ">
          <div className="w-full flex md:mr-5 ">
            <h1 className="text-2xl font-bold text-black md:text-3xl p-3">
              CheckOut Details
            </h1>
          </div>
        </div>
        <hr className="w-full text-black md:mb-2 sm:mb-1" />
        {/* Main section start */}
        <div className="container mx-auto lg:p-2  ">
          <div className="flex flex-col lg:flex-row md:flex-col mt-0 gap-2 ">
            {/* left Side */}
            <div className="lg:w-4/4 lg:mt-0 md:w-full  border rounded-lg shadow-sm bg-[#ffffff]">
              <div className="lg:w-full m-3 ">
                <h2 className="text-1xl font-semibold mt-1 ml-1 ">
                  Personal Details
                </h2>
              </div>

              <hr className=" w-full text-black md:mb-2 sm:mb-1" />
              <form action="#" className="flex flex-col  ">
                <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-2 ">
                  {/* First Name Input */}
                  <div className="mb-2 text-sm font-semibold text-[#232324] ">
                    <label className="block m-2">First Name </label>
                    <input
                      type="text"
                      id="Name"
                      name="Name"
                      className="rounded-md border mr-1 w-[50vh]"
                    />
                  </div>

                  {/* Last name*/}
                  <div className="mb-2 text-sm font-semibold text-[#232324]">
                    <label className="block m-2">Last Name </label>
                    <input
                      type="text"
                      id="LName"
                      name="LName"
                      className="rounded-md border mr-1 w-[50vh]"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-2 ">
                  {/* Phone */}
                  <div className="mb-2 text-sm font-semibold text-[#232324] ">
                    <label className="block m-2">Phone Number </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="rounded-md border mr-1 w-[50vh]"
                    />
                  </div>

                  {/* Email*/}
                  <div className="mb-2  text-sm font-semibold text-[#232324]">
                    <label className="block m-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="rounded-md border mr-1 w-[50vh]"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-2 w-full">
                  {/* Shipping */}
                  <div className="mb-2 text-sm font-semibold text-[#232324] ">
                    <label className="block m-2">Sipping Address </label>
                    <input
                      type="text"
                      id="shipAddress"
                      name="shipAddress"
                      className="rounded-md border mr-1 w-[100vh]"
                    />
                  </div>
                </div>

                {/* City and Post Code */}
                <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-2 ">
                  {/* City */}
                  <div className="mb-2 text-sm font-semibold text-[#232324] ">
                    <label className="block m-2">City </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="rounded-md border mr-1 w-[50vh]"
                    />
                  </div>

                  {/* Email*/}
                  <div className="mb-2 text-sm font-semibold text-[#232324]">
                    <label className="block m-2">Post Code</label>
                    <input
                      type="text"
                      id="pcode"
                      name="pcode"
                      className="rounded-md border mr-1 w-[50vh]"
                    />
                  </div>
                </div>

                <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-2 ">
                  {/* Country*/}
                  <div className="mb-2  text-[#232324] ">
                    <label className="block m-2 text-sm font-semibold">
                      Country
                    </label>

                    <select
                      id="small"
                      className="rounded-md border mr-1 w-[50vh] block  p-2 mb-6 text-md"
                    >
                      <option selected>Choose a country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>

                  {/* State*/}
                  <div className="mb-2 text-md text-[#232324]">
                    <label className="block m-2 text-sm font-semibold ">
                      State
                    </label>
                    <select
                      id="small"
                      className="rounded-md border mr-1 w-[50vh] block  p-2 mb-6 text-md"
                    >
                      <option selected>Choose a State</option>
                      <option value="AL">Alabama</option>
                      <option value="Ak">Alaska</option>
                      <option value="CA">California</option>
                      <option value="CT">Connecticut</option>
                    </select>
                  </div>
                </div>

                <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-2 w-full">
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="checkbox"
                      value=""
                      id="exampleCheck2"
                    />
                    <p className="text-sm text-[#000000] hover:cursor-pointer font-semibold">
                      My delivery and Shipping address are the same
                    </p>
                  </div>
                </div>

                <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-2 w-full mb-4 mt-3">
                  <button className="bg-[#7557d9] hover:bg-[#9c81f7] text-white font-bold py-2 px-5 rounded-lg">
                    Save
                  </button>
                </div>
              </form>
            </div>

            {/* right  side */}
            <div className="lg:w-2/3 lg:mt-0 md:w-full    ">
              <div className="  border bg-white m-1 rounded-lg mb-2">
                <div className="lg:w-full m-3 ">
                  <h1 className="text-1xl font-semibold">Pricing</h1>
                </div>
                <hr className=" w-full text-black md:mb-2 sm:mb-1" />

                <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-2 ">
                  {/* Left Text */}
                  <div className=" text-sm text-[#232324]  w-[50%] p-2 ">
                    Subtotal Price:
                  </div>

                  {/* RIght text*/}
                  <div className=" text-sm text-[#232324] text-right  w-[50%] p-2 ">
                    $1096.00
                  </div>
                </div>
                <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2  mr-2  ">
                  {/* Left Text */}
                  <div className=" text-sm  text-[#ff5050]  w-[50%] p-2 ">
                    Shipping Cost(+):
                  </div>

                  {/* RIght text*/}
                  <div className=" text-sm text-[#ff5050] text-right w-[50%] p-2  ">
                    $12.00
                  </div>
                </div>
                <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2  mr-2  ">
                  {/* Left Text */}
                  <div className=" text-sm  text-[#65db55]  w-[50%] p-2 ">
                    Discount Price:
                  </div>

                  {/* RIght text*/}
                  <div className=" text-sm text-[#65db55] text-right w-[50%] p-2  ">
                    $10.00
                  </div>
                </div>
                <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-2 ">
                  {/* Left Text */}
                  <div className=" text-sm text-[#232324]  w-[50%] p-2 ">
                    Tax(18%):
                  </div>

                  {/* RIght text*/}
                  <div className=" text-sm text-[#232324] text-right  w-[50%] p-2 ">
                    $198.00
                  </div>
                </div>

                <hr className=" w-full text-black md:mb-2 sm:mb-1 mb-2 mt-4" />

                <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-2 mb-3 ">
                  {/* Left Text */}
                  <div className=" text-lg text-[#232324]  w-[50%] p-2 ">
                    Total payable
                  </div>

                  {/* RIght text*/}
                  <div className=" text-lg text-[#232324] text-right  w-[50%] p-2 ">
                    $1296.00
                  </div>
                </div>
              </div>
              {/* Second debit information */}
              <div className="  border bg-white m-1 rounded-lg mb-2 mt-3 ">
                <div className="lg:w-full m-3 flex ">
                  <FaCcMastercard className="mr-2 text-1xl" />
                  <h1 className="text-1xl font-semibold">Debit/Credit card</h1>
                </div>

                <hr className=" w-full text-black md:mb-2 sm:mb-1" />

                {/* from start */}
                <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-2">
                  {/* Enter card */}
                  <div className="mb-2 text-sm font-semibold text-[#232324] ">
                    <label className="block m-2">Enter card Number </label>
                    <input
                      type="text"
                      id="cardNum"
                      name="cardNum"
                      className="rounded-md border w-[60vh] "
                    />
                  </div>

                  {/*  from end*/}
                </div>
                <form action="#" className="flex flex-col  ">
                  <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-2 ">
                    {/* First Name Input */}
                    <div className="mb-2 text-sm font-semibold text-[#232324] ">
                      <label className="block m-2">Valid date</label>
                      <input
                        type="Date"
                        id="Name"
                        name="Name"
                        className="rounded-md border mr-1 w-[30vh]"
                      />
                    </div>

                    {/* CVV*/}
                    <div className="mb-2 text-sm font-semibold text-[#232324]">
                      <label className="block m-2">CVV </label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        className="rounded-md border mr-1 w-[30vh]"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-2 ">
                    <Radio className="m-3 text-md font-semibold">
                      Net banking
                    </Radio>
                  </div>
                  <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-2">
                    <div className="mb-2 text-sm font-semibold text-[#232324] ">
                      <label className="block m-2">Enter Your Name </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="rounded-md border w-[60vh] "
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-2">
                    {/* First Name Input */}
                    <div className="mb-2 text-sm font-semibold text-[#232324] ">
                      <label className="block m-2">Bank Name</label>
                      <input
                        type="text"
                        id="bName"
                        name="bName"
                        className="rounded-md border mr-1 w-[30vh]"
                      />
                    </div>

                    {/* CVV*/}
                    <div className="mb-2 text-sm font-semibold text-[#232324]">
                      <label className="block m-2">IFC Code </label>
                      <input
                        type="text"
                        id="ifc"
                        name="ifc"
                        className="rounded-md border mr-1 w-[30vh]"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-col lg:flex-row  ml-2 gap-2 mr-2 w-full mb-4 mt-3">
                    <button className="bg-[#7557d9] hover:bg-[#9c81f7] text-white  py-2 px-5 rounded-lg">
                      Pay Now
                    </button>
                  </div>
                </form>
              </div>

              {/* Right side end  */}
            </div>
            {/* main l+R end  */}
          </div>
        </div>

        {/* Main div closed */}
      </div>
    </>
  );
};

export default CheckOut;
