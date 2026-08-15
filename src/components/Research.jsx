import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Brain, CircleDot, Microscope, Target } from 'lucide-react';

const researchAreas = [
  {
    title: 'Clinical Studies',
    icon: Activity,
    summary:
      'Biomarkers, metabolic interventions, and human tissue analyses that connect molecular signatures to disease mechanisms and treatment response.',
    details: [
      'We investigate biomarkers in multiple sclerosis and related conditions by analysing proteins, lipids, and extracellular vesicles in biological fluids.',
      'We study dietary and metabolic interventions, including calorie restriction, metabolic modulation, the NeuroFit study, and a Tirzepatide clinical study exploring metabolic and inflammatory change.',
      'Our lab also looks at human brain tissue to investigate cellular mechanisms of neurodegeneration.',
    ],
  },
  {
    title: 'Preclinical Research',
    icon: Microscope,
    summary:
      'Experimental MS models that reveal how nutrition, metabolism, immune function, and the gut microbiome shape CNS injury and repair.',
    details: [
      'Our preclinical work dissects the interplay between nutrition, metabolism, and immune-inflammatory responses.',
      'We study how microglia, astrocytes, and macrophages contribute to myelin injury and repair, and how dietary factors such as fiber content and calorie restriction influence immune function.',
    ],
  },
  {
    title: 'TREM2 and Innate Immunity',
    icon: Brain,
    summary:
      'Research on the innate immune receptor TREM2 and its role in microglial activation, demyelination, remyelination, and brain development.',
    details: [
      'A major focus of the lab is TREM2, which regulates microglial activation and CNS repair.',
      'We investigate how TREM2 influences demyelination, remyelination, and developmental processes in the brain.',
    ],
  },
  {
    title: 'Extracellular Vesicles',
    icon: CircleDot,
    summary:
      'Blood-derived and macrophage-derived extracellular vesicles studied as biomarkers, mediators, and potential contributors to myelin repair.',
    details: [
      'The lab studies extracellular vesicles as mediators and biomarkers of neuroinflammatory processes.',
      'Blood-derived EVs are explored as indicators of MS activity, while macrophage-derived EVs are examined for their role in promoting myelin repair.',
    ],
  },
  {
    title: 'Our Goal',
    icon: Target,
    summary:
      'An integrated clinical, preclinical, and multi-omics approach to develop mechanism-based therapies and lifestyle strategies.',
    details: [
      'By integrating clinical and preclinical studies with multi-omics approaches, the Piccio Lab aims to build a comprehensive understanding of neuroimmune and metabolic interactions.',
      'Our ultimate goal is to develop therapies and lifestyle strategies that promote neuroprotection and repair in multiple sclerosis and other neuroinflammatory diseases.',
    ],
  },
];

const Research = () => {
  return (
    <div className="min-h-screen lab-page-bg py-12 sm:py-16" id="Research">
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
          className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl"
        >
          <div className="border-b border-gray-200 bg-gradient-to-r from-red-50 via-white to-sky-50 p-6 sm:p-8">
            <p className="max-w-4xl text-lg leading-relaxed text-gray-700">
              The Piccio Lab explores how immune, metabolic, and nutritional factors shape brain health and contribute to neuroinflammatory disease. Our projects span clinical, translational, and experimental research, unified by the goal of understanding and modulating neuroimmune communication.
            </p>
          </div>

          <div className="divide-y divide-gray-200">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <section
                  className="grid gap-5 p-6 transition-colors duration-200 hover:bg-gray-50 sm:grid-cols-[14rem_1fr] sm:p-8"
                  key={area.title}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 ring-1 ring-red-100">
                      <Icon aria-hidden="true" size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {area.title}
                      </h3>
                    </div>
                  </div>

                  <div>
                    <p className="mb-4 text-base font-medium leading-relaxed text-gray-800">
                      {area.summary}
                    </p>
                    <p className="leading-relaxed text-gray-700">
                      {area.details.join(' ')}
                    </p>
                  </div>
                </section>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Research;
