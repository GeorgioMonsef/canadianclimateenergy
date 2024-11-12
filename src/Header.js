import React from 'react';
import nce from './nce.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone, faUsers, faEnvelope, faHome} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const gradientTextStyle = {
    background: 'linear-gradient(90deg, red, navy)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: '600',
    fontSize: '1.25rem',
    display: 'inline-block',
};

const Header = () => {
    const toggleMenu = () => {
        const menu = document.getElementById('collapseMenu');
        if (menu.classList.contains('-translate-y-full')) {
            menu.classList.remove('hidden');  // Show the menu
            setTimeout(() => {
                menu.classList.remove('-translate-y-full');
                menu.classList.add('translate-y-0');
            }, 10);  // Small timeout to trigger transition after showing the menu
        } else {
            menu.classList.remove('translate-y-0');
            menu.classList.add('-translate-y-full');
            setTimeout(() => {
                menu.classList.add('hidden');  // Hide the menu after animation completes
            }, 300);  // Match the duration of the transition (300ms)
        }
    };

    // Function to close the menu when a link is clicked
    const closeMenu = () => {
        const menu = document.getElementById('collapseMenu');
        menu.classList.remove('translate-y-0');
        menu.classList.add('-translate-y-full');
        setTimeout(() => {
            menu.classList.add('hidden');
        }, 300);  // Same duration as the animation
    };

    return (
        <header className='border-b font-[sans-serif] tracking-wide'>
            {/* Notification Bar */}
            <section className='py-2 bg-[#1d294f] text-white text-center px-4 sm:px-10 relative z-50'>
                <p className='text-sm'>Limited time offer: Free Home Energy Assessment</p>
            </section>

            {/* Mobile menu toggle button */}
            <div className='ml-auto sm:hidden flex absolute right-4 mt-4'>
                <button onClick={toggleMenu}>
                    <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>


            <div className='flex flex-wrap items-center justify-between px-4 py-4 bg-white min-h-[125px] sm:px-10'>
                {/* Mobile Logo with Text */}
                <Link to="/" className='block sm:hidden flex items-center'>
                    <img src={nce} alt="Canadian Climate Energy" className="h-8 w-auto"/>
                    <span style={gradientTextStyle} className="ml-2">Canadian Climate Energy</span>
                </Link>

                {/* Main logo with text for larger screens */}
                <Link to="/" className='hidden sm:flex items-center'>
                    <img src={nce} alt="Canadian Climate Energy" className="h-20 w-auto"/>
                    <span style={gradientTextStyle} className="ml-2">Canadian Climate Energy</span>
                </Link>

                {/* Desktop Navigation Menu */}
                <div id="desktopMenu" className='hidden sm:flex ml-auto items-center gap-8'>
                    <Link to="/ourteam"
                          className='hover:text-[#007bff] font-semibold text-[#333] flex items-center space-x-2'>
                        <FontAwesomeIcon icon={faUsers} className="text-red-500"/>
                        <span>About Us</span>
                    </Link>
                    <Link to="/contact"
                          className='hover:text-[#007bff] font-semibold text-[#333] flex items-center space-x-2'>
                        <FontAwesomeIcon icon={faPhone} className="text-red-500"/>
                        <span>Contact</span>
                    </Link>
                    <Link to="/donations"
                          className='hover:text-[#007bff] font-semibold text-[#333] flex items-center space-x-2'>
                        <FontAwesomeIcon icon={faEnvelope} className="text-red-500"/>
                        <span>Donations</span>
                    </Link>
                </div>



                {/* Mobile Navigation Menu */}
                <div id="collapseMenu" className="hidden sm:hidden w-full absolute z-1 top-[37px] left-0 p-6 bg-white h-auto transform rounded-b-lg -translate-y-full transition-transform duration-300 ease-in-out">
                    <button onClick={toggleMenu} className="absolute top-4 right-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                    <ul className='flex flex-col space-y-6 '>
                        <li>
                            <Link to="/" onClick={closeMenu}
                                  className='hover:text-[#007bff] font-semibold text-[#333] flex items-center space-x-2'>
                                <FontAwesomeIcon icon={faHome} className="text-red-500"/>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/ourteam" onClick={closeMenu}
                                  className='hover:text-[#007bff] font-semibold text-[#333] flex items-center space-x-2'>
                                <FontAwesomeIcon icon={faUsers} className="text-red-500"/>
                                <span>About Us</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={closeMenu}
                                  className='hover:text-[#007bff] font-semibold text-[#333] flex items-center space-x-2'>
                                <FontAwesomeIcon icon={faPhone} className="text-red-500"/>
                                <span>Contact</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/donations" onClick={closeMenu}
                                  className='hover:text-[#007bff] font-semibold text-[#333] flex items-center space-x-2'>
                                <FontAwesomeIcon icon={faEnvelope} className="text-red-500"/>
                                <span>Donations</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
