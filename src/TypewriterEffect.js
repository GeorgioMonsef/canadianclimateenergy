import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const TypewriterEffect = ({ texts, speed = 50, delay = 0 }) => {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false); // To control the typing start after delay
    const [fade, setFade] = useState(false); // To control the fade effect

    useEffect(() => {
        if (!texts || texts.length === 0) {
            console.error('TypewriterEffect: No texts provided.');
            return;
        }

        // Handle initial delay before starting the typing effect
        const startTypingTimer = setTimeout(() => {
            setIsTyping(true);
        }, delay);

        return () => clearTimeout(startTypingTimer); // Cleanup timer on unmount
    }, [delay]);

    useEffect(() => {
        if (!isTyping) return; // Wait until typing is allowed

        const currentText = texts[textIndex];

        if (charIndex < currentText.length) {
            const timer = setTimeout(() => {
                setDisplayText(prev => prev + currentText[charIndex]);
                setCharIndex(charIndex + 1);
            }, speed);
            return () => clearTimeout(timer);
        } else {
            // After finishing typing, trigger a fade effect
            const fadeTimer = setTimeout(() => {
                setFade(true); // Trigger fade-out after a pause
            }, 2000); // Pause before fading out the text

            // Reset everything after the fade-out completes
            const resetTimer = setTimeout(() => {
                setDisplayText('');
                setFade(false);
                setCharIndex(0);
                setTextIndex((textIndex + 1) % texts.length);
            }, 4000); // Wait for fade-out to finish before resetting

            return () => {
                clearTimeout(fadeTimer);
                clearTimeout(resetTimer);
            };
        }
    }, [charIndex, textIndex, texts, speed, isTyping]);

    return (
        <div className={`text-lg font-medium text-blue-900 mt-4 transition-opacity duration-1000 ${fade ? 'opacity-0' : 'opacity-100'}`}>
            <p>{displayText}</p>
        </div>
    );
};

TypewriterEffect.propTypes = {
    texts: PropTypes.arrayOf(PropTypes.string).isRequired,
    speed: PropTypes.number,
    delay: PropTypes.number // New delay prop
};

TypewriterEffect.defaultProps = {
    speed: 50,
    delay: 0 // Default to no delay if not provided
};

export default TypewriterEffect;
