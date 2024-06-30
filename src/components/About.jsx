import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import React, { useState, useEffect } from 'react';
import About from '../assets/About1.jpg';
import AboutTwo from '../assets/About.jpg'
import Network from '../assets/network.jpg';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(About);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => prev === About ? AboutTwo : About);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="bg-gray-100 min-h-screen"> 
      <div className="main relative h-screen">
        <img src={currentImage} alt="Background" className="w-full h-full object-cover transition-opacity duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700/30 to-gray-800/30 flex items-center justify-center">
                <div className="text-white text-center px-4 sm:px-8 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl md:text-4xl mb-6 tracking-wide animate-float italic font-semibold text-white bg-red-600 p-4 rounded-lg">
              "Our primary mission is to accelerate MS research with the ultimate goal of prevention, improved treatments, and finding a cure for this debilitating condition."
            </h1>
          </div>
        </div>
      </div>

      <div id="about-us" className="py-16 md:py-24 bg-white" style={{ backgroundImage: `url(${Network})` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 rounded-3xl py-12 px-8 md:px-12 shadow-xl">
            <div className="w-full md:w-full mb-10 md:mb-0 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-red-600">About Us</h2>
              <p className="text-justify text-base md:text-lg text-gray-700 leading-relaxed">
                Piccio Lab is based at the Charles Perkins Center, The University of Sydney, where we are dedicated to advancing research in immune-inflammatory and neurodegenerative mechanisms, particularly those leading to multiple sclerosis (MS) and other neurological diseases. Our primary mission is to accelerate MS research with the ultimate goal of prevention, improved treatments, and finding a cure for this debilitating condition.
              </p>
              <p className="text-justify text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                We are privileged to have access to state-of-the-art facilities, including Sydney Cytometry, Microscopy, and Spectrometry, which enable us to conduct cutting-edge research and drive innovation in our field.
                At our lab, we are committed to making significant strides in understanding and combating neurological diseases, with the hope of transforming lives and creating a healthier future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;