import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-8 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; {new Date().getFullYear()} Piccio Lab. All rights reserved.</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li><a href="/terms" className="hover:text-gray-300">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;