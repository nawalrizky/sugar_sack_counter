import React, { useState, useEffect } from 'react';
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

interface WeightData {
  totalWeight: number;
  sackCount: number;
  sacksPerMinute: number;
  status: 'Running' | 'Paused' | 'Error';
  dailyTarget: number;
}

const Dashboard: React.FC = () => {
  const [weightData, setWeightData] = useState<WeightData>({
    totalWeight: 0,
    sackCount: 0,
    sacksPerMinute: 0,
    status: 'Running',
    dailyTarget: 1000
  });

  const [chartData, setChartData] = useState<number[]>([]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => [...prev, Math.floor(Math.random() * 10)].slice(-20));
      setWeightData(prev => ({
        ...prev,
        sackCount: prev.sackCount + Math.floor(Math.random() * 3),
        sacksPerMinute: Math.floor(Math.random() * 10)
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const lineChartData = {
    labels: Array(20).fill('').map((_, i) => `${i + 1}s`),
    datasets: [{
      label: 'Karung per Menit',
      data: chartData,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Video Feed - Now full width */}
      <div className="mb-6">
        <div className="bg-gray-900 rounded-lg w-full aspect-[16/9] flex items-center justify-center">
          <span className="text-white">Live Feed Video</span>
        </div>
      </div>

      {/* Stats Grid - Now below video */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current Sack Count */}
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-600">Jumlah Karung Terkini</h3>
          <div className="text-4xl font-bold text-blue-600">{weightData.sackCount}</div>
        </div>

        {/* System Status */}
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-600">Status Sistem</h3>
          <div className={`text-lg font-bold ${
            weightData.status === 'Running' ? 'text-green-500' :
            weightData.status === 'Paused' ? 'text-yellow-500' : 'text-red-500'
          }`}>
            {weightData.status}
          </div>
        </div>

        {/* Speed Average */}
        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-600">Rata-rata Kecepatan</h3>
          <div className="text-lg font-bold text-purple-600">
            {weightData.sacksPerMinute} karung/menit
          </div>
        </div>

        {/* Real-time Graph - Spans full width */}
        <div className="bg-white p-4 rounded-lg shadow col-span-full">
          <h3 className="text-lg font-semibold mb-4">Grafik Real-Time</h3>
          <Line data={lineChartData} />
        </div>

        {/* Daily Target - Spans full width */}
        <div className="bg-orange-50 p-6 rounded-lg col-span-full">
          <h3 className="text-lg font-semibold text-gray-600">Target Harian</h3>
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold text-orange-600">
              {weightData.sackCount}/{weightData.dailyTarget}
            </div>
            <div className="flex-1 bg-gray-200 rounded-full h-4">
              <div 
                className="bg-orange-500 h-4 rounded-full"
                style={{ width: `${(weightData.sackCount/weightData.dailyTarget * 100)}%` }}
              />
            </div>
            <div className="text-orange-600 font-semibold">
              {Math.round(weightData.sackCount/weightData.dailyTarget * 100)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
