import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full py-14 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Sign-up Section */}
                <div className="border-b border-gray-200 pb-14 flex justify-between items-center flex-col gap-8 lg:gap-0 lg:flex-row">
                    <div className="block">
                        <h3 className="font-manrope text-3xl text-red-600 font-bold mb-2 text-center lg:text-left">
                            Sign up to our webpage
                        </h3>
                        <p className="text-navy-800 text-center lg:text-left">
                            Stay up to date with the latest updates and announcements.
                        </p>
                    </div>
                    <div className="flex items-center flex-col gap-4 lg:flex-row">
                        <input
                            type="text"
                            name="email"
                            className="py-3 px-6 h-14 border border-gray-300 text-navy-800 shadow-sm rounded-full focus:outline-none"
                            placeholder="Enter your email..."
                        />
                        <button className="h-14 py-3.5 px-7 bg-red-600 text-navy-500 shadow-sm rounded-full font-bold hover:bg-red-700">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Footer Links Section */}
                <div
                    className="grid grid-cols-2 min-[690px]:grid-cols-4 lg:grid-cols-6 gap-4 xl:gap-8 pt-14 pb-10 max-w-xs mx-auto min-[690px]:max-w-2xl lg:max-w-full">
                    <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0 text-center lg:text-left">
                        <a href="https://pagedone.io/" className="flex justify-center lg:justify-start">
                            <svg className="w-40 h-8" viewBox="0 0 164 33" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                {/* SVG path here */}
                            </svg>
                        </a>
                        <h3 className="text-xl font-bold text-gray-800">Operating Hours</h3>
                        <p className="py-4 text-blue-500 lg:max-w-xs">
                            Sunday - Saturday: <span className="border-gray-300">8:00 AM - 8:00 PM</span>
                        </p>

                        {/* Contact Us Button */}
                        <Link to="/contact"
                              className="py-2.5 px-5 h-9 block w-fit bg-red-600 rounded-full shadow-sm text-xs text-navy-500 mx-auto transition-all duration-500 hover:bg-red-700 lg:mx-0">
                            Contact us
                        </Link>
                    </div>

                    {/* Footer Links */}
                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg text-red-600 font-medium mb-7">Quick Links</h4>
                        <ul className="text-sm text-navy-800">
                            <li className="mb-6">
                                <Link to="/" className="hover:text-red-600">Home</Link>
                            </li>
                            <li className="mb-6">
                                <Link to="/ourteam" className="hover:text-red-600">Our Team</Link>
                            </li>
                            <li className="mb-6">
                                <Link to="/donations" className="hover:text-red-600">Donations</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Map Section */}
                    <div className="lg:col-span-2 lg:flex lg:justify-end lg:text-center">
                        <div className="w-full max-w-md">
                            <h4 className="text-lg text-red-600 font-medium mb-7">Location</h4>
                            <div className="relative w-full h-64">
                                <iframe
                                    className="w-full h-full border-0"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7486247589225!2d144.9630583156825!3d-37.814107979751885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sFlinders%20St%20Station!5e0!3m2!1sen!2sau!4v1628911132047!5m2!1sen!2sau"
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="py-7 border-t border-gray-200">
                    <div
                        className="flex items-center justify-center flex-col lg:justify-between lg:flex-row text-navy-800">
                        <span className="text-sm">
                            <h4 className="text-lg text-red-600 font-medium mb-7"> &copy; 2024 Canadian Climate Energy, powered by{' '}
                                <a href="https://www.levantlabs.ca" target="_blank" rel="noopener noreferrer"
                                   className="text-red-600 hover:underline"> &copy; Levant Labs </a>
                            </h4>                        </span>
                        <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
                            {/* Instagram Link */}
                            <a
                                href="https://www.instagram.com/canadianclimateenergy/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-red-600 hover:bg-red-700"
                            >
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.5 2.625C7.418 2.625 5 5.043 5 8.125C5 11.207 7.418 13.625 10.5 13.625C13.582 13.625 16 11.207 16 8.125C16 5.043 13.582 2.625 10.5 2.625ZM10.5 11.625C8.567 11.625 7 10.058 7 8.125C7 6.192 8.567 4.625 10.5 4.625C12.433 4.625 14 6.192 14 8.125C14 10.058 12.433 11.625 10.5 11.625ZM16.625 4.5C16.918 4.5 17.125 4.293 17.125 4C17.125 3.707 16.918 3.5 16.625 3.5C16.332 3.5 16.125 3.707 16.125 4C16.125 4.293 16.332 4.5 16.625 4.5ZM17.875 8.125C17.875 12.17 14.545 15.5 10.5 15.5C6.455 15.5 3.125 12.17 3.125 8.125C3.125 4.08 6.455 0.75 10.5 0.75C14.545 0.75 17.875 4.08 17.875 8.125ZM10.5 0C4.701 0 0 4.701 0 10.5C0 16.299 4.701 21 10.5 21C16.299 21 21 16.299 21 10.5C21 4.701 16.299 0 10.5 0Z"
                                        fill="white"/>
                                </svg>
                            </a>

                            {/* office@canadianclimateenergy.org */}
                            <a
                                href="mailto:office@canadianclimateenergy.org"
                                className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-navy-800 hover:bg-navy-900"
                            >
                                <svg className="w-[1.25rem] h-[1.125rem] text-white" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M3 4C2.447 4 2 4.447 2 5V19C2 19.553 2.447 20 3 20H21C21.553 20 22 19.553 22 19V5C22 4.447 21.553 4 21 4H3ZM20 8.207L13.707 12.707C12.926 13.276 11.742 13.276 10.961 12.707L4 8.207V18H20V8.207ZM19.8 6L12 11.293L4.2 6H19.8Z"
                                          fill="white"/>
                                </svg>
                            </a>

                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
