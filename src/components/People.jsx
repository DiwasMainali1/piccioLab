import React from 'react';

const People = () => {
  return (
    <div className="min-h-screen bg-white py-12" id="People">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Repeat this block for each team member */}
          <div className="bg-gray-100 rounded-lg p-6 text-center">
            <img src="/path-to-image.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Name</h3>
            <p className="text-gray-600">Position</p>
          </div>
          {/* End of team member block */}
        </div>
      </div>
    </div>
  );
};

export default People;