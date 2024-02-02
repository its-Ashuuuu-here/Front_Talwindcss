import React from "react";
import verification1 from "../../images/2verfication1.png";
import LoginForm1 from "../../images/loginFrom.png";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-col xl:flex-col sm:flex justify-center items-center p-5 max-w-full bg-[#f9fbfd]">
      <div className="p-4 rounded-md flex flex-col md:flex-row lg:flex-row xl:flex-row sm:flex w-full max-w-3xl mt-3 sm:mt-10">
        <div className="w-full mt-1 p-2">
          <img src={verification1} alt="Left Side" className="ml-36" />
          <h1 className="text-2xl font-normal mt-4 m-3 justify-center text-center">
            A Few Clicks is all it takes.
          </h1>
          <img
            src={LoginForm1}
            alt="Left Side"
            className="mt-3 w-[100vh] h-[50vh]"
          />
        </div>

        <div className="ml-10 w-full border-[2px] border-[#eaecee] bg-white p-3 px-4 md:ml-0">
          <div className="items-center justify-center text-center mt-0 ">
            <h1 className="ml-15 text-3xl font-bold text-center justify-center">
              Sign in
            </h1>

            <p className="text-center"> Free access to our dashboard</p>
            <button
              className="ml-20 mt-4 flex items-center justify-center bg-white border
              border-gray-300 p-2 rounded-md cursor-pointer shadow-md hover:bg-gray-100"
            >
              <img
                className="mr-2"
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt="Google Logo"
                width="20"
                height="20"
              />
              <span className="text-sm font-medium">Sign in with Google</span>
            </button>
          </div>

          <div
            className="my-2 flex items-center before:mt-0.5 before:flex-1 before:border-t
            bg-white before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"
          >
            <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
              OR
            </p>
          </div>

          <form action="#" className="flex flex-col gap-2 px-3">
            <label className="mb-2 text-md text-[#232324]">Email address</label>
            <input
              type="email"
              label="Email address"
              placeholder="name@example.com"
              className="rounded-md border"
            />

            <label className="text-[#232324]">
              Password
              <span className="text-sm text-[#e5c416] text-smibold md:text-right md:ml-24  mt-1 ">
                <Link to="/forget-password" className=" hover:no-underline hover:text-[#e5c416]" >Forgot password?</Link>
              </span>
            </label>
            <input
              type="password"
              label="Password"
              className="rounded-md border"
              placeholder=".................."
             />

            <div className="mb-2 flex items-center justify-between"></div>

            <div className="mb-6 flex items-center justify-between">
              <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="checkbox"
                  value=""
                  id="exampleCheck2"
                />
                <p className="text-sm text-[#171718] hover:cursor-pointer">
                  Remember me
                </p>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="mt-0">
                <button
                  type="button"
                  className="rounded px-7 pb-2.5 pt-2 text-sm font-medium uppercase leading-normal
                  border border-gary bg-[#e9f0f0] shadow-md"
                >
                  <Link to="/" className="hover:text-black hover:no-underline">Login</Link>
                </button>
              </div>
              <p className="mb-0 mt-2\ pt-1 text-sm font-semibold">
                Don't have an account?
                <Link
                  to="/create-account"
                  className="text-[#e5c416] transition duration-150 ease-in-out hover:text-danger-600
                   focus:text-danger-600 active:text-danger-700 hover:no-underline hover:text-[#e5c416]"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
