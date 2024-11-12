import React, { useEffect } from 'react';
import Form from './Form'; // Import the Form component

const Prompt = ({ showPrompt, handleClose, handleShowPrompt }) => {

    // Use useEffect to handle disabling/enabling scrolling when the modal is open/closed
    useEffect(() => {
        if (showPrompt) {
            // Disable background scrolling
            document.body.style.overflow = 'hidden';
        } else {
            // Re-enable background scrolling
            document.body.style.overflow = '';
        }

        // Cleanup when the component is unmounted or when showPrompt changes
        return () => {
            document.body.style.overflow = '';
        };
    }, [showPrompt]);

    return (
        <>
            {showPrompt && (
                <>
                    {/* Blurred background that prevents interaction */}
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm pointer-events-none z-40"></div>

                    {/* The modal form */}
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        {/* This container is interactive and now responsive */}
                        <div className="bg-white p-6 md:p-12 rounded-lg shadow-lg w-full max-w-lg md:max-w-4xl relative pointer-events-auto mx-4 overflow-y-auto max-h-screen">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-500">Book Energy Assessment</h2>
                            <Form /> {/* Embed the Form component here */}
                            <div className="flex justify-end mt-4">
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="bg-gray-500 hover:bg-red-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg mr-4 text-sm md:text-lg"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Button container, conditionally hidden when form is open */}
            {!showPrompt && (
                <div className="fixed bottom-4 right-4 animate-bounce z-50">
                    <button
                        onClick={handleShowPrompt}
                        className="bg-red-900 text-white px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg rounded-lg"
                    >
                        Book Energy Assessment
                    </button>
                </div>
            )}
        </>
    );
};

export default Prompt;
