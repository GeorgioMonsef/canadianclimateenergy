import React, { useState } from 'react';
import Form from './Form'; // Import the Form component

const Prompt = ({ showPrompt, handleClose, handleShowPrompt }) => {
    return (
        <>
            {showPrompt && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
                    <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-4xl relative">
                        <h2 className="text-3xl font-bold mb-6 text-red-500">Book Energy Assessment</h2>
                        <Form /> {/* Embed the Form component here */}
                        <div className="flex justify-end mt-4">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="bg-gray-500 text-white px-6 py-3 rounded-lg mr-4 text-lg"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Button container */}
            <div className="fixed bottom-4 right-4 animate-bounce z-50">
                <button
                    onClick={handleShowPrompt}
                    className="bg-red-900 text-navy-300 px-6 py-3 rounded-lg text-lg"
                >
                    Book Energy Assessment
                </button>
            </div>
        </>
    );
};

export default Prompt;
