import React, { useState, useEffect } from 'react';
import A from '../assets/A.jpg'
import B from '../assets/B.JPG'
import C from '../assets/C.JPG'
import D from '../assets/D.JPG'
import E from '../assets/E.JPG'
import F from '../assets/F.JPG'
import G from '../assets/G.JPG'
import H from '../assets/H.JPG'
import I from '../assets/I.jpg'
import J from '../assets/J.jpg'

const Media = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [A, B, C, D, E, F, G, H, I, J];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white relative" id="Media">
      {/* Slideshow */}
      <div className="relative w-full h-screen">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
  {/* Centered content */}
  <div className="text-center">
    {/* Links */}
    <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
      <a 
        href="https://x.com/laurapiccio" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-blue-400 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg text-lg font-semibold"
      >
        Twitter Profile
      </a>
      <a 
        href="https://www.msaustralia.org.au/researcher/laura-piccio/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300 shadow-lg text-lg font-semibold"
      >
        MS Australia Profile
      </a>
    </div>
  </div>

  {/* Navigation dots at the bottom */}
  <div className="absolute bottom-8 left-0 right-0">
    <div className="flex justify-center space-x-2">
      {images.map((_, index) => (
        <button
          key={index}
          className={`w-3 h-3 rounded-full ${
            index === currentSlide ? 'bg-white' : 'bg-gray-400'
          }`}
          onClick={() => setCurrentSlide(index)}
        ></button>
      ))}
    </div>
  </div>
</div>
    </div>
  );
};

export default Media;