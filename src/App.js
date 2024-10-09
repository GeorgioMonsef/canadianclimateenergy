import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header'; // Adjust the path if Header.js is in a different directory
import Footer from './Footer';
import Greeting from './Greeting';
import Prompt from './Prompt';
import Contact from './contact'; // Make sure the casing matches the actual file name
import OurTeam from './ourteam'; // Import the OurTeam component
import Donations from './donations'; // Import the Donations component

function App() {
    const [showPrompt, setShowPrompt] = useState(false);

    const handleShowPrompt = () => {
        setShowPrompt(true);
    };

    const handleClose = () => {
        setShowPrompt(false);
    };

    return (
        <Router>
            <div className="App">
                <Header />

                <main>
                    {/* Define different routes for different pages */}
                    <Routes>
                        <Route path="/" element={<Greeting />} />  {/* Home route */}
                        <Route path="/contact" element={<Contact />} />  {/* Contact page */}
                        <Route path="/ourteam" element={<OurTeam />} />  {/* Our Team page */}
                        <Route path="/donations" element={<Donations />} />  {/* Donations page */}
                    </Routes>

                    {/* Prompt can be shown based on state */}
                    <Prompt showPrompt={showPrompt} handleClose={handleClose} handleShowPrompt={handleShowPrompt} />
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
