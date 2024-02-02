import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const SaleStatusGraph = () => {
  useEffect(() => {
    const chartDom = document.getElementById('barChart');
    const myChart = echarts.init(chartDom);

    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: ['Expenses', 'Income'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'value',
          axisLabel: {
            formatter: '{value}%',
          },
        },
      ],
      yAxis: [
        {
          type: 'category',
          axisTick: {
            show: false,
          },
          data: ['0-9', '10-20', '21-35', '36-40', '45-50', '51-60', '70+'],
          inverse: true,
        },
      ],
      series: [
        {
          name: 'Purchases',
          type: 'bar',
          stack: 'Total',
          label: {
            show: false,
          },
          emphasis: {
            focus: 'series',
          },
          itemStyle: {
            color: '#e8df89', 
          },
          data: [1, 2, 3, 4, 5, 4, 3, 5, 4],
        },
        {
          name: 'Sell',
          type: 'bar',
          stack: 'Total',
          label: {
            show: false,
            position: 'left',
          },
          emphasis: {
            focus: 'series',
          },
          itemStyle: {
            color: '#7557d9', 
          },
          data: [-1, -2, -3, -4,  -5, -4, -3, -5, -4],
        },
      ],
    };

    option && myChart.setOption(option);

    // Clean up the chart when the component is unmounted
    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    // <div className="w-full md:w-3/4 lg:w-2/4 xl:w-1/3 mb-4 md:mb-0 lg:mr-4 justify-center items-center bg-white p-5">
    //   <h1 className="font-bold text-lg mb-4">Top Selling vv Status</h1>
    //   <div id="barChart" className="w-full h-72" />
    // </div>
     <div className="container mx-auto mt-2">
     <div className="w-[90%] lg:w-full mb-2 lg:mb-0 lg:mr-4">
         <div className="card p-4 lg:p-5 border-none">
             <h1 className='font-bold text-lg'>Top Selling</h1>
             <div id="barChart" className="w-full h-72" />
         </div>
     </div>
 </div>
  );
};

export default SaleStatusGraph;
