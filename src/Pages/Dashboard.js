import React from "react";
import DashboardState from "../component/Dashboard/DashboardState";
import DateTime from "../component/DateTime";
import CardBox from "../component/CardBox";
import SaleStatusGraph from "../component/Charts/SaleStatusGraph";
import GraphSection from "../component/Dashboard/GraphSection";
import ActiveSection from "../component/Dashboard/ActiveSection";
import TransactionTable from "../component/TransactionTable";

const Dashboard = () => {
  return (
    <div className="flex flex-col bg-[#f9fbfd] p-1 md:p-4 lg:p-8 xl:p-12">
      <DashboardState />
      <DateTime />

      {/* CardBox section */}
      <div className="flex flex-col md:flex-row mt-2">
        <CardBox />
      </div>

      {/* SaleStatusGraph section */}
      <div className="flex flex-col md:flex-row mt-2">
      
      <SaleStatusGraph />

  
      </div>

      {/* GraphSection section */}
      <div className="flex flex-col md:flex-row mt-2 justify-center ">
        <GraphSection />
      </div>
      <div className="flex flex-col md:flex-row justify-center  bg-green">
      <ActiveSection/>
      </div>

      {/* Recent Order and Most Product List */}
      <div className="flex flex-col md:flex-row  rounded-md">
      
      <TransactionTable/>
       
        {/* <div className="md:w-1/2">
          <div className="bg-white p-4 rounded-md shadow-md">
            <p className="text-lg font-semibold mb-2">Most Product List</p>
            {/* Additional content for the second half */}
          {/* </div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
