import React from 'react';
import { motion } from 'framer-motion';

const Research = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12" id="Research">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-8 text-center text-gray-800"
        >
          Our Research
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg p-8 shadow-lg mb-8"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The Piccio Lab explores how immune, metabolic, and nutritional factors shape brain health and contribute to neuroinflammatory disease. Our projects span clinical, translational, and experimental research, unified by the goal of understanding and modulating neuroimmune communication.
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-red-600">Clinical Studies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our clinical studies investigate biomarkers in multiple sclerosis and related conditions. By analysing proteins, lipids, and extracellular vesicles in biological fluids, we aim to identify molecular signatures that reflect disease mechanisms and inform diagnosis, prognosis, and treatment response.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We also study the effects of <strong>dietary and metabolic interventions</strong>, such as calorie restriction and metabolic modulation, on neuroinflammation and disease outcomes. Ongoing work includes the <strong>NeuroFit study</strong> examining calorie restriction in MS and a <strong>Tirzepatide clinical study</strong> exploring metabolic and inflammatory changes in individuals with overweight.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Analyses of human brain tissues further provide valuable insights into cellular mechanisms of neurodegeneration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-red-600">Preclinical Research</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our preclinical research uses experimental models of MS to dissect the interplay between nutrition, metabolism, and immune-inflammatory responses. We study how <strong>microglia, astrocytes, and macrophages</strong> contribute to myelin injury and repair within the central nervous system, and how dietary factors such as fiber content and calorie restriction influence immune function and the gut microbiome.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-red-600">TREM2 and Innate Immunity</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A major focus of the lab is the innate immune receptor <strong>TREM2</strong>, which regulates microglial activation and CNS repair. We investigate how TREM2 influences demyelination, remyelination, and developmental processes in the brain.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-red-600">Extracellular Vesicles</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The lab also studies <strong>extracellular vesicles</strong> as mediators and biomarkers of neuroinflammatory processes. Blood-derived EVs are explored as indicators of MS activity, while macrophage-derived EVs are examined for their role in promoting myelin repair.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-red-600">Our Goal</h3>
            <p className="text-gray-700 leading-relaxed">
              By integrating clinical and preclinical studies with multi-omics approaches, the Piccio Lab aims to build a comprehensive understanding of neuroimmune and metabolic interactions. Our ultimate goal is to develop mechanism-based therapies and lifestyle strategies that promote neuroprotection and repair in multiple sclerosis and other neuroinflammatory diseases.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Research;