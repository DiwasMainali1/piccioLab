import React from 'react';
import { motion } from 'framer-motion';

const Publications = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12" id="Publications">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-8 text-center text-gray-800"
        >
          Publications
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg p-8 shadow-lg mb-8"
        >
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Our research has led to numerous publications in peer-reviewed journals. This page will feature our latest research publications and contributions to the field of neuroimmunology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6 text-red-600 text-center">Coming Soon</h3>
          <p className="text-gray-700 leading-relaxed text-center mb-4">
            We are currently compiling our comprehensive list of publications. Please check back soon for updates on our latest research contributions.
          </p>
          <p className="text-gray-700 leading-relaxed text-center">
            In the meantime, you can find more information about our ongoing research projects on the <a href="/research" className="text-red-600 hover:text-red-700 font-semibold">Research page</a>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Publications;

