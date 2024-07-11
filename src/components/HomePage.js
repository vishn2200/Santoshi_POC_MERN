import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TokenContext } from '../TokenContext';
import './styles.css';

const HomePage = () => {
    const { clickTokens, setClickTokens, scrollTokens, setScrollTokens } = useContext(TokenContext);

    useEffect(() => {
        const handleScroll = () => {
            setScrollTokens(prevTokens => prevTokens + 1);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setScrollTokens]);

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
            </div>
            <div id="content">
                <div className="list-group">
                    <Link to="#" className="list-group-item list-group-item-action" onClick={() => setClickTokens(clickTokens + 1)}>Dummy Link 1</Link>
                    <Link to="#" className="list-group-item list-group-item-action" onClick={() => setClickTokens(clickTokens + 1)}>Dummy Link 2</Link>
                    <Link to="#" className="list-group-item list-group-item-action" onClick={() => setClickTokens(clickTokens + 1)}>Dummy Link 3</Link>
                    <Link to="#" className="list-group-item list-group-item-action" onClick={() => setClickTokens(clickTokens + 1)}>Dummy Link 4</Link>
                    <Link to="#" className="list-group-item list-group-item-action" onClick={() => setClickTokens(clickTokens + 1)}>Dummy Link 5</Link>
                </div>
                <div style={{ height: '2000px' }}></div>
                <div className="mt-4">
                    <Link to="/page2" className="btn btn-primary mr-2">Go to Page 2</Link>
                    <Link to="/page3" className="btn btn-secondary">Go to Page 3</Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
