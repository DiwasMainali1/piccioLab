import React from 'react';
import Laura from '../assets/LauraP.jpg';

const People = () => {
  return (
    <div className="min-h-screen bg-white py-12" id="People">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">Our Team</h2>
        
        {/* Laura Piccio Section */}
        <div className="mb-24">
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3">
                <img src={Laura} alt="Laura Piccio" className="w-full h-full object-cover" />
              </div>
              <div className="lg:w-2/3 p-8 lg:p-12">
                <h3 className="text-3xl font-bold mb-4 text-gray-800">Laura Piccio, MD, PhD</h3>
                <p className="text-xl text-red-600 mb-4">Project Lead</p>
                <div className="mb-6">
                  <p className="text-lg text-gray-700 mb-2">
                    Associate Professor<br />
                    NHMRC Principal Research Fellow<br />
                    School of Medical Sciences<br />
                    Faculty of Medicine and Health
                  </p>
                </div>
                <a 
                  href="mailto:laura.piccio@sydney.edu.au" 
                  className="inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
                >
                  Contact Laura
                </a>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-3xl font-semibold mb-12 text-center text-gray-800">Team Members</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Placeholder for other team members */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/path-to-image.jpg" alt="Team Member" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Name</h3>
              <p className="text-gray-600">Position</p>
            </div>
          </div>
          {/* Add more team members as needed */}
        </div>
      </div>
    </div>
  );
};

export default People;