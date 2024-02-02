import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

const BarChart = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    type: 'bar',
                    label: 'watch',
                    backgroundColor:'#ff4a7a',
                    data: [45, 35, 22, 38, 70, 86, 62]
                },
                {
                    type: 'bar',
                    label: 'Cloth',
                    backgroundColor: '#e8df89',
                    data: [21, 19, 24, 35, 37, 65, 74]
                },
                {
                    type: 'bar',
                    label: 'Toy',
                    backgroundColor: '#7557d9',
                    data: [41, 52, 24, 74, 23, 21, 32]
                },
                {
                    type: 'bar',
                    label: 'Phone',
                    backgroundColor:'#a6a6a4',
                    data: [32, 44, 57, 47, 32, 48, 29]
                }

            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);
  return (
    <div className="card bg-white p-2 lg:p-5 ">
        <h1 className='font-bold text-lg'>Top Selling</h1>
    {/* <Chart type="bar " options={chartOptions} data={chartData} className='h-[40%] p-0 ' /> */}
    <Chart type="bar" data={chartData} options={chartOptions} />
  </div>
  );
}

export default BarChart;
