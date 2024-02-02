import React from 'react';
import ActiveUser from '../Charts/ActiveUser';

import ExpenseBarChart from '../Charts/ExpenseBarChart';

const ActiveSection = () => {
  return (
    <div className="container mx-auto p-4 lg:p-6">
      <div className="flex flex-col lg:flex-row md:flex-col mt-0 gap-5">
      <div className="w-full lg:w-1/3 lg:mt-0 ">
      
         <ActiveUser/>
        </div>
        <div className="w-full lg:w-2/3 mb-4 lg:mb-0  ">
        <ExpenseBarChart/>
        </div>

        
      </div>
      </div>
  ); 
}

export default ActiveSection;
