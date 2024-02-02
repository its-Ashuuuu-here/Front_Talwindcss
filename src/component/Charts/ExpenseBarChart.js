import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';


const ExpenseBarChart = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          type: 'bar',
          backgroundColor: '#e8df89',
          data: [1131, 1180, 1114, 1109, 1112, 1061, 1337, 1014, 1119, 1251, 1137, 1289],
        },
      
        
      ],
    };

    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          display: false,
        },
        tooltips: {
          mode: 'index',
          intersect: false,
          
        },
        
       
       
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          stacked: true,
          position: 'Top',
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
          Label: {
            show: true,
            position: 'top'
          },
          
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card bg-white p-2 lg:p-5 w-4/4">
      <h1 className='font-bold text-2xl p-1'>Top Selling</h1>
      <h1 className='font-normal text-4xl p-1'>$1105.5</h1>
      <h1 className='font-light text-md mb-4'>Avg Expense costs All Month's</h1>
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
}

export default ExpenseBarChart;
