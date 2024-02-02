import React from "react";
import verification1 from "../../images/2verfication1.png";
import b404 from "../../images/B404.png";
import { Link } from "react-router-dom";
import p404 from "../../images/404.png";
const Error404 = () => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-col xl:flex-col sm:flex justify-center items-center p-10 max-w-full bg-[#f9fbfd]">
      <div className="rounded-md flex flex-col md:flex-row lg:flex-row xl:flex-row sm:flex w-full max-w-3xl mt-3 sm:mt-10">
        <div className="w-full mt-1 p-2">
          <img src={verification1} alt="Left Side" className="ml-36" />
          <h1 className="text-2xl font-normal mt-4 m-3 justify-center text-center">
            A Few Clicks is all it takes.
          </h1>
          <img src={b404} alt="Left Side" className="mt-3 w-[100vh] h-[50vh]" />
        </div>

        <div className="ml-5 w-full border-[2px] border-[#eaecee] bg-white p-3 px-3 md:ml-0">
          <div className="items-center justify-center text-center mt-0">
            <img src={p404} alt="right side" />
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <h1 className="text-1xl font-bold text-[#171718] text-center hover:cursor-pointer mt-4 ml-3">
                OOP! PAGE NOT FOUND
              </h1>
              <p className="text-sm font-normal text-[#171718] justify-content text-center hover:cursor-pointer mt-3 ">
                Sorry, the page you are looking for does not exist.if you think
                something is brlken,report a problem.
              </p>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <div className="mt-0">
              <button
                type="button"
                className="rounded px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal bg-[#e9f0f0] shadow-md "
              >
                <Link to="/" className="text-[#171718] hover:decoration-none">
                  Back to HomePage
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
