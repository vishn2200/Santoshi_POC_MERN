import React, { useState, useEffect } from 'react';
import './styles.css';

const Page2 = () => {
    const [clickTokens, setClickTokens] = useState(0);
    const [scrollTokens, setScrollTokens] = useState(0);
    const [totalTokens, setTotalTokens] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollTokens(prevTokens => {
                const newTokens = prevTokens + 1;
                setTotalTokens(totalTokens + 1);
                return newTokens;
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [totalTokens]);

    const handleClick = () => {
        setClickTokens(prevTokens => {
            const newTokens = prevTokens + 1;
            setTotalTokens(totalTokens + 1);
            return newTokens;
        });
    };

    const handleSpend = () => {
        if (totalTokens >= 10) {
            setTotalTokens(totalTokens - 10);
        } else {
            alert('Not enough tokens to spend');
        }
    };

    return (
        <div>
            <div id="token-bars">
                <div id="click-token-bar">Click Tokens: {clickTokens}</div>
                <div id="scroll-token-bar">Scroll Tokens: {scrollTokens}</div>
                <div id="total-tokens">Total Tokens: {totalTokens}</div>
            </div>
            <div id="content">
                <a href="#" className="dummy-link" onClick={handleClick}>Dummy Link 1</a>
                <a href="#" className="dummy-link" onClick={handleClick}>Dummy Link 2</a>
                <button onClick={handleSpend}>Spend 10 Tokens</button>
                <p>Scroll down for more content...</p>
                <div style={{ height: '2000px' }}></div>
            </div>
        </div>
    );
};

export default Page2;
