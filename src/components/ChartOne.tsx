'use client'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
  
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import React from 'react'
import { bd } from '@/lib/data';

function ChartOne() {


  const hostNames = bd.map(item=>item.nombrePro)

  const estados = bd?.map(item=>item.estado ? 1 : 0)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Preview Programs',
        
      },
    },
  };
  const dataGrafi = {
    labels: [...hostNames],
    datasets: [
        {
        label: 'Program',
        data: [...estados],
        borderColor: '#a3e635',
        backgroundColor: '#a3e635',
        },
    ],
  };

  return (

    <Line options={options} data={dataGrafi} className='w-full h-full flex justify-center items-' />
  )
}

export default ChartOne