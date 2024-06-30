import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; {new Date().getFullYear()} Piccio Lab. All rights reserved.</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;