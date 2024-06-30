import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  
  const links = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'People', path: '/people' },
    { id: 4, name: 'Research', path: '/research' },
    { id: 5, name: 'Media', path: '/media' },
    { id: 6, name: 'Contact', path: '/contact' },
  ];

  const handleClick = () => setNav(!nav);

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-gray-100 text-black">
      <div className="flex justify-between items-center w-full h-20 px-4 font-inter">
      <Link to="/" className="flex items-center">
        <h1 className="text-3xl ml-2 font-bold select-none">Piccio Lab</h1>
        </Link>
        
        <nav className="hidden md:flex">
          <ul className="flex">
            {links.map((link) => (
              <li key={link.id}>
                <Link 
                  to={link.path} 
                  className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div onClick={handleClick} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <nav className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 md:hidden">
            <ul>
              {links.map((link) => (
                <li key={link.id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
                  <Link 
                    to={link.path} 
                    onClick={handleClick}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;