import React, { useState, useEffect } from 'react';
import './styles.css';

const HomePage = () => {
    const [clickTokens, setClickTokens] = useState(0);
    const [scrollTokens, setScrollTokens] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollTokens(prevTokens => prevTokens + 1);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div id="token-bars">
                <div id="click-token-bar">Click Tokens: {clickTokens}</div>
                <div id="scroll-token-bar">Scroll Tokens: {scrollTokens}</div>
            </div>
            <div id="content">
                <a href="#" className="dummy-link" onClick={() => setClickTokens(clickTokens + 1)}>Dummy Link 1</a>
                <a href="#" className="dummy-link" onClick={() => setClickTokens(clickTokens + 1)}>Dummy Link 2</a>
                <a href="#" className="dummy-link" onClick={() => setClickTokens(clickTokens + 1)}>Dummy Link 3</a>
                <a href="#" className="dummy-link" onClick={() => setClickTokens(clickTokens + 1)}>Dummy Link 4</a>
                <a href="#" className="dummy-link" onClick={() => setClickTokens(clickTokens + 1)}>Dummy Link 5</a>
                <p>Scroll down for more content...</p>
                <div style={{ height: '2000px' }}></div>
            </div>
        </div>
    );
};

export default HomePage;
