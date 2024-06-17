import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import React from 'react';
import image from '../assets/image.png';
import Laura from '../assets/laura.jpg';

const Home = () => {
  return (
    <div className="bg-gray-800">
      <div className="main relative">
      <img src={image} className="w-full h-auto object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-r from-black via-transparent to-black bg-opacity-70">
          <div className="text-white text-center px-4 sm:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold mb-4 tracking-wide animate-float">
            Welcome to Piccio Lab
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Introduction</h2>
              <p className="text-justify text-base md:text-lg text-gray-700 leading-relaxed">
                The Piccio Lab, led by renowned researcher Dr. Laura Piccio, specializes in the study of neurodegenerative diseases, including Multiple sclerosis and other neurological diseases. Our lab has a strong translational approach with the goal to apply findings from basic research to the clinic. Currently, my laboratory has two major areas of interest. One is the role played by innate immune cells (macrophages, dendritic cells and microglia) in MS with a particular interest in the innate immune receptor TREM2. We are also studying the role of the soluble form of TREM2 as a potential biomarker in neurological diseases, including Alzheimer's disease. A second area of interest of my laboratory is to study the effects of diet on MS and the complex interplay between the immune system and metabolism.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img src={Laura} alt="Laura" className="w-3/4 h-auto rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;