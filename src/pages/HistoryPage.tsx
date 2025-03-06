import React from 'react';

const productionHistory = [
  {
    id: 1,
    date: '2024-01-15',
    startTime: '08:00',
    endTime: '16:00',
    totalSacks: 850,
    status: 'Completed'
  },
  // Add more sample data as needed
];

const HistoryPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Riwayat Produksi</h1>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tanggal</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Waktu Mulai</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Waktu Selesai</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Karung</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {productionHistory.map((session) => (
              <tr key={session.id}>
                <td className="px-6 py-4 whitespace-nowrap">{session.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{session.startTime}</td>
                <td className="px-6 py-4 whitespace-nowrap">{session.endTime}</td>
                <td className="px-6 py-4 whitespace-nowrap">{session.totalSacks}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {session.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryPage;
