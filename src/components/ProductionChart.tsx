import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ProductionChart: React.FC = () => {
  const chartData = {
    labels: ['09:00', '09:05', '09:10', '09:15', '09:20', '09:25', '09:30'],
    datasets: [{
      label: 'Karung per 5 Menit',
      data: [12, 15, 18, 14, 13, 16, 17],
      borderColor: 'rgb(59, 130, 246)',
      tension: 0.1,
    }],
  };

  return (
    <div className="col-span-12 bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Grafik Produksi Real-Time</h2>
      <div className="h-[300px]">
        <Line 
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: { beginAtZero: true }
            }
          }}
        />
      </div>
    </div>
  );
};

export default ProductionChart;
