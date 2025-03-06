import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, ClockIcon, DocumentChartBarIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  const location = useLocation();
  const navigation = [
    { name: 'Dashboard', href: '/', icon: HomeIcon },
    { name: 'Riwayat', href: '/history', icon: ClockIcon },
    { name: 'Laporan', href: '/reports', icon: DocumentChartBarIcon },
  ];

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 fixed left-0 top-0">
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-800">Sugar Sack Counter</h1>
      </div>
      <nav className="mt-8">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 ${
                isActive ? 'bg-blue-50 text-blue-600' : ''
              }`}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
