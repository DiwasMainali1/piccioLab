import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { GiBubblingFlask } from "react-icons/gi";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'Technology',
    },
    {
      id: 3,
      link: 'Team',
    },
    {
      id: 4,
      link: 'contact',
    },
  ];

  const handleClick = () => setNav(!nav);

  return (
    <div className="z-20 flex justify-between items-center w-full h-20
    px-4 text-black bg-gray-300 fixed">
        <div>
            <h1 className="flex items-center text-3xl ml-2 font-bold select-none">
                Piccio Labs
                <GiBubblingFlask className="ml-3" style={{ color: 'green' }} />
            </h1>
        </div>

        <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
                <li
                    key={id}
                    className="px-6 cursor-pointer capitalize
                    font-medium text-gray-500 hover:scale-110 duration-200"
                >
                <Link to={link} smooth duration={600}>
                    {link}
                </Link>
                </li>
            ))}
        </ul>
        <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} /> }
        </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={handleClick}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;