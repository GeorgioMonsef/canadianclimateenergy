import React from 'react';
import nce from './nce.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
        menu.classList.toggle('hidden');
    };

    return (
        <header className='border-b font-[sans-serif] tracking-wide relative z-50'>
            {/* Notification Bar */}
            <section className='py-2 bg-[#1d294f] text-white text-center px-4 sm:px-10'>
                <p className='text-sm'>Limited time offer: free home energy assessment</p>
            </section>

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

            {/* Mobile menu toggle button */}
            <div className='ml-auto sm:hidden'>
                <button onClick={toggleMenu}>
                    <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div id="collapseMenu" className="hidden sm:hidden w-full fixed top-0 left-0 p-6 bg-white h-full z-50">
                <button onClick={toggleMenu} className="absolute top-4 right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
                <ul className='flex flex-col space-y-6 mt-8'>
                    <li>
                        <Link to="/ourteam"
                              className='hover:text-[#007bff] font-semibold text-[#333] flex items-center space-x-2'>
                            <FontAwesomeIcon icon={faUsers} className="text-red-500"/>
                            <span>About Us</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact"
                              className='hover:text-[#007bff] font-semibold text-[#333] flex items-center space-x-2'>
                            <FontAwesomeIcon icon={faPhone} className="text-red-500"/>
                            <span>Contact</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/donations"
                              className='hover:text-[#007bff] font-semibold text-[#333] flex items-center space-x-2'>
                            <FontAwesomeIcon icon={faEnvelope} className="text-red-500"/>
                            <span>Donations</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
</header>
)
    ;
};

export default Header;
