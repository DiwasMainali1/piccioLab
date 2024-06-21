import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const links = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'People', path: '/people' },
    { id: 4, name: 'Research', path: '/research' },
    { id: 5, name: 'Media', path: '/media' },
    { id: 6, name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-blue-600">Piccio Lab</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.id}>
                <Link 
                  to={link.path} 
                  className="text-gray-600 hover:text-blue-600 transition duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;