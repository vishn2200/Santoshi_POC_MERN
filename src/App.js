import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Navigation from './components/Navigation';
import { TokenProvider } from './TokenContext'; // Import TokenProvider
import './components/styles.css';

function App() {
    return (
        <TokenProvider>
            <Router>
                <div>
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/page2" element={<Page2 />} />
                        <Route path="/page3" element={<Page3 />} />
                    </Routes>
                </div>
            </Router>
        </TokenProvider>
    );
}

export default App;
