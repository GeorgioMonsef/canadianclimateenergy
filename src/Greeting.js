import React from 'react';
import downtown from './downtown.jpeg';
import TypewriterEffect from './TypewriterEffect'; // Import the TypewriterEffect component
import happy from './happy.png'; // Import the happy image
import energy from './energy.png'; // Import the energy image
import Form from './Form'; // Import the Form component

const Greeting = ({ onShowPrompt }) => {
    const typewriterTexts = [
        'Providing top-notch HVAC solutions for your comfort.',
        'Expert installation and maintenance services.',
        'Reliable and efficient energy solutions for your home or business.'
    ];

    const typewriterTextsQuote = [
        "Tackling climate change, creating jobs and growth, and building a cleaner future for all Canadians are top priorities for the Government of Canada. The new Canada Greener Homes Grant will help make the lives of homeowners across the country more affordable by reducing their energy bills and making their homes more energy efficient. This initiative is an important part of our plan to build cleaner, more inclusive communities, tackle climate change, and drive to net-zero emissions by 2050. -The Hon. Catherine McKenna, Minister of Infrastructure and Communities\n"
    ];

    return (
        <div>
            {/* Wallpaper Section */}
            <div
                className="w-full p-8 rounded-lg shadow-lg mx-auto mt-12"
                style={{
                    backgroundImage: `url(${downtown})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    color: 'white',
                    minHeight: '60vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div className="text-center mt-4">
                    <h1 className="text-6xl font-extrabold mb-4 text-red-900 drop-shadow-lg">
                        Canadian Climate Energy.
                    </h1>
                    <TypewriterEffect texts={typewriterTexts} />
                </div>
            </div>

            {/* Quote Section with Cards */}
            <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-16 items-start p-8 rounded-lg">
                {/* Card 1 (Left) */}
                <div className="col-span-1 rounded overflow-hidden shadow-lg flex flex-col h-full">
                    <img className="w-full" src={happy} alt="HVAC Installation" />
                    <div className="px-6 py-4 flex-grow">
                        <div className="font-bold text-xl mb-2">HVAC Installation</div>
                        <p className="text-gray-700 text-base">
                            Our expert technicians provide top-quality HVAC installation services:
                        </p>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Professional system selection and installation</li>
                            <li>Energy-efficient heating and cooling solutions</li>
                            <li>Comprehensive system diagnostics and maintenance</li>
                            <li>Customized solutions for residential and commercial spaces</li>
                            <li>24/7 emergency support</li>
                        </ul>
                    </div>
                </div>

                {/* Quote Section (Center) */}
                <section className="col-span-1 bg-gray-100 p-8 rounded-lg shadow-md flex flex-col h-full">
                    <div className="prose lg:prose-xl flex-grow">
                        <div className="mb-4">
                            <TypewriterEffect texts={typewriterTextsQuote} />
                        </div>
                        <p className="mt-4 font-semibold text-gray-700">
                            The Hon. Catherine McKenna, Minister of Infrastructure and Communities
                        </p>
                    </div>
                </section>

                {/* Card 2 (Right) */}
                <div className="col-span-1 rounded overflow-hidden shadow-lg flex flex-col h-full">
                    <img className="w-full" src={energy} alt="Energy Efficiency" />
                    <div className="px-6 py-4 flex-grow">
                        <div className="font-bold text-xl mb-2">Energy Efficiency</div>
                        <p className="text-gray-700 text-base">
                            We help you save money and reduce your carbon footprint:
                        </p>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Energy-efficient HVAC systems</li>
                            <li>Home energy audits and efficiency upgrades</li>
                            <li>Smart thermostats for optimized control</li>
                            <li>Long-term energy savings with system upgrades</li>
                            <li>Eco-friendly and sustainable practices</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="p-10 mt-12 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
                <Form />
            </div>
        </div>
    );
};

export default Greeting;
