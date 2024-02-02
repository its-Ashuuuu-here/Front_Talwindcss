import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

const LineChart = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [
                {
                    label: 'Online Shopping : 11',
                    data: [65, 59, 80, 56, 55, 40],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('#40acfc'),
                    tension: 0.4
                },
                {
                    label: 'Offline Shopping : 14',
                    data: [28, 48, 40, 19, 86, 27],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('#5cefc1'),
                    tension: 0.4
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor,
                        usePointStyle: true,
                        margin: 0,
                        justify: 'right',
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
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
        <div className="container mx-auto p-4 lg:p-4">
            <div className="w-full lg:w-full mb-4 lg:mb-0 lg:mr-4">
                <div className="card p-4 lg:p-6 border-none">
                    <h1 className='font-bold text-lg'>Top Selling</h1>
                    <Chart type="line" data={chartData} className='h-[40%] p-0' />
                </div>
            </div>
        </div>
    );
}

export default LineChart;
