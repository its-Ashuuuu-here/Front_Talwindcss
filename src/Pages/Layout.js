import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/SideBar";
import SecondHeader from "../component/Header/SecondHeader";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row sm:flex-col bg-neutral-100 min-h-screen">
        {/* Sidebar */}
        <div className="bg-[#f9fbfd] md:w-60 sm:w-50 md:flex-none">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-[#f9fbfd] md:w-60 sm:w-50">
          {/* SecondHeader */}
          <SecondHeader />
          
          {/* Outlet (Main content) */}
          <div className="p-4 md:p-8 lg:p-12 xl:p-16"> 
            {/* Outlet (Main content) */}
            {<Outlet />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
