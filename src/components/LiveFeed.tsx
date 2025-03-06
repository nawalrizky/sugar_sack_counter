import React from 'react';

const LiveFeed: React.FC = () => {
  return (
    <div className="col-span-12 lg:col-span-8">
      <div className="bg-white rounded-lg shadow-lg p-6 h-full">
        <h2 className="text-2xl font-bold mb-4">Live Feed</h2>
        <div className="bg-gray-800 aspect-video rounded-lg flex items-center justify-center">
          <span className="text-gray-400">Live Video Feed</span>
        </div>
      </div>
    </div>
  );
};

export default LiveFeed;
