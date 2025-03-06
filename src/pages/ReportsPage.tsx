
import * as XLSX from 'xlsx';
import { DocumentChartBarIcon } from '@heroicons/react/24/outline';

const ReportsPage = () => {
  const exportToExcel = () => {
    const data = [
      ['Tanggal', 'Total Karung', 'Rata-rata Kecepatan'],
      ['2024-01-15', 850, '5 karung/menit'],
      ['2024-01-14', 920, '6 karung/menit'],
      // Add more data as needed
    ];

    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Laporan Produksi');
    XLSX.writeFile(wb, 'laporan-produksi.xlsx');
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Laporan Produksi</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Unduh Laporan</h2>
          <button
            onClick={exportToExcel}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
          >
            <DocumentChartBarIcon className="h-5 w-5 mr-2" />
            Download Laporan Excel
          </button>
        </div>
        
        {/* Additional report options can be added here */}
      </div>
    </div>
  );
};

export default ReportsPage;