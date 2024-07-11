import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TokenContext } from '../TokenContext';
import './styles.css';

const Page2 = () => {
    const { clickTokens, setClickTokens, scrollTokens, setScrollTokens } = useContext(TokenContext);
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
    }, [setScrollTokens, totalTokens]);

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
        <div className="container mt-4">
            <div className="d-flex justify-content-around mb-4">
                <div className="card p-3 text-center">
                    <h5>Click Tokens</h5>
                    <p className="display-4">{clickTokens}</p>
                </div>
                <div className="card p-3 text-center">
                    <h5>Scroll Tokens</h5>
                    <p className="display-4">{scrollTokens}</p>
                </div>
                <div className="card p-3 text-center">
                    <h5>Total Tokens</h5>
                    <p className="display-4">{totalTokens}</p>
                </div>
            </div>
            <div id="content">
                <div className="list-group">
                    <Link to="#" className="list-group-item list-group-item-action" onClick={handleClick}>Dummy Link 1</Link>
                    <Link to="#" className="list-group-item list-group-item-action" onClick={handleClick}>Dummy Link 2</Link>
                </div>
                <button className="btn btn-warning mt-4" onClick={handleSpend}>Spend 10 Tokens</button>
                <div style={{ height: '2000px' }}></div>
                <div className="mt-4">
                    <Link to="/" className="btn btn-primary mr-2">Go to HomePage</Link>
                    <Link to="/page3" className="btn btn-secondary">Go to Page 3</Link>
                </div>
            </div>
        </div>
    );
};

export default Page2;
