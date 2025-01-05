import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const images = useMemo(() => [A, B, C, D, E, F, G, H, I, J], []);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const preloadImages = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedCount++;
          setLoadingProgress((loadedCount / images.length) * 100);
          resolve();
        };
        img.onerror = resolve; // Handle loading errors gracefully
      });
    });

    Promise.all(preloadImages).then(() => {
      setImagesLoaded(true);
    });

    return () => {
      setImagesLoaded(false);
      setLoadingProgress(0);
    };
  }, [images]);

  // Handle automatic slideshow
  useEffect(() => {
    if (!imagesLoaded) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        setIsTransitioning(false);
      }, 500);
    }, 3000);

    return () => clearInterval(timer);
  }, [imagesLoaded, images.length]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  };

  if (!imagesLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-64">
          <div className="bg-gray-200 rounded-full h-2 mb-4">
            <motion.div
              className="bg-red-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-center text-gray-600">Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white relative" 
      id="Media"
    >
      {/* Slideshow */}
      <div className="relative w-full h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: isTransitioning ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            loading={currentSlide === 0 ? "eager" : "lazy"}
            fetchPriority={currentSlide === 0 ? "high" : "auto"}
          />
        </AnimatePresence>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center"
      >
        {/* Centered content */}
        <div className="text-center">
          {/* Links */}
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://x.com/laurapiccio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-400 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg text-lg font-semibold"
            >
              Twitter Profile
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.msaustralia.org.au/researcher/laura-piccio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300 shadow-lg text-lg font-semibold"
            >
              MS Australia Profile
            </motion.a>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="flex justify-center space-x-2">
            {images.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-gray-400'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Media;