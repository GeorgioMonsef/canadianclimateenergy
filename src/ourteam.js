import React from 'react';

const OurTeam = () => {
    return (
        <div className="bg-gray-100 py-10 px-4">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Vision</h1>
                <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    At Canadian Climate Energy, we believe in creating a sustainable future through innovative heating and cooling solutions.
                    Our commitment to excellence ensures that every project is executed with precision, enhancing comfort and efficiency for our clients.
                </p>
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Our Mission</h2>
                <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                    Our mission is to provide top-notch HVAC services that meet the highest standards of quality and sustainability.
                    We aim to empower our customers with knowledge and solutions that lead to better energy efficiency and environmental responsibility.
                </p>
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Our Values</h2>
                <ul className="list-disc list-inside text-center text-gray-600 mb-8">
                    <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
                    <li>Customer Focus: We are dedicated to exceeding customer expectations.</li>
                    <li>Innovation: We embrace change and seek out innovative solutions.</li>
                    <li>Sustainability: We are committed to eco-friendly practices and technologies.</li>
                </ul>
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Join Us</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Together, let's work towards a more energy-efficient and sustainable future.
                        Contact us today to learn more about our services and how we can help you achieve your energy goals.
                    </p>
                    <a href="/contact" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
