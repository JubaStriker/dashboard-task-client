import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Purchases',
        },
    },
};

const min = 300; // Minimum value
const max = 500; // Maximum value
const random1 = Math.floor(Math.random() * (max - min + 1)) + min;
const random2 = Math.floor(Math.random() * (max - min + 1)) + min;
const random3 = Math.floor(Math.random() * (max - min + 1)) + min;
const random4 = Math.floor(Math.random() * (max - min + 1)) + min;


export const data = {
    labels: ['Status', 'New users', 'Chats', 'Feedbacks'],
    datasets: [
        {
            label: 'Purchases',
            data: [random1, random2, random3, random4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
            ],
            borderWidth: 1,
        },
    ],
};


const RadarChart = () => {
    return (
        <PolarArea data={data} options={options} className='bg-white' />
    );
};

export default RadarChart;