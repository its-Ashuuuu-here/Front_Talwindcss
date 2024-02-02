import React from "react";
import verification1 from "../../images/2verfication1.png";
import forgetPass from "../../images/forgetPass.png";
import { Link } from "react-router-dom";
import forgetPass1 from "../../images/forgetpass1.png";
const ForgetForm = () => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-col xl:flex-col sm:flex justify-center items-center p-5 max-w-full bg-[#f9fbfd]">
      <div className="p-4 rounded-md flex flex-col md:flex-row lg:flex-row xl:flex-row sm:flex w-full max-w-3xl mt-1 sm:mt-10">
        <div className="w-full mt-5 p-2">
          <img src={verification1} alt="Left Side" className="ml-36 " />
          <h1 className="text-2xl font-normal mt-4 m-3 justify-center text-center">
            A Few Clicks is all it takes.
          </h1>
          <img
            src={forgetPass} 
            alt="Left Side"
            className="mt-10 w-[100vh] h-[50vh]"
          />
        </div>

        <div className="ml-10 w-full  border-[2px] border-[#eaecee] bg-white p-3 px-4 md:ml-0">
          <div className="items-center justify-center text-center mt-0 w-full">
            <img
              src={forgetPass1}
              alt="right side img"
              className="mr-2 mt-2 w-[110vh] ml-4"
            />
          </div>
          <div className="mb-2 block min-h-[1.5rem]">
            <h1 className="text-3xl font-normal pl-18 text-[#171718] text-center hover:cursor-pointer ml-3">
              Forgot Password ?
            </h1>
            <p className="text-sm font-normal text-[#171718]  hover:cursor-pointer mt-3 justify-center text-center w-full ">
              Enter the email address you used when you joined and we'll send
              you instructions to reset your password.
            </p>
          </div>

          <form action="#" className="flex flex-col gap-2 ">
            <label className="mb-2 text-md text-[#232324] mt-3">
              Email address
            </label>
            <input
              type="email"
              label="Email address"
              placeholder="name@example.com"
              className="rounded-md border"
            />

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
                    to="/Verfication"
                    className="hover:cursor-pointer hover:decoration-none hover:text-black hover:no-underline "
                  >
                    Sign In
                  </Link>
                </button>
              </div>
              <p className="mb-0 mt-2 pt-1 text-sm font-bold text-[#e5c416] ">
                <Link
                  to={"/login"}
                  className="hover:cursor-pointer decoration-none hover:text-[#e5c416] hover:no-underline "
                >
                  Back to sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetForm;
