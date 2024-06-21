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
    <nav className="bg-gray-300 p-4">
      <ul className="flex justify-center space-x-4">
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path} className="text-black hover:text-gray-600">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;