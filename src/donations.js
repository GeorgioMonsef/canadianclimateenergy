import React from 'react';

const Donations = () => {
    return (
        <div className="bg-white min-h-screen flex items-start justify-center py-10 px-4">
            <div className="max-w-lg mx-auto text-left">
                <h1 className="text-4xl font-serif text-gray-900 mb-6">Support Our Mission</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Your contributions help us continue providing innovative heating and cooling solutions for a sustainable future.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    We appreciate your support and invite you to make a donation via e-transfer.
                </p>
                <h2 className="text-2xl font-serif text-gray-900 mb-4">Donate Now</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-2">
                    Please send your donations to:
                </p>
                <p className="text-lg font-semibold text-gray-900 mb-6">
                    <a href="mailto:admin@canadianclimateenergy.org" className="hover:text-blue-500 underline">
                        admin@canadianclimateenergy.org
                    </a>
                </p>
                <p className="text-gray-500 italic">
                    Thank you for your generosity!
                </p>
            </div>
        </div>
    );
};

export default Donations;
