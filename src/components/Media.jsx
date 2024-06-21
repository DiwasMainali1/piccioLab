import React from 'react';

const Media = () => {
  return (
    <div className="min-h-screen bg-white py-12" id="Media">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-center">Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Repeat this block for each media item */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img src="/path-to-image.jpg" alt="Media item" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Media Title</h3>
              <p className="text-gray-600">Brief description of the media item...</p>
              <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">Read more</a>
            </div>
          </div>
          {/* End of media item block */}
        </div>
      </div>
    </div>
  );
};

export default Media;