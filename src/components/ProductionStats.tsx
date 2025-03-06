
import React from 'react';
import { DashboardProps } from '../types/dashboard';

const ProductionStats: React.FC<DashboardProps> = ({
  sackCount = 245,
  systemStatus = 'Running',
  targetDaily = 1000,
  speedRate = 5
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Running': return 'bg-green-500 text-green-500';
      case 'Paused': return 'bg-yellow-500 text-yellow-500';
      case 'Error': return 'bg-red-500 text-red-500';
      default: return 'bg-gray-500 text-gray-500';
    }
  };

  const progressPercentage = (sackCount / targetDaily) * 100;

  return (
    <div className="col-span-12 lg:col-span-4 space-y-8">
      {/* Current Count */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-600">Jumlah Karung Terkini</h2>
        <div className="text-6xl font-bold text-blue-600 mt-2">{sackCount}</div>
        <p className="text-gray-500 mt-2">Karung</p>
      </div>

      {/* Daily Target */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-600">Target Harian</h2>
        <div className="mt-2">
          <div className="flex justify-between mb-2">
            <span>{sackCount}/{targetDaily} Karung</span>
            <span>{progressPercentage.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
          </div>
        </div>
      </div>

      {/* Speed Rate */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-600">Rata-rata Kecepatan</h2>
        <div className="text-4xl font-bold text-green-600 mt-2">
          {speedRate} <span className="text-xl">karung/menit</span>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-600">Status Sistem</h2>
        <div className="flex items-center mt-4">
          <div className={`h-4 w-4 rounded-full ${getStatusColor(systemStatus).split(' ')[0]}`}></div>
          <span className={`ml-2 text-2xl font-semibold ${getStatusColor(systemStatus).split(' ')[1]}`}>
            {systemStatus}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductionStats;