import React from 'react';
import { ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 px-4 border-t border-gray-100">
      <div className="container mx-auto flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <div>
          <p>&copy; {new Date().getFullYear()} Piccio Lab. All rights reserved.</p>
        </div>
        <div>
          <ul className="flex flex-wrap gap-4">
            <li><a href="/contact" className="hover:text-red-600 transition">Contact Us</a></li>
            <li>
              <a
                href="https://x.com/laurapiccio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-blue-700 transition"
              >
                Twitter Profile
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://www.msaustralia.org.au/researcher/laura-piccio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-red-600 transition"
              >
                MS Australia Profile
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
