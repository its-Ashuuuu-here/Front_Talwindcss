import React from 'react';
import LineChart from '../Charts/LineChart';
import BarChart from '../Charts/BarChart';
import ProgressB from '../Charts/ProgressB';
import MapCom from '../Charts/MapCom';

const GraphSection = () => {
  return (
    <div className="container mx-auto p-4 lg:p-6">
      <div className="flex flex-col lg:flex-row md:flex-col mt-0">

        <div className="w-full lg:w-2/3 mb-2 lg:mb-0 lg:mr-4 mt-0 bg-white">
          <LineChart />
        </div>

        <div className="w-full lg:w-1/3 lg:mt-0 bg-white">
          <h1 className='text-1xl font-semibold m-3'>Our Branch Location and Revenue </h1>
          <MapCom />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-1  ">

        <div className="w-full lg:w-2/3 lg:mb-0 lg:mr-4 bg-white mr-2">
          <BarChart />
        </div>

        <div className="w-full lg:w-1/3 lg:mt-0 bg-white h-[68vh] ">
          <ProgressB />
        </div>
      </div>
    </div>
  );
}

export default GraphSection;
