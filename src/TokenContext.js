import React, { createContext, useState } from 'react';

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
    const [clickTokens, setClickTokens] = useState(0);
    const [scrollTokens, setScrollTokens] = useState(0);

    return (
        <TokenContext.Provider value={{ clickTokens, setClickTokens, scrollTokens, setScrollTokens }}>
            {children}
        </TokenContext.Provider>
    );
};
