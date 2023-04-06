import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const random1 = Math.floor(Math.random() * 101);
const random2 = Math.floor(Math.random() * 101);
const random3 = Math.floor(Math.random() * 101);
const random4 = Math.floor(Math.random() * 101);
const random5 = Math.floor(Math.random() * 101);
const random6 = Math.floor(Math.random() * 101);
const random7 = Math.floor(Math.random() * 101);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Sales Details',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Online sales',
            data: [random1, random2, random3, random4, random5, random6],
            backgroundColor: 'rgba(135, 206, 235, 1)',
        },
        {
            label: 'Offline sales',
            data: [random3, random2, random6, random4, random1, random7],
            backgroundColor: 'rgba(53, 162, 235, 1)',
        },
    ],
};

const BarChart = () => {
    return (
        <Bar options={options} data={data} className='bg-white px-6 py-4' />
    );
};

export default BarChart;