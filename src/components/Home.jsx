import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import image from '../assets/image.png';
import Laura from '../assets/laura.jpg';
import Network from '../assets/network.jpg';

const Home = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Preload all images
    const imageUrls = [image, Laura, Network];
    let loadedCount = 0;

    const preloadImages = imageUrls.map(url => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          loadedCount++;
          setLoadingProgress((loadedCount / imageUrls.length) * 100);
          if (loadedCount === imageUrls.length) {
            setImagesLoaded(true);
            // Add a slight delay before showing content for smooth transition
            setTimeout(() => setContentVisible(true), 300);
          }
          resolve();
        };
        img.onerror = resolve; // Handle any loading errors gracefully
      });
    });

    Promise.all(preloadImages);

    return () => {
      setImagesLoaded(false);
      setContentVisible(false);
      setLoadingProgress(0);
    };
  }, []);

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
          <p className="text-center text-gray-600">Loading home page...</p>
        </div>
      </div>
    );
  }

  return (
    <div id="home" className="bg-gray-100 min-h-screen">
      <AnimatePresence>
        {imagesLoaded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="main relative h-screen"
          >
            <img 
              src={image} 
              alt="Background" 
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black bg-opacity-50 flex items-center justify-center">
              {contentVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-white text-center px-4 sm:px-8 max-w-4xl"
                >
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-wide animate-float">
                    Welcome to Piccio Lab
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 opacity-90">
                    Advancing Neuroimmunology Research
                  </p>
                  <ScrollLink
                    to="introduction"
                    smooth={true}
                    duration={800}
                    className="bg-white text-black py-3 px-6 rounded-full text-lg font-bold hover:text-white hover:bg-red-600 transition duration-300 cursor-pointer inline-block"
                  >
                    Learn More
                  </ScrollLink>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        id="introduction"
        className="py-16 md:py-24 bg-white bg-cover bg-center"
        style={{ backgroundImage: `url(${Network})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl py-12 px-8 md:px-12 shadow-xl"
          >
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-6 text-red-600">
              Introduction
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={Laura}
                  alt="Laura Piccio"
                  className="w-4/5 h-auto rounded-xl shadow-lg object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <p className="text-left text-base md:text-lg text-gray-700 leading-relaxed">
                  Our lab investigates the mechanisms driving neuroinflammatory and neurodegenerative processes in multiple sclerosis (MS) and other neurological diseases. A major focus of the lab is to study the interplay between immune responses, metabolism, and diet, and how these factors influence brain health. We have a strong translational approach with the goal to apply findings from basic research to the clinic.
                </p>
                <p className="text-left text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                  The lab uses biomarker discovery approaches, including analysis of proteins and lipids in serum and cerebrospinal fluid, extracellular vesicle, gut microbiome, and multi-omics platforms, to identify molecular signatures of inflammation and neurodegeneration. By integrating preclinical and clinical studies with systems biology, the team aims to uncover pathways that could be targeted to prevent, halt, or reverse neurological disease progression.
                </p>
                <p className="text-left text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                  Ongoing projects span from clinical studies in people with MS (exploring dietary interventions, metabolic modulation, and novel therapeutics) to experimental models, where the lab dissects how glial cells (e.g. microglia, astrocytes) contribute to central nervous system injury and repair.
                </p>
                <p className="text-left text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                  Ultimately, the Piccio Lab seeks to translate mechanistic insights into precision medicine strategies, identifying biomarkers that guide treatment and lifestyle interventions to improve outcomes in people with multiple sclerosis and other neuroinflammatory diseases.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;