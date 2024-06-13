import React from 'react';
import videoBg from '../assets/videoBg.mp4';

const Home = () => {
  return (
    <div className="main relative">
      <video src={videoBg} autoPlay loop muted className="w-full h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to <span className="text-green-400">Piccio Labs</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;