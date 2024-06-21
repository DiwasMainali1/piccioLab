import React from 'react';

const Research = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12" id="Research">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Research</h2>
        <div className="space-y-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Research Area 1</h3>
            <p className="text-gray-700">Description of research area 1...</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Research Area 2</h3>
            <p className="text-gray-700">Description of research area 2...</p>
          </div>
          {/* Add more research areas as needed */}
        </div>
      </div>
    </div>
  );
};

export default Research;