// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul className="flex flex-col space-y-2">
                <li className="py-1 px-4 hover:bg-gray-100 rounded">
                    <Link to="/" className="block text-sm text-gray-800">Home</Link>
                </li>
                <li className="py-1 px-4 hover:bg-gray-100 rounded">
                    <Link to="/our-team" className="block text-sm text-gray-800">Our Team</Link>
                </li>
                {/* Add more navigation items here */}
            </ul>
        </nav>
    );
};

export default Navigation;
