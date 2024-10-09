import React from 'react';

const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 p-4 md:p-10">
            {/* Left Side: Contact Info */}
            <div
                className="md:w-1/2 w-full flex flex-col justify-left p-6 md:p-8 bg-white rounded-lg shadow-md mb-6 md:mb-0">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg mb-2">
                    <strong>Phone:</strong>
                    <a href="tel:3432541725" className="text-blue-600"> 343-254-1725</a>
                </p>
                <p className="text-lg mb-2">
                    <strong>Email:</strong>
                    <a href="mailto:admin@canadianclimateenergy.org"
                       className="text-blue-600"> admin@canadianclimateenergy.org</a>
                </p>
                <p className="text-lg mb-2">
                    <strong>Address:</strong> 310 Miwaté Private, Ottawa, Ontario, Canada
                </p>
                <p className="text-lg mb-2">
                    <strong>Hours:</strong> 8:00-8:00 Sunday - Saturday.
                </p>
            </div>

            {/* Right Side: Static Google Map Embed */}
            <div className="md:w-1/2 w-full">
                <iframe
                    title="Google Map"
                    className="w-full h-64 md:h-full rounded-lg shadow-md"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.1960653879876!2d-75.7222198240216!3d45.40183077185259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050f74528cb1%3A0x84bc38f93c124a29!2s310%20Miwate%20Private%2C%20Ottawa%2C%20ON%20K1R%206K8%2C%20Canada!5e0!3m2!1sen!2s!4v1696513297163!5m2!1sen!2s"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
