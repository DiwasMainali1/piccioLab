import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const links = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'People', path: '/people' },
    { id: 4, name: 'Research', path: '/research' },
    { id: 5, name: 'Media', path: '/media' },
    { id: 6, name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => setNav(!nav);

  const handleNavigation = (path) => {
    if (location.pathname === path) {
      // If we're already on the page, just scroll to top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      // If it's a different page, navigate and the ScrollToTop component will handle the scroll
      navigate(path);
    }
    // Close mobile menu if open
    if (nav) {
      handleClick();
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white'
      } transition-all duration-300`}
    >
      <div className="flex justify-between items-center w-full h-20 px-4 font-inter max-w-7xl mx-auto">
        <div 
          onClick={() => handleNavigation('/')} 
          className="flex items-center cursor-pointer"
        >
          <motion.h1 
            whileHover={{ scale: 1.05 }}
            className="text-3xl ml-2 font-bold select-none text-red-600"
          >
            Piccio Lab
          </motion.h1>
        </div>
        
        <nav className="hidden md:flex">
          <ul className="flex">
            {links.map((link) => (
              <motion.li key={link.id} whileHover={{ scale: 1.1 }}>
                <button 
                  onClick={() => handleNavigation(link.path)}
                  className={`px-4 cursor-pointer capitalize font-medium ${
                    location.pathname === link.path
                      ? 'text-red-600'
                      : 'text-gray-700 hover:text-red-600'
                  } transition-colors duration-300`}
                >
                  {link.name}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
        
        <div onClick={handleClick} className="cursor-pointer pr-4 z-10 text-gray-700 md:hidden">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        <AnimatePresence>
          {nav && (
            <motion.nav 
              initial={{ opacity: 0, x: '-100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-white text-gray-700 md:hidden"
            >
              <ul>
                {links.map((link) => (
                  <motion.li 
                    key={link.id} 
                    className="px-4 cursor-pointer capitalize py-6 text-4xl"
                    whileHover={{ scale: 1.1, color: '#DC2626' }}
                  >
                    <button 
                      onClick={() => handleNavigation(link.path)}
                      className="focus:outline-none"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default NavBar;