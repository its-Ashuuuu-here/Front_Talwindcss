import React from "react";
import verification1 from "../../images/2verfication1.png";
import verfication2 from "../../images/verfication2.png";
import { Link } from "react-router-dom";
import verfication3 from "../../images/verfication.png";
const Verfication = () => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-col xl:flex-col sm:flex justify-center items-center p-10 max-w-full bg-[#f9fbfd]">
      <div className="p-4 rounded-md flex flex-col md:flex-row lg:flex-row xl:flex-row sm:flex w-full max-w-3xl mt-1 sm:mt-10">
        <div className="w-full mt-5 p-2">
          <img src={verification1} alt="Left Side" className="ml-36" />
          <h1 className="text-2xl font-normal mt-4 m-3 justify-center text-center">
            A Few Clicks is all it takes.
          </h1>
          <img
            src={verfication2}
            alt="Left Side"
            className="mt-3 w-[100vh] h-[50vh]"
          />
        </div>

        <div className="ml-10 w-full border-[2px] border-[#eaecee] bg-white p-4 px-5 md:ml-0">
          <div className="items-center justify-center text-center mt-1">
            <img
              src={verfication3}
              alt="right side img"
              className="mr-2 mt-2 w-50  ml-20 text-center items-center justify-center"
            />
          </div>
          <div className="mb-2 block min-h-[1.5rem] mt-3">
            <h1 className="text-3xl font-normal pl-18 text-[#171718] text-center hover:cursor-pointer ml-3">
              Verification
            </h1>
            <p className="text-sm font-normal text-[#171718]  hover:cursor-pointer mt-3 justify-center text-center w-full ">
              We send verfication code to your Email.Enter the code from the
              email in the field below
            </p>
          </div>

          <form action="#" className="flex flex-col gap-1">
            <div className="flex gap-3">
              <div className="mb-3 text-md text-[#232324] mt-4">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="----"
                  className="rounded-md border  w-[100%] placeholder:text-[20px] palceholder:text-center focus:outline-none placeholder:font-bold"
                />
              </div>
              <div className="mb-3 text-md text-[#232324] mt-4">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="----"
                  className="rounded-md border  w-[100%] placeholder:text-[20px] palceholder:text-center focus:outline-none placeholder:font-bold"
                />
              </div>
              <div className="mb-3 text-md text-[#232324] mt-4">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="----"
                  className="rounded-md border  w-[100%] placeholder:text-[20px] palceholder:text-center focus:outline-none placeholder:font-bold"
                />
              </div>
              <div className="mb-3 text-md text-[#232324] mt-4">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="----"
                  className="rounded-md border  w-[100%] placeholder:text-[20px] palceholder:text-center focus:outline-none placeholder:font-bold"
                />
              </div>
            </div>

            <div className="mb-2 flex items-center justify-between"></div>

            {/* <div className="mb-6 flex items-center justify-between">
        
              <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
             
              </div>

            </div> */}

            <div className="text-center lg:text-left ">
              <div className="mt-0">
                <button
                  type="button"
                  className="px-7 pb-2.5 pt-3 mt-3 text-sm font-medium uppercase leading-normal
                 bg-[#e9f0f0] shadow-md hover:text-black rounded-sm"
                >
                  <Link
                    to="/login"
                    className="hover:cursor-pointer hover:decoration-none hover:text-black hover:no-underline "
                  >
                    VERIFY MY ACCOUNT
                  </Link>
                </button>
              </div>
              <p className="mb-0 mt-4 pt-1 text-sm font-semibold">
                Haven't received it ?
                <Link
                  to={"/forgetForm"}
                  className="text-[#e5c416] transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                >
                  Resend the new code
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verfication;
