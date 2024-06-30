import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import React from 'react';
import image from '../assets/image.png';
import Laura from '../assets/laura.jpg';
import Network from '../assets/network.jpg';

const Home = () => {
  return (
    <div id="home" className="bg-gray-100 min-h-screen"> 
      <div className="main relative h-screen">
        <img src={image} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black bg-opacity-0 flex items-center justify-center">
          <div className="text-white text-center px-4 sm:px-8 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-wide animate-float">
              Welcome to Piccio Lab
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-80">
              Advancing neurodegenerative disease research
            </p>
            <a href="#introduction" className="bg-white text-black py-3 px-6 rounded-full text-lg font-bold hover:bg-red-700 transition duration-300">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div id="introduction" className="py-16 md:py-24 bg-white " style={{ backgroundImage: `url(${Network})` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 rounded-3xl py-12 px-8 md:px-12 shadow-xl">
            <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-600">Introduction</h2>
              <p className="text-justify text-base md:text-lg text-gray-700 leading-relaxed">
                The Piccio Lab, led by renowned researcher <strong>Associate Professor Laura Piccio</strong>, specialises in the study of neurodegenerative diseases, including Multiple sclerosis and other neurological diseases. Our lab has a strong translational approach with the goal to apply findings from basic research to the clinic. Currently, my laboratory has two major areas of interest. One is the role played by innate immune cells (macrophages, dendritic cells and microglia) in MS with a particular interest in the innate immune receptor TREM2. We are also studying the role of the soluble form of TREM2 as a potential biomarker in neurological diseases, including Alzheimer's disease. A second area of interest of my laboratory is to study the effects of diet on MS and the complex interplay between the immune system and metabolism.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img src={Laura} alt="Laura Piccio" className="w-4/5 h-auto rounded-xl shadow-lg object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;