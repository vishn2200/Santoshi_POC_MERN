import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav style={{ position: 'fixed', top: 0, right: 0, padding: '10px' }}>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ display: 'inline', marginRight: '10px' }}>
                    <Link to="/">Home</Link>
                </li>
                <li style={{ display: 'inline', marginRight: '10px' }}>
                    <Link to="/page2">Page 2</Link>
                </li>
                <li style={{ display: 'inline' }}>
                    <Link to="/page3">Page 3</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
