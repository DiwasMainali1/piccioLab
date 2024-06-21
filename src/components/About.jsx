import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center" id="About us">
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-4xl font-bold mb-6 text-center">About Us</h2>
        <p className="text-lg mb-4">
          Welcome to the Piccio Lab. We are a dedicated team of researchers focused on [insert your lab's main area of study or research].
        </p>
        <p className="text-lg mb-4">
          Our mission is to [briefly describe the lab's primary goals or objectives].
        </p>
        <p className="text-lg">
          Founded in [year] by [founder's name], our lab has been at the forefront of [specific area of research or achievements].
        </p>
      </div>
    </div>
  );
};

export default AboutUs;