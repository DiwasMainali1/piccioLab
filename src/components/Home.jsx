import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import heroImg from '../assets/image.png';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import Laura from '../assets/laura.webp';
import Network from '../assets/network.jpg';

const Home = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const coverImages = [heroImg, img1, img2, img3];

  useEffect(() => {
    const allImages = [...coverImages, Laura, Network];
    let loadedCount = 0;

    const preloadImages = allImages.map(url => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          loadedCount++;
          setLoadingProgress((loadedCount / allImages.length) * 100);
          if (loadedCount === allImages.length) {
            setImagesLoaded(true);
            setTimeout(() => setContentVisible(true), 300);
          }
          resolve();
        };
        img.onerror = resolve;
      });
    });

    Promise.all(preloadImages);

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % coverImages.length);
    }, 7000);

    return () => {
      clearInterval(interval);
      setImagesLoaded(false);
      setContentVisible(false);
      setLoadingProgress(0);
    };
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center lab-page-bg">
        <div className="w-64">
          <div className="bg-gray-200 rounded-full h-2 mb-4">
            <motion.div
              className="bg-red-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-center text-gray-600 font-medium">Loading Piccio Lab...</p>
        </div>
      </div>
    );
  }

  return (
    <div id="home" className="lab-page-bg min-h-screen">
      <div className="relative h-screen overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: -50 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.img
              src={coverImages[currentImageIndex]}
              animate={{ scale: 1.1 }}
              transition={{ duration: 7.5, ease: "linear" }}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
          <AnimatePresence>
            {contentVisible && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-white text-center px-4"
              >
                <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">
                  Piccio Lab
                </h1>
                <p className="text-xl md:text-3xl mb-10 font-light max-w-2xl mx-auto">
                  Advancing Neuroimmunology & Translational Research
                </p>
                <ScrollLink
                  to="introduction"
                  smooth={true}
                  duration={1000}
                  className="bg-red-600 text-white py-4 px-10 rounded-full text-lg font-bold hover:bg-white hover:text-red-600 transition-all duration-300 cursor-pointer inline-block shadow-2xl"
                >
                  Explore Our Work
                </ScrollLink>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {coverImages.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentImageIndex ? 'w-10 bg-red-600' : 'w-4 bg-white/30'}`}
            />
          ))}
        </div>
      </div>

      <div
        id="introduction"
        className="py-20 md:py-32 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${Network})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-sm rounded-3xl py-16 px-8 md:px-20 shadow-xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-red-600 border-b-2 border-red-100 pb-4 inline-block">
              Introduction
            </h2>
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="w-full lg:w-2/5 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative w-full"
                >
                  <img
                    src={Laura}
                    alt="Laura Piccio"
                    className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-xl hidden md:block">
                    <p className="font-bold text-xl">Dr. Laura Piccio</p>
                    <p className="text-sm opacity-90">Principal Investigator</p>
                  </div>
                </motion.div>
              </div>
              <div className="w-full lg:w-3/5 space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  We investigate the mechanisms driving neuroinflammatory and neurodegenerative processes in multiple sclerosis (MS) and other neurological diseases, with a focus on how immune responses, metabolism, and diet shape brain health.
                </p>
                <p>
                  Our work uses biomarker discovery approaches, including analysis of proteins and lipids in serum and cerebrospinal fluid, extracellular vesicles, the gut microbiome, and multi-omics platforms, to identify molecular signatures of inflammation and neurodegeneration.
                </p>
                <p>
                  Ongoing projects span clinical studies in people with MS and experimental models that help us understand how glial cells such as microglia and astrocytes contribute to central nervous system injury and repair.
                </p>
                <p>
                  Ultimately, we aim to translate these insights into precision medicine strategies that improve outcomes for people living with neuroinflammatory diseases.
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
