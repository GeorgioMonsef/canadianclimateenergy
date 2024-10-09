import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const TypewriterEffect = ({ texts, speed = 50 }) => {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (!texts || texts.length === 0) {
            console.error('TypewriterEffect: No texts provided.');
            return;
        }

        const currentText = texts[textIndex];
        if (charIndex < currentText.length) {
            const timer = setTimeout(() => {
                setDisplayText(prev => prev + currentText[charIndex]);
                setCharIndex(charIndex + 1);
            }, speed);
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(() => {
                setDisplayText('');
                setCharIndex(0);
                setTextIndex((textIndex + 1) % texts.length);
            }, 2000); // Pause before starting next text
            return () => clearTimeout(timer);
        }
    }, [charIndex, textIndex, texts, speed]);

    return (
        <div className="text-lg font-medium text-blue-900 mt-4">
            <p>{displayText}</p>
        </div>
    );
};

TypewriterEffect.propTypes = {
    texts: PropTypes.arrayOf(PropTypes.string).isRequired,
    speed: PropTypes.number
};

TypewriterEffect.defaultProps = {
    speed: 50
};

export default TypewriterEffect;
