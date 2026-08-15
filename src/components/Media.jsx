import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
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
  const [isPaused, setIsPaused] = useState(false);
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
    if (!imagesLoaded || isPaused) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        setIsTransitioning(false);
      }, 500);
    }, 3000);

    return () => clearInterval(timer);
  }, [imagesLoaded, images.length, isPaused]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  };

  const goToPreviousSlide = () => {
    goToSlide((currentSlide - 1 + images.length) % images.length);
  };

  const goToNextSlide = () => {
    goToSlide((currentSlide + 1) % images.length);
  };

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
          <p className="text-center text-gray-600">Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="lab-page-bg relative overflow-hidden" 
      id="Media"
    >
      <div className="relative w-full h-[calc(100vh-5rem)] h-[calc(100svh-5rem)] overflow-hidden">
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

        <div className="absolute inset-y-0 left-4 z-10 hidden items-center md:flex">
          <motion.button
            type="button"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={goToPreviousSlide}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/85 text-gray-900 shadow-lg backdrop-blur-md transition hover:bg-white"
            aria-label="Previous media slide"
          >
            <ChevronLeft size={26} aria-hidden="true" />
          </motion.button>
        </div>

        <div className="absolute inset-y-0 right-4 z-10 hidden items-center md:flex">
          <motion.button
            type="button"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={goToNextSlide}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/85 text-gray-900 shadow-lg backdrop-blur-md transition hover:bg-white"
            aria-label="Next media slide"
          >
            <ChevronRight size={26} aria-hidden="true" />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="absolute bottom-6 left-4 right-4 z-10 mx-auto max-w-5xl rounded-lg border border-white/70 bg-white/85 p-3 shadow-xl backdrop-blur-md"
        >
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPaused((paused) => !paused)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900 text-white transition hover:bg-red-600"
              aria-label={isPaused ? 'Play media slideshow' : 'Pause media slideshow'}
            >
              {isPaused ? <Play size={18} aria-hidden="true" /> : <Pause size={18} aria-hidden="true" />}
            </button>

            <div className="grid flex-1 grid-cols-5 gap-2 md:grid-cols-10">
              {images.map((image, index) => (
                <motion.button
                  key={image}
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className={`relative h-12 overflow-hidden rounded-md border-2 transition ${
                    index === currentSlide
                      ? 'border-red-600 shadow-md'
                      : 'border-white/80 opacity-75 hover:opacity-100'
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to media slide ${index + 1}`}
                >
                  <img
                    src={image}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </motion.button>
              ))}
            </div>

            <span className="hidden shrink-0 text-sm font-medium text-gray-700 sm:block">
              {currentSlide + 1} / {images.length}
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Media;
