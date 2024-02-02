import React, { useState } from "react";
// import { Calendar } from "primereact/calendar";
import { FaFilter } from "react-icons/fa";

const DateTime = () => {
  const [activeTab, setActiveTab] = useState("today");
  //   const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-20 px-4 pb-3 mt-3">
      <div className="flex items-center rounded-md mt-2 md:mt-0 md:ml-2 border border-purple-700 cursor-pointer">
         
          <div
            className={`tab  bg-[#7557d9] p-2 text-white m-0 ${
              activeTab === "today" && "active-tab"
            }`}
            onClick={() => handleTabClick("today")}
          >
            Today
          </div>
          <div
            className={`tab p-2 m-0 hover:bg-[#7557d9] hover:text-white ${
              activeTab === "week" && "active-tab"
            }`}
            onClick={() => handleTabClick("week")}
          >
            Week
          </div>
          <div
            className={`tab  p-2  hover:bg-[#7557d9] hover:text-white m-0 ${
              activeTab === "month" && "active-tab"
            }`}
            onClick={() => handleTabClick("month")}
          >
            Month
          </div>
          <div
            className={`tab mr-2  hover:bg-[#7557d9] hover:text-white p-2 m-0 ${
              activeTab === "year" && "active-tab"
            }`}
            onClick={() => handleTabClick("year")}
          >
            Year
          </div>
        </div>
        
        <div
          className="bg-[#F8F9FC]  h-12 md:w-48 w-full outline-none pl-[13px] rounded-lg  border-[#c0bfbf]
                    placeholder:text-[14px] leading-[20px] font-normal flex items-center  relative"
        >
          
          <input type="date" 
            value={date}
            onChange={(e) => setDate(e.value)}
            placeholder="mm/dd/yyyy"
            className=" rounded-sm border-[#c0bfbf] placeholder:text-[14px] leading-[20px] font-normal w-full" 
          />
          <div className="bg-[#7557d9] p-2 mr-0  h-[38px] rounded-sm text-white cursor-pointer relative">
            <FaFilter />
          </div>
        </div>
        </div>
      
    </>
  );
};

export default DateTime;
